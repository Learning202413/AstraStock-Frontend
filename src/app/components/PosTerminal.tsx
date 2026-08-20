import React, { useEffect, useState, useMemo } from 'react';
import { useCatalogStore, Product } from '../store/useCatalogStore';
import { usePosStore } from '../store/usePosStore';
import { Search, ShoppingCart, Trash2, CheckCircle, CreditCard, Banknote, Building2, Package, Camera } from 'lucide-react';
import { toast } from 'sonner';
import axios from 'axios';
import ReceiptModal from './ReceiptModal';
import { useBarcodeScanner } from '../hooks/useBarcodeScanner';
import CameraScannerModal from './CameraScannerModal';

import { C } from '../theme';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Skeleton } from "./ui/skeleton";

export default function PosTerminal() {
  const [completedSale, setCompletedSale] = useState<any>(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const { 
    products, setProducts,
    searchQuery, setSearchQuery,
    isCatalogLoading, setIsCatalogLoading,
    isLoaded, setIsLoaded,
    cart, 
    addToCart, 
    removeFromCart, 
    updateQuantity, 
    paymentMethod, 
    setPaymentMethod, 
    customerName, 
    setCustomerName, 
    customerDocumentType,
    setCustomerDocumentType,
    customerDocumentNumber,
    setCustomerDocumentNumber,
    tipoComprobante,
    setTipoComprobante,
    clearCart, 
    getTotal, 
    isProcessing, 
    setIsProcessing 
  } = usePosStore();

  const processScannedBarcode = (barcode: string) => {
    // Si escanea (pistola o cámara), llamamos a la API directamente
    axios.get('/api/v1/products', { params: { search: barcode, is_active: 1 } })
      .then(res => {
        const found = res.data.data;
        if (found && found.length === 1) {
          const product = found[0];
          const inCart = usePosStore.getState().cart.find(c => c.product.id === product.id);
          const stockRemaining = product.stock - (inCart ? inCart.quantity : 0);
          
          if (stockRemaining > 0) {
            usePosStore.getState().addToCart(product);
            toast.success(`Agregado: ${product.name}`);
            setSearchQuery('');
          } else {
            toast.error(`Sin stock suficiente para: ${product.name}`);
          }
        } else if (found && found.length > 1) {
          setProducts(found);
          setSearchQuery(barcode);
        } else {
          toast.error(`Código no encontrado: ${barcode}`);
        }
      })
      .catch(() => toast.error('Error al consultar código de barras'));
  };

  useBarcodeScanner((barcode) => {
    processScannedBarcode(barcode);
  });

  useEffect(() => {
    // Evitar el parpadeo de carga si ya tenemos productos cacheados en memoria
    if (!usePosStore.getState().isLoaded) {
      setIsCatalogLoading(true);
    }

    const fetchProducts = async () => {
      try {
        const params: any = { per_page: 24, is_active: 1 };
        if (searchQuery.trim()) {
          params.search = searchQuery.trim();
        }
        const res = await axios.get('/api/v1/products', { params });
        setProducts(res.data.data);
        setIsLoaded(true);
      } catch (error) {
        console.error("Error fetching products for POS:", error);
        toast.error("Error al buscar productos");
      } finally {
        setIsCatalogLoading(false);
      }
    };

    const timer = setTimeout(() => {
      fetchProducts();
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    const usuarioRaw = localStorage.getItem("invora_user");
    const usuario = (usuarioRaw && usuarioRaw !== "undefined") ? JSON.parse(usuarioRaw) : null;
    if (!usuario || !usuario.empresa_id) return;

    const handlePriceUpdated = (e: { product_id: number, new_price: number }) => {
      const currentProducts = usePosStore.getState().products;
      const product = currentProducts.find(p => p.id === e.product_id);
      if (!product) return;
      const updatedProduct = { ...product, price_unit: e.new_price };
      setProducts(currentProducts.map(p => p.id === e.product_id ? updatedProduct : p));
      usePosStore.getState().syncProductInCart(updatedProduct);
    };

    const handleStockUpdated = (e: { product_id: number, new_stock: number }) => {
      const currentProducts = usePosStore.getState().products;
      const product = currentProducts.find(p => p.id === e.product_id);
      if (!product) return;
      const updatedProduct = { ...product, stock: e.new_stock };
      setProducts(currentProducts.map(p => p.id === e.product_id ? updatedProduct : p));
      usePosStore.getState().syncProductInCart(updatedProduct);
    };

    const handleBatchDepleted = (e: { product_id: number }) => {
      // Logic for batch depleted could just be a toast notification or trigger stock fetch
      // We will handle the stock via StockUpdated anyway.
    };

    const tenantChannelName = `tenant.${usuario.empresa_id}`;
    const sucursalChannelName = `sucursal.${usuario.sucursal_id}`;
    
    import('../echo').then(({ echo }) => {
      echo.private(tenantChannelName).listen('.PriceUpdated', handlePriceUpdated);
      if (usuario.sucursal_id) {
        echo.private(sucursalChannelName)
            .listen('.StockUpdated', handleStockUpdated)
            .listen('.BatchDepleted', handleBatchDepleted);
      }
    });

    return () => {
      import('../echo').then(({ echo }) => {
        echo.private(tenantChannelName).stopListening('.PriceUpdated', handlePriceUpdated);
        if (usuario.sucursal_id) {
          echo.private(sucursalChannelName)
              .stopListening('.StockUpdated', handleStockUpdated)
              .stopListening('.BatchDepleted', handleBatchDepleted);
        }
      });
    };
  }, []);

  const handleCheckout = async () => {
    if (cart.length === 0) return;
    setIsProcessing(true);
    
    try {
      const payload = {
        payment_method: paymentMethod,
        customer_name: customerName,
        customer_document_type: customerDocumentType,
        customer_document_number: customerDocumentNumber,
        tipo_comprobante: tipoComprobante,
        cart: cart.map(item => ({
          product_id: item.product.id,
          quantity: item.quantity
        }))
      };

      const res = await axios.post('/api/v1/sales', payload);
      
      toast.success('Venta registrada con éxito');
      setCompletedSale(res.data);
      clearCart();
    } catch (error: any) {
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Ocurrió un error al procesar la venta');
      }
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-full gap-4 md:gap-6 p-3 sm:p-6 bg-slate-50/50 overflow-y-auto lg:overflow-hidden">
      
      {/* Receipt Modal */}
      {completedSale && (
        <ReceiptModal sale={completedSale} onClose={() => setCompletedSale(null)} />
      )}

      {/* Left: Product Catalog */}
      <div className="flex-1 flex flex-col min-h-[60vh] lg:h-full lg:min-h-0 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Header & Search */}
        <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-slate-800">Punto de Venta</h2>
            <button 
              onClick={() => setIsCameraOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 hover:border-cyan-500 hover:text-cyan-600 transition-colors shadow-sm text-sm font-medium"
            >
              <Camera className="w-4 h-4" />
              <span className="hidden sm:inline">Escanear Cámara</span>
            </button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Buscar por nombre o SKU..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white text-slate-700 border border-slate-200 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-shadow text-sm"
            />
          </div>
        </div>

        <CameraScannerModal 
          isOpen={isCameraOpen} 
          onClose={() => setIsCameraOpen(false)} 
          onScan={(code) => {
            setIsCameraOpen(false);
            processScannedBarcode(code);
          }} 
        />

        <div className="flex-1 overflow-y-auto p-4 sm:p-5 custom-scrollbar bg-slate-50/30">
          {isCatalogLoading && products.length === 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
                  <Skeleton className="h-3 w-12 mb-3 rounded" />
                  <Skeleton className="h-4 w-3/4 mb-2 rounded" />
                  <Skeleton className="h-4 w-1/2 mb-4 rounded" />
                  <div className="flex justify-between items-end">
                    <Skeleton className="h-5 w-16 rounded" />
                    <Skeleton className="h-5 w-12 rounded" />
                  </div>
                </div>
              ))}
            </div>
          ) : products.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-slate-400 py-12">
              <Package className="w-12 h-12 mb-3 opacity-30" />
              <p>No se encontraron productos.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
              {products.map(product => {
                const inCart = cart.find(c => c.product.id === product.id);
                const stockRemaining = product.stock - (inCart ? inCart.quantity : 0);
                const isOutOfStock = stockRemaining <= 0;

                return (
                  <div 
                    key={product.id}
                    onClick={() => !isOutOfStock && addToCart(product)}
                    className={`p-3 sm:p-4 rounded-xl border transition-all flex flex-col h-full ${
                      isOutOfStock 
                        ? 'bg-slate-50 border-slate-100 opacity-60 cursor-not-allowed' 
                        : 'bg-white border-slate-200 hover:border-cyan-500 hover:shadow-md cursor-pointer hover:-translate-y-1'
                    }`}
                  >
                    <div className="text-[11px] sm:text-xs text-slate-400 mb-1 truncate">{product.sku || 'Sin SKU'}</div>
                    <div className="font-semibold text-slate-800 mb-2 line-clamp-2 text-[13px] sm:text-sm" style={{ minHeight: '2.5rem' }}>{product.name}</div>
                    <div className="mt-auto pt-2 flex flex-col gap-1 border-t border-slate-100">
                      <div className="text-slate-800 font-black text-sm sm:text-base">S/ {parseFloat(product.base_price).toFixed(2)}</div>
                      <div className={`text-[10px] sm:text-[11px] font-medium px-1.5 sm:px-2 py-0.5 rounded-md self-start ${isOutOfStock ? 'bg-rose-50 text-rose-600 border border-rose-100' : 'bg-emerald-50 text-emerald-600 border border-emerald-100'}`}>
                        {stockRemaining} disp
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Right: Cart / Ticket */}
      <div className="w-full lg:w-[420px] flex flex-col min-h-[50vh] lg:h-full lg:min-h-0 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm shrink-0">
        <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50/50 flex items-center gap-2">
          <ShoppingCart className="w-5 h-5 text-slate-700" />
          <h2 className="text-xl font-bold text-slate-800">Ticket Actual</h2>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar bg-slate-50/30">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-slate-400">
              <ShoppingCart className="w-12 h-12 mb-3 opacity-30" />
              <p>El carrito está vacío.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {cart.map(item => (
                <div key={item.product.id} className="bg-white border border-slate-100 rounded-xl p-3 flex gap-3 items-center shadow-sm">
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-slate-800 line-clamp-1">{item.product.name}</div>
                    <div className="text-xs text-slate-500">S/ {parseFloat(item.product.base_price).toFixed(2)} c/u</div>
                  </div>
                  
                  {/* Quantity Controls */}
                  <div className="flex items-center gap-1 bg-slate-50 rounded-lg p-1 border border-slate-200">
                    <button 
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="w-7 h-7 flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-200 rounded transition-colors"
                    >
                      -
                    </button>
                    <span className="w-6 text-center text-sm font-semibold text-slate-700">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      disabled={item.quantity >= item.product.stock}
                      className="w-7 h-7 flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-200 rounded transition-colors disabled:opacity-30"
                    >
                      +
                    </button>
                  </div>
                  
                  <div className="text-right min-w-[70px]">
                    <div className="font-bold text-slate-800">S/ {((Math.round(parseFloat(item.product.base_price as any) * 100) * item.quantity) / 100).toFixed(2)}</div>
                  </div>

                  <button 
                    onClick={() => removeFromCart(item.product.id)}
                    className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Checkout Area */}
        <div className="p-5 border-t border-slate-100 bg-slate-50/80 space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <Select
              value={tipoComprobante}
              onValueChange={(val: any) => setTipoComprobante(val)}
            >
              <SelectTrigger className="w-full px-3 py-2.5 bg-white text-sm text-slate-700 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 shadow-sm">
                <SelectValue placeholder="Comprobante" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="03">Boleta de Venta</SelectItem>
                <SelectItem value="01">Factura</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={customerDocumentType}
              onValueChange={(val: any) => setCustomerDocumentType(val)}
            >
              <SelectTrigger className="w-full px-3 py-2.5 bg-white text-sm text-slate-700 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 shadow-sm">
                <SelectValue placeholder="Documento" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">DNI</SelectItem>
                <SelectItem value="6">RUC</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <input 
            type="text" 
            placeholder={customerDocumentType === '1' ? "Número de DNI (Opcional)" : "Número de RUC"} 
            value={customerDocumentNumber}
            onChange={(e) => setCustomerDocumentNumber(e.target.value)}
            className="w-full px-3 py-2.5 bg-white text-sm text-slate-700 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 transition-colors shadow-sm"
          />

          <input 
            type="text" 
            placeholder="Nombre o Razón Social (Opcional)" 
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="w-full px-3 py-2.5 bg-white text-sm text-slate-700 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 transition-colors shadow-sm"
          />
          
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'cash', icon: Banknote, label: 'Efectivo' },
              { id: 'card', icon: CreditCard, label: 'Tarjeta' },
              { id: 'transfer', icon: Building2, label: 'Transf.' }
            ].map(method => (
              <button
                key={method.id}
                onClick={() => setPaymentMethod(method.id as any)}
                className={`flex flex-col items-center justify-center py-2.5 px-1 rounded-lg border text-xs gap-1.5 font-medium transition-all shadow-sm ${
                  paymentMethod === method.id 
                    ? 'bg-cyan-50 border-cyan-500 text-cyan-700' 
                    : 'bg-white border-slate-200 text-slate-500 hover:border-cyan-300 hover:bg-slate-50'
                }`}
              >
                <method.icon className="w-4 h-4" />
                {method.label}
              </button>
            ))}
          </div>

          <div className="flex justify-between items-center py-3 border-t border-dashed border-slate-200">
            <span className="text-slate-500 font-medium">TOTAL</span>
            <span className="text-3xl font-black text-slate-800">S/ {getTotal().toFixed(2)}</span>
          </div>

          <button
            onClick={handleCheckout}
            disabled={cart.length === 0 || isProcessing}
            className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-[15px] transition-all shadow-sm ${
              cart.length === 0 || isProcessing
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
                : 'bg-cobalt text-white hover:bg-cobalt/90'
            }`}
          >
            {isProcessing ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            ) : (
              <>
                <CheckCircle className="w-5 h-5" />
                Cobrar Ticket
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
