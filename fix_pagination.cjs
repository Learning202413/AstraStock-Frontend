const fs = require('fs');

// 1. Update useSuperAdminStore.ts
let storeContent = fs.readFileSync('src/app/store/useSuperAdminStore.ts', 'utf-8');

// Add setPerPage to interface
storeContent = storeContent.replace(
    'setPage: (page: number) => void;',
    'setPage: (page: number) => void;\n    setPerPage: (perPage: number) => void;'
);

storeContent = storeContent.replace(
    'fetchEmpresas: (page?: number) => Promise<void>;',
    'fetchEmpresas: (page?: number, perPage?: number) => Promise<void>;'
);

// Add setPerPage implementation and update fetchEmpresas
storeContent = storeContent.replace(
    `setPage: (page) => {
        get().fetchEmpresas(page);
    },`,
    `setPage: (page) => {
        const meta = get().meta;
        get().fetchEmpresas(page, meta ? meta.per_page : 10);
    },
    setPerPage: (perPage) => {
        get().fetchEmpresas(1, perPage);
    },`
);

storeContent = storeContent.replace(
    `fetchEmpresas: async (page = 1) => {
        set({ loading: true });
        try {
            const { data } = await axios.get(\`/api/v1/superadmin/empresas?page=\${page}&per_page=10\`);`,
    `fetchEmpresas: async (page = 1, perPage = 10) => {
        set({ loading: true });
        try {
            const { data } = await axios.get(\`/api/v1/superadmin/empresas?page=\${page}&per_page=\${perPage}\`);`
);

// Add from and to to meta
storeContent = storeContent.replace(
    `meta: { current_page: number; last_page: number; total: number; per_page: number } | null;`,
    `meta: { current_page: number; last_page: number; total: number; per_page: number; from: number; to: number } | null;`
);

storeContent = storeContent.replace(
    `total: data.total,
                    per_page: data.per_page
                } : null,`,
    `total: data.total,
                    per_page: data.per_page,
                    from: data.from,
                    to: data.to
                } : null,`
);

fs.writeFileSync('src/app/store/useSuperAdminStore.ts', storeContent, 'utf-8');

// 2. Update SuperAdminTenants.tsx
let pageContent = fs.readFileSync('src/app/pages/SuperAdminTenants.tsx', 'utf-8');

// Add setPerPage destructuring
pageContent = pageContent.replace(
    "const { empresas, meta, setPage, isEmpresasLoaded, fetchEmpresas, toggleStatus, changePlan, createEmpresa, updateEmpresa, deleteEmpresa } = useSuperAdminStore();",
    "const { empresas, meta, setPage, setPerPage, isEmpresasLoaded, fetchEmpresas, toggleStatus, changePlan, createEmpresa, updateEmpresa, deleteEmpresa } = useSuperAdminStore();"
);

// Add onPerPageChange to PaginationControls
pageContent = pageContent.replace(
    /<PaginationControls meta=\{meta\} onPageChange=\{setPage\} \/>/g,
    '<PaginationControls meta={meta} onPageChange={setPage} onPerPageChange={setPerPage} />'
);

fs.writeFileSync('src/app/pages/SuperAdminTenants.tsx', pageContent, 'utf-8');
