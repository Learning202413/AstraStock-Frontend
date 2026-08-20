import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';

export interface Sucursal {
  id: number;
  empresa_id: number;
  name: string;
  address: string | null;
  phone: string | null;
  is_main: boolean;
  serie_factura: string;
  serie_boleta: string;
}

interface SucursalState {
  sucursales: Sucursal[];
  activeSucursalId: number | 'ALL';
  isLoading: boolean;
  fetchSucursales: () => Promise<void>;
  setActiveSucursalId: (id: number | 'ALL') => void;
  getActiveSucursal: () => Sucursal | undefined;
}

export const useSucursalStore = create<SucursalState>()(
  persist(
    (set, get) => ({
      sucursales: [],
      activeSucursalId: 'ALL',
      isLoading: false,

      fetchSucursales: async () => {
        if (get().sucursales.length === 0) {
          set({ isLoading: true });
        }
        try {
          const res = await axios.get('/api/v1/sucursales');
          const sucursales = Array.isArray(res.data) ? res.data : [];
          set({ sucursales, isLoading: false });
          
          // Si el ID activo ya no existe en la lista, resetear
          const currentId = get().activeSucursalId;
          if (currentId !== 'ALL' && !sucursales.find((s: Sucursal) => s.id === currentId)) {
            set({ activeSucursalId: 'ALL' });
          }
        } catch (error) {
          console.error("Error fetching sucursales", error);
          set({ isLoading: false, sucursales: [] });
        }
      },

      setActiveSucursalId: (id: number | 'ALL') => {
        set({ activeSucursalId: id });
        
        // Actualizar header de Axios para todas las futuras peticiones
        if (id === 'ALL') {
          delete axios.defaults.headers.common['X-Sucursal-Id'];
        } else {
          axios.defaults.headers.common['X-Sucursal-Id'] = id.toString();
        }
      },

      getActiveSucursal: () => {
        const { sucursales, activeSucursalId } = get();
        if (activeSucursalId === 'ALL') return undefined;
        return sucursales.find(s => s.id === activeSucursalId);
      }
    }),
    {
      name: 'invora-sucursal-storage',
      partialize: (state) => ({ activeSucursalId: state.activeSucursalId }),
      onRehydrateStorage: () => (state) => {
        // Restaurar el header de axios cuando se rehidrata el estado desde localStorage
        if (state && state.activeSucursalId !== 'ALL') {
          axios.defaults.headers.common['X-Sucursal-Id'] = state.activeSucursalId.toString();
        }
      }
    }
  )
);
