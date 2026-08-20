import { create } from 'zustand';

export interface Category {
  id: number;
  name: string;
  description: string | null;
  color_hex: string;
  products_count?: number;
}

export interface PaginationMeta {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  from: number | null;
  to: number | null;
}

interface CategoryState {
  categories: Category[];
  paginationMeta: PaginationMeta | null;
  isOpen: boolean;
  editingCategory: Category | null;
  isLoaded: boolean;
  setCategories: (categories: Category[]) => void;
  setPaginationMeta: (meta: PaginationMeta | null) => void;
  openDrawer: (category?: Category) => void;
  closeDrawer: () => void;
  addCategory: (cat: Category) => void;
  updateCategory: (cat: Category) => void;
  removeCategory: (id: number) => void;
}

export const useCategoryStore = create<CategoryState>((set) => ({
  categories: [],
  paginationMeta: null,
  isOpen: false,
  editingCategory: null,
  isLoaded: false,
  setCategories: (categories) => set({ categories, isLoaded: true }),
  setPaginationMeta: (meta) => set({ paginationMeta: meta }),
  openDrawer: (category) => set({ isOpen: true, editingCategory: category || null }),
  closeDrawer: () => set({ isOpen: false, editingCategory: null }),
  addCategory: (cat) => set(state => ({ 
    categories: state.categories.find(c => c.id === cat.id) ? state.categories : [cat, ...state.categories] 
  })),
  updateCategory: (cat) => set(state => ({ categories: state.categories.map(c => c.id === cat.id ? cat : c) })),
  removeCategory: (id) => set(state => ({ categories: state.categories.filter(c => c.id !== id) }))
}));
