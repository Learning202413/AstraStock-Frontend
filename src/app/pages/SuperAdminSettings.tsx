import React, { useEffect, useState } from 'react';
import { useSuperAdminStore, GlobalSetting } from '../store/useSuperAdminStore';
import { Save } from 'lucide-react';
import { PageLayout } from '../components/shared/PageLayout';
import { Skeleton } from '../components/ui/skeleton';

export const SuperAdminSettings = () => {
    const { settings, isSettingsLoaded, fetchSettings, updateSettings, loading } = useSuperAdminStore();
    const [localSettings, setLocalSettings] = useState<GlobalSetting[]>([]);
    const [saving, setSaving] = useState(false);
    const [isLoading, setIsLoading] = useState(!isSettingsLoaded);

    useEffect(() => {
        if (!isSettingsLoaded) {
            fetchSettings().then(() => setIsLoading(false));
        }
    }, [isSettingsLoaded]);

    useEffect(() => {
        setLocalSettings(settings);
    }, [settings]);

    const handleChange = (key: string, value: string) => {
        setLocalSettings(prev => prev.map(s => s.key === key ? { ...s, value } : s));
    };

    const handleSave = async () => {
        setSaving(true);
        await updateSettings(localSettings);
        setSaving(false);
        alert("Configuraciones guardadas correctamente");
    };

    const getValue = (key: string) => localSettings.find(s => s.key === key)?.value || '';

    const inputClass = "bg-white border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors shadow-sm w-full min-w-[100px]";

    return (
        <PageLayout 
            title="Configuración Global (SaaS)"
            subtitle="Modifica los límites y precios de los planes en tiempo real para todas las empresas."
            actionButton={
                <button
                    onClick={handleSave}
                    disabled={saving || isLoading}
                    className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors disabled:opacity-50 text-white w-full sm:w-auto hover:opacity-90"
                    style={{ background: "#1b3eb5" }}
                >
                    <Save className="w-4 h-4" />
                    {saving ? 'Guardando...' : 'Guardar Cambios'}
                </button>
            }
        >
            <div className="hidden md:block bg-white border border-slate-200 rounded-xl overflow-x-auto shadow-sm">
                <table className="w-full text-sm text-left whitespace-nowrap min-w-[700px]">
                    <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-medium">
                        <tr>
                            <th className="px-6 py-4">Plan</th>
                            <th className="px-6 py-4">Precio (S/)</th>
                            <th className="px-6 py-4">Límite Comprobantes</th>
                            <th className="px-6 py-4">Límite Usuarios</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {isLoading ? (
                            Array.from({ length: 3 }).map((_, i) => (
                                <tr key={i}>
                                    <td className="px-6 py-4"><Skeleton className="h-4 w-24 rounded" /></td>
                                    <td className="px-6 py-4"><Skeleton className="h-10 w-full rounded-lg" /></td>
                                    <td className="px-6 py-4"><Skeleton className="h-10 w-full rounded-lg" /></td>
                                    <td className="px-6 py-4"><Skeleton className="h-10 w-full rounded-lg" /></td>
                                </tr>
                            ))
                        ) : (
                            <>
                                <tr className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4 font-semibold text-slate-800">Emprendedor</td>
                                    <td className="px-6 py-4">
                                        <input type="number" value={getValue('plan_price_emprendedor')} onChange={(e) => handleChange('plan_price_emprendedor', e.target.value)} className={inputClass} />
                                    </td>
                                    <td className="px-6 py-4">
                                        <input type="number" value={getValue('plan_limit_emprendedor')} onChange={(e) => handleChange('plan_limit_emprendedor', e.target.value)} className={inputClass} />
                                    </td>
                                    <td className="px-6 py-4">
                                        <input type="number" value={getValue('plan_users_emprendedor')} onChange={(e) => handleChange('plan_users_emprendedor', e.target.value)} className={inputClass} />
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4 font-semibold text-slate-800">Negocio</td>
                                    <td className="px-6 py-4">
                                        <input type="number" value={getValue('plan_price_negocio')} onChange={(e) => handleChange('plan_price_negocio', e.target.value)} className={inputClass} />
                                    </td>
                                    <td className="px-6 py-4">
                                        <input type="number" value={getValue('plan_limit_negocio')} onChange={(e) => handleChange('plan_limit_negocio', e.target.value)} className={inputClass} />
                                    </td>
                                    <td className="px-6 py-4">
                                        <input type="number" value={getValue('plan_users_negocio')} onChange={(e) => handleChange('plan_users_negocio', e.target.value)} className={inputClass} />
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4 font-semibold text-slate-800">Corporativo</td>
                                    <td className="px-6 py-4">
                                        <input type="number" value={getValue('plan_price_corporativo')} onChange={(e) => handleChange('plan_price_corporativo', e.target.value)} className={inputClass} />
                                    </td>
                                    <td className="px-6 py-4 text-slate-400 italic">Ilimitado</td>
                                    <td className="px-6 py-4 text-slate-400 italic">Ilimitado</td>
                                </tr>
                            </>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="md:hidden flex flex-col gap-4">
                {isLoading ? (
                    Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-3">
                            <Skeleton className="h-6 w-32 mb-2 rounded" />
                            <div className="flex flex-col gap-1">
                                <Skeleton className="h-4 w-20 rounded" />
                                <Skeleton className="h-10 w-full rounded-lg" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <Skeleton className="h-4 w-32 rounded" />
                                <Skeleton className="h-10 w-full rounded-lg" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <Skeleton className="h-4 w-24 rounded" />
                                <Skeleton className="h-10 w-full rounded-lg" />
                            </div>
                        </div>
                    ))
                ) : (
                    <>
                        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-4">
                            <h3 className="font-bold text-slate-800 text-[16px] border-b border-slate-100 pb-2">Emprendedor</h3>
                            <div>
                                <label className="block text-xs font-medium text-slate-500 mb-1">Precio (S/)</label>
                                <input type="number" value={getValue('plan_price_emprendedor')} onChange={(e) => handleChange('plan_price_emprendedor', e.target.value)} className={inputClass} />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-slate-500 mb-1">Límite Comprobantes</label>
                                <input type="number" value={getValue('plan_limit_emprendedor')} onChange={(e) => handleChange('plan_limit_emprendedor', e.target.value)} className={inputClass} />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-slate-500 mb-1">Límite Usuarios</label>
                                <input type="number" value={getValue('plan_users_emprendedor')} onChange={(e) => handleChange('plan_users_emprendedor', e.target.value)} className={inputClass} />
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-4">
                            <h3 className="font-bold text-slate-800 text-[16px] border-b border-slate-100 pb-2">Negocio</h3>
                            <div>
                                <label className="block text-xs font-medium text-slate-500 mb-1">Precio (S/)</label>
                                <input type="number" value={getValue('plan_price_negocio')} onChange={(e) => handleChange('plan_price_negocio', e.target.value)} className={inputClass} />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-slate-500 mb-1">Límite Comprobantes</label>
                                <input type="number" value={getValue('plan_limit_negocio')} onChange={(e) => handleChange('plan_limit_negocio', e.target.value)} className={inputClass} />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-slate-500 mb-1">Límite Usuarios</label>
                                <input type="number" value={getValue('plan_users_negocio')} onChange={(e) => handleChange('plan_users_negocio', e.target.value)} className={inputClass} />
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-4">
                            <h3 className="font-bold text-slate-800 text-[16px] border-b border-slate-100 pb-2">Corporativo</h3>
                            <div>
                                <label className="block text-xs font-medium text-slate-500 mb-1">Precio (S/)</label>
                                <input type="number" value={getValue('plan_price_corporativo')} onChange={(e) => handleChange('plan_price_corporativo', e.target.value)} className={inputClass} />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-slate-500 mb-1">Límite Comprobantes</label>
                                <p className="text-sm text-slate-400 italic bg-slate-50 p-2 rounded-lg border border-slate-100">Ilimitado</p>
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-slate-500 mb-1">Límite Usuarios</label>
                                <p className="text-sm text-slate-400 italic bg-slate-50 p-2 rounded-lg border border-slate-100">Ilimitado</p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </PageLayout>
    );
};
