import React, { useState, useEffect } from "react";
import axios from "axios";
import { Receipt, Search, Eye, ShoppingCart, RefreshCw } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { PageLayout } from "./shared/PageLayout";
import { PaginationControls } from "./shared/PaginationControls";
import { toast } from "sonner";
import ReceiptModal from "./ReceiptModal";
import { Skeleton } from "./ui/skeleton";
import { useSalesHistoryStore, Sale } from "../store/useSalesHistoryStore";
import { EmptyState } from "./shared/EmptyState";

const C = {
  navy: '#0b1b42',
  cobalt: '#1b3eb5',
  sky: '#02b5e2',
  white: '#ffffff',
  slate: '#f8fafc'
};

export function SalesHistoryTable({ onLogout }: { onLogout: () => void }) {
  const store = useSalesHistoryStore();
  const [loading, setLoading] = useState(!store.isLoaded);
  const [searchParams, setSearchParams] = useSearchParams();
  
  const page = parseInt(searchParams.get("page") || "1", 10);
  const perPage = parseInt(searchParams.get("perPage") || "10", 10);

  const [selectedSale, setSelectedSale] = useState<Sale | null>(null);

  const setPage = (p: number) => {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      next.set("page", p.toString());
      return next;
    }, { replace: true });
  };

  const setPerPage = (p: number) => {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      next.set("perPage", p.toString());
      next.set("page", "1");
      return next;
    }, { replace: true });
  };

  useEffect(() => {
    fetchSales();
  }, [page, perPage]);

  const fetchSales = async () => {
    try {
      if (!store.isLoaded) setLoading(true);
      
      const params = new URLSearchParams({
        page: page.toString(),
        per_page: perPage.toString()
      });

      const res = await axios.get(`/api/v1/sales?${params.toString()}`);
      const data = res.data;
      if (data.data && data.current_page) {
        store.setSales(data.data);
        store.setPaginationMeta({
          current_page: data.current_page,
          last_page: data.last_page,
          per_page: data.per_page,
          total: data.total,
          from: data.from,
          to: data.to
        });
      } else {
        store.setSales(Array.isArray(data.data) ? data.data : (Array.isArray(data) ? data : []));
        store.setPaginationMeta(null);
      }
      store.setIsLoaded(true);
    } catch (e) {
      console.error(e);
      store.setSales([]);
      store.setPaginationMeta(null);
      toast.error("Error al cargar historial de ventas");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`;
  };

  return (
    <PageLayout
      title="Historial de Ventas"
    >
      <div className="hidden md:block rounded-xl overflow-auto bg-white shadow-sm border border-slate-200" style={{ maxHeight: 'calc(100vh - 180px)' }}>
        <table className="w-full text-left min-w-[600px] relative" style={{ borderCollapse: "collapse" }}>
          <thead className="sticky top-0 z-10 bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-4 sm:px-6 py-4 text-slate-500" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>Comprobante</th>
              <th className="px-4 sm:px-6 py-4 text-slate-500" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>Fecha</th>
              <th className="px-4 sm:px-6 py-4 text-slate-500" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>Cliente</th>
              <th className="px-4 sm:px-6 py-4 text-slate-500" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>Total</th>
              <th className="px-4 sm:px-6 py-4 text-slate-500 text-right" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <tr key={i} className="border-b border-slate-100">
                  <td className="px-4 sm:px-6 py-4"><Skeleton className="h-4 w-24 rounded" /></td>
                  <td className="px-4 sm:px-6 py-4"><Skeleton className="h-4 w-32 rounded" /></td>
                  <td className="px-4 sm:px-6 py-4"><Skeleton className="h-4 w-40 rounded" /></td>
                  <td className="px-4 sm:px-6 py-4"><Skeleton className="h-4 w-16 rounded" /></td>
                  <td className="px-4 sm:px-6 py-4"><Skeleton className="h-4 w-10 ml-auto rounded" /></td>
                </tr>
              ))
            ) : store.sales.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-0">
                  <EmptyState icon={Receipt} title="No hay ventas registradas" subtitle="Aún no se han registrado ventas en esta sucursal." />
                </td>
              </tr>
            ) : (
              store.sales.map(s => (
                <tr key={s.id} className="hover:bg-slate-50 transition-colors border-b border-slate-100">
                  <td className="px-4 sm:px-6 py-4" style={{ color: C.cobalt, fontSize: 13, fontFamily: "monospace", fontWeight: 600 }}>{s.receipt_number}</td>
                  <td className="px-4 sm:px-6 py-4 text-slate-600" style={{ fontSize: 14 }}>{formatDate(s.created_at)}</td>
                  <td className="px-4 sm:px-6 py-4 text-slate-800" style={{ fontSize: 14, fontWeight: 500 }}>{s.customer_name}</td>
                  <td className="px-4 sm:px-6 py-4 text-slate-800" style={{ fontSize: 14, fontWeight: 600 }}>S/ {parseFloat(s.total_amount as any).toFixed(2)}</td>
                  <td className="px-4 sm:px-6 py-4 text-right">
                    <button onClick={() => setSelectedSale(s)} className="text-slate-400 hover:text-cyan-600 transition-colors" title="Ver Detalles">
                      <Eye className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="md:hidden flex flex-col gap-4">
        {loading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
              <Skeleton className="h-5 w-32 mb-2 rounded" />
              <Skeleton className="h-4 w-16 rounded" />
            </div>
          ))
        ) : store.sales.map(s => (
          <div key={s.id} className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 flex flex-col">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-semibold text-slate-800 text-base leading-tight">{s.receipt_number}</h3>
                <span className="inline-block mt-1.5 px-2 py-0.5 bg-slate-100 text-slate-500 rounded text-xs font-mono font-medium">{formatDate(s.created_at)}</span>
              </div>
              <button onClick={() => setSelectedSale(s)} className="p-2 text-slate-400 hover:text-cyan-600 bg-slate-50 hover:bg-cyan-50 rounded-lg transition-colors">
                <Eye className="w-4 h-4" />
              </button>
            </div>
            <div className="flex justify-between pt-3 border-t border-slate-100">
              <div>
                <p className="text-[10px] text-slate-400 uppercase font-semibold tracking-wide">Cliente</p>
                <p className="text-sm font-medium text-slate-700">{s.customer_name}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-slate-400 uppercase font-semibold tracking-wide">Total</p>
                <p className="text-sm font-bold text-slate-800">S/ {parseFloat(s.total_amount as any).toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {store.paginationMeta && (
        <div className="mt-4">
          <PaginationControls
            meta={store.paginationMeta}
            onPageChange={setPage}
            onPerPageChange={setPerPage}
          />
        </div>
      )}

      {selectedSale && (
        <ReceiptModal sale={selectedSale} onClose={() => setSelectedSale(null)} />
      )}
    </PageLayout>
  );
}
