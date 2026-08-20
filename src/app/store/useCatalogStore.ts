import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Product {
  id: number;
  name: string;
  sku: string;
  barcode: string | null;
  category_id: number | null;
  base_price: number;
  tax_percentage: number;
  stock: number;
  cost_price: number;
  is_active: boolean;
  min_stock: number;
  is_perishable: boolean;
}

interface FormData {
  name: string;
  sku: string;
  barcode: string;
  category_id: number | null;
  base_price: string;
  tax_percentage: string;
  stock: string;
  cost_price: string;
  min_stock: string;
  is_active: boolean;
  is_perishable: boolean;
}

export interface CatalogState {
  isOpen: boolean;
  formData: FormData;
  editingProduct: Product | null;
  autoGenerate: boolean;
  products: Product[];
  isLoaded: boolean;
  paginationMeta: any | null;
  openDrawer: (defaultTax?: string) => void;
  closeDrawer: () => void;
  setField: (field: keyof FormData, value: string | boolean) => void;
  setFormData: (data: FormData) => void;
  setEditingProduct: (product: Product | null) => void;
  setAutoGenerate: (val: boolean) => void;
  resetForm: () => void;
  setProducts: (products: Product[]) => void;
  setIsLoaded: (val: boolean) => void;
  setPaginationMeta: (meta: any | null) => void;
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  removeProduct: (productId: number) => void;
}

const initialFormData: FormData = {
  name: '',
  sku: '',
  barcode: '',
  category_id: null,
  base_price: '0',
  tax_percentage: '0',
  stock: '0',
  cost_price: '0',
  min_stock: '0',
  is_active: true,
  is_perishable: false,
};

export const useCatalogStore = create<CatalogState>()(
  persist(
    (set) => ({
      isOpen: false,
      formData: initialFormData,
      editingProduct: null,
      autoGenerate: true,
      products: [],
      isLoaded: false,
      paginationMeta: null,
      openDrawer: (defaultTax?: string) => set({ 
        isOpen: true, 
        formData: { ...initialFormData, tax_percentage: defaultTax || '0' } 
      }),
      closeDrawer: () => set({ formData: initialFormData, editingProduct: null, isOpen: false, autoGenerate: true }),
      setField: (field, value) =>
        set((state) => ({
          formData: {
            ...state.formData,
            [field]: value
          }
        })),
      setFormData: (data) => set({ formData: data }),
      setEditingProduct: (product) => set({ editingProduct: product }),
      setAutoGenerate: (val) => set({ autoGenerate: val }),
      resetForm: () => set({ formData: initialFormData, editingProduct: null, isOpen: false, autoGenerate: true }),
      setProducts: (products) => set({ products }),
      setIsLoaded: (val) => set({ isLoaded: val }),
      setPaginationMeta: (meta) => set({ paginationMeta: meta }),
      addProduct: (product) => set((state) => ({ 
        products: state.products.find(p => p.id === product.id) ? state.products : [product, ...state.products] 
      })),
      updateProduct: (product) => set((state) => ({
        products: state.products.map(p => p.id === product.id ? product : p)
      })),
      removeProduct: (productId) => set((state) => ({
        products: state.products.filter(p => p.id !== productId)
      }))
    }),
    {
      name: 'catalog-form-storage',
      partialize: (state) => ({ 
        formData: state.formData, 
        autoGenerate: state.autoGenerate 
      }),
    }
  )
);
