const fs = require('fs');

let content = fs.readFileSync('src/app/pages/SuperAdminTenants.tsx', 'utf-8');

// 1. Update imports
content = content.replace(
    "import { Plus, X } from 'lucide-react';",
    "import { Plus, X, Edit2, Trash2 } from 'lucide-react';"
);

// 2. Update state and store destructuring
content = content.replace(
    "const { empresas, isEmpresasLoaded, fetchEmpresas, toggleStatus, changePlan, createEmpresa } = useSuperAdminStore();",
    "const { empresas, isEmpresasLoaded, fetchEmpresas, toggleStatus, changePlan, createEmpresa, updateEmpresa, deleteEmpresa } = useSuperAdminStore();"
);

content = content.replace(
    "const [creating, setCreating] = useState(false);",
    `const [creating, setCreating] = useState(false);
    const [editingEmpresa, setEditingEmpresa] = useState<any>(null);
    const [empresaToDelete, setEmpresaToDelete] = useState<any>(null);
    const [isDeleting, setIsDeleting] = useState(false);
    
    const openDrawer = (empresa?: any) => {
        if (empresa) {
            setEditingEmpresa(empresa);
            setFormData({
                ruc: empresa.ruc || '',
                razon_social: empresa.razon_social || '',
                name: '', // We don't edit the owner name here to keep it simple, or leave blank
                email: '',
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
    };`
);

// 3. Update action button onClick
content = content.replace(
    "onClick={() => setOpenModal(true)}",
    "onClick={() => openDrawer()}"
);

// 4. Update form submit (handleCreate -> handleSave)
content = content.replace(
    `    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        setCreating(true);
        try {
            await createEmpresa(formData);
            toast.success('Empresa creada correctamente');
            setOpenModal(false);
            setFormData({ ruc: '', razon_social: '', name: '', email: '', password: '', plan_type: 'emprendedor' });
        } catch (e: any) {
            toast.error(e.response?.data?.message || 'Error al crear la empresa');
        } finally {
            setCreating(false);
        }
    };`,
    `    const handleSave = async (e: React.FormEvent) => {
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
    };`
);

content = content.replace(
    '<form id="tenant-form" onSubmit={handleCreate}',
    '<form id="tenant-form" onSubmit={handleSave}'
);

// Update drawer title
content = content.replace(
    `<h3 className="text-slate-800" style={{ fontSize: 16, fontWeight: 600 }}>Añadir Nueva Empresa</h3>
                            <p className="text-slate-500" style={{ fontSize: 13, marginTop: 2 }}>Crea un tenant manualmente.</p>`,
    `<h3 className="text-slate-800" style={{ fontSize: 16, fontWeight: 600 }}>{editingEmpresa ? 'Editar Empresa' : 'Añadir Nueva Empresa'}</h3>
                            <p className="text-slate-500" style={{ fontSize: 13, marginTop: 2 }}>{editingEmpresa ? 'Modifica los datos del tenant.' : 'Crea un tenant manualmente.'}</p>`
);

// Hide owner fields when editing
content = content.replace(
    `<div>
                            <label className="block text-slate-600 mb-1.5" style={{ fontSize: 12, fontWeight: 500 }}>Nombre del Dueño</label>`,
    `{!editingEmpresa && (
                            <>
                        <div>
                            <label className="block text-slate-600 mb-1.5" style={{ fontSize: 12, fontWeight: 500 }}>Nombre del Dueño</label>`
);

content = content.replace(
    `<input type="password" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} required minLength={6} className="w-full px-3 py-2.5 rounded-lg outline-none border transition-all bg-white border-slate-200 text-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500" style={{ fontSize: 14 }} placeholder="Mínimo 6 caracteres" />
                        </div>`,
    `<input type="password" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} required minLength={6} className="w-full px-3 py-2.5 rounded-lg outline-none border transition-all bg-white border-slate-200 text-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500" style={{ fontSize: 14 }} placeholder="Mínimo 6 caracteres" />
                        </div>
                            </>
                        )}`
);

// Add Edit and Delete buttons to desktop table
content = content.replace(
    `<th className="px-4 sm:px-6 py-4 text-right">Estado</th>
                        </tr>`,
    `<th className="px-4 sm:px-6 py-4 text-right">Estado</th>
                            <th className="px-4 sm:px-6 py-4 text-right">Acciones</th>
                        </tr>`
);

content = content.replace(
    `peer-checked:bg-cyan-500"></div>
                                            </label>
                                        </div>
                                    </td>
                                </tr>`,
    `peer-checked:bg-cyan-500"></div>
                                            </label>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-3">
                                            <button onClick={() => openDrawer(emp)} className="text-slate-400 hover:text-cyan-600 transition-colors">
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                            <button onClick={() => setEmpresaToDelete(emp)} className="text-slate-400 hover:text-red-500 transition-colors">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>`
);

// Add Edit and Delete buttons to mobile cards
content = content.replace(
    `<span className="text-xs font-semibold text-slate-400 bg-slate-100 px-2 py-1 rounded-md">
                                        ID: {emp.id}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center mt-2 pt-3 border-t border-slate-100">`,
    `<div className="flex items-center gap-2">
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
                                <div className="flex justify-between items-center mt-2 pt-3 border-t border-slate-100">`
);

// Add Delete Modal at the end
content = content.replace(
    `        </PageLayout>
    );
}`,
    `        {/* Delete Confirmation Modal */}
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
}`
);

fs.writeFileSync('src/app/pages/SuperAdminTenants.tsx', content, 'utf-8');
