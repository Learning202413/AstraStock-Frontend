const fs = require('fs');

let content = fs.readFileSync('src/app/pages/SuperAdminTenants.tsx', 'utf-8');

// Update Table container
content = content.replace(
    '<div className="hidden md:block bg-white border rounded-xl overflow-x-auto shadow-sm border-slate-200">',
    '<div className="hidden md:block rounded-xl overflow-auto bg-white shadow-sm border border-slate-200" style={{ maxHeight: \'calc(100vh - 240px)\' }}>'
);

content = content.replace(
    '<table className="w-full text-sm text-left whitespace-nowrap min-w-[600px]">',
    '<table className="w-full text-left min-w-[600px] relative" style={{ borderCollapse: "collapse" }}>'
);

content = content.replace(
    '<thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-medium">',
    '<thead className="sticky top-0 z-10 bg-slate-50 border-b border-slate-200">'
);

// Remove desktop pagination
content = content.replace(
    /\{\/\* Pagination Desktop \*\/\}\s*\{meta && \(\s*<div className="hidden md:block bg-white border border-t-0 border-slate-200 rounded-b-xl shadow-sm">\s*<PaginationControls meta=\{meta\} onPageChange=\{setPage\} onPerPageChange=\{setPerPage\} \/>\s*<\/div>\s*\)\}/g,
    ''
);

// Remove mobile pagination
content = content.replace(
    /\{\/\* Pagination Mobile \*\/\}\s*\{meta && \(\s*<div className="bg-white border border-slate-200 rounded-xl shadow-sm">\s*<PaginationControls meta=\{meta\} onPageChange=\{setPage\} onPerPageChange=\{setPerPage\} \/>\s*<\/div>\s*\)\}/g,
    ''
);

// Add the single combined pagination footer
content = content.replace(
    /(\s*)({\/\* Delete Confirmation Modal \*\/})/,
    `$1{/* Pagination Footer */}
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
        )}$1$2`
);

fs.writeFileSync('src/app/pages/SuperAdminTenants.tsx', content, 'utf-8');
