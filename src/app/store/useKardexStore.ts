import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Product {
  id: number;
  name: string;
  sku: string;
  stock: number;
  is_perishable?: boolean;
}

interface FormData {
  product_id: string;
  type: string;
  quantity: string;
  reference: string;
  notes: string;
  batch_number?: string;
  expiry_date?: string;
}

export interface Movement {
  id: number;
  product_id: number;
  type: "in" | "out" | "adjust";
  quantity: number;
  reference: string | null;
  notes: string | null;
  created_at: string;
  product: Product;
}

export interface KardexState {
  isOpen: boolean;
  formData: FormData;
  selectedProduct: Product | null;
  movements: Movement[];
  isLoaded: boolean;
  paginationMeta: any | null;
  openModal: () => void;
  closeModal: () => void;
  setField: (field: keyof FormData, value: string) => void;
  setFormData: (data: FormData) => void;
  setSelectedProduct: (product: Product | null) => void;
  resetForm: () => void;
  setMovements: (movements: Movement[]) => void;
  setIsLoaded: (val: boolean) => void;
  setPaginationMeta: (meta: any | null) => void;
  addMovement: (movement: Movement) => void;
  updateMovement: (movement: Movement) => void;
  removeMovement: (id: number) => void;
}

const initialFormData: FormData = {
  product_id: '',
  type: 'in',
  quantity: '',
  reference: '',
  notes: '',
  batch_number: '',
  expiry_date: ''
};

export const useKardexStore = create<KardexState>()(
  persist(
    (set) => ({
      isOpen: false,
      formData: initialFormData,
      selectedProduct: null,
      movements: [],
      isLoaded: false,
      paginationMeta: null,
      openModal: () => set({ isOpen: true }),
      closeModal: () => set({ formData: initialFormData, selectedProduct: null, isOpen: false }),
      setField: (field, value) =>
        set((state) => ({
          formData: {
            ...state.formData,
            [field]: value
          }
        })),
      setFormData: (data) => set({ formData: data }),
      setSelectedProduct: (product) => set({ selectedProduct: product }),
      resetForm: () => set({ formData: initialFormData, selectedProduct: null, isOpen: false }),
      setMovements: (movements) => set({ movements }),
      setIsLoaded: (val) => set({ isLoaded: val }),
      setPaginationMeta: (meta) => set({ paginationMeta: meta }),
      addMovement: (movement) => set((state) => ({
        movements: state.movements.find(m => m.id === movement.id) ? state.movements : [movement, ...state.movements]
      })),
      updateMovement: (movement) => set((state) => ({
        movements: state.movements.map(m => m.id === movement.id ? movement : m)
      })),
      removeMovement: (id) => set((state) => ({
        movements: state.movements.filter(m => m.id !== id)
      }))
    }),
    {
      name: 'kardex-form-storage',
      partialize: (state) => ({ 
        formData: state.formData
      }),
    }
  )
);
