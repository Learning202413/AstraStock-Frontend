import { useEffect } from 'react';
import { Store, MapPin } from 'lucide-react';
import { useSucursalStore } from '../../store/useSucursalStore';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Skeleton } from '../ui/skeleton';

export function BranchSelector() {
  const usuarioRaw = localStorage.getItem("invora_user");
  const user = (usuarioRaw && usuarioRaw !== "undefined") ? JSON.parse(usuarioRaw) : null;
  const { sucursales, activeSucursalId, setActiveSucursalId, fetchSucursales, isLoading } = useSucursalStore();

  useEffect(() => {
    fetchSucursales();
  }, [fetchSucursales]);

  // Si no es dueño, o si no hay sucursales cargadas aún, no mostramos selector o mostramos skeleton
  if (isLoading) {
    return <Skeleton className="h-9 w-[200px]" />;
  }

  // Si el usuario es cajero o almacenero, solo mostramos el nombre de su sucursal (solo lectura)
  if (user?.role !== 'dueño' && user?.role !== 'admin') {
    const sucursal = sucursales.find(s => s.id === user?.sucursal_id);
    return (
      <div className="flex items-center gap-2 text-sm font-medium text-slate-600 bg-slate-100 px-3 py-2 rounded-md">
        <MapPin className="w-4 h-4 text-slate-400" />
        {sucursal ? sucursal.name : 'Sucursal Principal'}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1 sm:gap-2">
      <div className="hidden sm:block bg-slate-100 p-2 rounded-md">
        <Store className="w-4 h-4 text-slate-500" />
      </div>
      <Select
        value={activeSucursalId.toString()}
        onValueChange={(val) => setActiveSucursalId(val === 'ALL' ? 'ALL' : Number(val))}
      >
        <SelectTrigger className="w-[140px] sm:w-[180px] md:w-[200px] border-slate-200 bg-white text-xs sm:text-sm">
          <SelectValue placeholder="Sucursal" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="ALL" className="font-semibold text-cobalt">
            Todas las sucursales
          </SelectItem>
          {sucursales.map((sucursal) => (
            <SelectItem key={sucursal.id} value={sucursal.id.toString()}>
              {sucursal.name} {sucursal.is_main && '(Principal)'}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
