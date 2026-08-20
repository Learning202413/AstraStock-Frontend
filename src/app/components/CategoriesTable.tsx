import React, { useState, useEffect } from "react";
import axios from "axios";
import { Plus, Search, Edit2, Trash2, Folder, Check, X, PackageOpen } from "lucide-react";
import { PageLayout } from "./shared/PageLayout";
import { PaginationControls, PaginationMeta } from "./shared/PaginationControls";
import { toast } from "sonner";
import { useCategoryStore, Category } from "../store/useCategoryStore";
import { useSearchParams } from "react-router-dom";
import { Skeleton } from "./ui/skeleton";
import { ConfirmDialog } from './shared/ConfirmDialog';
import { EmptyState } from './shared/EmptyState';

import { C } from '../theme';

export function CategoriesTable() {
  const store = useCategoryStore();
  const { paginationMeta, setPaginationMeta } = store;
  
  const [loading, setLoading] = useState(!store.isLoaded);
  const [searchParams, setSearchParams] = useSearchParams();
  const [categoryToDelete, setCategoryToDelete] = useState<Category | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const page = parseInt(searchParams.get("page") || "1", 10);
  const perPage = parseInt(searchParams.get("perPage") || "10", 10);
  const searchTerm = searchParams.get("search") || "";

  const updateParams = (updates: Record<string, string>) => {
    const newParams = new URLSearchParams(searchParams);
    Object.entries(updates).forEach(([key, value]) => {
      if (value) newParams.set(key, value);
      else newParams.delete(key);
    });
    setSearchParams(newParams);
  };

  const setPage = (p: number) => updateParams({ page: p.toString() });
  const setPerPage = (p: number) => updateParams({ perPage: p.toString(), page: "1" });
  const setSearchTerm = (s: string) => updateParams({ search: s, page: "1" });

  const fetchCategories = async (p: number = page, search: string = searchTerm) => {
    try {
      if (!store.isLoaded) setLoading(true);
      const res = await axios.get(`/api/v1/categories?page=${p}&per_page=${perPage}&search=${encodeURIComponent(search)}`);
      store.setCategories(res.data.data);
      setPaginationMeta(res.data.meta);
    } catch (error) {
      console.error("Error fetching categories", error);
      toast.error("Error al cargar categorías");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchCategories(page, searchTerm);
    }, 300);
    return () => clearTimeout(delayDebounceFn);
  }, [page, perPage, searchTerm]);

  const handleDelete = async () => {
    if (!categoryToDelete) return;
    setIsDeleting(true);
    try {
      await axios.delete(`/api/v1/categories/${categoryToDelete.id}`);
      store.removeCategory(categoryToDelete.id);
      toast.success("Categoría eliminada");
      setCategoryToDelete(null);
    } catch (e: any) {
      toast.error(e.response?.data?.message || "Error al eliminar");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <PageLayout 
      title="Categorías" 
      subtitle="Gestiona las agrupaciones de tus productos"
      actionButton={
        <button
          onClick={() => store.openDrawer()}
          className="flex items-center gap-2 px-4 py-2 rounded-lg transition-opacity hover:opacity-90 w-full sm:w-auto justify-center shrink-0"
          style={{ background: C.cobalt, color: "#fff", fontSize: 13, fontWeight: 600 }}
        >
          <Plus className="w-4 h-4" /> Nueva Categoría
        </button>
      }
    >
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Buscar categoría..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 transition-shadow text-slate-700"
          />
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden flex flex-col gap-4">
        {loading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3 w-full">
                  <Skeleton className="w-10 h-10 rounded-lg shrink-0" />
                  <div className="flex-1">
                    <Skeleton className="h-5 w-32 mb-2 rounded" />
                    <Skeleton className="h-4 w-16 rounded" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Skeleton className="w-8 h-8 rounded-lg shrink-0" />
                  <Skeleton className="w-8 h-8 rounded-lg shrink-0" />
                </div>
              </div>
            </div>
          ))
          ) : store.categories.length === 0 ? (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200">
              <EmptyState icon={Folder} title="No hay categorías" subtitle="Agrega tu primera categoría al catálogo" />
            </div>
          ) : (
          store.categories.map((cat) => (
            <div key={cat.id} className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" 
                    style={{ backgroundColor: `${cat.color_hex}15`, color: cat.color_hex }}
                  >
                    <Folder className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800">{cat.name}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{cat.products_count || 0} productos</p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                    <button
                      onClick={() => store.openDrawer(cat)}
                      className="p-2 text-slate-400 hover:text-cyan-600 bg-slate-50 hover:bg-cyan-50 rounded-lg transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setCategoryToDelete(cat)}
                      className="p-2 text-slate-400 hover:text-red-500 bg-slate-50 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
              </div>
              {cat.description && (
                <p className="text-sm text-slate-600 line-clamp-2 mt-1">{cat.description}</p>
              )}
            </div>
          ))
        )}
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block rounded-xl overflow-auto bg-white shadow-sm border border-slate-200" style={{ maxHeight: 'calc(100vh - 240px)' }}>
        <table className="w-full text-left min-w-[600px] relative" style={{ borderCollapse: "collapse" }}>
          <thead className="sticky top-0 z-10 bg-slate-50 border-b border-slate-200">
            <tr>
                <th className="px-4 sm:px-6 py-4 text-slate-500" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>Categoría</th>
                <th className="px-4 sm:px-6 py-4 text-slate-500" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>Descripción</th>
                <th className="px-4 sm:px-6 py-4 text-slate-500 text-center" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>Color</th>
                <th className="px-4 sm:px-6 py-4 text-slate-500 text-right" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>Productos</th>
                <th className="px-4 sm:px-6 py-4 text-slate-500 text-right" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                [...Array(5)].map((_, i) => (
                  <tr key={i} className="border-b border-slate-100">
                    <td className="px-4 sm:px-6 py-4"><Skeleton className="h-4 w-32 rounded" /></td>
                    <td className="px-4 sm:px-6 py-4"><Skeleton className="h-4 w-48 rounded" /></td>
                    <td className="px-4 sm:px-6 py-4"><Skeleton className="h-4 w-8 mx-auto rounded" /></td>
                    <td className="px-4 sm:px-6 py-4"><Skeleton className="h-4 w-8 ml-auto rounded" /></td>
                    <td className="px-4 sm:px-6 py-4"><Skeleton className="h-4 w-10 ml-auto rounded" /></td>
                  </tr>
                ))
                ) : store.categories.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-0">
                      <EmptyState icon={Folder} title="No hay categorías" subtitle="Agrega tu primera categoría al catálogo" />
                    </td>
                  </tr>
                ) : (
                store.categories.map((cat) => (
                  <tr key={cat.id} className="hover:bg-slate-50 transition-colors border-b border-slate-100">
                    <td className="px-4 sm:px-6 py-4 text-slate-800" style={{ fontSize: 14, fontWeight: 500 }}>
                      {cat.name}
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-slate-600" style={{ fontSize: 14 }}>
                      {cat.description || '-'}
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-center">
                      <div className="w-6 h-6 rounded-full mx-auto shadow-sm border border-slate-200" style={{ backgroundColor: cat.color_hex || C.cobalt }}></div>
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-right">
                      <span className="px-2.5 py-1 rounded-md bg-cyan-50 text-cyan-700 font-medium text-xs">
                        {cat.products_count || 0}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <button onClick={() => store.openDrawer(cat)} className="p-2 text-slate-400 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors" title="Editar">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button onClick={() => setCategoryToDelete(cat)} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="Eliminar">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
      </div>

      {/* Pagination Footer */}
      {paginationMeta && (
        <div className="mt-2 -mx-4">
          <PaginationControls
            meta={paginationMeta}
            onPageChange={setPage}
            onPerPageChange={(newPerPage) => {
              setPerPage(newPerPage);
            }}
          />
        </div>
      )}

      <CategoryDrawer 
        isOpen={store.isOpen} 
        category={store.editingCategory} 
        onClose={store.closeDrawer} 
        onSuccess={(cat) => {
          if (store.editingCategory) store.updateCategory(cat);
          else store.addCategory(cat);
          store.closeDrawer();
        }} 
      />

      {/* Delete Confirmation Modal */}
      <ConfirmDialog
        open={!!categoryToDelete}
        onOpenChange={(open) => { if (!open) setCategoryToDelete(null); }}
        title="¿Eliminar categoría?"
        description={`Esta acción eliminará permanentemente la categoría ${categoryToDelete?.name || ''} y no se puede deshacer.`}
        isLoading={isDeleting}
        onConfirm={handleDelete}
      />
    </PageLayout>
  );
}

// Drawer Component
export function CategoryDrawer({ isOpen, category, onClose, onSuccess }: { isOpen: boolean, category: Category | null, onClose: () => void, onSuccess: (c: Category) => void }) {
  const [formData, setFormData] = useState({ name: '', description: '', color_hex: '#1b3eb5' });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (isOpen) {
      if (category) {
        setFormData({ name: category.name, description: category.description || '', color_hex: category.color_hex });
      } else {
        setFormData({ name: '', description: '', color_hex: '#1b3eb5' });
      }
    }
  }, [isOpen, category]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      let res;
      if (category) {
        res = await axios.put(`/api/v1/categories/${category.id}`, formData);
        toast.success("Categoría actualizada");
      } else {
        res = await axios.post("/api/v1/categories", formData);
        toast.success("Categoría creada");
      }
      onSuccess(res.data);
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Error al guardar");
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] transition-opacity"
          onClick={onClose}
        />
      )}
      
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[460px] md:w-[500px] bg-white sm:border-l border-slate-200 z-[70] shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 shrink-0">
          <h3 className="text-slate-800 flex items-center gap-2" style={{ fontSize: 16, fontWeight: 600 }}>
            {category ? 'Editar Categoría' : 'Nueva Categoría'}
          </h3>
          <button onClick={onClose} disabled={saving} className="p-2 -mr-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 rounded-lg transition-colors disabled:opacity-50 disabled:hover:bg-transparent">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form id="category-form" onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 flex flex-col gap-5">
          <div>
            <label className="block text-slate-600 mb-1.5" style={{ fontSize: 12, fontWeight: 500 }}>Nombre</label>
            <input 
              type="text" 
              required 
              value={formData.name} 
              onChange={e => setFormData({...formData, name: e.target.value})} 
              className="w-full px-3 py-2.5 rounded-lg outline-none border transition-all bg-white border-slate-200 text-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500" 
              style={{ fontSize: 14 }}
              placeholder="Ej: Bebidas"
            />
          </div>
          
          <div>
            <label className="block text-slate-600 mb-1.5" style={{ fontSize: 12, fontWeight: 500 }}>Color Identificador</label>
            <div className="flex items-center gap-3">
              <input 
                type="color" 
                value={formData.color_hex} 
                onChange={e => setFormData({...formData, color_hex: e.target.value})} 
                className="w-12 h-12 rounded cursor-pointer bg-transparent border-0 p-0 shadow-sm" 
              />
              <span className="text-slate-600 uppercase font-mono bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200" style={{ fontSize: 13 }}>{formData.color_hex}</span>
            </div>
          </div>

          <div>
            <label className="block text-slate-600 mb-1.5" style={{ fontSize: 12, fontWeight: 500 }}>Descripción (Opcional)</label>
            <textarea 
              rows={3}
              value={formData.description} 
              onChange={e => setFormData({...formData, description: e.target.value})} 
              className="w-full px-3 py-2.5 rounded-lg outline-none border transition-all bg-white border-slate-200 text-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 resize-none" 
              style={{ fontSize: 14 }}
            />
          </div>
          
          <div className="h-6"></div>
        </form>

        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex justify-end gap-3 shrink-0">
          <button 
            type="button" 
            onClick={onClose} 
            disabled={saving}
            className="px-4 py-2.5 rounded-lg text-slate-600 hover:bg-slate-200 transition-colors w-full sm:w-auto disabled:opacity-50"
            style={{ fontSize: 14, fontWeight: 500 }}
          >
            Cancelar
          </button>
          <button 
            type="submit" 
            form="category-form" 
            disabled={saving} 
            className="px-4 py-2.5 rounded-lg flex items-center justify-center transition-opacity hover:opacity-90 w-full sm:w-auto shadow-sm disabled:opacity-75"
            style={{ background: C.cobalt, color: "#fff", fontSize: 14, fontWeight: 600 }}
          >
            {saving ? "Guardando..." : (category ? 'Guardar Cambios' : 'Crear Categoría')}
          </button>
        </div>
      </div>
    </>
  );
}
