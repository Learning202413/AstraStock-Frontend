import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Plus, ArrowRightLeft, X, PackageOpen, Search } from 'lucide-react';
import { PageLayout } from './shared/PageLayout';
import { toast } from 'sonner';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { format } from 'date-fns';
import { useTransferStore } from '../store/useTransferStore';
import { useSucursalStore } from '../store/useSucursalStore';
import { Skeleton } from './ui/skeleton';
import { EmptyState } from './shared/EmptyState';
import { PaginationControls } from "./shared/PaginationControls";

export default function TransfersTable() {
  const store = useTransferStore();
  const { sucursales, fetchSucursales } = useSucursalStore();
  const [loading, setLoading] = useState(!store.isLoaded);

  const {
    isOpen: modalOpen,
    formData,
    selectedProduct,
    openModal,
    closeModal,
    setFormData,
    setSelectedProduct,
    resetForm,
    transfers,
    isLoaded,
    setTransfers,
    setIsLoaded,
    paginationMeta,
    setPaginationMeta,
  } = store;

  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState('');
  const [comboSearch, setComboSearch] = useState('');
  const [comboResults, setComboResults] = useState<any[]>([]);
  const [isSearchingCombo, setIsSearchingCombo] = useState(false);
  const [comboOpen, setComboOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    fetchSucursales();
  }, [fetchSucursales]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!comboSearch.trim()) {
        setComboResults([]);
        return;
      }
      try {
        setIsSearchingCombo(true);
        const res = await axios.get('/api/v1/products/search?q=' + encodeURIComponent(comboSearch) + '&limit=5');
        setComboResults(res.data?.data || []);
        setComboOpen(true);
      } catch (e) {
        console.error(e);
      } finally {
        setIsSearchingCombo(false);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [comboSearch]);

  const fetchData = async () => {
    try {
      if (!isLoaded) setLoading(true);
      const res = await axios.get('/api/v1/transfers', {
        params: { page, per_page: perPage }
      });
      const data = res.data;
      if (data && typeof data === 'object' && 'data' in data) {
        setTransfers(data.data);
        setPaginationMeta({
          current_page: data.current_page,
          last_page: data.last_page,
          per_page: data.per_page,
          total: data.total
        });
      } else {
        setTransfers(Array.isArray(data) ? data : []);
        setPaginationMeta(null);
      }
      setIsLoaded(true);
    } catch (e) {
      console.error(e);
      setPaginationMeta(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, perPage]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setFormError('');
    try {
      const res = await axios.post('/api/v1/transfers', formData);
      store.addTransfer(res.data);
      resetForm();
      closeModal();
      toast.success('Traspaso registrado exitosamente');
    } catch (err: any) {
      const errorMsg = err.response?.data?.message || 'Error al registrar';
      setFormError(errorMsg);
      toast.error(errorMsg);
    } finally {
      setSaving(false);
    }
  };

  return (
    <PageLayout
      title='Traspasos'
      subtitle='Transferencias de inventario entre sucursales'
      actionButton={
        <button
          onClick={() => {
            resetForm();
            setComboSearch('');
            setComboOpen(false);
            openModal();
          }}
          className='flex items-center gap-2 px-4 py-2 rounded-lg transition-opacity hover:opacity-90 w-full sm:w-auto justify-center shrink-0'
          style={{ background: '#1b3eb5', color: '#fff', fontSize: 13, fontWeight: 600 }}
        >
          <ArrowRightLeft className='w-4 h-4' />
          <span>Nuevo Traspaso</span>
        </button>
      }
    >
      <div className='hidden md:block bg-white rounded-xl shadow-sm border border-slate-200 overflow-auto' style={{ maxHeight: 'calc(100vh - 200px)' }}>
        <table className='w-full text-left relative' style={{ borderCollapse: 'collapse' }}>
          <thead className='sticky top-0 z-10 bg-slate-50 border-b border-slate-200'>
            <tr>
              <th className='px-4 sm:px-6 py-4 text-slate-500' style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase' }}>Fecha</th>
              <th className='px-4 sm:px-6 py-4 text-slate-500' style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase' }}>Producto</th>
              <th className='px-4 sm:px-6 py-4 text-slate-500' style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase' }}>Origen</th>
              <th className='px-4 sm:px-6 py-4 text-slate-500' style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase' }}>Destino</th>
              <th className='px-4 sm:px-6 py-4 text-slate-500' style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase' }}>Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <tr key={i} className='border-b border-slate-100'>
                  <td className='px-4 sm:px-6 py-4'><Skeleton className='h-4 w-24 rounded' /></td>
                  <td className='px-4 sm:px-6 py-4'><Skeleton className='h-4 w-32 rounded' /></td>
                  <td className='px-4 sm:px-6 py-4'><Skeleton className='h-4 w-20 rounded' /></td>
                  <td className='px-4 sm:px-6 py-4'><Skeleton className='h-4 w-20 rounded' /></td>
                  <td className='px-4 sm:px-6 py-4'><Skeleton className='h-4 w-12 rounded' /></td>
                </tr>
              ))
            ) : (!Array.isArray(transfers) || transfers.length === 0) ? (
              <tr>
                <td colSpan={5} className="p-0">
                  <EmptyState icon={ArrowRightLeft} title="No hay traspasos" subtitle="Aún no se han registrado traspasos entre sucursales." />
                </td>
              </tr>
            ) : (
              (Array.isArray(transfers) ? transfers : []).map((t) => (
                <tr key={t.id} className='border-b border-slate-100 hover:bg-slate-50/50 transition-colors'>
                  <td className='px-4 sm:px-6 py-4 text-sm text-slate-700 whitespace-nowrap'>{format(new Date(t.created_at), 'dd/MM/yyyy HH:mm')}</td>
                  <td className='px-4 sm:px-6 py-4 text-sm text-slate-700 font-medium'>
                    {t.product?.name}
                    <div className='text-xs text-slate-500 font-normal mt-0.5'>{t.product?.sku}</div>
                  </td>
                  <td className='px-4 sm:px-6 py-4 text-sm text-slate-600'>{t.from_sucursal?.name}</td>
                  <td className='px-4 sm:px-6 py-4 text-sm text-slate-600'>{t.to_sucursal?.name}</td>
                  <td className='px-4 sm:px-6 py-4 text-sm font-semibold text-slate-700'>{t.quantity}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden flex flex-col gap-4">
        {loading ? (
          Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <div>
                  <Skeleton className="h-5 w-32 mb-2 rounded" />
                  <Skeleton className="h-4 w-16 rounded" />
                </div>
                <div className="flex gap-2">
                  <Skeleton className="w-20 h-6 rounded-lg" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2 pt-3 border-t border-slate-50">
                <Skeleton className="h-8 w-full rounded" />
                <Skeleton className="h-8 w-full rounded" />
              </div>
            </div>
          ))
        ) : (!Array.isArray(transfers) || transfers.length === 0) ? (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-0">
            <EmptyState icon={ArrowRightLeft} title="No hay traspasos" subtitle="Aún no se han registrado traspasos entre sucursales." />
          </div>
        ) : (
          (Array.isArray(transfers) ? transfers : []).map((t) => (
            <div key={t.id} className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">{t.product?.name}</h4>
                  <p className="text-xs text-slate-500 mt-1">SKU: {t.product?.sku}</p>
                </div>
                <div className="flex items-center justify-center bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {t.quantity} unids
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-2 pt-3 border-t border-slate-100">
                <div>
                  <p className="text-[10px] uppercase font-semibold text-slate-400 mb-1">Origen</p>
                  <p className="text-xs font-medium text-slate-700">{t.from_sucursal?.name}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-semibold text-slate-400 mb-1">Destino</p>
                  <p className="text-xs font-medium text-slate-700">{t.to_sucursal?.name}</p>
                </div>
              </div>

              <div className="flex justify-between items-center mt-1 pt-3 border-t border-slate-50">
                <p className="text-[10px] text-slate-500">{format(new Date(t.created_at), 'dd/MM/yyyy HH:mm')}</p>
              </div>
            </div>
          ))
        )}
      </div>


      {paginationMeta && (
        <div className="mt-2 -mx-4 sm:mx-0">
          <PaginationControls
            meta={paginationMeta}
            onPageChange={setPage}
            onPerPageChange={(newPerPage) => {
              setPerPage(newPerPage);
              setPage(1);
            }}
          />
        </div>
      )}

      {modalOpen && (
        <div className='fixed inset-0 z-[60] flex justify-end bg-slate-900/40 backdrop-blur-sm transition-opacity'>
          <div className='w-full sm:w-[460px] md:w-[500px] h-full flex flex-col shadow-2xl bg-white sm:border-l border-slate-200 transition-transform'>
            <div className='flex items-center justify-between px-6 py-5 border-b border-slate-100 shrink-0'>
              <h3 className='text-slate-800' style={{ fontSize: 16, fontWeight: 600 }}>Nuevo Traspaso</h3>
              <button disabled={saving} onClick={() => closeModal()} className='p-2 -mr-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 rounded-lg'>
                <X className='w-5 h-5' />
              </button>
            </div>
            
            <form onSubmit={handleSave} className='flex-1 overflow-y-auto p-6 flex flex-col gap-5'>
              {formError && (
                <div className='px-4 py-3 rounded-lg bg-red-50 border border-red-100 text-red-600' style={{ fontSize: 13 }}>{formError}</div>
              )}
              
              <div className='flex flex-col sm:flex-row gap-4'>
                <div className='flex-1'>
                  <label className='block text-slate-600 mb-1.5' style={{ fontSize: 12, fontWeight: 500 }}>Sucursal Origen</label>
                  <Select required value={formData.from_sucursal_id?.toString()} onValueChange={val => setFormData({...formData, from_sucursal_id: val})}>
                    <SelectTrigger className="w-full h-11 px-3 py-2.5 rounded-lg outline-none border transition-all bg-white border-slate-200 text-slate-800 focus:ring-1 focus:ring-cyan-500" style={{ fontSize: 14 }}><SelectValue placeholder='Seleccionar' /></SelectTrigger>
                    <SelectContent>
                      {sucursales.map(s => <SelectItem key={s.id} value={s.id.toString()}>{s.name}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className='flex-1'>
                  <label className='block text-slate-600 mb-1.5' style={{ fontSize: 12, fontWeight: 500 }}>Sucursal Destino</label>
                  <Select required value={formData.to_sucursal_id?.toString()} onValueChange={val => setFormData({...formData, to_sucursal_id: val})}>
                    <SelectTrigger className="w-full h-11 px-3 py-2.5 rounded-lg outline-none border transition-all bg-white border-slate-200 text-slate-800 focus:ring-1 focus:ring-cyan-500" style={{ fontSize: 14 }}><SelectValue placeholder='Seleccionar' /></SelectTrigger>
                    <SelectContent>
                      {sucursales.map(s => <SelectItem key={s.id} value={s.id.toString()}>{s.name}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className='relative'>
                <label className='block text-slate-600 mb-1.5' style={{ fontSize: 12, fontWeight: 500 }}>Producto (Búsqueda inteligente)</label>
                {selectedProduct ? (
                  <div className='flex items-center justify-between w-full h-11 px-3 py-2.5 rounded-lg border border-slate-200 bg-slate-50'>
                    <span className='text-slate-800 text-sm font-medium'>{selectedProduct.name} <span className="text-slate-400 font-normal text-xs ml-1">({selectedProduct.sku})</span></span>
                    <button type='button' onClick={() => { setSelectedProduct(null); setFormData({...formData, product_id: ''}); setComboSearch(''); }} className="p-1 text-slate-400 hover:text-slate-600 rounded"><X className='w-4 h-4' /></button>
                  </div>
                ) : (
                  <div className='relative'>
                    <Search className='w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2' />
                    <input 
                      type='text' 
                      placeholder='Escribe para buscar un producto...' 
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
                            type='button' 
                            onClick={() => { setSelectedProduct(p); setFormData({...formData, product_id: p.id.toString()}); setComboOpen(false); }} 
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

              <div>
                <label className='block text-slate-600 mb-1.5' style={{ fontSize: 12, fontWeight: 500 }}>Cantidad a Transferir</label>
                <input required type='number' min='1' value={formData.quantity} onChange={e => setFormData({...formData, quantity: e.target.value})} className='w-full px-3 py-2.5 rounded-lg outline-none border transition-all bg-white border-slate-200 text-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm' placeholder='Ej: 10' />
              </div>

              <div>
                <label className='block text-slate-600 mb-1.5' style={{ fontSize: 12, fontWeight: 500 }}>Notas (Opcional)</label>
                <textarea value={formData.notes || ''} onChange={e => setFormData({...formData, notes: e.target.value})} className='w-full px-3 py-2.5 rounded-lg outline-none border transition-all bg-white border-slate-200 text-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm' rows={2}></textarea>
              </div>
            </form>
            
            <div className='p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex justify-end gap-3 shrink-0'>
              <button type='button' disabled={saving} onClick={() => closeModal()} className='px-4 py-2.5 rounded-lg text-slate-600 hover:bg-slate-200 w-full sm:w-auto text-sm font-medium'>Cancelar</button>
              <button type='submit' disabled={saving} onClick={handleSave} className='px-4 py-2.5 rounded-lg flex items-center justify-center w-full sm:w-auto shadow-sm text-white text-sm font-semibold' style={{ background: '#1b3eb5' }}>
                {saving ? 'Guardando...' : 'Confirmar Traspaso'}
              </button>
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
}

