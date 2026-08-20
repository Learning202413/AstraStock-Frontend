import { create } from 'zustand';

export interface SaleDetail {
  id: number;
  sale_id: number;
  product_id: number;
  quantity: number;
  unit_price: number;
  subtotal: number;
  product?: {
    id: number;
    name: string;
  };
}

export interface Sale {
  id: number;
  empresa_id: number;
  receipt_number: string;
  total_amount: number;
  payment_method: string;
  status: string;
  customer_name: string;
  customer_document_type: string;
  customer_document_number: string;
  tipo_comprobante: string;
  serie: string;
  correlativo: string;
  igv: number;
  created_at: string;
  updated_at: string;
  details?: SaleDetail[];
}

export interface SalesHistoryState {
  sales: Sale[];
  isLoaded: boolean;
  paginationMeta: any | null;
  setSales: (sales: Sale[]) => void;
  setIsLoaded: (val: boolean) => void;
  setPaginationMeta: (meta: any | null) => void;
  addSale: (sale: Sale) => void;
  updateSale: (sale: Sale) => void;
}

export const useSalesHistoryStore = create<SalesHistoryState>((set) => ({
  sales: [],
  isLoaded: false,
  paginationMeta: null,
  setSales: (sales) => set({ sales }),
  setIsLoaded: (val) => set({ isLoaded: val }),
  setPaginationMeta: (meta) => set({ paginationMeta: meta }),
  addSale: (sale) => set((state) => ({ sales: [sale, ...state.sales] })),
  updateSale: (sale) => set((state) => ({ sales: state.sales.map(s => s.id === sale.id ? sale : s) })),
}));
