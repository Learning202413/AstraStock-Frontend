import React, { useState, useEffect } from "react";
import axios from "axios";
import { PageLayout } from "./shared/PageLayout";
import { TrendingUp, Package, AlertCircle, ShoppingCart } from "lucide-react";
import { Skeleton } from "./ui/skeleton";
import { useDashboardStore } from "../store/useDashboardStore";
import { C } from '../theme';

export function Dashboard({ onLogout }: { onLogout: () => void }) {
  const data = useDashboardStore((state) => state.data);
  const isLoaded = useDashboardStore((state) => state.isLoaded);
  const setData = useDashboardStore((state) => state.setData);
  const setIsLoaded = useDashboardStore((state) => state.setIsLoaded);
  const [loading, setLoading] = useState(!isLoaded);

  useEffect(() => {
    if (!isLoaded) {
      fetchDashboard();
    }

    const usuarioRaw = localStorage.getItem("invora_user");
    const usuario = (usuarioRaw && usuarioRaw !== "undefined") ? JSON.parse(usuarioRaw) : null;
    
    if (usuario?.empresa_id) {
      import('../echo').then(({ echo }) => {
        const channelName = `tenant.${usuario.empresa_id}`;

        echo.private(channelName).listen('.SaleCompleted', (e: any) => {
          // Actualización optimista: inyectar el JSON ligero sin consultar a la DB
          useDashboardStore.setState((state) => {
            if (state.data) {
              return {
                ...state,
                data: {
                  ...state.data,
                  totalSales: Number(state.data.totalSales) + Number(e.revenue)
                }
              };
            }
            return state;
          });
        });
      });
    }

    return () => {
      // Limpiar en caso de desmontaje
      if (usuario?.empresa_id) {
        import('../echo').then(({ echo }) => {
          const channelName = `tenant.${usuario.empresa_id}`;
          echo.private(channelName).stopListening('.SaleCompleted');
        });
      }
    };
  }, []);

  const fetchDashboard = async () => {
    try {
      if (!isLoaded) setLoading(true);
      const res = await axios.get("/api/v1/dashboard");
      setData(res.data);
      setIsLoaded(true);
    } catch (error) {
      console.error("Error fetching dashboard data", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout title="Dashboard">
      
      {/* Grace Period Warning */}
      {!loading && data?.is_in_grace_period && (
        <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-start gap-3 shadow-sm">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-red-800">¡Tu suscripción ha vencido!</h4>
            <p className="text-sm mt-1">
              Tu fecha de pago fue el <strong>{data?.subscription_expires_at}</strong>. 
              Estás en periodo de gracia. Te quedan <strong>{Math.ceil(data?.grace_days_allowed - Math.abs(data?.days_until_expiration))} días</strong> antes de la suspensión del servicio.
            </p>
          </div>
        </div>
      )}

      {/* Plan Progress */}
      <div className="mb-6 bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-3 gap-2">
          <div>
            <div className="text-sm text-slate-500 font-medium">Plan Actual: <span className="text-slate-800 font-bold">{loading ? <Skeleton className="inline-block h-4 w-24 translate-y-1" /> : (data?.plan_name || 'Desconocido')}</span></div>
            <h4 className="text-lg font-bold text-slate-800">Consumo de Comprobantes</h4>
          </div>
          <div className="flex items-center justify-start sm:justify-end gap-1">
            {loading ? (
              <Skeleton className="h-8 w-20" />
            ) : (
              <>
                <span className="text-2xl font-bold text-indigo-600">{data?.docs_used || 0}</span>
                <span className="text-slate-400 font-medium text-sm whitespace-nowrap"> / {data?.docs_limit || 0}</span>
              </>
            )}
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-slate-100 rounded-full h-3 mb-1 overflow-hidden">
          {loading ? (
             <Skeleton className="h-3 w-full" />
          ) : (
            <div 
              className={`h-3 rounded-full transition-all duration-500 ${
                ((data?.docs_used || 0) / (data?.docs_limit || 1)) > 0.9 
                  ? 'bg-red-500' 
                  : ((data?.docs_used || 0) / (data?.docs_limit || 1)) > 0.7 
                    ? 'bg-amber-500' 
                    : 'bg-emerald-500'
              }`} 
              style={{ width: `${Math.min(100, ((data?.docs_used || 0) / (data?.docs_limit || 1)) * 100)}%` }}
            ></div>
          )}
        </div>
        <p className="text-xs text-slate-500 text-right mt-1">
          Límite mensual del ciclo de facturación
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Ventas del Mes</p>
            <h3 className="text-2xl font-bold text-slate-800">
              {loading ? <Skeleton className="h-8 w-24" /> : `S/ ${parseFloat((data?.totalSales || 0) as string).toFixed(2)}`}
            </h3>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Stock Crítico</p>
            <h3 className="text-2xl font-bold text-slate-800">
              {loading ? <Skeleton className="h-8 w-16" /> : `${data?.lowStockCount || 0} Productos`}
            </h3>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center gap-2">
          <ShoppingCart className="w-5 h-5 text-slate-500" />
          <h3 className="font-semibold text-slate-800 text-lg">Productos Más Vendidos</h3>
        </div>
        <div className="p-0 overflow-x-auto">
          {loading ? (
            <>
              {/* Desktop Skeleton */}
              <table className="hidden md:table w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4"><Skeleton className="h-4 w-24 rounded" /></th>
                    <th className="px-6 py-4 text-right"><Skeleton className="h-4 w-16 ml-auto rounded" /></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <tr key={i} className="border-b border-slate-100">
                      <td className="px-6 py-4 flex items-center gap-3">
                        <Skeleton className="w-8 h-8 rounded-full shrink-0" />
                        <Skeleton className="h-4 w-48 rounded" />
                      </td>
                      <td className="px-6 py-4"><Skeleton className="h-4 w-12 ml-auto rounded" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Mobile Skeleton */}
              <div className="md:hidden flex flex-col p-4 gap-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 flex-1">
                      <Skeleton className="w-8 h-8 rounded-full shrink-0" />
                      <Skeleton className="h-4 w-32 rounded" />
                    </div>
                    <Skeleton className="h-6 w-12 rounded" />
                  </div>
                ))}
              </div>
            </>
          ) : data?.topProducts && data.topProducts.length > 0 ? (
            <>
              {/* Desktop Table */}
              <table className="hidden md:table w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 text-slate-500" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>Producto</th>
                    <th className="px-6 py-4 text-slate-500 text-right" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>Cantidad Vendida</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {data.topProducts.map((p, i) => (
                    <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                            i === 0 ? 'bg-amber-100 text-amber-600' :
                            i === 1 ? 'bg-slate-200 text-slate-600' :
                            i === 2 ? 'bg-orange-100 text-orange-600' :
                            'bg-slate-50 text-slate-400 border border-slate-100'
                          }`}>
                            {i + 1}
                          </div>
                          <span className="text-slate-800 font-medium" style={{ fontSize: 14 }}>{p.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-600 text-right font-semibold" style={{ fontSize: 14 }}>
                        {p.total_sold}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Mobile Cards */}
              <div className="md:hidden flex flex-col p-4 gap-3">
                {data.topProducts.map((p, i) => (
                  <div key={p.id} className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                        i === 0 ? 'bg-amber-100 text-amber-600' :
                        i === 1 ? 'bg-slate-200 text-slate-600' :
                        i === 2 ? 'bg-orange-100 text-orange-600' :
                        'bg-slate-50 text-slate-400 border border-slate-100'
                      }`}>
                        {i + 1}
                      </div>
                      <h3 className="font-semibold text-slate-800 text-[14px] leading-tight line-clamp-2">{p.name}</h3>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-[10px] text-slate-400 uppercase font-semibold tracking-wide">Vendidos</p>
                      <p className="text-[15px] font-bold text-slate-700">{p.total_sold}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="p-8 text-center text-slate-500">
              <Package className="w-12 h-12 mx-auto mb-3 text-slate-300" />
              <p>No hay ventas registradas este mes.</p>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
