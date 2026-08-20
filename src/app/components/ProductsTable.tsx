import React, { useState, useEffect } from "react";
import axios from "axios";
import { Package, Search, Plus, Edit2, Trash2, ArrowUpDown, MoreHorizontal, FileDown, Eye, CheckCircle2, AlertCircle, RefreshCw, X, FileEdit, Check, Banknote, DollarSign, LogOut, Tags, TrendingUp, Filter, ShoppingCart, BarChart3, Receipt, Settings, PieChart, PackageOpen, LayoutGrid, List, Upload, Download, FileText, FileSpreadsheet, Camera } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { PageLayout } from "./shared/PageLayout";
import CameraScannerModal from "./CameraScannerModal";
import { useCatalogStore } from "../store/useCatalogStore";
import { PaginationControls, PaginationMeta } from "./shared/PaginationControls";
import { toast } from "sonner";
import { useCategoryStore } from "../store/useCategoryStore";
import { useCompanyStore } from "../store/useCompanyStore";
import { CategoryDrawer } from "./CategoriesTable";
import { AsyncCategorySelect } from "./shared/AsyncCategorySelect";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Skeleton } from "./ui/skeleton";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { ConfirmDialog } from './shared/ConfirmDialog';
import { EmptyState } from './shared/EmptyState';
import { C } from '../theme';

interface Product {
  id: number;
  name: string;
  sku: string;
  barcode: string | null;
  category_id: number | null;
  base_price: number;
  tax_percentage: number;
  stock: number;
  cost_price: number;
  min_stock: number;
  is_active: boolean;
  is_perishable: boolean;
}

export function ProductsTable({ onLogout }: { onLogout: () => void }) {
  const store = useCatalogStore();
  const categoryStore = useCategoryStore();
  const companyStore = useCompanyStore();

  const [loading, setLoading] = useState(!store.isLoaded);
  const [searchParams, setSearchParams] = useSearchParams();
  
  const page = parseInt(searchParams.get("page") || "1", 10);
  const perPage = parseInt(searchParams.get("perPage") || "10", 10);
  const searchQuery = searchParams.get("search") || "";
  const stockStatus = searchParams.get("stock") || "";

  const updateParams = (updates: Record<string, string | undefined>) => {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      Object.entries(updates).forEach(([key, value]) => {
        if (value === undefined || value === "") next.delete(key);
        else next.set(key, value);
      });
      return next;
    }, { replace: true });
  };

  const setPage = (p: number) => updateParams({ page: p.toString() });
  const setPerPage = (p: number) => updateParams({ perPage: p.toString(), page: "1" });
  const setSearchQuery = (q: string) => updateParams({ search: q, page: "1" });
  const setStockStatus = (s: string) => updateParams({ stock: s, page: "1" });
  const clearFilters = () => updateParams({ search: "", stock: "", page: "1" });

  const {
    isOpen: drawerOpen,
    formData,
    editingProduct,
    autoGenerate,
    openDrawer: storeOpenDrawer,
    closeDrawer: storeCloseDrawer,
    setField,
    setFormData,
    setEditingProduct,
    setAutoGenerate,
    resetForm,
    products,
    isLoaded,
    paginationMeta,
    setProducts,
    setIsLoaded,
    setPaginationMeta
  } = store;

  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  // Import / Export states
  const [showImportModal, setShowImportModal] = useState(false);
  const [importFile, setImportFile] = useState<File | null>(null);
  const [isImporting, setIsImporting] = useState(false);

  // Form states
  const [formError, setFormError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    // Solo fetch si es la primera vez o si cambian la página o filtros
    const timeoutId = setTimeout(() => {
      fetchProducts();
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [page, perPage, searchQuery, stockStatus]);

  // WebSockets are now handled globally in DashboardLayout

  const fetchProducts = async () => {
    try {
      if (!isLoaded) setLoading(true);
      
      const params = new URLSearchParams({
        page: page.toString(),
        per_page: perPage.toString(),
        search: searchQuery,
        stock_status: stockStatus
      });

      const res = await axios.get(`/api/v1/products?${params.toString()}`);
      const data = res.data;
      if (data.data && data.current_page) {
        setProducts(data.data);
        setPaginationMeta({
          current_page: data.current_page,
          last_page: data.last_page,
          per_page: data.per_page,
          total: data.total,
          from: data.from,
          to: data.to
        });
      } else {
        setProducts(Array.isArray(data.data) ? data.data : (Array.isArray(data) ? data : []));
        setPaginationMeta(null);
      }
      setIsLoaded(true);
    } catch (e) {
      console.error(e);
      setProducts([]);
      setPaginationMeta(null);
    } finally {
      setLoading(false);
    }
  };

  const openDrawer = (product?: Product) => {
    setFormError("");
    setFieldErrors({});
    if (product) {
      setEditingProduct(product);
      setAutoGenerate(false);
      setFormData({
        name: product.name,
        sku: product.sku,
        barcode: product.barcode || "",
        category_id: product.category_id || null,
        base_price: product.base_price.toString(),
        tax_percentage: product.tax_percentage.toString(),
        stock: product.stock.toString(),
        cost_price: product.cost_price.toString(),
        min_stock: product.min_stock?.toString() || '0',
        is_active: product.is_active,
        is_perishable: product.is_perishable,
      });
      storeOpenDrawer();
    } else {
      resetForm();
      setAutoGenerate(true);
      const defaultIgv = companyStore.company?.igv_percentage ? companyStore.company.igv_percentage.toString() : '18';
      storeOpenDrawer(defaultIgv);
    }
  };

  const closeDrawer = () => {
    storeCloseDrawer();
    setEditingProduct(null);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    setSaving(true);
    try {
      const payload: any = {
        ...formData,
        sku: autoGenerate ? "" : formData.sku,
        barcode: autoGenerate ? "" : formData.barcode,
        base_price: parseFloat(formData.base_price),
        tax_percentage: parseFloat(formData.tax_percentage),
        cost_price: parseFloat(formData.cost_price),
        min_stock: parseInt(formData.min_stock),
        is_perishable: formData.is_perishable,
      };
      
      if (!editingProduct) {
        payload.stock = parseInt(formData.stock);
      }
      if (editingProduct) {
        await axios.put(`/api/v1/products/${editingProduct.id}`, payload);
        toast.success("Producto actualizado");
      } else {
        await axios.post("/api/v1/products", payload);
        toast.success("Producto creado");
      }
      resetForm();
      closeDrawer();
    } catch (err: any) {
      if (err.response?.status === 422 && err.response?.data?.errors) {
        setFieldErrors(err.response.data.errors);
        toast.error("Revisa los errores en el formulario");
      } else {
        const errorMsg = err.response?.data?.message || "Error al guardar el producto";
        setFormError(errorMsg);
        toast.error(errorMsg);
      }
    } finally {
      setSaving(false);
    }
  };

    const handleExport = (type: 'excel' | 'pdf') => {
      const url = `/api/v1/products/export/${type}`;
      // In a real scenario with Sanctum, we might need to handle auth token in headers for download, 
      // but since it's same-origin cookie based or we can just window.open it if cookies are sent:
      window.open(url, "_blank");
    };
  
    const handleDownloadTemplate = () => {
      window.open("/api/v1/products/template", "_blank");
    };
  
    const handleImportSubmit = async () => {
      if (!importFile) {
        toast.error("Seleccione un archivo primero");
        return;
      }
      setIsImporting(true);
      const formData = new FormData();
      formData.append("file", importFile);
  
      try {
        await axios.post("/api/v1/products/import", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
        toast.success("Productos importados correctamente");
        setShowImportModal(false);
        setImportFile(null);
        fetchProducts(); // reload
      } catch (err: any) {
        toast.error(err.response?.data?.message || "Error al importar productos");
      } finally {
        setIsImporting(false);
      }
    };

  const handleDelete = async () => {
    if (!productToDelete) return;
    setIsDeleting(true);
    try {
      await axios.delete(`/api/v1/products/${productToDelete.id}`);
      setProductToDelete(null);
      toast.success("Producto eliminado exitosamente");
    } catch (err) {
      console.error("Error deleting product", err);
      toast.error("Error al eliminar el producto");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <PageLayout
      title="Catálogo de Productos"
      actionButton={
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
          <button
            onClick={() => setShowImportModal(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 w-full sm:w-auto justify-center shrink-0 shadow-sm"
            style={{ fontSize: 13, fontWeight: 600 }}
          >
            <Upload className="w-4 h-4" /> Importar
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 w-full sm:w-auto justify-center shrink-0 shadow-sm"
                style={{ fontSize: 13, fontWeight: 600 }}
              >
                <Download className="w-4 h-4" /> Exportar
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={() => handleExport('excel')} className="cursor-pointer gap-2">
                <FileSpreadsheet className="w-4 h-4 text-emerald-600" /> Excel (.xlsx)
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleExport('pdf')} className="cursor-pointer gap-2">
                <FileText className="w-4 h-4 text-rose-600" /> PDF (.pdf)
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <button
            onClick={() => openDrawer()}
            className="flex items-center gap-2 px-4 py-2 rounded-lg transition-opacity hover:opacity-90 w-full sm:w-auto justify-center shrink-0 shadow-sm"
            style={{ background: C.cobalt, color: "#fff", fontSize: 13, fontWeight: 600 }}
          >
            <Plus className="w-4 h-4" /> Nuevo Producto
          </button>
        </div>
      }
    >
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Buscar producto por nombre o SKU..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-shadow text-slate-700"
          />
        </div>
        <div className="w-full sm:w-[220px] shrink-0">
          <Select value={stockStatus || "all"} onValueChange={(val) => setStockStatus(val === "all" ? "" : val)}>
            <SelectTrigger className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 text-slate-700">
              <SelectValue placeholder="Todos los Estados" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los Estados</SelectItem>
              <SelectItem value="in_stock">Con Stock</SelectItem>
              <SelectItem value="critical">Stock Crítico</SelectItem>
              <SelectItem value="out_of_stock">Agotados</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {(searchQuery || stockStatus) && (
          <button
            onClick={clearFilters}
            className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-[13px] font-medium text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-all shrink-0"
            title="Limpiar filtros"
          >
            <X className="w-3.5 h-3.5" />
            Limpiar
          </button>
        )}
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block rounded-xl overflow-auto bg-white shadow-sm border border-slate-200" style={{ maxHeight: 'calc(100vh - 240px)' }}>
        <table className="w-full text-left min-w-[600px] relative" style={{ borderCollapse: "collapse" }}>
          <thead className="sticky top-0 z-10 bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-4 sm:px-6 py-4 text-slate-500" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>SKU</th>
              <th className="px-4 sm:px-6 py-4 text-slate-500" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>Nombre</th>
              <th className="px-4 sm:px-6 py-4 text-slate-500" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>Stock</th>
              <th className="px-4 sm:px-6 py-4 text-slate-500" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>Costo</th>
              <th className="px-4 sm:px-6 py-4 text-slate-500" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>Precio Base</th>
              <th className="px-4 sm:px-6 py-4 text-slate-500 text-right" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <tr key={i} className="border-b border-slate-100">
                  <td className="px-4 sm:px-6 py-4"><Skeleton className="h-4 w-16 sm:w-20 rounded" /></td>
                  <td className="px-4 sm:px-6 py-4"><Skeleton className="h-4 w-32 sm:w-48 rounded" /></td>
                      <td className="px-4 sm:px-6 py-4"><Skeleton className="h-4 w-10 sm:w-12 rounded" /></td>
                      <td className="px-4 sm:px-6 py-4"><Skeleton className="h-4 w-12 sm:w-16 rounded" /></td>
                      <td className="px-4 sm:px-6 py-4"><Skeleton className="h-4 w-12 sm:w-16 rounded" /></td>
                      <td className="px-4 sm:px-6 py-4"><Skeleton className="h-4 w-10 sm:w-12 ml-auto rounded" /></td>
                    </tr>
                  ))
                ) : products.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-4 sm:px-6 py-12">
                      <EmptyState icon={PackageOpen} title="No hay productos" subtitle="Agrega tu primer producto al catálogo" />
                    </td>
                  </tr>
                ) : (
                  products.map(p => (
                    <tr key={p.id} className="hover:bg-slate-50 transition-colors border-b border-slate-100">
                      <td className="px-4 sm:px-6 py-4" style={{ color: C.cobalt, fontSize: 13, fontFamily: "monospace", fontWeight: 600 }}>{p.sku}</td>
                      <td className="px-4 sm:px-6 py-4 text-slate-800" style={{ fontSize: 14, fontWeight: 500 }}>{p.name}</td>
                      <td className="px-4 sm:px-6 py-4 text-slate-600" style={{ fontSize: 14 }}>{p.stock}</td>
                      <td className="px-4 sm:px-6 py-4 text-slate-600" style={{ fontSize: 14 }}>S/ {parseFloat(p.cost_price as any).toFixed(2)}</td>
                      <td className="px-4 sm:px-6 py-4 text-slate-600" style={{ fontSize: 14 }}>S/ {parseFloat(p.base_price as any).toFixed(2)}</td>
                      <td className="px-4 sm:px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-3">
                          <button onClick={() => openDrawer(p)} className="text-slate-400 hover:text-cyan-600 transition-colors">
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button onClick={() => setProductToDelete(p)} className="text-slate-400 hover:text-red-500 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden flex flex-col gap-4">
            {loading ? (
              Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 flex flex-col gap-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <Skeleton className="h-5 w-32 mb-2 rounded" />
                      <Skeleton className="h-4 w-16 rounded" />
                    </div>
                    <div className="flex gap-2">
                      <Skeleton className="w-8 h-8 rounded-lg" />
                      <Skeleton className="w-8 h-8 rounded-lg" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-2 pt-3 border-t border-slate-50">
                    <Skeleton className="h-8 w-full rounded" />
                    <Skeleton className="h-8 w-full rounded" />
                    <Skeleton className="h-8 w-full rounded" />
                  </div>
                </div>
              ))
            ) : products.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200">
                <EmptyState icon={PackageOpen} title="No hay productos" subtitle="Agrega tu primer producto al catálogo" />
              </div>
            ) : (
              products.map(p => (
                <div key={p.id} className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-slate-800 text-base leading-tight">{p.name}</h3>
                      <span className="inline-block mt-1.5 px-2 py-0.5 bg-slate-100 text-slate-500 rounded text-xs font-mono font-medium">{p.sku}</span>
                    </div>
                    <div className="flex gap-2 shrink-0 ml-3">
                      <button onClick={() => openDrawer(p)} className="p-2 text-slate-400 hover:text-cyan-600 bg-slate-50 hover:bg-cyan-50 rounded-lg transition-colors">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button onClick={() => setProductToDelete(p)} className="p-2 text-slate-400 hover:text-red-500 bg-slate-50 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-100">
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-semibold tracking-wide">Stock</p>
                      <p className="text-sm font-medium text-slate-700">{p.stock}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-semibold tracking-wide">Costo</p>
                      <p className="text-sm font-medium text-slate-700">S/ {parseFloat(p.cost_price as any).toFixed(2)}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-semibold tracking-wide">Precio</p>
                      <p className="text-sm font-medium text-slate-700">S/ {parseFloat(p.base_price as any).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {paginationMeta && (
            <div className="mt-2 -mx-4">
              <PaginationControls
                meta={paginationMeta}
                onPageChange={setPage}
                onPerPageChange={(newPerPage) => {
                  setPerPage(newPerPage);
                }}
              />
            </div>
          )}

      {/* Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-[60] flex justify-end bg-slate-900/40 backdrop-blur-sm transition-opacity">
          <div className="w-full sm:w-[460px] md:w-[500px] h-full flex flex-col shadow-2xl bg-white sm:border-l border-slate-200 transition-transform">
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 shrink-0">
              <h3 className="text-slate-800" style={{ fontSize: 16, fontWeight: 600 }}>{editingProduct ? "Editar Producto" : "Nuevo Producto"}</h3>
              <button disabled={saving} onClick={closeDrawer} className="p-2 -mr-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 rounded-lg transition-colors disabled:opacity-50 disabled:hover:bg-transparent">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-6 flex flex-col gap-5">
              <div>
                <input id="prod-name" required type="text" value={formData.name} onChange={e => setField('name', e.target.value)} className="w-full px-3 py-2.5 rounded-lg outline-none border transition-all bg-white border-slate-200 text-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500" style={{ fontSize: 14 }} placeholder="Ej: Laptop Lenovo ThinkPad" />
                {fieldErrors.name && <p className="text-red-500 mt-1" style={{ fontSize: 12 }}>{fieldErrors.name[0]}</p>}
              </div>
              <div>
                  <label className="block text-slate-600 mb-1.5 flex justify-between" style={{ fontSize: 12, fontWeight: 500 }}>
                    Categoría
                    <button type="button" onClick={() => categoryStore.openDrawer()} className="text-cyan-600 hover:text-cyan-700 font-semibold" style={{ fontSize: 11 }}>+ Nueva Categoría</button>
                  </label>
                  <AsyncCategorySelect 
                    value={formData.category_id}
                    onChange={val => setField('category_id', val)}
                    error={!!fieldErrors.category_id}
                  />
                  {fieldErrors.category_id && <p className="text-red-500 mt-1" style={{ fontSize: 12 }}>{fieldErrors.category_id[0]}</p>}
                </div>
              <div className="flex items-start gap-3 mb-2 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <input 
                  type="checkbox" 
                  id="autoGenerate" 
                  checked={autoGenerate} 
                  onChange={e => setAutoGenerate(e.target.checked)}
                  className="w-4 h-4 mt-0.5 shrink-0 text-cyan-600 rounded border-slate-300 focus:ring-cyan-500" 
                />
                <label htmlFor="autoGenerate" className="text-slate-700 select-none cursor-pointer leading-snug flex-1" style={{ fontSize: 13, fontWeight: 500 }}>
                  Generar SKU y Código de Barras automáticamente
                </label>
              </div>

              {!autoGenerate && (
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="block text-slate-600 mb-1.5" style={{ fontSize: 12, fontWeight: 500 }}>SKU</label>
                    <input required type="text" value={formData.sku} onChange={e => {setField('sku', e.target.value); setFieldErrors({...fieldErrors, sku: []})}} className={`w-full px-3 py-2.5 rounded-lg outline-none border transition-all bg-white ${fieldErrors.sku?.length ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 text-red-900' : 'border-slate-200 text-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500'}`} style={{ fontSize: 14 }} />
                    {fieldErrors.sku?.length > 0 && <p className="text-red-500 mt-1.5" style={{ fontSize: 12 }}>{fieldErrors.sku[0]}</p>}
                  </div>
                  <div>
                    <label className="block text-slate-600 mb-1.5" style={{ fontSize: 12, fontWeight: 500 }}>Código de Barras (Opcional)</label>
                    <div className="flex gap-2">
                      <input type="text" value={formData.barcode} onChange={e => {setField('barcode', e.target.value); setFieldErrors({...fieldErrors, barcode: []})}} className={`w-full px-3 py-2.5 rounded-lg outline-none border transition-all bg-white ${fieldErrors.barcode?.length ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 text-red-900' : 'border-slate-200 text-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500'}`} style={{ fontSize: 14 }} />
                      <button type="button" onClick={() => setIsCameraOpen(true)} className="px-3 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg border border-slate-200 transition-colors flex items-center justify-center">
                        <Camera className="w-5 h-5" />
                      </button>
                    </div>
                    {fieldErrors.barcode?.length > 0 && <p className="text-red-500 mt-1.5" style={{ fontSize: 12 }}>{fieldErrors.barcode[0]}</p>}
                  </div>
                </div>
              )}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-slate-600 mb-1.5" style={{ fontSize: 12, fontWeight: 500 }}>Costo Base</label>
                  <input required type="number" step="0.01" min="0" value={formData.cost_price} onChange={e => {setField('cost_price', e.target.value); setFieldErrors({...fieldErrors, cost_price: []})}} className={`w-full px-3 py-2.5 rounded-lg outline-none border transition-all bg-white ${fieldErrors.cost_price?.length ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 text-red-900' : 'border-slate-200 text-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500'}`} style={{ fontSize: 14 }} />
                  {fieldErrors.cost_price?.length > 0 && <p className="text-red-500 mt-1.5" style={{ fontSize: 12 }}>{fieldErrors.cost_price[0]}</p>}
                </div>
                <div className="flex-1">
                  <label className="block text-slate-600 mb-1.5" style={{ fontSize: 12, fontWeight: 500 }}>
                    {editingProduct ? 'Stock Actual' : 'Stock Inicial'}
                  </label>
                  <input 
                    required 
                    type="number" 
                    min="0" 
                    value={formData.stock} 
                    onChange={e => {setField('stock', e.target.value); setFieldErrors({...fieldErrors, stock: []})}} 
                    disabled={!!editingProduct}
                    className={`w-full px-3 py-2.5 rounded-lg outline-none border transition-all ${
                      !!editingProduct 
                        ? 'bg-slate-100 text-slate-500 cursor-not-allowed border-slate-200 opacity-80' 
                        : fieldErrors.stock?.length 
                          ? 'bg-white border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 text-red-900' 
                          : 'bg-white border-slate-200 text-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500'
                    }`} 
                    style={{ fontSize: 14 }} 
                  />
                  {fieldErrors.stock?.length > 0 && <p className="text-red-500 mt-1.5" style={{ fontSize: 12 }}>{fieldErrors.stock[0]}</p>}
                  {!!editingProduct && <p className="text-slate-400 mt-1.5" style={{ fontSize: 11, lineHeight: 1.2 }}>Para modificar el stock, registre un Ajuste en el Kardex.</p>}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-slate-600 mb-1.5" style={{ fontSize: 12, fontWeight: 500 }}>Precio Base</label>
                  <input required type="number" step="0.01" min="0" value={formData.base_price} onChange={e => {setField('base_price', e.target.value); setFieldErrors({...fieldErrors, base_price: []})}} className={`w-full px-3 py-2.5 rounded-lg outline-none border transition-all bg-white ${fieldErrors.base_price?.length ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 text-red-900' : 'border-slate-200 text-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500'}`} style={{ fontSize: 14 }} />
                  {fieldErrors.base_price?.length > 0 && <p className="text-red-500 mt-1.5" style={{ fontSize: 12 }}>{fieldErrors.base_price[0]}</p>}
                </div>
                <div className="flex-1">
                  <label className="block text-slate-600 mb-1.5" style={{ fontSize: 12, fontWeight: 500 }}>% Impuesto</label>
                  <input required type="number" step="0.01" min="0" value={formData.tax_percentage} onChange={e => {setField('tax_percentage', e.target.value); setFieldErrors({...fieldErrors, tax_percentage: []})}} className={`w-full px-3 py-2.5 rounded-lg outline-none border transition-all bg-white ${fieldErrors.tax_percentage?.length ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 text-red-900' : 'border-slate-200 text-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500'}`} style={{ fontSize: 14 }} />
                  {fieldErrors.tax_percentage?.length > 0 && <p className="text-red-500 mt-1.5" style={{ fontSize: 12 }}>{fieldErrors.tax_percentage[0]}</p>}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-slate-600 mb-1.5" style={{ fontSize: 12, fontWeight: 500 }}>Stock Mínimo</label>
                  <input type="number" min="0" value={formData.min_stock} onChange={e => {setField('min_stock', e.target.value); setFieldErrors({...fieldErrors, min_stock: []})}} className={`w-full px-3 py-2.5 rounded-lg outline-none border transition-all bg-white ${fieldErrors.min_stock?.length ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 text-red-900' : 'border-slate-200 text-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500'}`} style={{ fontSize: 14 }} />
                  {fieldErrors.min_stock?.length > 0 && <p className="text-red-500 mt-1.5" style={{ fontSize: 12 }}>{fieldErrors.min_stock[0]}</p>}
                </div>
                <div className="flex-1 flex items-center mt-6">
                  <label className="flex items-center gap-2 cursor-pointer text-slate-600">
                    <input type="checkbox" checked={formData.is_perishable} onChange={e => setField('is_perishable', e.target.checked)} className="w-4 h-4 text-cyan-600 rounded border-slate-300 focus:ring-cyan-500" />
                    <span style={{ fontSize: 13, fontWeight: 500 }}>Es perecedero</span>
                  </label>
                </div>
              </div>
              
              {formError && (
                <div className="px-4 py-3 rounded-lg bg-red-50 border border-red-100 text-red-600" style={{ fontSize: 13 }}>
                  {formError}
                </div>
              )}
              
              {/* Spacer so content doesn't hide behind sticky footer */}
              <div className="h-6"></div>
            </form>
            
            {/* Sticky footer for drawer */}
            <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex justify-end gap-3 shrink-0">
              <button type="button" disabled={saving} onClick={closeDrawer} className="px-4 py-2.5 rounded-lg text-slate-600 hover:bg-slate-200 transition-colors w-full sm:w-auto disabled:opacity-50" style={{ fontSize: 14, fontWeight: 500 }}>Cancelar</button>
              <button type="submit" disabled={saving} onClick={handleSave} className="px-4 py-2.5 rounded-lg flex items-center justify-center transition-opacity hover:opacity-90 w-full sm:w-auto shadow-sm disabled:opacity-75" style={{ background: C.cobalt, color: "#fff", fontSize: 14, fontWeight: 600 }}>
                {saving ? "Guardando..." : "Guardar"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Cámara */}
      <CameraScannerModal 
        isOpen={isCameraOpen} 
        onClose={() => setIsCameraOpen(false)} 
        onScan={(code) => {
          setIsCameraOpen(false);
          setField('barcode', code);
          setFieldErrors({...fieldErrors, barcode: []});
          toast.success("Código escaneado: " + code);
        }} 
      />

      {/* Delete Confirmation Modal */}
      <ConfirmDialog
        open={!!productToDelete}
        onOpenChange={(open) => { if (!open) setProductToDelete(null); }}
        title="¿Eliminar producto?"
        description={`Esta acción eliminará permanentemente a ${productToDelete?.name || 'este producto'} y no se puede deshacer.`}
        isLoading={isDeleting}
        onConfirm={handleDelete}
      />
      
      <CategoryDrawer 
        isOpen={categoryStore.isOpen} 
        category={categoryStore.editingCategory} 
        onClose={categoryStore.closeDrawer} 
        onSuccess={(cat) => {
          categoryStore.addCategory(cat);
          setField('category_id', cat.id); // auto-select the newly created category
          categoryStore.closeDrawer();
        }} 
      />


        <Dialog open={showImportModal} onOpenChange={(val) => { if (!isImporting) setShowImportModal(val); }}>
          <DialogContent 
            className="w-[95vw] sm:max-w-[500px] p-0 overflow-hidden bg-white rounded-2xl max-h-[90vh] flex flex-col"
            onInteractOutside={(e) => { if (isImporting) e.preventDefault(); }}
            onEscapeKeyDown={(e) => { if (isImporting) e.preventDefault(); }}
          >
            <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-4 border-b border-slate-100 flex items-start gap-3 sm:gap-4 shrink-0">
              <div className="p-2 sm:p-3 bg-cobalt/10 rounded-xl shrink-0">
                <Upload className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: C.cobalt }} />
              </div>
              <div>
                <DialogTitle className="text-base sm:text-lg font-bold text-slate-800">Importar Productos</DialogTitle>
                <DialogDescription className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                  Agrega o actualiza múltiples productos a la vez subiendo un archivo Excel.
                </DialogDescription>
              </div>
            </div>
            
            <div className="p-4 sm:p-6 space-y-5 sm:space-y-6 bg-slate-50/50 overflow-y-auto flex-1">
              {/* Step 1 */}
              <div>
                <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-200 text-slate-600 text-xs">1</span> 
                  Prepara tu información
                </h4>
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-emerald-50 rounded-lg shrink-0 mt-0.5">
                      <FileSpreadsheet className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-800">Plantilla oficial de INVORA</p>
                      <p className="text-xs text-slate-500 mt-0.5">Incluye las columnas exactas requeridas.</p>
                    </div>
                  </div>
                  <button
                    onClick={handleDownloadTemplate}
                    className="shrink-0 flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-emerald-700 transition-colors w-full sm:w-auto justify-center"
                  >
                    <Download className="w-4 h-4" /> Descargar
                  </button>
                </div>
              </div>

              {/* Step 2 */}
              <div>
                <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-200 text-slate-600 text-xs">2</span> 
                  Sube el archivo lleno
                </h4>
                
                {!importFile ? (
                  <label className="cursor-pointer group flex flex-col items-center justify-center w-full h-32 sm:h-36 border-2 border-dashed border-slate-300 rounded-xl bg-white hover:bg-slate-50 hover:border-cobalt/50 transition-all">
                    <div className="p-3 bg-slate-100 group-hover:bg-cobalt/10 rounded-full mb-2 sm:mb-3 transition-colors">
                      <Upload className="w-5 h-5 sm:w-6 sm:h-6 text-slate-500 group-hover:text-cobalt transition-colors" />
                    </div>
                    <p className="text-sm font-medium text-slate-700 group-hover:text-cobalt transition-colors text-center px-2">Haz clic para seleccionar tu archivo</p>
                    <p className="text-xs text-slate-400 mt-1">Formatos soportados: XLSX, CSV</p>
                    <input
                      type="file"
                      accept=".xlsx, .csv, .xls"
                      onChange={(e) => setImportFile(e.target.files?.[0] || null)}
                      className="hidden"
                    />
                  </label>
                ) : (
                  <div className="flex items-center justify-between p-3 sm:p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <div className="flex items-center gap-2 sm:gap-3 overflow-hidden">
                      <div className="p-2 bg-emerald-50 rounded-lg shrink-0">
                        <FileSpreadsheet className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                      </div>
                      <div className="truncate">
                        <p className="text-sm font-medium text-slate-800 truncate">{importFile.name}</p>
                        <p className="text-xs text-slate-500">{(importFile.size / 1024).toFixed(1)} KB</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setImportFile(null)}
                      disabled={isImporting}
                      className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
                      title="Quitar archivo"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            <div className="px-4 sm:px-6 py-4 bg-white border-t border-slate-100 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2 shrink-0">
              <button
                onClick={() => { setShowImportModal(false); setImportFile(null); }}
                disabled={isImporting}
                className="w-full sm:w-auto px-4 py-2.5 text-slate-600 bg-white hover:bg-slate-50 border border-slate-200 sm:border-transparent rounded-lg transition-colors disabled:opacity-50 font-medium"
                style={{ fontSize: 14 }}
              >
                Cancelar
              </button>
              <button
                onClick={handleImportSubmit}
                disabled={isImporting || !importFile}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-white font-medium transition-opacity hover:opacity-90 disabled:opacity-50"
                style={{ background: C.cobalt, fontSize: 14 }}
              >
                {isImporting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" /> Procesando...
                  </>
                ) : (
                  <>
                    <Check className="w-4 h-4" /> Importar Datos
                  </>
                )}
              </button>
            </div>
          </DialogContent>
        </Dialog>

    </PageLayout>
  );
}
