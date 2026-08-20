import React, { useState, useEffect } from "react";
import axios from "axios";
import { Search, Plus, Edit2, Trash2, X, AlertCircle, Users } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { PageLayout } from "./shared/PageLayout";
import { useUserStore, User } from "../store/useUserStore";
import { PaginationControls } from "./shared/PaginationControls";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Skeleton } from "./ui/skeleton";
import { ConfirmDialog } from './shared/ConfirmDialog';
import { EmptyState } from './shared/EmptyState';
import { useSucursalStore } from '../store/useSucursalStore';

import { C } from '../theme';

export function UsersTable({ onLogout }: { onLogout?: () => void }) {
  const store = useUserStore();
  const { sucursales, fetchSucursales } = useSucursalStore();

  const [loading, setLoading] = useState(!store.isLoaded);
  const [searchParams, setSearchParams] = useSearchParams();
  
  const page = parseInt(searchParams.get("page") || "1", 10);
  const perPage = parseInt(searchParams.get("perPage") || "10", 10);
  const searchQuery = searchParams.get("search") || "";

  const updateParams = (updates: Record<string, string | undefined>) => {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      Object.entries(updates).forEach(([key, value]) => {
        if (value === undefined || value === "") next.delete(key);
        else next.set(key, value);
      });
      return next;
    }, { replace: true });
  };

  const setPage = (p: number) => updateParams({ page: p.toString() });
  const setPerPage = (p: number) => updateParams({ perPage: p.toString(), page: "1" });
  const setSearchQuery = (q: string) => updateParams({ search: q, page: "1" });
  const clearFilters = () => updateParams({ search: "", page: "1" });

  const {
    isOpen: drawerOpen,
    editingUser,
    openDrawer: storeOpenDrawer,
    closeDrawer: storeCloseDrawer,
    users,
    isLoaded,
    paginationMeta,
    setUsers,
    setIsLoaded,
    setPaginationMeta
  } = store;

  const [userToDelete, setUserToDelete] = useState<User | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "cajero",
    sucursal_id: ""
  });
  const [formError, setFormError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchSucursales();
    const timeoutId = setTimeout(() => {
      fetchUsers();
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [page, perPage, searchQuery]);

  const fetchUsers = async () => {
    try {
      if (!isLoaded) setLoading(true);
      
      const params = new URLSearchParams({
        page: page.toString(),
        per_page: perPage.toString(),
        search: searchQuery
      });

      const res = await axios.get(`/api/v1/users?${params.toString()}`);
      const data = res.data;
      if (data.data && data.current_page) {
        setUsers(data.data);
        setPaginationMeta({
          current_page: data.current_page,
          last_page: data.last_page,
          per_page: data.per_page,
          total: data.total,
          from: data.from,
          to: data.to
        });
      } else {
        setUsers(Array.isArray(data.data) ? data.data : (Array.isArray(data) ? data : []));
        setPaginationMeta(null);
      }
      setIsLoaded(true);
    } catch (e) {
      console.error(e);
      setUsers([]);
      setPaginationMeta(null);
    } finally {
      setLoading(false);
    }
  };

  const openDrawer = (user?: User) => {
    setFormError("");
    setFieldErrors({});
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        password: "",
        role: user.role,
        sucursal_id: user.sucursal_id ? user.sucursal_id.toString() : "",
      });
    } else {
      setFormData({
        name: "",
        email: "",
        password: "",
        role: "cajero",
        sucursal_id: sucursales.length > 0 ? sucursales[0].id.toString() : "",
      });
    }
    storeOpenDrawer(user);
  };

  const closeDrawer = () => {
    storeCloseDrawer();
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    setSaving(true);
    try {
      if (editingUser) {
        await axios.put(`/api/v1/users/${editingUser.id}`, formData);
        toast.success("Usuario actualizado");
      } else {
        await axios.post("/api/v1/users", formData);
        toast.success("Usuario creado");
      }
      closeDrawer();
      fetchUsers();
    } catch (err: any) {
      if (err.response?.status === 422 && err.response?.data?.errors) {
        setFieldErrors(err.response.data.errors);
        toast.error("Revisa los errores en el formulario");
      } else {
        const errorMsg = err.response?.data?.message || "Error al guardar el usuario";
        setFormError(errorMsg);
        toast.error(errorMsg);
      }
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!userToDelete) return;
    setIsDeleting(true);
    try {
      await axios.delete(`/api/v1/users/${userToDelete.id}`);
      setUserToDelete(null);
      toast.success("Usuario eliminado exitosamente");
      fetchUsers();
    } catch (err: any) {
      console.error("Error deleting user", err);
      toast.error(err.response?.data?.message || "Error al eliminar el usuario");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <PageLayout
      title="Gestión de Usuarios"
      actionButton={
        <button
          onClick={() => openDrawer()}
          className="flex items-center gap-2 px-4 py-2 rounded-lg transition-opacity hover:opacity-90 w-full sm:w-auto justify-center shrink-0"
          style={{ background: C.cobalt, color: "#fff", fontSize: 13, fontWeight: 600 }}
        >
          <Plus className="w-4 h-4" /> Nuevo Usuario
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
            placeholder="Buscar usuario por nombre o correo..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 transition-shadow text-slate-700"
          />
        </div>
        
        {searchQuery && (
          <button
            onClick={clearFilters}
            className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-[13px] font-medium text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-all shrink-0"
            title="Limpiar filtros"
          >
            <X className="w-3.5 h-3.5" />
            Limpiar
          </button>
        )}
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block rounded-xl overflow-auto bg-white shadow-sm border border-slate-200" style={{ maxHeight: 'calc(100vh - 240px)' }}>
        <table className="w-full text-left min-w-[600px] relative" style={{ borderCollapse: "collapse" }}>
          <thead className="sticky top-0 z-10 bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-4 sm:px-6 py-4 text-slate-500" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>Nombre</th>
              <th className="px-4 sm:px-6 py-4 text-slate-500" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>Email</th>
              <th className="px-4 sm:px-6 py-4 text-slate-500" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>Rol</th>
              <th className="px-4 sm:px-6 py-4 text-slate-500" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>Sucursal</th>
              <th className="px-4 sm:px-6 py-4 text-slate-500 text-right" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <tr key={i} className="border-b border-slate-100">
                  <td className="px-4 sm:px-6 py-4"><Skeleton className="h-4 w-32 sm:w-48 rounded" /></td>
                  <td className="px-4 sm:px-6 py-4"><Skeleton className="h-4 w-32 sm:w-48 rounded" /></td>
                  <td className="px-4 sm:px-6 py-4"><Skeleton className="h-4 w-16 sm:w-20 rounded" /></td>
                  <td className="px-4 sm:px-6 py-4"><Skeleton className="h-4 w-24 sm:w-32 rounded" /></td>
                  <td className="px-4 sm:px-6 py-4"><Skeleton className="h-4 w-12 sm:w-16 ml-auto rounded" /></td>
                </tr>
              ))
              ) : users.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-0">
                    <EmptyState icon={Users} title="No hay usuarios" subtitle="Agrega tu primer usuario para empezar a colaborar" />
                  </td>
                </tr>
              ) : (
              users.map((user) => (
                <tr key={user.id} className="border-b border-slate-100 hover:bg-slate-50/80 transition-colors">
                  <td className="px-4 sm:px-6 py-4">
                    <div className="text-[13px] font-semibold text-slate-800">{user.name}</div>
                  </td>
                  <td className="px-4 sm:px-6 py-4">
                    <div className="text-[13px] text-slate-600">{user.email}</div>
                  </td>
                  <td className="px-4 sm:px-6 py-4">
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-slate-100 text-slate-600 capitalize">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-4">
                    <div className="text-[12px] text-slate-500">
                      {user.role === 'dueño' ? 'Todas (Dueño)' : (user.sucursal?.name || 'No asignada')}
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 py-4">
                    <div className="flex items-center justify-end gap-3">
                        <button onClick={() => openDrawer(user)} className="p-2 text-slate-400 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors" title="Editar">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button onClick={() => setUserToDelete(user)} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="Eliminar">
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

      {/* Mobile Card View */}
      <div className="md:hidden flex flex-col gap-4 mb-4">
        {loading ? (
          Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <Skeleton className="h-5 w-48 mb-2 rounded" />
              <Skeleton className="h-4 w-32 rounded" />
              <div className="flex justify-between items-center mt-4">
                <Skeleton className="h-5 w-16 rounded" />
                <div className="flex gap-2">
                  <Skeleton className="w-8 h-8 rounded-lg" />
                  <Skeleton className="w-8 h-8 rounded-lg" />
                </div>
              </div>
            </div>
          ))
          ) : users.length === 0 ? (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200">
              <EmptyState icon={Users} title="No hay usuarios" subtitle="Agrega tu primer usuario para empezar a colaborar" />
            </div>
          ) : (
          users.map((user) => (
            <div key={user.id} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="pr-8">
                <div className="font-semibold text-[14px] text-slate-800 leading-tight mb-1">{user.name}</div>
                <div className="text-[13px] text-slate-500">{user.email}</div>
              </div>
              <div className="mt-3 flex justify-between items-end">
                <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-slate-100 text-slate-700 capitalize">
                  {user.role}
                </span>
                  <div className="flex gap-2 shrink-0 ml-3">
                    <button onClick={() => openDrawer(user)} className="p-2 text-slate-400 hover:text-cyan-600 bg-slate-50 hover:bg-cyan-50 rounded-lg transition-colors">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button onClick={() => setUserToDelete(user)} className="p-2 text-slate-400 hover:text-red-500 bg-slate-50 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
              </div>
            </div>
          ))
        )}
      </div>

      <PaginationControls meta={paginationMeta} onPageChange={setPage} onPerPageChange={setPerPage} />

      {/* Delete Confirmation Modal */}
      <ConfirmDialog
        open={!!userToDelete}
        onOpenChange={(open) => { if (!open) setUserToDelete(null); }}
        title="¿Eliminar usuario?"
        description={`Esta acción eliminará permanentemente a ${userToDelete?.name || 'este usuario'} y no se puede deshacer.`}
        isLoading={isDeleting}
        onConfirm={handleDelete}
      />

      {/* Create/Edit Form Slide-over */}
      {drawerOpen && (
        <>
          <div className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40" onClick={closeDrawer} />
          <div className="fixed inset-y-0 right-0 w-full sm:w-[400px] bg-white shadow-2xl z-50 flex flex-col transform transition-transform duration-300 ease-in-out border-l border-slate-200">
            <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h2 className="text-base font-semibold text-slate-800">
                {editingUser ? "Editar Usuario" : "Nuevo Usuario"}
              </h2>
              <button onClick={closeDrawer} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
              <form id="user-form" onSubmit={handleSave} className="space-y-5">
                {formError && (
                  <div className="p-3 bg-rose-50 text-rose-700 rounded-lg text-sm flex items-center gap-2 border border-rose-100">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}
                
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5 uppercase tracking-wider">Nombre Completo <span className="text-rose-500">*</span></label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      setFieldErrors(prev => ({ ...prev, name: [] }));
                    }}
                    className={`w-full px-3 py-2.5 bg-white border ${fieldErrors.name ? 'border-rose-300 focus:ring-rose-500/50 focus:border-rose-500' : 'border-slate-200 focus:ring-cyan-500/50 focus:border-cyan-500'} rounded-lg text-[14px] text-slate-800 transition-shadow focus:outline-none focus:ring-2`}
                    placeholder="Ej. Juan Pérez"
                  />
                  {fieldErrors.name && <p className="mt-1 text-xs text-rose-500">{fieldErrors.name[0]}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5 uppercase tracking-wider">Correo Electrónico <span className="text-rose-500">*</span></label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      setFieldErrors(prev => ({ ...prev, email: [] }));
                    }}
                    className={`w-full px-3 py-2.5 bg-white border ${fieldErrors.email ? 'border-rose-300 focus:ring-rose-500/50 focus:border-rose-500' : 'border-slate-200 focus:ring-cyan-500/50 focus:border-cyan-500'} rounded-lg text-[14px] text-slate-800 transition-shadow focus:outline-none focus:ring-2`}
                    placeholder="Ej. juan@empresa.com"
                  />
                  {fieldErrors.email && <p className="mt-1 text-xs text-rose-500">{fieldErrors.email[0]}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5 uppercase tracking-wider">Rol <span className="text-rose-500">*</span></label>
                  <Select value={formData.role} onValueChange={(val) => setFormData({ ...formData, role: val })}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecciona un rol" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dueño">Dueño</SelectItem>
                      <SelectItem value="admin">Administrador</SelectItem>
                      <SelectItem value="cajero">Cajero</SelectItem>
                      <SelectItem value="almacenero">Almacenero</SelectItem>
                    </SelectContent>
                  </Select>
                  {fieldErrors.role && <p className="mt-1 text-xs text-rose-500">{fieldErrors.role[0]}</p>}
                </div>

                {formData.role !== 'dueño' && (
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5 uppercase tracking-wider">Sucursal Asignada <span className="text-rose-500">*</span></label>
                    <Select value={formData.sucursal_id} onValueChange={(val) => setFormData({ ...formData, sucursal_id: val })}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecciona una sucursal" />
                      </SelectTrigger>
                      <SelectContent>
                        {sucursales.map(s => (
                          <SelectItem key={s.id} value={s.id.toString()}>{s.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {fieldErrors.sucursal_id && <p className="mt-1 text-xs text-rose-500">{fieldErrors.sucursal_id[0]}</p>}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5 uppercase tracking-wider">Contraseña {!editingUser && <span className="text-rose-500">*</span>}</label>
                  <input
                    type="password"
                    required={!editingUser}
                    value={formData.password}
                    onChange={(e) => {
                      setFormData({ ...formData, password: e.target.value });
                      setFieldErrors(prev => ({ ...prev, password: [] }));
                    }}
                    className={`w-full px-3 py-2.5 bg-white border ${fieldErrors.password ? 'border-rose-300 focus:ring-rose-500/50 focus:border-rose-500' : 'border-slate-200 focus:ring-cyan-500/50 focus:border-cyan-500'} rounded-lg text-[14px] text-slate-800 transition-shadow focus:outline-none focus:ring-2`}
                    placeholder={editingUser ? "Dejar en blanco para no cambiar" : "Mínimo 6 caracteres"}
                  />
                  {fieldErrors.password && <p className="mt-1 text-xs text-rose-500">{fieldErrors.password[0]}</p>}
                </div>
              </form>
            </div>

            <div className="px-6 py-5 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
              <button
                type="button"
                onClick={closeDrawer}
                className="px-4 py-2 rounded-lg text-[13px] font-medium text-slate-600 hover:bg-slate-200 transition-colors"
                disabled={saving}
              >
                Cancelar
              </button>
              <button
                type="submit"
                form="user-form"
                disabled={saving}
                className="px-4 py-2 rounded-lg text-[13px] font-semibold text-white transition-opacity disabled:opacity-70 flex items-center gap-2"
                style={{ background: C.cobalt }}
              >
                {saving ? "Guardando..." : "Guardar Usuario"}
              </button>
            </div>
          </div>
        </>
      )}
    </PageLayout>
  );
}
