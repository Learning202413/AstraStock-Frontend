const fs = require('fs');

// 1. Update useSuperAdminStore.ts
let storeContent = fs.readFileSync('src/app/store/useSuperAdminStore.ts', 'utf-8');

storeContent = storeContent.replace(
    'empresas: Company[];',
    `empresas: Company[];
    meta: { current_page: number; last_page: number; total: number; per_page: number } | null;`
);

storeContent = storeContent.replace(
    'isEmpresasLoaded: boolean;',
    `isEmpresasLoaded: boolean;
    setPage: (page: number) => void;`
);

storeContent = storeContent.replace(
    'fetchEmpresas: () => Promise<void>;',
    'fetchEmpresas: (page?: number) => Promise<void>;'
);

storeContent = storeContent.replace(
    'empresas: [],',
    `empresas: [],
    meta: null,`
);

storeContent = storeContent.replace(
    `fetchEmpresas: async () => {
        set({ loading: true });
        try {
            const { data } = await axios.get('/api/v1/superadmin/empresas');
            set({ empresas: data, loading: false, isEmpresasLoaded: true });
        } catch (e) {
            console.error(e);
            set({ loading: false });
        }
    },`,
    `setPage: (page) => {
        get().fetchEmpresas(page);
    },
    fetchEmpresas: async (page = 1) => {
        set({ loading: true });
        try {
            const { data } = await axios.get(\`/api/v1/superadmin/empresas?page=\${page}&per_page=10\`);
            // Assuming data is paginated from backend
            set({ 
                empresas: data.data || data, 
                meta: data.current_page ? {
                    current_page: data.current_page,
                    last_page: data.last_page,
                    total: data.total,
                    per_page: data.per_page
                } : null,
                loading: false, 
                isEmpresasLoaded: true 
            });
        } catch (e) {
            console.error(e);
            set({ loading: false });
        }
    },`
);

fs.writeFileSync('src/app/store/useSuperAdminStore.ts', storeContent, 'utf-8');

// 2. Update SuperAdminTenants.tsx
let pageContent = fs.readFileSync('src/app/pages/SuperAdminTenants.tsx', 'utf-8');

// Add PaginationControls import
if (!pageContent.includes('PaginationControls')) {
    pageContent = pageContent.replace(
        "import { PageLayout } from '../components/shared/PageLayout';",
        "import { PageLayout } from '../components/shared/PageLayout';\nimport { PaginationControls } from '../components/shared/PaginationControls';"
    );
}

// Add state destructured
pageContent = pageContent.replace(
    "const { empresas, isEmpresasLoaded, fetchEmpresas, toggleStatus, changePlan, createEmpresa, updateEmpresa, deleteEmpresa } = useSuperAdminStore();",
    "const { empresas, meta, setPage, isEmpresasLoaded, fetchEmpresas, toggleStatus, changePlan, createEmpresa, updateEmpresa, deleteEmpresa } = useSuperAdminStore();"
);

// Show owner fields when editing
pageContent = pageContent.replace(
    "{!editingEmpresa && (",
    "{true && ("
);

// Add users info to table 
pageContent = pageContent.replace(
    `const openDrawer = (empresa?: any) => {
        if (empresa) {
            setEditingEmpresa(empresa);
            setFormData({
                ruc: empresa.ruc || '',
                razon_social: empresa.razon_social || '',
                name: '', // We don't edit the owner name here to keep it simple, or leave blank
                email: '',
                password: '',
                plan_type: empresa.plan_type || 'emprendedor'
            });`,
    `const openDrawer = (empresa?: any) => {
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
            });`
);

// Disable name/email/password fields when editing so they can only "view" them
pageContent = pageContent.replace(
    `<input value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required className="w-full px-3 py-2.5 rounded-lg outline-none border transition-all bg-white border-slate-200 text-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500" style={{ fontSize: 14 }} placeholder="Ej: Juan Pérez" />`,
    `<input value={formData.name} disabled={!!editingEmpresa} onChange={e => setFormData({...formData, name: e.target.value})} required className="w-full px-3 py-2.5 rounded-lg outline-none border transition-all bg-white border-slate-200 text-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 disabled:bg-slate-100 disabled:text-slate-500" style={{ fontSize: 14 }} placeholder="Ej: Juan Pérez" />`
);

pageContent = pageContent.replace(
    `<input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required className="w-full px-3 py-2.5 rounded-lg outline-none border transition-all bg-white border-slate-200 text-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500" style={{ fontSize: 14 }} placeholder="Ej: juan@empresa.com" />`,
    `<input type="email" value={formData.email} disabled={!!editingEmpresa} onChange={e => setFormData({...formData, email: e.target.value})} required className="w-full px-3 py-2.5 rounded-lg outline-none border transition-all bg-white border-slate-200 text-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 disabled:bg-slate-100 disabled:text-slate-500" style={{ fontSize: 14 }} placeholder="Ej: juan@empresa.com" />`
);

// We need to handle password correctly - maybe don't require it if editing, or hide it
pageContent = pageContent.replace(
    `<input type="password" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} required minLength={6} className="w-full px-3 py-2.5 rounded-lg outline-none border transition-all bg-white border-slate-200 text-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500" style={{ fontSize: 14 }} placeholder="Mínimo 6 caracteres" />`,
    `<input type="password" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} required={!editingEmpresa} disabled={!!editingEmpresa} minLength={6} className="w-full px-3 py-2.5 rounded-lg outline-none border transition-all bg-white border-slate-200 text-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 disabled:bg-slate-100 disabled:text-slate-500" style={{ fontSize: 14 }} placeholder={editingEmpresa ? 'Contraseña oculta (no editable)' : 'Mínimo 6 caracteres'} />`
);


// Add PaginationControls to desktop
pageContent = pageContent.replace(
    `</table>
                </div>

                <div className="md:hidden flex flex-col gap-4">`,
    `</table>
                </div>

                {/* Pagination Desktop */}
                {meta && (
                    <div className="hidden md:block bg-white border border-t-0 border-slate-200 rounded-b-xl shadow-sm">
                        <PaginationControls meta={meta} onPageChange={setPage} />
                    </div>
                )}

                <div className="md:hidden flex flex-col gap-4">`
);

// Add PaginationControls to mobile
pageContent = pageContent.replace(
    `))
                    )}
                </div>`,
    `))
                    )}
                    {/* Pagination Mobile */}
                    {meta && (
                        <div className="bg-white border border-slate-200 rounded-xl shadow-sm">
                            <PaginationControls meta={meta} onPageChange={setPage} />
                        </div>
                    )}
                </div>`
);


fs.writeFileSync('src/app/pages/SuperAdminTenants.tsx', pageContent, 'utf-8');
