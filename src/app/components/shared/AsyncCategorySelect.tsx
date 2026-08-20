import * as React from "react"
import { Search, X } from "lucide-react"
import axios from "axios"
import { Category } from "../../store/useCategoryStore"

interface AsyncCategorySelectProps {
  value: number | null;
  onChange: (value: number | null) => void;
  error?: boolean;
}

export function AsyncCategorySelect({ value, onChange, error }: AsyncCategorySelectProps) {
  const [open, setOpen] = React.useState(false)
  const [categories, setCategories] = React.useState<Category[]>([])
  const [loading, setLoading] = React.useState(false)
  const [search, setSearch] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState<Category | null>(null)
  
  const containerRef = React.useRef<HTMLDivElement>(null)

  // Fetch initial category if value is provided but no full object
  React.useEffect(() => {
    if (value && !selectedCategory) {
      axios.get(`/api/v1/categories`, { params: { per_page: 100 } }).then(res => {
        const cat = res.data.data.find((c: Category) => c.id === value)
        if (cat) setSelectedCategory(cat)
      }).catch(console.error);
    }
  }, [value]);

  React.useEffect(() => {
    const timer = setTimeout(async () => {
      if (!search.trim()) {
        setCategories([]);
        return;
      }
      setLoading(true);
      try {
        const res = await axios.get('/api/v1/categories', {
          params: { search, per_page: 20 }
        });
        setCategories(res.data.data);
        setOpen(true);
      } catch (err) {
        console.error("Error fetching categories", err);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  // Handle outside click
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative w-full" ref={containerRef}>
      {selectedCategory ? (
        <div className={`flex items-center justify-between w-full h-11 px-3 py-2.5 rounded-lg border bg-slate-50 ${error ? 'border-red-400 ring-1 ring-red-400' : 'border-slate-200'}`}>
          <span className="text-slate-800 text-sm font-medium">{selectedCategory.name}</span>
          <button 
            type="button" 
            onClick={() => { 
              setSelectedCategory(null); 
              onChange(null); 
              setSearch(""); 
            }} 
            className="p-1 text-slate-400 hover:text-slate-600 rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Escribe para buscar categoría..." 
            value={search}
            onChange={e => { setSearch(e.target.value); setOpen(true); }}
            onFocus={() => { if(categories.length > 0) setOpen(true); }}
            className={`w-full pl-9 pr-3 py-2.5 h-11 rounded-lg outline-none border transition-all bg-white text-sm ${
              error ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 text-red-900' : 'border-slate-200 text-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500'
            }`} 
          />
          {loading && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
          )}
        </div>
      )}

      {open && !selectedCategory && search.trim().length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-xl z-50 overflow-hidden max-h-64 overflow-y-auto">
          {loading && categories.length === 0 ? (
            <div className="p-3 text-center text-xs text-slate-500">Buscando...</div>
          ) : categories.length === 0 ? (
            <div className="p-3 text-center text-xs text-slate-500">No se encontraron categorías</div>
          ) : (
            <div className="flex flex-col">
              {categories.map(c => (
                <button 
                  key={c.id} 
                  type="button"
                  onClick={() => {
                    setSelectedCategory(c);
                    onChange(c.id);
                    setOpen(false);
                  }}
                  className="flex items-center justify-between px-3 py-2.5 hover:bg-slate-50 border-b border-slate-50 last:border-0 text-left transition-colors"
                >
                  <span className="text-sm font-medium text-slate-700">{c.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
