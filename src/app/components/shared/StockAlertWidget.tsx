import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bell, AlertTriangle, Package, Calendar } from 'lucide-react';

export function StockAlertWidget() {
  const [alerts, setAlerts] = useState<{ low_stock: any[], expiring_batches: any[], total_alerts: number } | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetchAlerts();
    // In a real app, we might poll or listen to websockets to update alerts
  }, []);

  const fetchAlerts = async () => {
    try {
      const res = await axios.get('/api/v1/alerts');
      setAlerts(res.data);
    } catch (e) {
      console.error("Error fetching alerts", e);
    }
  };

  const totalAlerts = alerts?.total_alerts || 0;

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-600"
      >
        <Bell className="w-5 h-5" />
        {totalAlerts > 0 && (
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
        )}
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-[-10px] sm:right-0 mt-2 w-[280px] sm:w-80 max-w-[calc(100vw-24px)] bg-white rounded-xl shadow-lg border border-slate-100 z-50 overflow-hidden flex flex-col max-h-[80vh]">
            <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center shrink-0">
              <h3 className="font-semibold text-slate-800 text-sm">Alertas de Inventario</h3>
              {totalAlerts > 0 && (
                <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {totalAlerts}
                </span>
              )}
            </div>
            
            <div className="overflow-y-auto custom-scrollbar p-2 flex-1">
              {!alerts || totalAlerts === 0 ? (
                <div className="p-6 text-center text-slate-400">
                  <Bell className="w-8 h-8 mx-auto mb-2 opacity-20" />
                  <p className="text-sm">No hay alertas pendientes</p>
                </div>
              ) : (
                <div className="flex flex-col gap-1">
                  {alerts.low_stock.length > 0 && (
                    <div className="mb-2">
                      <p className="px-2 py-1 text-xs font-semibold text-slate-500 uppercase tracking-wider">Stock Mínimo</p>
                      {alerts.low_stock.map(p => (
                        <div key={p.id} className="p-3 hover:bg-slate-50 rounded-lg flex gap-3 items-start transition-colors border border-transparent hover:border-slate-100 cursor-default">
                          <div className="w-8 h-8 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center shrink-0 mt-0.5">
                            <Package className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-slate-800 line-clamp-1">{p.name}</p>
                            <p className="text-xs text-rose-600 font-medium mt-0.5">Stock: {p.stock} (Mín: {p.min_stock})</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {alerts.expiring_batches.length > 0 && (
                    <div>
                      <p className="px-2 py-1 text-xs font-semibold text-slate-500 uppercase tracking-wider">Lotes por vencer</p>
                      {alerts.expiring_batches.map(b => (
                        <div key={b.id} className="p-3 hover:bg-slate-50 rounded-lg flex gap-3 items-start transition-colors border border-transparent hover:border-slate-100 cursor-default">
                          <div className="w-8 h-8 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center shrink-0 mt-0.5">
                            <Calendar className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-slate-800 line-clamp-1">{b.product?.name}</p>
                            <p className="text-xs text-slate-500">Lote: {b.batch_number}</p>
                            <p className="text-xs text-orange-600 font-medium mt-0.5">Vence: {b.expiry_date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
