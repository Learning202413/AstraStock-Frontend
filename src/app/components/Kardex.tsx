import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { Plus, ArrowDown, ArrowUp, ArrowRightLeft, Search, PackageOpen, X, ListFilter, Camera } from "lucide-react";
import { PageLayout } from "./shared/PageLayout";
import CameraScannerModal from "./CameraScannerModal";
import { PaginationControls, PaginationMeta } from "./shared/PaginationControls";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { DatePicker } from "./ui/date-picker";
import { format } from "date-fns";
import { useKardexStore } from "../store/useKardexStore";
import { Skeleton } from "./ui/skeleton";
import { EmptyState } from './shared/EmptyState';

interface Product {
  id: number;
  name: string;
  sku: string;
  stock: number;
  is_perishable?: boolean;
}

interface Movement {
  id: number;
  product_id: number;
  type: "in" | "out" | "adjust";
  quantity: number;
  reference: string | null;
  notes: string | null;
  created_at: string;
  product: Product;
}

export default function Kardex() {
  const store = useKardexStore();
  const [loading, setLoading] = useState(!store.isLoaded);
  const [searchParams, setSearchParams] = useSearchParams();

  const page = parseInt(searchParams.get("page") || "1", 10);
  const perPage = parseInt(searchParams.get("perPage") || "10", 10);
  const searchTerm = searchParams.get("search") || "";
  const typeFilter = searchParams.get("type") || "";
  const startDateStr = searchParams.get("startDate");
  const endDateStr = searchParams.get("endDate");
  const startDate = startDateStr ? new Date(startDateStr + "T00:00:00") : undefined;
  const endDate = endDateStr ? new Date(endDateStr + "T00:00:00") : undefined;

  const updateParams = (updates: Record<string, string | undefined>) => {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      Object.entries(updates).forEach(([key, value]) => {
        if (value === undefined || value === "") next.delete(key);
        else next.set(key, value);
      });
      return next;
    }, { replace: true });
  };

  const setPage = (p: number) => updateParams({ page: p.toString() });
  const setPerPage = (p: number) => updateParams({ perPage: p.toString(), page: "1" });
  const setSearchTerm = (s: string) => updateParams({ search: s, page: "1" });
  const setTypeFilter = (t: string) => updateParams({ type: t, page: "1" });
  const setStartDate = (d: Date | undefined) => updateParams({ startDate: d ? format(d, 'yyyy-MM-dd') : "", page: "1" });
  const setEndDate = (d: Date | undefined) => updateParams({ endDate: d ? format(d, 'yyyy-MM-dd') : "", page: "1" });
  const clearFilters = () => updateParams({ search: "", type: "", startDate: "", endDate: "", page: "1" });

  const { 
    isOpen: modalOpen, 
    formData, 
    selectedProduct, 
    openModal, 
    closeModal, 
    setFormData, 
    setSelectedProduct, 
    resetForm,
    movements,
    isLoaded,
    paginationMeta,
    setMovements,
    setIsLoaded,
    setPaginationMeta
  } = store;

  // Form
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState("");

  // Async Combobox
  const [comboSearch, setComboSearch] = useState("");
  const [comboResults, setComboResults] = useState<Product[]>([]);
  const [isSearchingCombo, setIsSearchingCombo] = useState(false);
  const [comboOpen, setComboOpen] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!comboSearch.trim()) {
        setComboResults([]);
        return;
      }
      try {
        setIsSearchingCombo(true);
        const res = await axios.get(`/api/v1/products/search?q=${encodeURIComponent(comboSearch)}&limit=5`);
        setComboResults(res.data?.data || []);
        setComboOpen(true);
      } catch (e) {
        console.error("Error buscando productos", e);
      } finally {
        setIsSearchingCombo(false);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [comboSearch]);

  const fetchData = async (p: number = page, search: string = searchTerm) => {
    try {
      if (!isLoaded) setLoading(true);
      const params = new URLSearchParams({
        page: p.toString(),
        per_page: perPage.toString(),
        search: search,
        type: typeFilter,
        start_date: startDate ? format(startDate, 'yyyy-MM-dd') : "",
        end_date: endDate ? format(endDate, 'yyyy-MM-dd') : ""
      });
      const res = await axios.get(`/api/v1/movements?${params.toString()}`);
      const data = res.data;
      if (data.data && data.current_page) {
        setMovements(data.data);
        setPaginationMeta({
          current_page: data.current_page,
          last_page: data.last_page,
          per_page: data.per_page,
          total: data.total,
          from: data.from,
          to: data.to
        });
      } else {
        setMovements(Array.isArray(data.data) ? data.data : (Array.isArray(data) ? data : []));
        setPaginationMeta(null);
      }
      setIsLoaded(true);
    } catch (e) {
      console.error(e);
      setMovements([]);
      setPaginationMeta(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      !isLoaded || 
      page !== (paginationMeta?.current_page || 1) ||
      perPage !== (paginationMeta?.per_page || 10)
    ) {
      fetchData(page, searchTerm);
    }
  }, [page, perPage]);

  // WebSockets are now handled globally in DashboardLayout

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData(1, searchTerm);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm, typeFilter, startDateStr, endDateStr]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setFormError("");
    try {
      await axios.post("/api/v1/movements", formData);
      resetForm();
      toast.success("Movimiento registrado exitosamente");
    } catch (err: any) {
      const errorMsg = err.response?.data?.message || "Error al registrar";
      setFormError(errorMsg);
      toast.error(errorMsg);
    } finally {
      setSaving(false);
    }
  };

  // Local filtering removed since server-side pagination implies server-side search, 
  // but for now we render exactly what the server paginates.
  const filteredMovements = movements;

  return (
    <PageLayout
      title="Kardex"
      subtitle="Historial de movimientos de inventario"
      actionButton={
        <button 
          onClick={() => {
            setComboSearch("");
            setComboOpen(false);
            openModal();
          }}
          className="flex items-center gap-2 px-4 py-2 rounded-lg transition-opacity hover:opacity-90 w-full sm:w-auto justify-center shrink-0"
          style={{ background: "#1b3eb5", color: "#fff", fontSize: 13, fontWeight: 600 }}
        >
          <Plus className="w-4 h-4" />
          <span>Registrar Movimiento</span>
        </button>
      }
    >
      <div className="flex flex-col xl:flex-row gap-3 mb-4 w-full">
        {/* Search */}
        <div className="relative flex-1 flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              aria-label="Buscar movimientos"
              type="text" 
              placeholder="Buscar por producto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-shadow"
            />
          </div>
          <button 
            onClick={() => setIsCameraOpen(true)}
            className="px-3 py-2 bg-white border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 hover:border-cyan-500 hover:text-cyan-600 transition-colors shadow-sm flex items-center justify-center"
            title="Escanear con cámara"
          >
            <Camera className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-3 shrink-0">
          {/* Filters */}
          <div className="w-full md:w-[220px]">
            <Select value={typeFilter || "all"} onValueChange={(val) => setTypeFilter(val === "all" ? "" : val)}>
              <SelectTrigger className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 text-slate-700">
                <SelectValue placeholder="Todos los Movimientos" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los Movimientos</SelectItem>
                <SelectItem value="in">Entradas</SelectItem>
                <SelectItem value="out">Salidas</SelectItem>
                <SelectItem value="adjust">Ajustes</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col sm:flex-row w-full md:w-auto gap-2 sm:items-center">
            <DatePicker
              date={startDate}
              setDate={setStartDate}
              placeholder="Fecha Inicio"
              className="w-full sm:w-[150px]"
              disabled={{ after: new Date() }}
            />
            <span className="text-slate-400 hidden sm:inline">-</span>
            <DatePicker
              date={endDate}
              setDate={setEndDate}
              placeholder="Fecha Fin"
              className="w-full sm:w-[150px]"
              disabled={{ after: new Date() }}
            />
          </div>
        </div>
        {(searchTerm || typeFilter || startDate || endDate) && (
          <button
            onClick={clearFilters}
            className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-[13px] font-medium text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-all shrink-0 w-full xl:w-auto"
            title="Limpiar filtros"
          >
            <X className="w-3.5 h-3.5" />
            Limpiar
          </button>
        )}
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block bg-white rounded-xl shadow-sm border border-slate-200 overflow-auto" style={{ maxHeight: 'calc(100vh - 240px)' }}>
        <table className="w-full text-left relative" style={{ borderCollapse: "collapse" }}>
          <thead className="sticky top-0 z-10 bg-slate-50 border-b border-slate-200">
            <tr>
                <th className="px-4 sm:px-6 py-4 text-slate-500" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>Fecha</th>
                <th className="px-4 sm:px-6 py-4 text-slate-500" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>Producto</th>
                <th className="px-4 sm:px-6 py-4 text-slate-500" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>Tipo</th>
                <th className="px-4 sm:px-6 py-4 text-slate-500" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>Cantidad</th>
                <th className="px-4 sm:px-6 py-4 text-slate-500" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>Motivo</th>
                <th className="px-4 sm:px-6 py-4 text-slate-500" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>Usuario</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <tr key={i} className="border-b border-slate-100">
                    <td className="px-4 sm:px-6 py-4"><Skeleton className="h-4 w-24 rounded" /></td>
                    <td className="px-4 sm:px-6 py-4"><Skeleton className="h-4 w-32 rounded" /></td>
                    <td className="px-4 sm:px-6 py-4"><Skeleton className="h-4 w-16 rounded" /></td>
                    <td className="px-4 sm:px-6 py-4"><Skeleton className="h-4 w-12 rounded" /></td>
                    <td className="px-4 sm:px-6 py-4"><Skeleton className="h-4 w-20 rounded" /></td>
                    <td className="px-4 sm:px-6 py-4"><Skeleton className="h-4 w-16 rounded" /></td>
                  </tr>
                ))
              ) : movements.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-0">
                    <EmptyState icon={PackageOpen} title="No hay movimientos" subtitle="No se encontraron movimientos con los filtros actuales" />
                  </td>
                </tr>
              ) : (
                movements.map((mov) => (
                  <tr key={mov.id} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                    <td className="px-4 sm:px-6 py-4 text-sm text-slate-700 whitespace-nowrap">
                      {format(new Date(mov.created_at), "dd/MM/yyyy HH:mm")}
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-sm text-slate-700 font-medium">
                      {mov.product?.name || `ID: ${mov.product_id}`}
                      <div className="text-xs text-slate-500 font-normal mt-0.5">{mov.product?.sku}</div>
                    </td>
                    <td className="px-4 sm:px-6 py-4">
                      {mov.type === "in" && (
                        <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                          Entrada
                        </span>
                      )}
                      {mov.type === "out" && (
                        <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-rose-50 text-rose-700 border border-rose-100">
                          Salida
                        </span>
                      )}
                      {mov.type === "adjust" && (
                        <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
                          Ajuste
                        </span>
                      )}
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-sm">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${mov.type === 'in' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : (mov.type === 'out' ? 'bg-red-50 text-red-700 border-red-200' : 'bg-slate-100 text-slate-700 border-slate-200')}`}>
                        {mov.type === 'out' ? '-' : '+'}{Math.abs(mov.quantity)}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-sm text-slate-600 max-w-[200px] truncate" title={mov.reason}>
                      {mov.reason || "-"}
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-sm text-slate-500">
                      Usuario {mov.created_by}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

          {/* Mobile Cards */}
          <div className="md:hidden flex flex-col gap-4">
            {loading ? (
              Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 flex flex-col gap-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <Skeleton className="h-5 w-32 mb-2 rounded" />
                      <Skeleton className="h-4 w-16 rounded" />
                    </div>
                    <Skeleton className="h-6 w-16 rounded" />
                  </div>
                  <div className="flex justify-between items-end mt-2 pt-3 border-t border-slate-50">
                    <Skeleton className="h-4 w-24 rounded" />
                    <Skeleton className="h-6 w-12 rounded" />
                  </div>
                </div>
              ))
            ) : filteredMovements.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200">
                <EmptyState icon={PackageOpen} title="No hay movimientos" subtitle="Aún no se han registrado movimientos." />
              </div>
            ) : (
              filteredMovements.map(m => (
                <div key={m.id} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col gap-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">{m.product?.name}</p>
                      <p className="text-xs text-slate-400">{m.product?.sku} • {new Date(m.created_at).toLocaleDateString()}</p>
                    </div>
                    {m.type === 'in' && <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-100/50">Entrada</span>}
                    {m.type === 'out' && <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-red-50 text-red-700 text-xs font-medium border border-red-100/50">Salida</span>}
                    {m.type === 'adjust' && <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-50 text-amber-700 text-xs font-medium border border-amber-100/50">Ajuste</span>}
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="text-xs text-slate-500">
                      Ref: <span className="font-medium text-slate-700">{m.reference || '-'}</span>
                    </div>
                    <div className="flex flex-col items-end">
                    <span className="text-sm font-semibold whitespace-nowrap" style={{ fontFamily: 'JetBrains Mono' }}>
                      {m.type === 'in' ? <span className="text-emerald-600">+{Math.abs(m.quantity)}</span> : (m.type === 'out' ? <span className="text-red-600">-{Math.abs(m.quantity)}</span> : <span className="text-slate-700">{m.quantity}</span>)}
                    </span>
                    <span className="text-xs text-slate-400 mt-1 uppercase tracking-wide">
                      {m.type === 'in' ? 'Entrada' : (m.type === 'out' ? 'Salida' : 'Ajuste')}
                    </span>
                  </div>
                  </div>
                </div>
              ))
            )}
          </div>
          
          {paginationMeta && (
            <PaginationControls
              meta={paginationMeta}
              onPageChange={setPage}
              onPerPageChange={(newPerPage) => {
                setPerPage(newPerPage);
              }}
            />
          )}

      {/* Drawer */}
      {modalOpen && (
        <div className="fixed inset-0 z-[60] flex justify-end bg-slate-900/40 backdrop-blur-sm transition-opacity">
          <div className="w-full sm:w-[460px] md:w-[500px] h-full flex flex-col shadow-2xl bg-white sm:border-l border-slate-200 transition-transform">
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 shrink-0">
              <h3 className="text-slate-800" style={{ fontSize: 16, fontWeight: 600 }}>Registrar Movimiento</h3>
              <button disabled={saving} onClick={() => closeModal()} className="p-2 -mr-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 rounded-lg transition-colors disabled:opacity-50 disabled:hover:bg-transparent">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-6 flex flex-col gap-5">
              {formError && (
                <div className="px-4 py-3 rounded-lg bg-red-50 border border-red-100 text-red-600" style={{ fontSize: 13 }}>
                  {formError}
                </div>
              )}
              
              <div className="relative">
                <label htmlFor="kardex-product-search" className="block text-slate-600 mb-1.5" style={{ fontSize: 12, fontWeight: 500 }}>Producto (Búsqueda inteligente)</label>
                
                {selectedProduct ? (
                  <div className="flex items-center justify-between w-full h-11 px-3 py-2.5 rounded-lg border border-slate-200 bg-slate-50">
                    <span className="text-slate-800 text-sm font-medium">{selectedProduct.name} <span className="text-slate-400 font-normal text-xs ml-1">({selectedProduct.sku})</span></span>
                    <button type="button" onClick={() => { setSelectedProduct(null); setFormData({...formData, product_id: ""}); setComboSearch(""); }} className="p-1 text-slate-400 hover:text-slate-600 rounded">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input 
                      id="kardex-product-search"
                      type="text" 
                      placeholder="Escribe para buscar un producto..." 
                      value={comboSearch}
                      onChange={e => { setComboSearch(e.target.value); setComboOpen(true); }}
                      onFocus={() => { if(comboResults.length > 0) setComboOpen(true); }}
                      className="w-full pl-9 pr-3 py-2.5 h-11 rounded-lg outline-none border transition-all bg-white border-slate-200 text-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm" 
                    />
                    {isSearchingCombo && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
                    )}
                  </div>
                )}

                {comboOpen && !selectedProduct && comboSearch.trim().length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-xl z-50 overflow-hidden max-h-64 overflow-y-auto">
                    {isSearchingCombo && comboResults.length === 0 ? (
                      <div className="p-3 text-center text-xs text-slate-500">Buscando...</div>
                    ) : comboResults.length === 0 ? (
                      <div className="p-3 text-center text-xs text-slate-500">No se encontraron productos</div>
                    ) : (
                      <div className="flex flex-col">
                        {comboResults.map(p => (
                          <button 
                            key={p.id} 
                            type="button"
                            onClick={() => {
                              setSelectedProduct(p);
                              setFormData({...formData, product_id: p.id.toString()});
                              setComboOpen(false);
                            }}
                            className="flex items-center justify-between px-3 py-2.5 hover:bg-slate-50 border-b border-slate-50 last:border-0 text-left transition-colors"
                          >
                            <span className="text-sm font-medium text-slate-700">{p.name}</span>
                            <span className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded">{p.sku} | Stock: {p.stock}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-slate-600 mb-1.5" style={{ fontSize: 12, fontWeight: 500 }}>Tipo</label>
                  <Select required value={formData.type} onValueChange={val => setFormData({...formData, type: val as any})}>
                    <SelectTrigger className="w-full h-11 px-3 py-2.5 rounded-lg outline-none border transition-all bg-white border-slate-200 text-slate-800 focus:ring-1 focus:ring-cyan-500" style={{ fontSize: 14 }}>
                      <SelectValue placeholder="Seleccionar tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="in">Entrada (+)</SelectItem>
                      <SelectItem value="out">Salida (-)</SelectItem>
                      <SelectItem value="adjust">Ajuste / Reemplazar (+/-)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <label htmlFor="kardex-quantity" className="block text-slate-600 mb-1.5" style={{ fontSize: 12, fontWeight: 500 }}>Cantidad</label>
                  <input id="kardex-quantity" required type="number" min={formData.type === 'adjust' ? undefined : "1"} value={formData.quantity} onChange={e => setFormData({...formData, quantity: e.target.value})} className="w-full px-3 py-2.5 rounded-lg outline-none border transition-all bg-white border-slate-200 text-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500" style={{ fontSize: 14 }} placeholder="Ej: 10" />
                </div>
              </div>

              {formData.type === 'in' && (
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-3 sm:p-4 bg-orange-50/50 border border-orange-100 rounded-xl">
                  <div className="flex-1 flex flex-col justify-end">
                    <label htmlFor="kardex-batch" className="block text-slate-600 mb-1.5" style={{ fontSize: 12, fontWeight: 500 }}>
                      Número de Lote <span className="text-slate-400 font-normal">(Opcional)</span>
                    </label>
                    <input id="kardex-batch" type="text" value={formData.batch_number || ''} onChange={e => setFormData({...formData, batch_number: e.target.value})} className="w-full px-3 py-2.5 rounded-lg outline-none border transition-all bg-white border-slate-200 text-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500" style={{ fontSize: 14 }} placeholder="Ej: LOTE-001" />
                  </div>
                  {selectedProduct?.is_perishable && (
                    <div className="flex-1 flex flex-col justify-end">
                      <label htmlFor="kardex-expiry" className="block text-slate-600 mb-1.5" style={{ fontSize: 12, fontWeight: 500 }}>
                        Fecha de Vencimiento <span className="text-orange-600">*</span>
                      </label>
                      <input id="kardex-expiry" type="date" required value={formData.expiry_date || ''} onChange={e => setFormData({...formData, expiry_date: e.target.value})} className="w-full px-3 py-2.5 rounded-lg outline-none border transition-all bg-white border-slate-200 text-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500" style={{ fontSize: 14 }} />
                    </div>
                  )}
                </div>
              )}
              
              <div>
                <label htmlFor="kardex-reference" className="block text-slate-600 mb-1.5" style={{ fontSize: 12, fontWeight: 500 }}>Referencia / Comprobante (Opcional)</label>
                <input id="kardex-reference" type="text" value={formData.reference} onChange={e => setFormData({...formData, reference: e.target.value})} className="w-full px-3 py-2.5 rounded-lg outline-none border transition-all bg-white border-slate-200 text-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500" style={{ fontSize: 14 }} placeholder="Ej: Factura F001-23" />
              </div>
              
              <div>
                <label htmlFor="kardex-notes" className="block text-slate-600 mb-1.5" style={{ fontSize: 12, fontWeight: 500 }}>Notas (Opcional)</label>
                <textarea id="kardex-notes" value={formData.notes} onChange={e => setFormData({...formData, notes: e.target.value})} className="w-full px-3 py-2.5 rounded-lg outline-none border transition-all bg-white border-slate-200 text-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500" style={{ fontSize: 14 }} rows={2}></textarea>
              </div>

              {/* Spacer so content doesn't hide behind sticky footer */}
              <div className="h-6"></div>
            </form>
            
            {/* Sticky footer for drawer */}
            <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex justify-end gap-3 shrink-0">
              <button type="button" disabled={saving} onClick={() => closeModal()} className="px-4 py-2.5 rounded-lg text-slate-600 hover:bg-slate-200 transition-colors w-full sm:w-auto disabled:opacity-50" style={{ fontSize: 14, fontWeight: 500 }}>Cancelar</button>
              <button type="submit" disabled={saving} onClick={handleSave} className="px-4 py-2.5 rounded-lg flex items-center justify-center transition-opacity hover:opacity-90 w-full sm:w-auto shadow-sm disabled:opacity-75" style={{ background: "#1b3eb5", color: "#fff", fontSize: 14, fontWeight: 600 }}>
                {saving ? "Guardando..." : "Registrar"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Cámara */}
      <CameraScannerModal 
        isOpen={isCameraOpen} 
        onClose={() => setIsCameraOpen(false)} 
        onScan={(code) => {
          setIsCameraOpen(false);
          setSearchTerm(code);
        }} 
      />
    </PageLayout>
  );
}
