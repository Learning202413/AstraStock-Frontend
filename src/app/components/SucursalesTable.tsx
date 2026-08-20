import React, { useState, useEffect } from "react";
import axios from "axios";
import { Plus, Edit2, Trash2, X, AlertCircle, Store } from "lucide-react";
import { toast } from "sonner";
import { PageLayout } from "./shared/PageLayout";
import { useSucursalStore, Sucursal } from "../store/useSucursalStore";
import { Skeleton } from "./ui/skeleton";
import { ConfirmDialog } from './shared/ConfirmDialog';
import { EmptyState } from './shared/EmptyState';
import { C } from '../theme';

export function SucursalesTable() {
  const usuarioRaw = localStorage.getItem("invora_user");
  const user = (usuarioRaw && usuarioRaw !== "undefined") ? JSON.parse(usuarioRaw) : null;
  const { sucursales, fetchSucursales, isLoading } = useSucursalStore();
  
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editingSucursal, setEditingSucursal] = useState<Sucursal | null>(null);
  
  const [sucursalToDelete, setSucursalToDelete] = useState<Sucursal | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    serie_factura: "",
    serie_boleta: "",
    is_main: false,
    is_active: true,
  });
  
  const [formError, setFormError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});
  const [saving, setSaving] = useState(false);

  const isOwner = user?.role === 'dueño';

  useEffect(() => {
    fetchSucursales();
  }, []);

  const openDrawer = (sucursal?: Sucursal) => {
    setFormError("");
    setFieldErrors({});
    if (sucursal) {
      setEditingSucursal(sucursal);
      setFormData({
        name: sucursal.name,
        address: sucursal.address || "",
        phone: sucursal.phone || "",
        serie_factura: sucursal.serie_factura || "",
        serie_boleta: sucursal.serie_boleta || "",
        is_main: sucursal.is_main,
        is_active: sucursal.is_active !== undefined ? sucursal.is_active : true,
      });
    } else {
      setEditingSucursal(null);
      setFormData({
        name: "",
        address: "",
        phone: "",
        serie_factura: "",
        serie_boleta: "",
        is_main: sucursal?.is_main || false,
        is_active: true,
      });
    }
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    setSaving(true);
    try {
      if (editingSucursal) {
        await axios.put(`/api/v1/sucursales/${editingSucursal.id}`, formData);
        toast.success("Sucursal actualizada");
      } else {
        await axios.post("/api/v1/sucursales", formData);
        toast.success("Sucursal creada");
      }
      closeDrawer();
      await fetchSucursales();
    } catch (err: any) {
      if (err.response?.status === 422 && err.response?.data?.errors) {
        setFieldErrors(err.response.data.errors);
        toast.error("Revisa los errores en el formulario");
      } else {
        const errorMsg = err.response?.data?.message || "Error al guardar la sucursal";
        setFormError(errorMsg);
        toast.error(errorMsg);
      }
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!sucursalToDelete) return;
    setIsDeleting(true);
    try {
      await axios.delete(`/api/v1/sucursales/${sucursalToDelete.id}`);
      setSucursalToDelete(null);
      toast.success("Sucursal eliminada exitosamente");
      await fetchSucursales();
    } catch (err: any) {
      console.error("Error deleting sucursal", err);
      toast.error(err.response?.data?.message || "No se puede eliminar la sucursal");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <PageLayout
      title="Mis Sucursales"
      subtitle="Administra tus locales, puntos de venta y series SUNAT."
      actionButton={
        isOwner ? (
          <button
            onClick={() => openDrawer()}
            className="flex items-center gap-2 px-4 py-2 rounded-lg transition-opacity hover:opacity-90 w-full sm:w-auto justify-center shrink-0"
            style={{ background: C.cobalt, color: "#fff", fontSize: 13, fontWeight: 600 }}
          >
            <Plus className="w-4 h-4" /> Nueva Sucursal
          </button>
        ) : undefined
      }
    >
      {/* Desktop Table View */}
      <div className="hidden md:block rounded-xl overflow-auto bg-white shadow-sm border border-slate-200" style={{ maxHeight: 'calc(100vh - 200px)' }}>
        <table className="w-full text-left min-w-[700px] relative" style={{ borderCollapse: "collapse" }}>
          <thead className="sticky top-0 z-10 bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-4 sm:px-6 py-4 text-slate-500" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>Nombre / Local</th>
              <th className="px-4 sm:px-6 py-4 text-slate-500" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>Dirección</th>
              <th className="px-4 sm:px-6 py-4 text-slate-500" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>Series SUNAT</th>
              <th className="px-4 sm:px-6 py-4 text-slate-500 text-center" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>Estado</th>
              {isOwner && <th className="px-4 sm:px-6 py-4 text-slate-500 text-right" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>Acciones</th>}
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <tr key={i} className="border-b border-slate-100">
                  <td className="px-4 sm:px-6 py-4"><Skeleton className="h-4 w-32 sm:w-48 rounded" /></td>
                  <td className="px-4 sm:px-6 py-4"><Skeleton className="h-4 w-32 sm:w-48 rounded" /></td>
                  <td className="px-4 sm:px-6 py-4"><Skeleton className="h-4 w-16 sm:w-20 rounded" /></td>
                  <td className="px-4 sm:px-6 py-4 text-center"><Skeleton className="h-4 w-16 rounded mx-auto" /></td>
                  {isOwner && <td className="px-4 sm:px-6 py-4"><Skeleton className="h-4 w-12 sm:w-16 ml-auto rounded" /></td>}
                </tr>
              ))
            ) : sucursales.length === 0 ? (
                <tr>
                  <td colSpan={isOwner ? 5 : 4} className="p-0">
                    <EmptyState icon={Store} title="No hay sucursales" subtitle="Agrega tu primera sucursal para expandir tu negocio" />
                  </td>
                </tr>
              ) : (
              sucursales.map((sucursal) => (
                <tr key={sucursal.id} className="border-b border-slate-100 hover:bg-slate-50/80 transition-colors">
                  <td className="px-4 sm:px-6 py-4">
                    <div className="text-[13px] font-semibold text-slate-800 flex items-center gap-2">
                      {sucursal.name}
                      {sucursal.is_main && (
                        <span className="text-[10px] bg-sky-brand/10 text-sky-brand px-2 py-0.5 rounded-full font-bold uppercase">
                          Principal
                        </span>
                      )}
                    </div>
                    {sucursal.phone && (
                      <div className="text-xs text-slate-400 mt-1">{sucursal.phone}</div>
                    )}
                  </td>
                  <td className="px-4 sm:px-6 py-4">
                    <div className="text-[13px] text-slate-600">{sucursal.address || '-'}</div>
                  </td>
                  <td className="px-4 sm:px-6 py-4">
                    <div className="flex gap-2">
                      <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-medium border border-slate-200">
                        {sucursal.serie_factura}
                      </span>
                      <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-medium border border-slate-200">
                        {sucursal.serie_boleta}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-center">
                    <span className={`inline-flex items-center px-2 py-1 rounded text-[11px] font-medium capitalize ${
                      sucursal.is_active ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {sucursal.is_active ? 'Activo' : 'Inactivo'}
                    </span>
                  </td>
                  {isOwner && (
                    <td className="px-4 sm:px-6 py-4">
                      <div className="flex items-center justify-end gap-3">
                          <button onClick={() => openDrawer(sucursal)} className="p-2 text-slate-400 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors" title="Editar">
                            <Edit2 className="w-4 h-4" />
                          </button>
                          {!sucursal.is_main && (
                            <button onClick={() => setSucursalToDelete(sucursal)} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="Eliminar">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden flex flex-col gap-4 mb-4">
        {isLoading ? (
          Array.from({ length: 3 }).map((_, i) => (
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
          ) : sucursales.length === 0 ? (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200">
              <EmptyState icon={Store} title="No hay sucursales" subtitle="Agrega tu primera sucursal para expandir tu negocio" />
            </div>
          ) : (
          sucursales.map((sucursal) => (
            <div key={sucursal.id} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="pr-8">
                <div className="font-semibold text-[14px] text-slate-800 leading-tight mb-1 flex items-center gap-2">
                  {sucursal.name}
                  {sucursal.is_main && (
                    <span className="text-[10px] bg-sky-brand/10 text-sky-brand px-2 py-0.5 rounded-full font-bold uppercase">
                      Principal
                    </span>
                  )}
                </div>
                <div className="text-[13px] text-slate-500">{sucursal.address || '-'}</div>
              </div>
              <div className="mt-3 flex justify-between items-end">
                <div className="flex flex-col gap-1">
                  <span className={`inline-flex items-center px-2 py-0.5 w-fit rounded text-[11px] font-medium capitalize ${
                    sucursal.is_active ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {sucursal.is_active ? 'Activo' : 'Inactivo'}
                  </span>
                  <div className="flex gap-1 mt-1">
                    <span className="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] font-medium border border-slate-200">
                      {sucursal.serie_factura}
                    </span>
                    <span className="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] font-medium border border-slate-200">
                      {sucursal.serie_boleta}
                    </span>
                  </div>
                </div>
                
                {isOwner && (
                  <div className="flex gap-2 shrink-0 ml-3">
                    <button onClick={() => openDrawer(sucursal)} className="p-2 text-slate-400 hover:text-cyan-600 bg-slate-50 hover:bg-cyan-50 rounded-lg transition-colors">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    {!sucursal.is_main && (
                      <button onClick={() => setSucursalToDelete(sucursal)} className="p-2 text-slate-400 hover:text-red-500 bg-slate-50 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Delete Confirmation Modal */}
      <ConfirmDialog
        open={!!sucursalToDelete}
        onOpenChange={(open) => { if (!open) setSucursalToDelete(null); }}
        title="¿Eliminar sucursal?"
        description={`Esta acción eliminará permanentemente la sucursal ${sucursalToDelete?.name}. No podrás eliminarla si tiene ventas registradas.`}
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
                {editingSucursal ? "Editar Sucursal" : "Nueva Sucursal"}
              </h2>
              <button onClick={closeDrawer} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
              <form id="sucursal-form" onSubmit={handleSave} className="space-y-5">
                {formError && (
                  <div className="p-3 bg-rose-50 text-rose-700 rounded-lg text-sm flex items-center gap-2 border border-rose-100">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}
                
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5 uppercase tracking-wider">Nombre del Local <span className="text-rose-500">*</span></label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      setFieldErrors(prev => ({ ...prev, name: [] }));
                    }}
                    className={`w-full px-3 py-2.5 bg-white border ${fieldErrors.name ? 'border-rose-300 focus:ring-rose-500/50 focus:border-rose-500' : 'border-slate-200 focus:ring-cyan-500/50 focus:border-cyan-500'} rounded-lg text-[14px] text-slate-800 transition-shadow focus:outline-none focus:ring-2`}
                    placeholder="Ej. Tienda Miraflores"
                  />
                  {fieldErrors.name && <p className="mt-1 text-xs text-rose-500">{fieldErrors.name[0]}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5 uppercase tracking-wider">Dirección</label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => {
                      setFormData({ ...formData, address: e.target.value });
                      setFieldErrors(prev => ({ ...prev, address: [] }));
                    }}
                    className={`w-full px-3 py-2.5 bg-white border ${fieldErrors.address ? 'border-rose-300 focus:ring-rose-500/50 focus:border-rose-500' : 'border-slate-200 focus:ring-cyan-500/50 focus:border-cyan-500'} rounded-lg text-[14px] text-slate-800 transition-shadow focus:outline-none focus:ring-2`}
                    placeholder="Ej. Av. Larco 123"
                  />
                  {fieldErrors.address && <p className="mt-1 text-xs text-rose-500">{fieldErrors.address[0]}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5 uppercase tracking-wider">Teléfono</label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      setFieldErrors(prev => ({ ...prev, phone: [] }));
                    }}
                    className={`w-full px-3 py-2.5 bg-white border ${fieldErrors.phone ? 'border-rose-300 focus:ring-rose-500/50 focus:border-rose-500' : 'border-slate-200 focus:ring-cyan-500/50 focus:border-cyan-500'} rounded-lg text-[14px] text-slate-800 transition-shadow focus:outline-none focus:ring-2`}
                    placeholder="Ej. 01 234 5678"
                  />
                  {fieldErrors.phone && <p className="mt-1 text-xs text-rose-500">{fieldErrors.phone[0]}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5 uppercase tracking-wider">Serie Factura</label>
                    <input
                      type="text"
                      maxLength={4}
                      value={formData.serie_factura}
                      onChange={(e) => {
                        setFormData({ ...formData, serie_factura: e.target.value.toUpperCase() });
                        setFieldErrors(prev => ({ ...prev, serie_factura: [] }));
                      }}
                      className={`w-full px-3 py-2.5 bg-white border ${fieldErrors.serie_factura ? 'border-rose-300 focus:ring-rose-500/50 focus:border-rose-500' : 'border-slate-200 focus:ring-cyan-500/50 focus:border-cyan-500'} rounded-lg text-[14px] text-slate-800 transition-shadow focus:outline-none focus:ring-2`}
                      placeholder="Ej. F002"
                    />
                    {fieldErrors.serie_factura && <p className="mt-1 text-xs text-rose-500">{fieldErrors.serie_factura[0]}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5 uppercase tracking-wider">Serie Boleta</label>
                    <input
                      type="text"
                      maxLength={4}
                      value={formData.serie_boleta}
                      onChange={(e) => {
                        setFormData({ ...formData, serie_boleta: e.target.value.toUpperCase() });
                        setFieldErrors(prev => ({ ...prev, serie_boleta: [] }));
                      }}
                      className={`w-full px-3 py-2.5 bg-white border ${fieldErrors.serie_boleta ? 'border-rose-300 focus:ring-rose-500/50 focus:border-rose-500' : 'border-slate-200 focus:ring-cyan-500/50 focus:border-cyan-500'} rounded-lg text-[14px] text-slate-800 transition-shadow focus:outline-none focus:ring-2`}
                      placeholder="Ej. B002"
                    />
                    {fieldErrors.serie_boleta && <p className="mt-1 text-xs text-rose-500">{fieldErrors.serie_boleta[0]}</p>}
                  </div>
                </div>

                <div className="flex items-center gap-4 py-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.is_main}
                      onChange={(e) => setFormData({ ...formData, is_main: e.target.checked })}
                      className="w-4 h-4 text-cyan-600 bg-slate-100 border-slate-300 rounded focus:ring-cyan-500"
                    />
                    <span className="text-sm font-medium text-slate-700">Sucursal Principal</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.is_active}
                      onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                      className="w-4 h-4 text-cyan-600 bg-slate-100 border-slate-300 rounded focus:ring-cyan-500"
                    />
                    <span className="text-sm font-medium text-slate-700">Activa</span>
                  </label>
                </div>

                <div className="p-3 bg-amber-50 text-amber-700 rounded-lg text-[13px] border border-amber-100 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <p>Las series SUNAT deben ser únicas por sucursal. Asignar como principal reemplazará a la actual.</p>
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
                form="sucursal-form"
                disabled={saving || !formData.name}
                className="px-4 py-2 rounded-lg text-[13px] font-semibold text-white transition-opacity disabled:opacity-70 flex items-center gap-2"
                style={{ background: C.cobalt }}
              >
                {saving ? "Guardando..." : "Guardar Sucursal"}
              </button>
            </div>
          </div>
        </>
      )}
    </PageLayout>
  );
}
