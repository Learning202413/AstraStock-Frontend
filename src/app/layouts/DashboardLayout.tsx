import React, { useState, Suspense } from "react";
import { Link, useLocation, useNavigate, Outlet } from "react-router-dom";
import { ArrowRight, Package, LogOut, Menu, X, Settings, Users, Activity, ShieldCheck } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import imgAstraStockLogo from "@/assets/logos/astrastock-horizontal.png";
import axios from "axios";
import { C, f } from "../theme";
import { useCatalogStore, Product } from "../store/useCatalogStore";
import { useKardexStore } from "../store/useKardexStore";
import { useCategoryStore, Category } from "../store/useCategoryStore";
import { useCompanyStore, Company } from "../store/useCompanyStore";
import { useSalesHistoryStore } from "../store/useSalesHistoryStore";
import { useTransferStore } from "../store/useTransferStore";
import { BranchSelector } from "../components/shared/BranchSelector";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const usuarioRaw = localStorage.getItem("invora_user");
  const usuario = (usuarioRaw && usuarioRaw !== "undefined") ? JSON.parse(usuarioRaw) : null;

  const currentModule = location.pathname.includes("inventario") ? "kardex" : location.pathname.includes("facturacion") ? "pos" : location.pathname.includes("categorias") ? "categories" : location.pathname.includes("catalogo") ? "products" : "";
  const { addProduct, updateProduct, removeProduct } = useCatalogStore();
  const { addMovement, updateMovement, removeMovement } = useKardexStore();
  const { addCategory, updateCategory, removeCategory } = useCategoryStore();
  const { setCompany } = useCompanyStore();
  const { addSale, updateSale } = useSalesHistoryStore();
  const { addTransfer } = useTransferStore();

  React.useEffect(() => {
    if (!usuario || !usuario.empresa_id) return;
    
    let channelInstance: any = null;
    
    import('../echo').then(({ echo }) => {
      const channelName = `tenant.${usuario.empresa_id}`;
      channelInstance = echo.private(channelName);
      
      channelInstance
        .listen('.ProductCreated', (e: { product: Product }) => addProduct(e.product))
        .listen('.ProductUpdated', (e: { product: Product }) => updateProduct(e.product))
        .listen('.ProductDeleted', (e: { product: Product }) => removeProduct(e.product.id))
        .listen('.InventoryMovementCreated', (e: { movement: any }) => addMovement(e.movement))
        .listen('.InventoryMovementUpdated', (e: { movement: any }) => updateMovement(e.movement))
        .listen('.InventoryMovementDeleted', (e: { movement: any }) => removeMovement(e.movement.id))
        .listen('.CategoryCreated', (e: { category: Category }) => addCategory(e.category))
        .listen('.CategoryUpdated', (e: { category: Category }) => updateCategory(e.category))
        .listen('.CategoryDeleted', (e: { categoryId: number }) => removeCategory(e.categoryId))
        .listen('.CompanyProfileUpdated', (e: { empresa: Company }) => setCompany(e.empresa))
        .listen('.SaleCreated', (e: { sale: any }) => addSale(e.sale));
        
      channelInstance.error((error: any) => {
        console.error("Error en WebSocket global:", error);
      });

      const userChannelName = `user.${usuario.id}`;
      echo.private(userChannelName).listen('.UserDeactivated', () => {
        localStorage.clear();
        sessionStorage.clear();
        window.location.href = '/login';
      });

      if (usuario.sucursal_id) {
        const sucursalChannelName = `sucursal.${usuario.sucursal_id}`;
        echo.private(sucursalChannelName)
          .listen('.TransferReceived', (e: { transfer: any }) => addTransfer(e.transfer))
          .listen('.SunatStatusUpdated', (e: { sale_id: number, status: string }) => {
            const sale = useSalesHistoryStore.getState().sales.find(s => s.id === e.sale_id);
            if (sale) {
              updateSale({ ...sale, status: e.status });
            }
          })
          .listen('.InventoryMovementCreated', (e: { movement: any }) => addMovement(e.movement));
      }
    }).catch(err => console.error(err));

    return () => {
      if (channelInstance) {
        import('../echo').then(({ echo }) => {
          echo.leave(`tenant.${usuario.empresa_id}`);
          echo.leave(`user.${usuario.id}`);
          if (usuario.sucursal_id) {
            echo.leave(`sucursal.${usuario.sucursal_id}`);
          }
        });
      }
    };
  }, []);

  const onLogout = async () => {
    try {
      await axios.post("/api/v1/auth/logout");
    } catch (e) {
      console.error(e);
    } finally {
      localStorage.clear();
      sessionStorage.clear();
      window.location.href = "/login";
    }
  };

  return (
    <div className="flex size-full overflow-hidden" style={{ background: "#ffffff", fontFamily: f }}>
      
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 md:hidden transition-opacity" 
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Oscuro */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-64 flex flex-col transform transition-transform duration-300 md:relative md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
        style={{ background: C.left, borderRight: `1px solid ${C.border}` }}
      >
        <div className="h-16 flex items-center justify-between px-6" style={{ borderBottom: `1px solid rgba(0,196,232,0.06)` }}>
          <ImageWithFallback src={imgAstraStockLogo} alt="AstraStock" className="h-8 w-auto object-contain" />
          <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setSidebarOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex-1 py-6 flex flex-col gap-2 px-4 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          {usuario?.role !== 'superadmin' && (
            <>
              <p style={{ fontSize: 11, fontWeight: 600, color: C.silverFaint, letterSpacing: "1px", textTransform: "uppercase", paddingLeft: 8, marginBottom: 4 }}>
                Mi Negocio
              </p>
              <Link 
                to="/dashboard"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-left transition-colors" 
                style={{ background: location.pathname.includes("dashboard") ? "rgba(0,196,232,0.08)" : "transparent", color: location.pathname.includes("dashboard") ? C.cyanMid : C.silver }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
                <span style={{ fontSize: 13, fontWeight: 600 }}>Dashboard</span>
              </Link>
              <Link 
                to="/catalogo"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-left transition-colors" 
                style={{ background: currentModule === "products" ? "rgba(0,196,232,0.08)" : "transparent", color: currentModule === "products" ? C.cyanMid : C.silver }}
              >
                <Package className="w-5 h-5" />
                <span style={{ fontSize: 13, fontWeight: 600 }}>Catálogo</span>
              </Link>
              <Link 
                to="/categorias"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-left transition-colors" 
                style={{ background: currentModule === "categories" ? "rgba(0,196,232,0.08)" : "transparent", color: currentModule === "categories" ? C.cyanMid : C.silver }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>
                <span style={{ fontSize: 13, fontWeight: 600 }}>Categorías</span>
              </Link>
              <Link 
                to="/inventario"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-left transition-colors" 
                style={{ background: currentModule === "kardex" ? "rgba(0,196,232,0.08)" : "transparent", color: currentModule === "kardex" ? C.cyanMid : C.silver }}
              >
                <ArrowRight className="w-5 h-5" />
                <span style={{ fontSize: 13, fontWeight: 600 }}>Inventario (Kardex)</span>
              </Link>
              <Link 
                to="/traspasos"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-left transition-colors" 
                style={{ background: location.pathname.includes("traspasos") ? "rgba(0,196,232,0.08)" : "transparent", color: location.pathname.includes("traspasos") ? C.cyanMid : C.silver }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-left"><path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/></svg>
                <span style={{ fontSize: 13, fontWeight: 600 }}>Traspasos</span>
              </Link>
              <Link 
                to="/facturacion"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-left transition-colors" 
                style={{ background: currentModule === "pos" ? "rgba(0,196,232,0.08)" : "transparent", color: currentModule === "pos" ? C.cyanMid : C.silver }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                <span style={{ fontSize: 13, fontWeight: 600 }}>Punto de Venta</span>
              </Link>
              <Link 
                to="/ventas"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-left transition-colors" 
                style={{ background: location.pathname.includes("ventas") ? "rgba(0,196,232,0.08)" : "transparent", color: location.pathname.includes("ventas") ? C.cyanMid : C.silver }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-receipt"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/></svg>
                <span style={{ fontSize: 13, fontWeight: 600 }}>Historial de Ventas</span>
              </Link>

              <p style={{ fontSize: 11, fontWeight: 600, color: C.silverFaint, letterSpacing: "1px", textTransform: "uppercase", paddingLeft: 8, marginTop: 12, marginBottom: 4 }}>
                Administración
              </p>
              <Link 
                to="/usuarios"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-left transition-colors" 
                style={{ background: location.pathname.includes("usuarios") ? "rgba(0,196,232,0.08)" : "transparent", color: location.pathname.includes("usuarios") ? C.cyanMid : C.silver }}
              >
                <Users className="w-5 h-5" />
                <span style={{ fontSize: 13, fontWeight: 600 }}>Usuarios</span>
              </Link>
              <Link 
                to="/sucursales"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-left transition-colors" 
                style={{ background: location.pathname.includes("sucursales") ? "rgba(0,196,232,0.08)" : "transparent", color: location.pathname.includes("sucursales") ? C.cyanMid : C.silver }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building-2"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>
                <span style={{ fontSize: 13, fontWeight: 600 }}>Sucursales</span>
              </Link>
              <Link 
                to="/configuracion"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-left transition-colors" 
                style={{ background: location.pathname.includes("configuracion") ? "rgba(0,196,232,0.08)" : "transparent", color: location.pathname.includes("configuracion") ? C.cyanMid : C.silver }}
              >
                <Settings className="w-5 h-5" />
                <span style={{ fontSize: 13, fontWeight: 600 }}>Configuración</span>
              </Link>
            </>
          )}

          {usuario?.role === 'superadmin' && (
            <>
              <p style={{ fontSize: 11, fontWeight: 600, color: C.silverFaint, letterSpacing: "1px", textTransform: "uppercase", paddingLeft: 8, marginTop: 12, marginBottom: 4 }}>
                Plataforma SaaS
              </p>
              
              <Link 
                to="/superadmin"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-left transition-colors hover:bg-gray-800" 
                style={{ background: location.pathname === "/superadmin" ? "rgba(0,196,232,0.08)" : "transparent", color: location.pathname === "/superadmin" ? C.cyanMid : C.silver }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
                <span style={{ fontSize: 13, fontWeight: 600 }}>Panel Global</span>
              </Link>

              <Link 
                to="/superadmin/tenants"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-left transition-colors hover:bg-gray-800" 
                style={{ background: location.pathname === "/superadmin/tenants" ? "rgba(0,196,232,0.08)" : "transparent", color: location.pathname === "/superadmin/tenants" ? C.cyanMid : C.silver }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                <span style={{ fontSize: 13, fontWeight: 600 }}>Gestión de Tenants</span>
              </Link>

              <Link 
                to="/superadmin/admins"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-left transition-colors hover:bg-gray-800" 
                style={{ background: location.pathname === "/superadmin/admins" ? "rgba(0,196,232,0.08)" : "transparent", color: location.pathname === "/superadmin/admins" ? C.cyanMid : C.silver }}
              >
                <ShieldCheck className="w-5 h-5" />
                <span style={{ fontSize: 13, fontWeight: 600 }}>Administradores</span>
              </Link>

              <a 
                href="http://localhost:8000/pulse" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-left transition-colors hover:bg-gray-800" 
                style={{ background: "transparent", color: C.silver }}
              >
                <Activity className="w-5 h-5" />
                <span style={{ fontSize: 13, fontWeight: 600 }}>Salud del Servidor</span>
              </a>

              <Link 
                to="/superadmin/auditoria"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-left transition-colors hover:bg-gray-800" 
                style={{ background: location.pathname === "/superadmin/auditoria" ? "rgba(0,196,232,0.08)" : "transparent", color: location.pathname === "/superadmin/auditoria" ? C.cyanMid : C.silver }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                <span style={{ fontSize: 13, fontWeight: 600 }}>Auditoría (Logs)</span>
              </Link>

              <Link 
                to="/superadmin/configuracion"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-left transition-colors hover:bg-gray-800" 
                style={{ background: location.pathname === "/superadmin/configuracion" ? "rgba(0,196,232,0.08)" : "transparent", color: location.pathname === "/superadmin/configuracion" ? C.cyanMid : C.silver }}
              >
                <Settings className="w-5 h-5" />
                <span style={{ fontSize: 13, fontWeight: 600 }}>Config. Global</span>
              </Link>
            </>
          )}
        </div>

        <div className="p-4" style={{ borderTop: `1px solid rgba(0,196,232,0.06)` }}>
          <div className="flex items-center gap-3 px-2 mb-4">
            <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: C.right, color: C.silver, fontSize: 14, fontWeight: 700 }}>
              {usuario?.name?.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="truncate" style={{ fontSize: 13, fontWeight: 600, color: C.white }}>{usuario?.name}</p>
              <p className="truncate" style={{ fontSize: 11, color: C.silverFaint }}>{usuario?.role}</p>
            </div>
          </div>
            <button onClick={onLogout} className="flex items-center gap-2 px-3 py-2 rounded-lg w-full text-left transition-all text-slate-400 hover:bg-rose-500/10 hover:text-rose-400 group">
              <LogOut className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span style={{ fontSize: 12, fontWeight: 500 }}>Cerrar Sesión</span>
            </button>
        </div>
      </aside>

      {/* Main Content Area (Fondo Blanco) */}
      <main className="flex-1 overflow-hidden flex flex-col relative bg-white min-w-0">
        
        {/* Desktop Top Bar */}
        <div className="hidden md:flex h-16 border-b border-slate-100 items-center justify-between px-6 bg-white shrink-0 z-10 relative">
          <div className="flex-1">
            {usuario?.role !== 'superadmin' && <BranchSelector />}
          </div>
          <div className="flex items-center gap-4">
            {/* User Avatar & Name in Top Bar (Optional if left sidebar is closed, but currently sidebar is open) */}
          </div>
        </div>

        {/* Mobile Top Bar */}
        <div className="md:hidden h-14 border-b border-slate-200 flex items-center justify-between px-4 bg-white shrink-0 z-10 relative">
          <div className="flex items-center">
            <button onClick={() => setSidebarOpen(true)} className="mr-3 p-1 rounded-md text-slate-600 hover:bg-slate-100 transition-colors">
              <Menu className="w-6 h-6" />
            </button>
            <p className="text-slate-800 font-semibold" style={{ fontSize: 15 }}>INVORA</p>
          </div>
          <div>
            {usuario?.role !== 'superadmin' && <BranchSelector />}
          </div>
        </div>
        
        {/* Children (Views) */}
        <div className="flex-1 overflow-auto">
          <Suspense fallback={<div className="h-full min-h-[50vh]"></div>}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
