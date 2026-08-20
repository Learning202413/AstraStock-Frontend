const fs = require('fs');

let content = fs.readFileSync('src/app/pages/SuperAdminTenants.tsx', 'utf-8');

// Match table headers
content = content.replace(
    /<th className="px-4 sm:px-6 py-4">/g,
    '<th className="px-4 sm:px-6 py-4 text-slate-500" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>'
);

content = content.replace(
    /<th className="px-4 sm:px-6 py-4 text-right">/g,
    '<th className="px-4 sm:px-6 py-4 text-slate-500 text-right" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>'
);

content = content.replace(
    /<td className="px-6 py-4">/g,
    '<td className="px-4 sm:px-6 py-4">'
);

content = content.replace(
    /<td className="px-4 sm:px-6 py-4 font-medium text-slate-900">/g,
    '<td className="px-4 sm:px-6 py-4 text-slate-800" style={{ fontSize: 14, fontWeight: 500 }}>'
);

content = content.replace(
    /<td className="px-4 sm:px-6 py-4 text-slate-600">/g,
    '<td className="px-4 sm:px-6 py-4 text-slate-600" style={{ fontSize: 14 }}>'
);

// We should also replace the row styles to match exactly CategoriesTable.tsx
// CategoriesTable.tsx:
// <tr key={cat.id} className="hover:bg-slate-50 transition-colors border-b border-slate-100">

content = content.replace(
    /<tr key=\{emp\.id\} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">/g,
    '<tr key={emp.id} className="hover:bg-slate-50 transition-colors border-b border-slate-100">'
);

// Add loading skeletons as in CategoriesTable.tsx if they aren't matching
// Wait, I will just format the table tags nicely.

fs.writeFileSync('src/app/pages/SuperAdminTenants.tsx', content, 'utf-8');
