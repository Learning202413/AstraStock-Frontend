const fs = require('fs');

let content = fs.readFileSync('src/app/components/UsersTable.tsx', 'utf-8');

// Replace desktop buttons container and buttons
content = content.replace(
    /<div className="flex justify-end gap-1">[\s\S]*?<button\s*onClick=\{([^}]+)\}\s*className="text-slate-400 hover:text-cyan-600 transition-colors"\s*title="Editar"\s*>[\s\S]*?<Edit2 className="w-4 h-4" \/>[\s\S]*?<\/button>[\s\S]*?<button\s*onClick=\{([^}]+)\}\s*className="text-slate-400 hover:text-red-500 transition-colors"\s*title="Eliminar"\s*>[\s\S]*?<Trash2 className="w-4 h-4" \/>[\s\S]*?<\/button>[\s\S]*?<\/div>/g,
    `<div className="flex items-center justify-end gap-3">
                        <button onClick={$1} className="p-2 text-slate-400 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors" title="Editar">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button onClick={$2} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="Eliminar">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>`
);

fs.writeFileSync('src/app/components/UsersTable.tsx', content, 'utf-8');
