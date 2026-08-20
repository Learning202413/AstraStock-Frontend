import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from './useCatalogStore';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface PosState {
  cart: CartItem[];
  paymentMethod: 'cash' | 'card' | 'transfer';
  customerName: string;
  customerDocumentType: '1' | '6';
  customerDocumentNumber: string;
  tipoComprobante: '01' | '03';
  isProcessing: boolean;
  products: Product[];
  isLoaded: boolean;
  searchQuery: string;
  isCatalogLoading: boolean;
  setProducts: (products: Product[]) => void;
  setSearchQuery: (query: string) => void;
  setIsCatalogLoading: (val: boolean) => void;
  setIsLoaded: (val: boolean) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  setPaymentMethod: (method: 'cash' | 'card' | 'transfer') => void;
  setCustomerName: (name: string) => void;
  setCustomerDocumentType: (type: '1' | '6') => void;
  setCustomerDocumentNumber: (number: string) => void;
  setTipoComprobante: (tipo: '01' | '03') => void;
  setIsProcessing: (val: boolean) => void;
  clearCart: () => void;
  getTotal: () => number;
  syncProductInCart: (product: Product) => void;
}

export const usePosStore = create<PosState>()(
  persist(
    (set, get) => ({
      cart: [],
      paymentMethod: 'cash',
      customerName: '',
      customerDocumentType: '1',
      customerDocumentNumber: '',
      tipoComprobante: '03',
      isProcessing: false,
      products: [],
      isLoaded: false,
      searchQuery: '',
      isCatalogLoading: false,
      setProducts: (products) => set({ products }),
      setSearchQuery: (query) => set({ searchQuery: query }),
      setIsCatalogLoading: (val) => set({ isCatalogLoading: val }),
      setIsLoaded: (val) => set({ isLoaded: val }),
      addToCart: (product) => set((state) => {
        const existing = state.cart.find(item => item.product.id === product.id);
        if (existing) {
          if (existing.quantity >= product.stock) return state; // Don't exceed stock
          return {
            cart: state.cart.map(item => 
              item.product.id === product.id 
                ? { ...item, quantity: item.quantity + 1 } 
                : item
            )
          };
        }
        if (product.stock <= 0) return state;
        return { cart: [...state.cart, { product, quantity: 1 }] };
      }),
      removeFromCart: (productId) => set((state) => ({
        cart: state.cart.filter(item => item.product.id !== productId)
      })),
      updateQuantity: (productId, quantity) => set((state) => {
        if (quantity <= 0) {
          return { cart: state.cart.filter(item => item.product.id !== productId) };
        }
        return {
          cart: state.cart.map(item => {
            if (item.product.id === productId) {
              const maxAllowed = item.product.stock;
              const safeQuantity = Math.min(quantity, maxAllowed);
              return { ...item, quantity: safeQuantity };
            }
            return item;
          })
        };
      }),
      setPaymentMethod: (method) => set({ paymentMethod: method }),
      setCustomerName: (name) => set({ customerName: name }),
      setCustomerDocumentType: (type) => set({ customerDocumentType: type }),
      setCustomerDocumentNumber: (number) => set({ customerDocumentNumber: number }),
      setTipoComprobante: (tipo) => set({ tipoComprobante: tipo }),
      setIsProcessing: (val) => set({ isProcessing: val }),
      clearCart: () => set({ cart: [], customerName: '', customerDocumentNumber: '', paymentMethod: 'cash', tipoComprobante: '03' }),
      getTotal: () => {
        const totalCents = get().cart.reduce((total, item) => {
          const priceCents = Math.round(parseFloat(item.product.base_price as any) * 100);
          return total + (priceCents * item.quantity);
        }, 0);
        return totalCents / 100;
      },
      syncProductInCart: (product) => set((state) => {
        const item = state.cart.find(i => i.product.id === product.id);
        if (!item) return state; // not in cart
        
        // Update product data and enforce new stock limit
        const safeQuantity = Math.min(item.quantity, product.stock);
        
        if (safeQuantity <= 0) {
          // Remove if out of stock
          return { cart: state.cart.filter(i => i.product.id !== product.id) };
        }
        
        return {
          cart: state.cart.map(i => 
            i.product.id === product.id 
              ? { ...i, product, quantity: safeQuantity } 
              : i
          )
        };
      })
    }),
    {
      name: 'pos-storage',
      partialize: (state) => ({ 
        cart: state.cart, 
        paymentMethod: state.paymentMethod, 
        customerName: state.customerName,
        customerDocumentType: state.customerDocumentType,
        customerDocumentNumber: state.customerDocumentNumber,
        tipoComprobante: state.tipoComprobante
      }),
    }
  )
);
