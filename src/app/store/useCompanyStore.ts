import { create } from 'zustand';
import axios from 'axios';

export interface Company {
  id: number;
  ruc: string;
  razon_social: string;
  regimen_tributario: string;
  direccion: string | null;
  igv_percentage: number;
  currency: string;
  logo_path: string | null;
  settings?: {
    firmapse_env?: string;
    firmapse_username?: string;
    firmapse_password?: string;
    [key: string]: any;
  } | null;
}

interface CompanyState {
  company: Company | null;
  isLoaded: boolean;
  isLoading: boolean;
  error: string | null;
  fetchCompany: () => Promise<void>;
  setCompany: (company: Company) => void;
}

export const useCompanyStore = create<CompanyState>((set, get) => ({
  company: null,
  isLoaded: false,
  isLoading: false,
  error: null,
  
  fetchCompany: async () => {
    if (get().isLoaded || get().isLoading) return;
    
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get('/api/v1/company/profile');
      set({ 
        company: response.data.data, 
        isLoaded: true,
        isLoading: false 
      });
    } catch (err: any) {
      set({ 
        error: err.response?.data?.message || 'Error al cargar la empresa',
        isLoading: false
      });
    }
  },

  setCompany: (company) => set({ company, isLoaded: true })
}));
