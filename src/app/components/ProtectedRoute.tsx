import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import axios from "axios";

export function ProtectedRoute() {
  const location = useLocation();
  const skipAuthCheck = location.state?.skipAuthCheck;
  const usuarioRaw = localStorage.getItem("invora_user");
  const usuario = (usuarioRaw && usuarioRaw !== "undefined") ? JSON.parse(usuarioRaw) : null;

  useEffect(() => {
    if (skipAuthCheck) return;
    if (usuario) {
      // Validate session in background. If it fails, axios interceptor handles 401.
      axios.get("/api/v1/auth/me").catch(() => {});
    }
  }, [usuario, skipAuthCheck]);

  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
