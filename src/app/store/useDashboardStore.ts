import { create } from 'zustand';

export interface DashboardData {
  totalSales: number;
  topProducts: any[];
  lowStockCount: number;
}

interface DashboardState {
  data: DashboardData | null;
  isLoaded: boolean;
  setData: (data: DashboardData | null) => void;
  setIsLoaded: (isLoaded: boolean) => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  data: null,
  isLoaded: false,
  setData: (data) => set({ data }),
  setIsLoaded: (isLoaded) => set({ isLoaded }),
}));
