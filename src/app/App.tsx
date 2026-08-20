import React, { useEffect, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "sonner";
import axios from "axios";

import DashboardLayout from "./layouts/DashboardLayout";
import { ProtectedRoute } from "./components/ProtectedRoute";

const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));
const ProductsTable = React.lazy(() => import("./components/ProductsTable").then(m => ({ default: m.ProductsTable })));
const CategoriesTable = React.lazy(() => import("./components/CategoriesTable").then(m => ({ default: m.CategoriesTable })));
const Kardex = React.lazy(() => import("./components/Kardex"));
const TransfersTable = React.lazy(() => import("./components/TransfersTable"));
const PosTerminal = React.lazy(() => import("./components/PosTerminal"));
const CompanyProfile = React.lazy(() => import("./components/CompanyProfile"));
const UsersTable = React.lazy(() => import("./components/UsersTable").then(m => ({ default: m.UsersTable })));
const Dashboard = React.lazy(() => import("./components/Dashboard").then(m => ({ default: m.Dashboard })));
const SalesHistoryTable = React.lazy(() => import("./components/SalesHistoryTable").then(m => ({ default: m.SalesHistoryTable })));
const SucursalesTable = React.lazy(() => import("./components/SucursalesTable").then(m => ({ default: m.SucursalesTable })));
const SuperAdminDashboard = React.lazy(() => import("./pages/SuperAdminDashboard"));
const SuperAdminTenants = React.lazy(() => import("./pages/SuperAdminTenants"));
const SuperAdminAdmins = React.lazy(() => import("./pages/SuperAdminAdmins"));
const SuperAdminSettings = React.lazy(() => import("./pages/SuperAdminSettings").then(m => ({ default: m.SuperAdminSettings })));
const UnderConstruction = React.lazy(() => import("./pages/UnderConstruction").then(m => ({ default: m.UnderConstruction })));
const NotFound = React.lazy(() => import("./pages/NotFound").then(m => ({ default: m.NotFound })));

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
axios.defaults.baseURL = import.meta.env.VITE_API_URL || (import.meta.env.PROD ? "https://api.astrazynk.pp.ua" : "");

export default function App() {
  useEffect(() => {
    const interceptor = axios.interceptors.response.use(
      response => response,
      error => {
        if (error.response?.status === 401 || error.response?.status === 419) {
          const msg = error.response?.data?.message || "Tu sesión ha expirado o tu acceso fue revocado.";
          localStorage.clear();
          sessionStorage.clear();
          
          if (window.location.pathname !== "/login") {
            localStorage.setItem("invora_login_error", msg);
            window.location.href = "/login";
          } else {
            window.dispatchEvent(new CustomEvent("auth_error", { detail: msg }));
          }
        }
        return Promise.reject(error);
      }
    );
    return () => axios.interceptors.response.eject(interceptor);
  }, []);

  return (
    <>
      <Toaster richColors position="bottom-right" />
      <BrowserRouter>
        <Suspense fallback={<div className="h-screen bg-slate-50"></div>}>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Register />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route element={<DashboardLayout />}>
                <Route path="/dashboard" element={<Dashboard onLogout={() => {}} />} />
                <Route path="/catalogo" element={<ProductsTable onLogout={() => {}} />} />
                <Route path="/categorias" element={<CategoriesTable />} />
                <Route path="/inventario" element={<Kardex />} />
                <Route path="/traspasos" element={<TransfersTable />} />
                <Route path="/facturacion" element={<PosTerminal />} />
                <Route path="/ventas" element={<SalesHistoryTable onLogout={() => {}} />} />
                <Route path="/configuracion" element={<CompanyProfile />} />
                <Route path="/usuarios" element={<UsersTable />} />
                <Route path="/sucursales" element={<SucursalesTable />} />
                <Route path="/superadmin" element={<SuperAdminDashboard />} />
                <Route path="/superadmin/tenants" element={<SuperAdminTenants />} />
                <Route path="/superadmin/admins" element={<SuperAdminAdmins />} />
                <Route path="/superadmin/configuracion" element={<SuperAdminSettings />} />
                <Route path="/superadmin/auditoria" element={<UnderConstruction title="Auditoría (Logs)" />} />
                
                {/* Default redirect to dashboard */}
                <Route path="*" element={<NotFound />} />

              </Route>
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}
