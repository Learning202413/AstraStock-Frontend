import React from "react";
import { Search, X } from "lucide-react";

interface SearchFilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onClear: () => void;
  placeholder?: string;
  children?: React.ReactNode;
}

export function SearchFilterBar({
  searchQuery,
  onSearchChange,
  onClear,
  placeholder = "Buscar...",
  children,
}: SearchFilterBarProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          placeholder={placeholder}
          value={searchQuery}
          onChange={e => onSearchChange(e.target.value)}
          className="w-full pl-9 pr-9 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 bg-white focus:border-cobalt focus:ring-1 focus:ring-cobalt outline-none transition-all"
        />
        {searchQuery && (
          <button
            onClick={onClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
      {children}
    </div>
  );
}
