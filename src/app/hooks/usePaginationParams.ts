import { useSearchParams } from "react-router-dom";
import { useCallback, useMemo } from "react";

interface PaginationParams {
  page: number;
  perPage: number;
  searchQuery: string;
  stockStatus: string;
  setPage: (p: number) => void;
  setPerPage: (p: number) => void;
  setSearchQuery: (q: string) => void;
  setStockStatus: (s: string) => void;
  clearFilters: () => void;
  updateParams: (updates: Record<string, string | undefined>) => void;
}

export function usePaginationParams(): PaginationParams {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = parseInt(searchParams.get("page") || "1", 10);
  const perPage = parseInt(searchParams.get("perPage") || "10", 10);
  const searchQuery = searchParams.get("search") || "";
  const stockStatus = searchParams.get("stock") || "";

  const updateParams = useCallback((updates: Record<string, string | undefined>) => {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      Object.entries(updates).forEach(([key, value]) => {
        if (value === undefined || value === "") next.delete(key);
        else next.set(key, value);
      });
      return next;
    }, { replace: true });
  }, [setSearchParams]);

  const setPage = useCallback((p: number) => updateParams({ page: p.toString() }), [updateParams]);
  const setPerPage = useCallback((p: number) => updateParams({ perPage: p.toString(), page: "1" }), [updateParams]);
  const setSearchQuery = useCallback((q: string) => updateParams({ search: q, page: "1" }), [updateParams]);
  const setStockStatus = useCallback((s: string) => updateParams({ stock: s, page: "1" }), [updateParams]);
  const clearFilters = useCallback(() => updateParams({ search: "", stock: "", page: "1" }), [updateParams]);

  return useMemo(() => ({
    page, perPage, searchQuery, stockStatus,
    setPage, setPerPage, setSearchQuery, setStockStatus, clearFilters, updateParams
  }), [page, perPage, searchQuery, stockStatus, setPage, setPerPage, setSearchQuery, setStockStatus, clearFilters, updateParams]);
}
