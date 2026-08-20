import React, { useEffect, useState } from 'react';
import { useSuperAdminStore } from '../store/useSuperAdminStore';
import { PageLayout } from '../components/shared/PageLayout';
import { Skeleton } from '../components/ui/skeleton';
import { Plus, X, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

export default function SuperAdminAdmins() {
    const { admins, isAdminsLoaded, fetchAdmins, createAdmin, deleteAdmin } = useSuperAdminStore();
    const [loading, setLoading] = useState(!isAdminsLoaded);
    const [openModal, setOpenModal] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [creating, setCreating] = useState(false);
    const [adminToDelete, setAdminToDelete] = useState<any>(null);
    const [isDeleting, setIsDeleting] = useState(false);
    
    const openDrawer = () => {
        setFormData({ name: '', email: '', password: '' });
        setOpenModal(true);
    };

    const handleDelete = async () => {
        if (!adminToDelete) return;
        setIsDeleting(true);
        try {
            await deleteAdmin(adminToDelete.id);
            toast.success('Administrador eliminado correctamente');
            setAdminToDelete(null);
        } catch (e: any) {
            toast.error(e.response?.data?.message || 'Error al eliminar el administrador');
        } finally {
            setIsDeleting(false);
        }
    };

    useEffect(() => {
        if (!isAdminsLoaded) {
            fetchAdmins().then(() => setLoading(false));
        }
    }, [isAdminsLoaded]);

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setCreating(true);
        try {
            await createAdmin(formData);
            toast.success('Administrador creado correctamente');
            setOpenModal(false);
            setFormData({ name: '', email: '', password: '' });
        } catch (e: any) {
            toast.error(e.response?.data?.message || 'Error al guardar el administrador');
        } finally {
            setCreating(false);
        }
    };

    return (
        <PageLayout 
            title="Administradores"
            actionButton={
                <button onClick={() => openDrawer()} className="flex items-center gap-2 px-4 py-2 rounded-lg transition-opacity hover:opacity-90 w-full sm:w-auto justify-center shrink-0" style={{ background: '#1b3eb5', color: '#fff', fontSize: 13, fontWeight: 600 }}>
                    <Plus className="w-4 h-4" /> Añadir Administrador
                </button>
            }
        >
        {openModal && (
            <div className="fixed inset-0 z-[60] flex justify-end bg-slate-900/40 backdrop-blur-sm transition-opacity">
                <div className="w-full sm:w-[460px] md:w-[500px] h-full flex flex-col shadow-2xl bg-white sm:border-l border-slate-200 transition-transform">
                    <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 shrink-0">
                        <div>
                            <h3 className="text-slate-800" style={{ fontSize: 16, fontWeight: 600 }}>Añadir Nuevo Administrador</h3>
                            <p className="text-slate-500" style={{ fontSize: 13, marginTop: 2 }}>Crea un administrador con acceso global.</p>
                        </div>
                        <button disabled={creating} onClick={() => setOpenModal(false)} className="p-2 -mr-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 rounded-lg transition-colors disabled:opacity-50 disabled:hover:bg-transparent">
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                    
                    <form id="admin-form" onSubmit={handleSave} className="flex-1 overflow-y-auto p-6 flex flex-col gap-5">
                        <div>
                            <label className="block text-slate-600 mb-1.5" style={{ fontSize: 12, fontWeight: 500 }}>Nombre Completo</label>
                            <input value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required className="w-full px-3 py-2.5 rounded-lg outline-none border transition-all bg-white border-slate-200 text-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500" style={{ fontSize: 14 }} placeholder="Ej: Juan Pérez" />
                        </div>
                        <div>
                            <label className="block text-slate-600 mb-1.5" style={{ fontSize: 12, fontWeight: 500 }}>Correo Electrónico</label>
                            <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required className="w-full px-3 py-2.5 rounded-lg outline-none border transition-all bg-white border-slate-200 text-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500" style={{ fontSize: 14 }} placeholder="Ej: juan@empresa.com" />
                        </div>
                        <div>
                            <label className="block text-slate-600 mb-1.5" style={{ fontSize: 12, fontWeight: 500 }}>Contraseña</label>
                            <input type="password" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} required minLength={6} className="w-full px-3 py-2.5 rounded-lg outline-none border transition-all bg-white border-slate-200 text-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500" style={{ fontSize: 14 }} placeholder="Mínimo 6 caracteres" />
                        </div>

                        {/* Spacer so content doesn't hide behind sticky footer */}
                        <div className="h-6"></div>
                    </form>
                    
                    {/* Sticky footer for drawer */}
                    <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex justify-end gap-3 shrink-0">
                        <button type="button" disabled={creating} onClick={() => setOpenModal(false)} className="px-4 py-2.5 rounded-lg text-slate-600 hover:bg-slate-200 transition-colors w-full sm:w-auto disabled:opacity-50" style={{ fontSize: 14, fontWeight: 500 }}>Cancelar</button>
                        <button type="submit" form="admin-form" disabled={creating} className="px-4 py-2.5 rounded-lg flex items-center justify-center transition-opacity hover:opacity-90 w-full sm:w-auto shadow-sm disabled:opacity-75" style={{ background: '#1b3eb5', color: '#fff', fontSize: 14, fontWeight: 600 }}>
                            {creating ? 'Guardando...' : 'Guardar'}
                        </button>
                    </div>
                </div>
            </div>
        )}

            <div className="hidden md:block rounded-xl overflow-auto bg-white shadow-sm border border-slate-200" style={{ maxHeight: 'calc(100vh - 240px)' }}>
                <table className="w-full text-left min-w-[600px] relative" style={{ borderCollapse: "collapse" }}>
                    <thead className="sticky top-0 z-10 bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th className="px-4 sm:px-6 py-4 text-slate-500" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>ID</th>
                            <th className="px-4 sm:px-6 py-4 text-slate-500" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>Nombre / Correo</th>
                            <th className="px-4 sm:px-6 py-4 text-slate-500 text-right" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {loading ? (
                            Array.from({ length: 5 }).map((_, i) => (
                                <tr key={i} className="border-b border-slate-100">
                                    <td className="px-4 sm:px-6 py-4"><Skeleton className="h-4 w-12 sm:w-16 rounded" /></td>
                                    <td className="px-4 sm:px-6 py-4"><Skeleton className="h-4 w-32 sm:w-48 rounded" /></td>
                                    <td className="px-4 sm:px-6 py-4 flex justify-end"><Skeleton className="h-6 w-12 rounded-full" /></td>
                                </tr>
                            ))
                        ) : admins.length === 0 ? (
                            <tr>
                                <td colSpan={3} className="px-6 py-12 text-center text-slate-500 bg-slate-50/50">
                                    No se encontraron administradores registrados.
                                </td>
                            </tr>
                        ) : (
                            admins.map(admin => (
                                <tr key={admin.id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-slate-900">{admin.id}</td>
                                    <td className="px-4 sm:px-6 py-4">
                                        <p className="font-semibold text-slate-800">{admin.name}</p>
                                        <p className="text-xs text-slate-500">{admin.email}</p>
                                    </td>
                                    <td className="px-4 sm:px-6 py-4">
                                        <div className="flex items-center justify-end gap-3">
                                            <button onClick={() => setAdminToDelete(admin)} className="text-slate-400 hover:text-red-500 transition-colors">
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

                <div className="md:hidden flex flex-col gap-4">
                    {loading ? (
                        Array.from({ length: 5 }).map((_, i) => (
                            <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-3">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <Skeleton className="h-5 w-40 mb-1 rounded" />
                                        <Skeleton className="h-4 w-24 rounded" />
                                    </div>
                                    <Skeleton className="h-5 w-8 rounded" />
                                </div>
                            </div>
                        ))
                    ) : admins.length === 0 ? (
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center text-slate-500">
                            No se encontraron administradores registrados.
                        </div>
                    ) : (
                        admins.map(admin => (
                            <div key={admin.id} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-3">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="font-bold text-slate-800 text-[15px]">{admin.name}</p>
                                        <p className="text-sm text-slate-500">{admin.email}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                          <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-2 py-1 rounded-md">
                                              ID: {admin.id}
                                          </span>
                                          <button onClick={() => setAdminToDelete(admin)} className="p-1.5 text-slate-400 hover:text-red-500 bg-slate-50 hover:bg-red-50 rounded-lg transition-colors">
                                              <Trash2 className="w-4 h-4" />
                                          </button>
                                      </div>
                                </div>
                            </div>
                        ))
                    )}
                    
                </div>

        {/* Delete Confirmation Modal */}
        {adminToDelete && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[70] flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <Trash2 className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">¿Eliminar administrador?</h3>
              <p className="text-sm text-slate-500 mb-6">
                Estás a punto de eliminar a <strong>{adminToDelete.name}</strong>. Esta acción eliminará permanentemente su acceso global y no se puede deshacer.
              </p>
              <div className="flex gap-3 w-full">
                <button
                  disabled={isDeleting}
                  onClick={() => setAdminToDelete(null)}
                  className="flex-1 px-4 py-2.5 rounded-xl font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors disabled:opacity-50"
                >
                  Cancelar
                </button>
                <button
                  disabled={isDeleting}
                  onClick={handleDelete}
                  className="flex-1 px-4 py-2.5 rounded-xl font-medium text-white bg-red-600 hover:bg-red-700 transition-colors flex items-center justify-center disabled:opacity-75"
                >
                  {isDeleting ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    "Eliminar"
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        </PageLayout>
    );
}
