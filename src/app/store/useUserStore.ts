import { create } from 'zustand';

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  sucursal_id?: number | null;
  sucursal?: {
    id: number;
    name: string;
  };
  created_at?: string;
}

export interface PaginationMeta {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  from: number | null;
  to: number | null;
}

interface UserState {
  users: User[];
  paginationMeta: PaginationMeta | null;
  isOpen: boolean;
  editingUser: User | null;
  isLoaded: boolean;
  setUsers: (users: User[]) => void;
  setIsLoaded: (loaded: boolean) => void;
  setPaginationMeta: (meta: PaginationMeta | null) => void;
  openDrawer: (user?: User) => void;
  closeDrawer: () => void;
  addUser: (u: User) => void;
  updateUser: (u: User) => void;
  removeUser: (id: number) => void;
}

export const useUserStore = create<UserState>((set) => ({
  users: [],
  paginationMeta: null,
  isOpen: false,
  editingUser: null,
  isLoaded: false,
  setUsers: (users) => set({ users, isLoaded: true }),
  setIsLoaded: (loaded) => set({ isLoaded: loaded }),
  setPaginationMeta: (meta) => set({ paginationMeta: meta }),
  openDrawer: (user) => set({ isOpen: true, editingUser: user || null }),
  closeDrawer: () => set({ isOpen: false, editingUser: null }),
  addUser: (u) => set(state => ({ 
    users: state.users.find(c => c.id === u.id) ? state.users : [u, ...state.users] 
  })),
  updateUser: (u) => set(state => ({ users: state.users.map(c => c.id === u.id ? u : c) })),
  removeUser: (id) => set(state => ({ users: state.users.filter(c => c.id !== id) }))
}));
