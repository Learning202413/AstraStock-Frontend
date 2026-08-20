import React, { useEffect, useState } from 'react';
import { useSuperAdminStore } from '../store/useSuperAdminStore';
import { Users, Activity, DollarSign, Receipt, AlertTriangle, Package, UserMinus } from 'lucide-react';
import { PageLayout } from '../components/shared/PageLayout';
import { Skeleton } from '../components/ui/skeleton';

export default function SuperAdminDashboard() {
    const { stats, isStatsLoaded, fetchStats, sunatLogs, fetchSunatLogs } = useSuperAdminStore();
    const [loading, setLoading] = useState(!isStatsLoaded);

    useEffect(() => {
        if (!isStatsLoaded) {
            fetchStats().then(() => setLoading(false));
        }
        fetchSunatLogs();
    }, [isStatsLoaded]);

    return (
        <PageLayout 
            title="Panel Global"
        >
            {loading || !stats ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4 mb-8">
                    {Array.from({ length: 7 }).map((_, i) => (
                        <Skeleton key={i} className="h-24 w-full rounded-xl" />
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4 mb-8">
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center gap-2">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                                <Activity className="w-4 h-4" />
                            </div>
                            <p className="text-xs text-slate-500 font-medium">Total / Activas</p>
                        </div>
                        <p className="text-xl font-bold text-slate-800">{stats.activas} <span className="text-sm font-normal text-slate-400">/ {stats.total_empresas}</span></p>
                    </div>
                    
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center gap-2">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 shrink-0">
                                <UserMinus className="w-4 h-4" />
                            </div>
                            <p className="text-xs text-slate-500 font-medium">Churn Rate</p>
                        </div>
                        <p className="text-xl font-bold text-slate-800">{stats.churn_rate}%</p>
                    </div>

                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center gap-2">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-500 shrink-0">
                                <DollarSign className="w-4 h-4" />
                            </div>
                            <p className="text-xs text-slate-500 font-medium">MRR Estimado</p>
                        </div>
                        <p className="text-xl font-bold text-slate-800">S/ {stats.mrr.toFixed(2)}</p>
                    </div>

                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center gap-2">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
                                <Receipt className="w-4 h-4" />
                            </div>
                            <p className="text-xs text-slate-500 font-medium">Ventas Hoy (Global)</p>
                        </div>
                        <p className="text-xl font-bold text-slate-800">{stats.ventas_hoy}</p>
                    </div>

                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center gap-2">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500 shrink-0">
                                <Users className="w-4 h-4" />
                            </div>
                            <p className="text-xs text-slate-500 font-medium">Total Usuarios</p>
                        </div>
                        <p className="text-xl font-bold text-slate-800">{stats.total_usuarios}</p>
                    </div>

                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center gap-2">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-500 shrink-0">
                                <Package className="w-4 h-4" />
                            </div>
                            <p className="text-xs text-slate-500 font-medium">Total Productos</p>
                        </div>
                        <p className="text-xl font-bold text-slate-800">{stats.total_productos}</p>
                    </div>
                </div>
            )}

            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden mt-8 shadow-sm">
                <div className="p-5 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
                    <div>
                        <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-amber-500" />
                            Centro de Monitoreo SUNAT
                        </h2>
                        <p className="text-sm text-slate-500 mt-1">
                            Últimos errores de emisión reportados por las empresas.
                        </p>
                    </div>
                </div>
                
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-slate-600">
                        <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-semibold">
                            <tr>
                                <th className="px-6 py-4">Fecha</th>
                                <th className="px-6 py-4">Empresa</th>
                                <th className="px-6 py-4">Documento</th>
                                <th className="px-6 py-4">Error</th>
                                <th className="px-6 py-4">Estado</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            {loading ? (
                                Array.from({ length: 3 }).map((_, i) => (
                                    <tr key={i}>
                                        <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                                        <td className="px-6 py-4"><Skeleton className="h-4 w-32" /><Skeleton className="h-3 w-20 mt-1" /></td>
                                        <td className="px-6 py-4"><Skeleton className="h-4 w-16" /><Skeleton className="h-3 w-24 mt-1" /></td>
                                        <td className="px-6 py-4"><Skeleton className="h-4 w-full max-w-[200px]" /></td>
                                        <td className="px-6 py-4"><Skeleton className="h-6 w-16 rounded-full" /></td>
                                    </tr>
                                ))
                            ) : sunatLogs.length > 0 ? (
                                sunatLogs.map((log) => (
                                    <tr key={log.id} className="hover:bg-slate-50/80 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {new Date(log.created_at).toLocaleString()}
                                        </td>
                                        <td className="px-6 py-4 font-medium text-slate-900">
                                            {log.empresa?.razon_social || 'Desconocida'}
                                            <div className="text-xs text-slate-500 font-normal">RUC: {log.empresa?.ruc}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            {log.tipo_comprobante} <br/>
                                            <span className="text-xs font-mono text-slate-500">{log.serie_correlativo}</span>
                                        </td>
                                        <td className="px-6 py-4 max-w-xs truncate text-red-600" title={log.mensaje || 'Error desconocido'}>
                                            <span className="font-semibold">{log.codigo_error}:</span> {log.mensaje}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                                                log.status === 'error' ? 'bg-red-100 text-red-700' : 
                                                log.status === 'retry' ? 'bg-amber-100 text-amber-700' : 
                                                'bg-emerald-100 text-emerald-700'
                                            }`}>
                                                {log.status.toUpperCase()}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                                        No hay errores registrados de SUNAT.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </PageLayout>
    );
}
