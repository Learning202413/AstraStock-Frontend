import { create } from 'zustand';

export interface Transfer {
  id: number;
  from_sucursal_id: number;
  to_sucursal_id: number;
  product_id: number;
  quantity: number;
  status: string;
  notes: string | null;
  created_at: string;
  from_sucursal: { id: number; name: string };
  to_sucursal: { id: number; name: string };
  product: { id: number; name: string; sku: string };
}

import { PaginationMeta } from '../components/shared/PaginationControls';

interface TransferState {
  transfers: Transfer[];
  isOpen: boolean;
  isLoaded: boolean;
  formData: any;
  selectedProduct: any | null;
  paginationMeta: PaginationMeta | null;
  setTransfers: (transfers: Transfer[]) => void;
  setIsLoaded: (loaded: boolean) => void;
  setPaginationMeta: (meta: PaginationMeta | null) => void;
  openModal: () => void;
  closeModal: () => void;
  setFormData: (data: any) => void;
  setSelectedProduct: (p: any | null) => void;
  resetForm: () => void;
  addTransfer: (t: Transfer) => void;
  updateTransfer: (t: Transfer) => void;
}

export const useTransferStore = create<TransferState>((set) => ({
  transfers: [],
  isOpen: false,
  isLoaded: false,
  selectedProduct: null,
  paginationMeta: null,
  formData: {
    from_sucursal_id: '',
    to_sucursal_id: '',
    product_id: '',
    quantity: 1,
    notes: ''
  },
  setTransfers: (transfers) => set({ transfers, isLoaded: true }),
  setIsLoaded: (loaded) => set({ isLoaded: loaded }),
  setPaginationMeta: (meta) => set({ paginationMeta: meta }),
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
  setFormData: (data) => set({ formData: data }),
  setSelectedProduct: (p) => set({ selectedProduct: p }),
  resetForm: () => set({
    formData: {
      from_sucursal_id: '',
      to_sucursal_id: '',
      product_id: '',
      quantity: 1,
      notes: ''
    },
    selectedProduct: null
  }),
  addTransfer: (t) => set(state => ({ transfers: [t, ...state.transfers] })),
  updateTransfer: (t) => set(state => ({ transfers: state.transfers.map(tr => tr.id === t.id ? t : tr) }))
}));
