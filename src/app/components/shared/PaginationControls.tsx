import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../ui/select";

export interface PaginationMeta {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  from: number | null;
  to: number | null;
}

interface PaginationControlsProps {
  meta: PaginationMeta | null;
  onPageChange: (page: number) => void;
  onPerPageChange: (perPage: number) => void;
}

export function PaginationControls({ meta, onPageChange, onPerPageChange }: PaginationControlsProps) {
  if (!meta) return null;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 bg-white border-t border-slate-100 gap-4">
      <div className="flex items-center text-sm text-slate-500">
        Mostrando <span className="font-medium text-slate-700 mx-1">{meta.from || 0}</span> a <span className="font-medium text-slate-700 mx-1">{meta.to || 0}</span> de <span className="font-medium text-slate-700 mx-1">{meta.total}</span> resultados
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <label className="text-sm text-slate-500 hidden sm:inline-block">Por página:</label>
          <Select 
            value={meta.per_page.toString()} 
            onValueChange={(val) => onPerPageChange(Number(val))}
          >
            <SelectTrigger className="w-[70px] h-9 px-3 rounded-lg border border-slate-200 text-sm outline-none focus:ring-1 focus:ring-cyan-500 text-slate-700 bg-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => onPageChange(meta.current_page - 1)}
            disabled={meta.current_page <= 1}
            className="p-1.5 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="text-sm text-slate-600 px-2 font-medium">
            {meta.current_page} / {meta.last_page}
          </div>

          <button
            onClick={() => onPageChange(meta.current_page + 1)}
            disabled={meta.current_page >= meta.last_page}
            className="p-1.5 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
