const fs = require('fs');

let storeContent = fs.readFileSync('src/app/store/useSuperAdminStore.ts', 'utf-8');

storeContent = storeContent.replace(
    /get\(\)\.fetchEmpresas\(\);/g,
    `const meta = get().meta;
            if (meta) {
                get().fetchEmpresas(meta.current_page, meta.per_page);
            } else {
                get().fetchEmpresas();
            }`
);

fs.writeFileSync('src/app/store/useSuperAdminStore.ts', storeContent, 'utf-8');
