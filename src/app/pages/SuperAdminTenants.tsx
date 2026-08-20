import React, { useEffect, useState } from 'react';
import { useSuperAdminStore } from '../store/useSuperAdminStore';
import { PageLayout } from '../components/shared/PageLayout';
import { PaginationControls } from '../components/shared/PaginationControls';
import { Skeleton } from '../components/ui/skeleton';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Button } from '../components/ui/button';
import { Plus, X, Edit2, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

export default function SuperAdminTenants() {
    const { empresas, meta, setPage, setPerPage, isEmpresasLoaded, fetchEmpresas, toggleStatus, changePlan, createEmpresa, updateEmpresa, deleteEmpresa } = useSuperAdminStore();
    const [loading, setLoading] = useState(!isEmpresasLoaded);
    const [openModal, setOpenModal] = useState(false);
    const [formData, setFormData] = useState({ ruc: '', razon_social: '', name: '', email: '', password: '', plan_type: 'emprendedor' });
    const [creating, setCreating] = useState(false);
    const [editingEmpresa, setEditingEmpresa] = useState<any>(null);
    const [empresaToDelete, setEmpresaToDelete] = useState<any>(null);
    const [isDeleting, setIsDeleting] = useState(false);
    
    const openDrawer = (empresa?: any) => {
        if (empresa) {
            const owner = empresa.users?.find((u: any) => u.role === 'dueño' || u.role === 'admin') || {};
            setEditingEmpresa(empresa);
            setFormData({
                ruc: empresa.ruc || '',
                razon_social: empresa.razon_social || '',
                name: owner.name || '',
                email: owner.email || '',
                password: '',
                plan_type: empresa.plan_type || 'emprendedor'
            });
        } else {
            setEditingEmpresa(null);
            setFormData({ ruc: '', razon_social: '', name: '', email: '', password: '', plan_type: 'emprendedor' });
        }
        setOpenModal(true);
    };

    const handleDelete = async () => {
        if (!empresaToDelete) return;
        setIsDeleting(true);
        try {
            await deleteEmpresa(empresaToDelete.id);
            toast.success('Empresa eliminada correctamente');
            setEmpresaToDelete(null);
        } catch (e: any) {
            toast.error(e.response?.data?.message || 'Error al eliminar la empresa');
        } finally {
            setIsDeleting(false);
        }
    };

    useEffect(() => {
        if (!isEmpresasLoaded) {
            fetchEmpresas().then(() => setLoading(false));
        }
    }, [isEmpresasLoaded]);

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setCreating(true);
        try {
            if (editingEmpresa) {
                await updateEmpresa(editingEmpresa.id, formData);
                toast.success('Empresa actualizada correctamente');
            } else {
                await createEmpresa(formData);
                toast.success('Empresa creada correctamente');
            }
            setOpenModal(false);
            setFormData({ ruc: '', razon_social: '', name: '', email: '', password: '', plan_type: 'emprendedor' });
        } catch (e: any) {
            toast.error(e.response?.data?.message || 'Error al guardar la empresa');
        } finally {
            setCreating(false);
        }
    };

    return (
        <PageLayout 
            title="Gestión de Tenants"
            actionButton={
                <button onClick={() => openDrawer()} className="flex items-center gap-2 px-4 py-2 rounded-lg transition-opacity hover:opacity-90 w-full sm:w-auto justify-center shrink-0" style={{ background: '#1b3eb5', color: '#fff', fontSize: 13, fontWeight: 600 }}>
                    <Plus className="w-4 h-4" /> Añadir Empresa
                </button>
            }
        >
        {openModal && (
            <div className="fixed inset-0 z-[60] flex justify-end bg-slate-900/40 backdrop-blur-sm transition-opacity">
                <div className="w-full sm:w-[460px] md:w-[500px] h-full flex flex-col shadow-2xl bg-white sm:border-l border-slate-200 transition-transform">
                    <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 shrink-0">
                        <div>
                            <h3 className="text-slate-800" style={{ fontSize: 16, fontWeight: 600 }}>{editingEmpresa ? 'Editar Empresa' : 'Añadir Nueva Empresa'}</h3>
                            <p className="text-slate-500" style={{ fontSize: 13, marginTop: 2 }}>{editingEmpresa ? 'Modifica los datos del tenant.' : 'Crea un tenant manualmente.'}</p>
                        </div>
                        <button disabled={creating} onClick={() => setOpenModal(false)} className="p-2 -mr-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 rounded-lg transition-colors disabled:opacity-50 disabled:hover:bg-transparent">
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                    
                    <form id="tenant-form" onSubmit={handleSave} className="flex-1 overflow-y-auto p-6 flex flex-col gap-5">
                        <div>
                            <label className="block text-slate-600 mb-1.5" style={{ fontSize: 12, fontWeight: 500 }}>RUC</label>
                            <input value={formData.ruc} onChange={e => setFormData({...formData, ruc: e.target.value})} required className="w-full px-3 py-2.5 rounded-lg outline-none border transition-all bg-white border-slate-200 text-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500" style={{ fontSize: 14 }} placeholder="Ej: 20123456789" />
                        </div>
                        <div>
                            <label className="block text-slate-600 mb-1.5" style={{ fontSize: 12, fontWeight: 500 }}>Razón Social</label>
                            <input value={formData.razon_social} onChange={e => setFormData({...formData, razon_social: e.target.value})} required className="w-full px-3 py-2.5 rounded-lg outline-none border transition-all bg-white border-slate-200 text-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500" style={{ fontSize: 14 }} placeholder="Ej: Mi Empresa S.A.C." />
                        </div>
                        <div>
                            <label className="block text-slate-600 mb-1.5" style={{ fontSize: 12, fontWeight: 500 }}>Plan</label>
                            <Select value={formData.plan_type} onValueChange={(val) => setFormData({...formData, plan_type: val})}>
                                <SelectTrigger className="w-full h-[42px] bg-white border-slate-200 focus:ring-cyan-500 focus:border-cyan-500 text-slate-800 rounded-lg">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="emprendedor">Emprendedor</SelectItem>
                                    <SelectItem value="negocio">Negocio</SelectItem>
                                    <SelectItem value="corporativo">Corporativo</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        {true && (
                            <>
                        <div>
                            <label className="block text-slate-600 mb-1.5" style={{ fontSize: 12, fontWeight: 500 }}>Nombre del Dueño</label>
                            <input value={formData.name} disabled={!!editingEmpresa} onChange={e => setFormData({...formData, name: e.target.value})} required className="w-full px-3 py-2.5 rounded-lg outline-none border transition-all bg-white border-slate-200 text-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 disabled:bg-slate-100 disabled:text-slate-500" style={{ fontSize: 14 }} placeholder="Ej: Juan Pérez" />
                        </div>
                        <div>
                            <label className="block text-slate-600 mb-1.5" style={{ fontSize: 12, fontWeight: 500 }}>Correo del Dueño</label>
                            <input type="email" value={formData.email} disabled={!!editingEmpresa} onChange={e => setFormData({...formData, email: e.target.value})} required className="w-full px-3 py-2.5 rounded-lg outline-none border transition-all bg-white border-slate-200 text-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 disabled:bg-slate-100 disabled:text-slate-500" style={{ fontSize: 14 }} placeholder="Ej: juan@empresa.com" />
                        </div>
                        <div>
                            <label className="block text-slate-600 mb-1.5" style={{ fontSize: 12, fontWeight: 500 }}>Contraseña</label>
                            <input type="password" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} required={!editingEmpresa} disabled={!!editingEmpresa} minLength={6} className="w-full px-3 py-2.5 rounded-lg outline-none border transition-all bg-white border-slate-200 text-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 disabled:bg-slate-100 disabled:text-slate-500" style={{ fontSize: 14 }} placeholder={editingEmpresa ? 'Contraseña oculta (no editable)' : 'Mínimo 6 caracteres'} />
                        </div>
                            </>
                        )}

                        {/* Spacer so content doesn't hide behind sticky footer */}
                        <div className="h-6"></div>
                    </form>
                    
                    {/* Sticky footer for drawer */}
                    <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex justify-end gap-3 shrink-0">
                        <button type="button" disabled={creating} onClick={() => setOpenModal(false)} className="px-4 py-2.5 rounded-lg text-slate-600 hover:bg-slate-200 transition-colors w-full sm:w-auto disabled:opacity-50" style={{ fontSize: 14, fontWeight: 500 }}>Cancelar</button>
                        <button type="submit" form="tenant-form" disabled={creating} className="px-4 py-2.5 rounded-lg flex items-center justify-center transition-opacity hover:opacity-90 w-full sm:w-auto shadow-sm disabled:opacity-75" style={{ background: '#1b3eb5', color: '#fff', fontSize: 14, fontWeight: 600 }}>
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
                            <th className="px-4 sm:px-6 py-4 text-slate-500" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>Empresa / RUC</th>
                            <th className="px-4 sm:px-6 py-4 text-slate-500" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>Plan</th>
                            <th className="px-4 sm:px-6 py-4 text-slate-500 text-right" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>Estado</th>
                            <th className="px-4 sm:px-6 py-4 text-slate-500 text-right" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {loading ? (
                            Array.from({ length: 5 }).map((_, i) => (
                                <tr key={i} className="border-b border-slate-100">
                                    <td className="px-4 sm:px-6 py-4"><Skeleton className="h-4 w-12 sm:w-16 rounded" /></td>
                                    <td className="px-4 sm:px-6 py-4"><Skeleton className="h-4 w-32 sm:w-48 rounded" /></td>
                                    <td className="px-4 sm:px-6 py-4"><Skeleton className="h-4 w-24 sm:w-32 rounded" /></td>
                                    <td className="px-4 sm:px-6 py-4 flex justify-end"><Skeleton className="h-6 w-12 rounded-full" /></td>
                                </tr>
                            ))
                        ) : empresas.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="px-6 py-12 text-center text-slate-500 bg-slate-50/50">
                                    No se encontraron empresas registradas.
                                </td>
                            </tr>
                        ) : (
                            empresas.map(emp => (
                                <tr key={emp.id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-slate-900">{emp.id}</td>
                                    <td className="px-4 sm:px-6 py-4">
                                        <p className="font-semibold text-slate-800">{emp.razon_social}</p>
                                        <p className="text-xs text-slate-500">{emp.ruc}</p>
                                    </td>
                                    <td className="px-4 sm:px-6 py-4">
                                        <Select value={emp.plan_type || 'emprendedor'} onValueChange={(val) => changePlan(emp.id, val)}>
                                            <SelectTrigger className="w-[140px] bg-white h-9">
                                                <SelectValue placeholder="Plan" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="emprendedor">Emprendedor</SelectItem>
                                                <SelectItem value="negocio">Negocio</SelectItem>
                                                <SelectItem value="corporativo">Corporativo</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </td>
                                    <td className="px-4 sm:px-6 py-4">
                                        <div className="flex justify-end">
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input 
                                                    type="checkbox" 
                                                    className="sr-only peer" 
                                                    checked={emp.is_active} 
                                                    onChange={() => toggleStatus(emp.id)} 
                                                />
                                                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
                                            </label>
                                        </div>
                                    </td>
                                    <td className="px-4 sm:px-6 py-4">
                                        <div className="flex items-center justify-end gap-3">
                                            <button onClick={() => openDrawer(emp)} className="text-slate-400 hover:text-cyan-600 transition-colors">
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                            <button onClick={() => setEmpresaToDelete(emp)} className="text-slate-400 hover:text-red-500 transition-colors">
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
                                <div className="flex justify-between items-center mt-2 pt-3 border-t border-slate-100">
                                    <Skeleton className="h-8 w-28 rounded-lg" />
                                    <Skeleton className="h-6 w-11 rounded-full" />
                                </div>
                            </div>
                        ))
                    ) : empresas.length === 0 ? (
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center text-slate-500">
                            No se encontraron empresas registradas.
                        </div>
                    ) : (
                        empresas.map(emp => (
                            <div key={emp.id} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-3">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="font-bold text-slate-800 text-[15px]">{emp.razon_social}</p>
                                        <p className="text-sm text-slate-500">RUC: {emp.ruc}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                          <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-2 py-1 rounded-md">
                                              ID: {emp.id}
                                          </span>
                                          <button onClick={() => openDrawer(emp)} className="p-1.5 text-slate-400 hover:text-cyan-600 bg-slate-50 hover:bg-cyan-50 rounded-lg transition-colors">
                                              <Edit2 className="w-4 h-4" />
                                          </button>
                                          <button onClick={() => setEmpresaToDelete(emp)} className="p-1.5 text-slate-400 hover:text-red-500 bg-slate-50 hover:bg-red-50 rounded-lg transition-colors">
                                              <Trash2 className="w-4 h-4" />
                                          </button>
                                      </div>
                                </div>
                                <div className="flex justify-between items-center mt-2 pt-3 border-t border-slate-100">
                                    <Select value={emp.plan_type || 'emprendedor'} onValueChange={(val) => changePlan(emp.id, val)}>
                                        <SelectTrigger className="w-[140px] bg-slate-50 h-9">
                                            <SelectValue placeholder="Plan" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="emprendedor">Emprendedor</SelectItem>
                                            <SelectItem value="negocio">Negocio</SelectItem>
                                            <SelectItem value="corporativo">Corporativo</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input 
                                            type="checkbox" 
                                            className="sr-only peer" 
                                            checked={emp.is_active} 
                                            onChange={() => toggleStatus(emp.id)} 
                                        />
                                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
                                    </label>
                                </div>
                            </div>
                        ))
                    )}
                    
                </div>
        {/* Pagination Footer */}
        {meta && (
          <div className="mt-2 -mx-4">
            <PaginationControls
              meta={meta}
              onPageChange={setPage}
              onPerPageChange={(newPerPage) => {
                setPerPage(newPerPage);
              }}
            />
          </div>
        )}
        {/* Delete Confirmation Modal */}
        {empresaToDelete && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[70] flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <Trash2 className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">¿Eliminar empresa?</h3>
              <p className="text-sm text-slate-500 mb-6">
                Estás a punto de eliminar <strong>{empresaToDelete.razon_social}</strong>. Esta acción eliminará permanentemente la empresa, sus usuarios, productos y ventas, y no se puede deshacer.
              </p>
              <div className="flex gap-3 w-full">
                <button
                  disabled={isDeleting}
                  onClick={() => setEmpresaToDelete(null)}
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
