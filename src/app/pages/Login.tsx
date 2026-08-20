import React, { useState, useEffect } from "react";
import { ArrowRight, Eye, EyeOff, AtSign, KeyRound, CheckSquare, Square, X } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import imgAstraStockLogo from "@/assets/logos/astrastock-horizontal.png";
import axios from "axios";
import { C, f } from "../theme";
import { useNavigate, Link } from "react-router-dom";

// ─── Marca SVG de constelación (del logo) ────────────────────────────────────
function Constelacion({ size = 400, opacity = 0.1 }: { size?: number; opacity?: number }) {
  const c = size / 2;
  const rOuter = size * 0.44, rMid = size * 0.26;

  const outer = Array.from({ length: 12 }, (_, i) => {
    const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
    return [c + rOuter * Math.cos(a), c + rOuter * Math.sin(a)] as [number, number];
  });
  const mid = Array.from({ length: 6 }, (_, i) => {
    const a = (i / 6) * Math.PI * 2 - Math.PI / 6;
    return [c + rMid * Math.cos(a), c + rMid * Math.sin(a)] as [number, number];
  });

  const lines: [number, number, number, number][] = [];
  outer.forEach(([x1, y1], i) => {
    const [x2, y2] = outer[(i + 1) % 12];
    lines.push([x1, y1, x2, y2]);
    if (i % 2 === 0) { const [mx, my] = mid[i / 2]; lines.push([x1, y1, mx, my]); }
  });
  mid.forEach(([x1, y1], i) => {
    const [x2, y2] = mid[(i + 1) % 6];
    lines.push([x1, y1, x2, y2]);
    lines.push([x1, y1, c, c]);
  });

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ opacity }} aria-hidden>
      <defs>
        <radialGradient id="nodeGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor={C.cyan}   stopOpacity="1" />
          <stop offset="100%" stopColor={C.cobalt} stopOpacity="0.4" />
        </radialGradient>
      </defs>
      {lines.map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={C.cyan} strokeWidth="0.7" />
      ))}
      {outer.map(([x, y], i) => <circle key={`o${i}`} cx={x} cy={y} r="2.2" fill={C.cyanMid} />)}
      {mid.map(([x, y], i)   => <circle key={`m${i}`} cx={x} cy={y} r="3.2" fill={C.cyan} />)}
      <circle cx={c} cy={c} r="9"  fill="url(#nodeGrad)" />
      <circle cx={c} cy={c} r="4"  fill={C.cobalt} />
    </svg>
  );
}

// ─── Panel izquierdo ─────────────────────────────────────────────────────────
function PanelMarca() {
  const modulos = [
    {
      nombre: "Boletas y facturas conectadas a SUNAT",
      detalle: "Emite comprobantes válidos al instante, sin trámites aparte.",
    },
    {
      nombre: "Tu inventario siempre al día",
      detalle: "Cada venta y compra actualiza tu stock automáticamente.",
    },
    {
      nombre: "Reportes que sí entiendes",
      detalle: "Ve cuánto ganaste, qué se vendió más y qué tienes guardado.",
    },
  ];

  return (
    <div
      className="hidden lg:flex flex-col justify-center flex-1 overflow-hidden relative px-16 xl:px-20 py-16"
      style={{ background: C.left }}
    >
      {/* Separador — hairline, no border de side-tab */}
      <div
        className="absolute right-0 top-12 bottom-12 w-px"
        style={{ background: "rgba(0,196,232,0.08)" }}
      />

      {/* Una sola constelación, anclada en esquina inferior derecha */}
      <div className="absolute -bottom-28 -right-28 pointer-events-none select-none">
        <Constelacion size={440} opacity={0.08} />
      </div>

      <div className="relative z-10 max-w-[480px]">

        {/* Kicker */}
        <p
          className="mb-5"
          style={{ fontFamily: f, fontSize: 11, fontWeight: 600, letterSpacing: "2.2px", textTransform: "uppercase", color: C.cyanFaint }}
        >
          Para negocios en el Perú
        </p>

        {/* Heading */}
        <h1
          className="mb-6"
          style={{ fontFamily: f, fontSize: "clamp(32px, 3vw, 46px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-1.6px", color: C.white }}
        >
          Gestión de inventarios{" "}
          <em style={{ fontStyle: "normal", color: C.cyan }}>sin complicaciones</em>
        </h1>

        <p
          className="mb-10"
          style={{ fontFamily: f, fontSize: 14, fontWeight: 500, lineHeight: 1.75, color: C.silverFaint, maxWidth: 380 }}
        >
          Lleva tu stock, emite tus comprobantes y evita
          problemas con SUNAT — todo desde una sola pantalla.
        </p>

        {/* Feature rows — vertical, con separadores entre ellos */}
        <div style={{ borderTop: `1px solid rgba(0,196,232,0.08)` }}>
          {modulos.map(({ nombre, detalle }, i) => (
            <div
              key={nombre}
              className="flex items-start gap-4 py-4"
              style={{ borderBottom: "1px solid rgba(0,196,232,0.06)" }}
            >
              {/* Indicador */}
              <div
                className="mt-1 shrink-0"
                style={{ width: 5, height: 5, borderRadius: 1, background: C.cyan, marginTop: 6 }}
              />
              <div>
                <p style={{ fontFamily: f, fontSize: 13, fontWeight: 600, color: C.white, marginBottom: 2 }}>
                  {nombre}
                </p>
                <p style={{ fontFamily: f, fontSize: 12, fontWeight: 400, lineHeight: 1.55, color: C.silverFaint }}>
                  {detalle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Campo de formulario ─────────────────────────────────────────────────────
function Campo({
  tipo, valor, onChange, placeholder, icono, fin,
}: {
  tipo: string; valor: string;
  onChange: (v: string) => void;
  placeholder: string;
  icono: React.ReactNode;
  fin?: React.ReactNode;
}) {
  const [foco, setFoco] = useState(false);
  return (
    <div
      className="flex items-center gap-3 px-4 transition-all duration-150"
      style={{
        height: 48,
        background: C.input,
        border: `1px solid ${foco ? C.borderFocus : C.border}`,
        borderRadius: 8,
        boxShadow: foco ? `0 0 0 3px rgba(0,196,232,0.06)` : "none",
      }}
    >
      <span style={{ color: foco ? C.cyan : C.cyanFaint, flexShrink: 0, display: "flex" }}>
        {icono}
      </span>
      <input
        type={tipo}
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        onFocus={() => setFoco(true)}
        onBlur={() => setFoco(false)}
        className="flex-1 bg-transparent outline-none min-w-0"
        style={{ fontFamily: f, fontSize: 14, color: C.white, caretColor: C.cyan }}
      />
      {fin}
    </div>
  );
}

// ─── Modal base ──────────────────────────────────────────────────────────────
function Modal({ titulo, meta, onClose, children }: {
  titulo: string; meta: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      style={{ background: "rgba(6,12,24,0.9)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full sm:max-w-[580px] flex flex-col overflow-hidden"
        style={{
          background: "#0d1c30",
          border: `1px solid rgba(0,196,232,0.12)`,
          borderRadius: "16px 16px 0 0",
          maxHeight: "85vh",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Handle mobile */}
        <div className="flex justify-center pt-3 pb-0 sm:hidden">
          <div className="w-10 h-1 rounded-full" style={{ background: "rgba(150,176,192,0.2)" }} />
        </div>

        {/* Cabecera */}
        <div
          className="flex items-start justify-between px-7 pt-6 pb-5 shrink-0"
          style={{ borderBottom: "1px solid rgba(0,196,232,0.07)" }}
        >
          <div>
            <h2 style={{ fontFamily: f, fontSize: 17, fontWeight: 700, color: C.white, letterSpacing: "-0.2px", marginBottom: 3 }}>
              {titulo}
            </h2>
            <p style={{ fontFamily: f, fontSize: 11, fontWeight: 400, color: C.silverFaint }}>
              {meta}
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-8 h-8 rounded-lg ml-4 shrink-0 transition-colors hover:opacity-70"
            style={{ color: C.silverFaint, background: "rgba(150,176,192,0.07)" }}
          >
            <X className="w-4 h-4" />
            <span className="text-slate-400">de AstraStock.</span>
          </button>
        </div>

        {/* Cuerpo con scroll */}
        <div className="overflow-y-auto px-7 py-6 flex flex-col gap-5">
          {children}
        </div>
      </div>
    </div>
  );
}

function Seccion({ titulo, cuerpo }: { titulo: string; cuerpo: string }) {
  return (
    <div>
      <p style={{ fontFamily: f, fontSize: 10, fontWeight: 700, letterSpacing: "1.6px", textTransform: "uppercase", color: C.cyanFaint, marginBottom: 7 }}>
        {titulo}
      </p>
      <p style={{ fontFamily: f, fontSize: 13, fontWeight: 400, lineHeight: 1.72, color: C.silverFaint }}>
        {cuerpo}
      </p>
    </div>
  );
}

// ─── Modal Términos ──────────────────────────────────────────────────────────
function ModalTerminos({ onClose }: { onClose: () => void }) {
  return (
    <Modal titulo="Términos y condiciones" meta="Actualizado en enero 2025 · Invora, Perú" onClose={onClose}>
      <Seccion titulo="Qué es Invora"
        cuerpo="Invora es un sistema en la nube para negocios en el Perú. Te ayuda a controlar tu inventario, emitir boletas y facturas electrónicas, registrar tus compras, generar guías de traslado y ver cuánto gana tu negocio, todo sin instalar nada ni necesitar conocimientos técnicos." />
      <Seccion titulo="Tu responsabilidad con SUNAT"
        cuerpo="Eres responsable de ingresar correctamente los datos de tu negocio: RUC, nombre de tu empresa, series de tus comprobantes y el código de cada producto que exige SUNAT. Invora te facilita emitirlos, pero la exactitud de esa información depende de ti." />
      <Seccion titulo="Guías de traslado"
        cuerpo="Invora te permite generar guías de traslado electrónicas para mover mercadería entre locales o hacia un cliente. Debes ingresar el destino, los datos del transportista o vehículo, y el peso de la carga. Si SUNAT rechaza la guía por datos incorrectos, la responsabilidad es tuya." />
      <Seccion titulo="Quién puede ver qué"
        cuerpo="Puedes asignar tres tipos de acceso: el Dueño o Administrador ve todo — costos, ganancias y configuración —; el Vendedor solo puede vender, emitir comprobantes y ver el stock de su tienda; y el Almacenero solo registra entradas y salidas. Tú decides quién tiene cada permiso." />
      <Seccion titulo="Cuándo puede fallar el sistema"
        cuerpo="Como todo sistema en internet, Invora puede tener momentos de mantenimiento o caídas inesperadas. Si un comprobante no pudo enviarse por una falla, el sistema lo reintentará solo cuando se restablezca la conexión. Invora no reemplaza a tu contador para declaraciones tributarias." />
      <Seccion titulo="Cambios en estos términos"
        cuerpo="Si actualizamos estos términos, te avisaremos por correo con al menos 15 días de anticipación. Si sigues usando Invora después de esa fecha, significa que aceptas los cambios." />
    </Modal>
  );
}

// ─── Modal Privacidad ────────────────────────────────────────────────────────
function ModalPrivacidad({ onClose }: { onClose: () => void }) {
  return (
    <Modal titulo="Política de privacidad" meta="Actualizada en enero 2025 · Ley N.° 29733 del Perú" onClose={onClose}>
      <Seccion titulo="Qué información guardamos"
        cuerpo="Solo guardamos lo que tú ingresas: tu correo o usuario, los datos de tu negocio (RUC, nombre, dirección), tus productos, las boletas y facturas que emites, los movimientos de tu almacén y los contactos de tus clientes o proveedores. Nada más." />
      <Seccion titulo="Para qué usamos tu información"
        cuerpo="Únicamente para que el sistema funcione: llevar tu inventario, emitir tus comprobantes, registrar tus compras y mostrarte cuánto gana tu negocio. Puedes exportar tu historial de ventas para dárselo a tu contador. Nunca usamos tu información para publicidad ni la vendemos." />
      <Seccion titulo="Cómo protegemos tus datos"
        cuerpo="Tus datos se almacenan en servidores en el Perú con protección avanzada. Hacemos copias de respaldo todos los días y las guardamos 30 días, por si necesitas recuperar algún registro. La conexión entre tu dispositivo e Invora siempre va cifrada, igual que la banca por internet." />
      <Seccion titulo="Con quién compartimos tu información"
        cuerpo="Solo lo estrictamente necesario con SUNAT para que tus boletas, facturas y guías de traslado sean válidas. Nada más. No vendemos ni entregamos tu información a otras empresas o anunciantes." />
      <Seccion titulo="Tus derechos"
        cuerpo="Tienes derecho a ver, corregir o pedir que eliminemos tus datos cuando quieras. Escríbenos a privacidad@invora.pe y te respondemos en máximo 20 días hábiles. Esto está respaldado por la Ley de Protección de Datos Personales del Perú (Ley N.° 29733)." />
    </Modal>
  );
}

// ─── Formulario ──────────────────────────────────────────────────────────────
function FormularioAcceso({ onForgotPassword }: { onForgotPassword?: () => void }) {
  const [credencial, setCredencial] = useState("");
  const [clave,      setClave]      = useState("");
  const [verClave,   setVerClave]   = useState(false);
  const [acepta,     setAcepta]     = useState(false);
  const [cargando,   setCargando]   = useState(false);
  const [modal,      setModal]      = useState<"terminos" | "privacidad" | null>(null);
  const [error,      setError]      = useState("");
  const [countdown,  setCountdown]  = useState<number | null>(null);
  
  const navigate = useNavigate();

  useEffect(() => {
    // Escuchar eventos de error de auth (del interceptor)
    const handleAuthError = (e: any) => {
      setError(e.detail);
    };
    window.addEventListener("auth_error", handleAuthError);

    // Leer error si venimos redirigidos de otra página
    const loginError = localStorage.getItem("invora_login_error");
    if (loginError) {
      setError(loginError);
      localStorage.removeItem("invora_login_error");
    }

    return () => {
      window.removeEventListener("auth_error", handleAuthError);
    };
  }, []);

  useEffect(() => {
    let timer: any;
    if (countdown !== null && countdown > 0) {
      timer = setInterval(() => setCountdown(c => (c !== null ? c - 1 : null)), 1000);
    } else if (countdown === 0) {
      setCountdown(null);
      setError("");
    }
    return () => clearInterval(timer);
  }, [countdown]);

  const enviar = async (e: React.FormEvent) => {
    e.preventDefault();
    if (countdown !== null) return;
    if (!acepta) { setError("Debes aceptar los Términos y Condiciones para ingresar."); return; }
    setError("");
    setCargando(true);
    
    try {
      await axios.get("/sanctum/csrf-cookie");
      const res = await axios.post("/api/v1/auth/login", { email: credencial, password: clave });
      
      const data = res.data;
      if (data?.user) {
        localStorage.setItem("invora_user", JSON.stringify(data.user));
        // Redirigir al catálogo al entrar
        navigate("/catalogo", { state: { skipAuthCheck: true } });
      }
    } catch (err: any) {
      if (err.response?.status === 429) {
        const wait = err.response.data.retry_after || 60;
        setCountdown(wait);
        setError(`Demasiados intentos. Intente nuevamente en ${wait}s.`);
      } else {
        setError(err.response?.data?.message || "Las credenciales proporcionadas son incorrectas.");
      }
    } finally {
      setCargando(false);
    }
  };

  return (
    <>
      {modal === "terminos"   && <ModalTerminos   onClose={() => setModal(null)} />}
      {modal === "privacidad" && <ModalPrivacidad onClose={() => setModal(null)} />}

      <div
        className="flex items-center justify-center w-full lg:w-[420px] xl:w-[460px] shrink-0 self-stretch overflow-y-auto"
        style={{ background: C.right }}
      >
        <div className="w-full max-w-[360px] mx-auto px-6 py-14 flex flex-col">

          {/* Logo */}
          <div className="flex justify-center mb-9">
            <ImageWithFallback
              src={imgAstraStockLogo}
              alt="AstraStock"
              className="w-auto object-contain"
              style={{ height: 110 }}
            />
          </div>

          {/* Encabezado */}
          <div className="mb-8">
            <h2 style={{ fontFamily: f, fontSize: 22, fontWeight: 700, color: C.white, letterSpacing: "-0.4px", marginBottom: 5 }}>
              Ingresa a tu cuenta
            </h2>
            <p style={{ fontFamily: f, fontSize: 13, fontWeight: 400, color: C.silverFaint }}>
              ¿No tienes cuenta?{" "}
              <Link
                to="/registro"
                style={{ fontFamily: f, fontSize: 13, color: C.cyanMid, fontWeight: 500 }}
                className="hover:opacity-80 transition-opacity"
              >
                Regístrate aquí
              </Link>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={enviar} className="flex flex-col gap-4">

            {/* Usuario */}
            <div className="flex flex-col gap-1.5">
              <label style={{ fontFamily: f, fontSize: 12, fontWeight: 600, color: C.silver }}>
                Correo electrónico o usuario
              </label>
              <Campo
                tipo="text"
                valor={credencial}
                onChange={setCredencial}
                placeholder="correo@empresa.com o tu usuario"
                icono={<AtSign className="w-4 h-4" />}
              />
            </div>

            {/* Contraseña */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label style={{ fontFamily: f, fontSize: 12, fontWeight: 600, color: C.silver }}>
                  Contraseña
                </label>
                <button
                  type="button"
                  onClick={onForgotPassword}
                  style={{ fontFamily: f, fontSize: 12, fontWeight: 500, color: C.cyanFaint }}
                  className="hover:opacity-80 transition-opacity"
                >
                  ¿La olvidaste?
                </button>
              </div>
              <Campo
                tipo={verClave ? "text" : "password"}
                valor={clave}
                onChange={setClave}
                placeholder="tu contraseña"
                icono={<KeyRound className="w-4 h-4" />}
                fin={
                  <button
                    type="button"
                    onClick={() => setVerClave(!verClave)}
                    className="shrink-0 transition-opacity hover:opacity-70 flex"
                    style={{ color: verClave ? C.cyan : C.cyanFaint }}
                  >
                    {verClave ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                }
              />
            </div>

            {/* Términos */}
            <div className="flex items-start gap-2.5 pt-0.5">
              <button
                type="button"
                onClick={() => { setAcepta(!acepta); setError(""); }}
                className="shrink-0 flex mt-0.5 transition-colors"
                style={{ color: acepta ? C.cyan : "rgba(0,196,232,0.28)" }}
              >
                {acepta ? <CheckSquare className="w-[15px] h-[15px]" /> : <Square className="w-[15px] h-[15px]" />}
              </button>
              <p style={{ fontFamily: f, fontSize: 11, fontWeight: 400, lineHeight: 1.65, color: C.silverFaint }}>
                He leído y acepto los{" "}
                <button type="button" onClick={() => setModal("terminos")}
                  className="underline underline-offset-2 hover:opacity-80 transition-opacity"
                  style={{ color: C.cyanMid, fontSize: "inherit", fontFamily: "inherit", fontWeight: "inherit" }}>
                  Términos y condiciones
                </button>
                {" "}y la{" "}
                <button type="button" onClick={() => setModal("privacidad")}
                  className="underline underline-offset-2 hover:opacity-80 transition-opacity"
                  style={{ color: C.cyanMid, fontSize: "inherit", fontFamily: "inherit", fontWeight: "inherit" }}>
                  Política de privacidad
                </button>
                {" "}de AstraStock.
              </p>
            </div>

            {/* Error */}
            {error && (
              <p style={{ fontFamily: f, fontSize: 11, color: C.error, lineHeight: 1.5 }}>
                {error}
                {countdown !== null && countdown > 0 && <span style={{display: 'block', marginTop: '4px', fontWeight: 'bold'}}>Bloqueo temporal: {countdown}s</span>}
              </p>
            )}

            {/* Botón — color plano, sin gradiente */}
            <button
              type="submit"
              disabled={cargando || countdown !== null}
              className="w-full flex items-center justify-center gap-2 mt-1 transition-opacity"
              style={{
                fontFamily: f,
                fontSize: 14,
                fontWeight: 700,
                color: "#fff",
                background: C.cobalt,
                height: 48,
                borderRadius: 8,
                letterSpacing: "0.1px",
                // Realce sutil en borde superior — no gradiente
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), 0 2px 12px rgba(27,62,181,0.35)",
                opacity: (cargando || countdown !== null) ? 0.65 : 1,
              }}
            >
              {cargando ? (
                <div className="w-4 h-4 rounded-full border-2 animate-spin"
                  style={{ borderColor: "rgba(255,255,255,0.2)", borderTopColor: "#fff" }} />
              ) : countdown !== null ? (
                <>Bloqueado ({countdown}s)</>
              ) : (
                <>Ingresar <ArrowRight className="w-[14px] h-[14px] ml-1" /></>
              )}
            </button>
          </form>

          {/* Pie */}
          <div
            className="flex items-center justify-center gap-3 mt-10"
            style={{ opacity: 0.3 }}
          >
            {["© 2025 AstraStock", "·",
              <button key="t" type="button" onClick={() => setModal("terminos")}
                style={{ fontFamily: f, fontSize: 10, color: C.silver }}
                className="hover:opacity-70 transition-opacity">Términos</button>,
              "·",
              <button key="p" type="button" onClick={() => setModal("privacidad")}
                style={{ fontFamily: f, fontSize: 10, color: C.silver }}
                className="hover:opacity-70 transition-opacity">Privacidad</button>,
            ].map((item, i) =>
              typeof item === "string"
                ? <span key={i} style={{ fontFamily: f, fontSize: 10, color: C.silver }}>{item}</span>
                : item
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// ─── Componentes de Recuperación ─────────────────────────────────────────────
function FormularioRecuperar({ onBack }: { onBack: () => void }) {
  const [email, setEmail] = useState("");
  const [cargando, setCargando] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const enviar = async (e: React.FormEvent) => {
    e.preventDefault();
    setCargando(true);
    setMensaje("");
    setError("");
    try {
      await axios.get("/sanctum/csrf-cookie");
      await axios.post("/api/v1/auth/forgot-password", { email });
      setMensaje("Si el correo está registrado, recibirás un enlace para restablecer tu contraseña.");
    } catch (err: any) {
      setError("No se pudo procesar la solicitud.");
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="flex items-center justify-center w-full lg:w-[420px] xl:w-[460px] shrink-0 self-stretch overflow-y-auto" style={{ background: C.right }}>
      <div className="w-full max-w-[360px] mx-auto px-6 py-14 flex flex-col">
        <div className="mb-8">
          <h2 style={{ fontFamily: f, fontSize: 22, fontWeight: 700, color: C.white, letterSpacing: "-0.4px", marginBottom: 5 }}>Recuperar Contraseña</h2>
          <p style={{ fontFamily: f, fontSize: 13, fontWeight: 400, color: C.silverFaint }}>Ingresa tu correo para recibir un enlace.</p>
        </div>
        <form onSubmit={enviar} className="flex flex-col gap-4">
          <Campo tipo="text" valor={email} onChange={setEmail} placeholder="correo@empresa.com" icono={<AtSign className="w-4 h-4" />} />
          {mensaje && <p style={{ fontFamily: f, fontSize: 11, color: C.cyanMid }}>{mensaje}</p>}
          {error && <p style={{ fontFamily: f, fontSize: 11, color: C.error }}>{error}</p>}
          <button type="submit" disabled={cargando} className="w-full flex items-center justify-center mt-1" style={{ fontFamily: f, fontSize: 14, fontWeight: 700, color: "#fff", background: C.cobalt, height: 48, borderRadius: 8 }}>
            {cargando ? "Enviando..." : "Enviar enlace"}
          </button>
          <button type="button" onClick={onBack} className="mt-2 hover:opacity-80 transition-opacity" style={{ fontFamily: f, fontSize: 13, color: C.silver, fontWeight: 500 }}>Volver al inicio de sesión</button>
        </form>
      </div>
    </div>
  );
}

function FormularioRestablecer({ token, email, onDone }: { token: string; email: string; onDone: () => void }) {
  const [clave, setClave] = useState("");
  const [claveConf, setClaveConf] = useState("");
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");

  const enviar = async (e: React.FormEvent) => {
    e.preventDefault();
    setCargando(true);
    setError("");
    try {
      await axios.get("/sanctum/csrf-cookie");
      await axios.post("/api/v1/auth/reset-password", { token, email, password: clave, password_confirmation: claveConf });
      onDone();
    } catch (err: any) {
      setError(err.response?.data?.message || "No se pudo restablecer la contraseña.");
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="flex items-center justify-center w-full lg:w-[420px] xl:w-[460px] shrink-0 self-stretch overflow-y-auto" style={{ background: C.right }}>
      <div className="w-full max-w-[360px] mx-auto px-6 py-14 flex flex-col">
        <div className="mb-8">
          <h2 style={{ fontFamily: f, fontSize: 22, fontWeight: 700, color: C.white, letterSpacing: "-0.4px", marginBottom: 5 }}>Restablecer Contraseña</h2>
        </div>
        <form onSubmit={enviar} className="flex flex-col gap-4">
          <Campo tipo="password" valor={clave} onChange={setClave} placeholder="Nueva contraseña" icono={<KeyRound className="w-4 h-4" />} />
          <Campo tipo="password" valor={claveConf} onChange={setClaveConf} placeholder="Confirmar contraseña" icono={<KeyRound className="w-4 h-4" />} />
          {error && <p style={{ fontFamily: f, fontSize: 11, color: C.error }}>{error}</p>}
          <button type="submit" disabled={cargando} className="w-full flex items-center justify-center mt-1" style={{ fontFamily: f, fontSize: 14, fontWeight: 700, color: "#fff", background: C.cobalt, height: 48, borderRadius: 8 }}>
            {cargando ? "Guardando..." : "Restablecer"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function Login() {
  const [view, setView] = useState<"login" | "forgot" | "reset">("login");
  const [resetToken, setResetToken] = useState("");
  const [resetEmail, setResetEmail] = useState("");
  
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const email = params.get("email");
    if (token && email) {
      setResetToken(token);
      setResetEmail(email);
      setView("reset");
    }
    
    // Check if user is already logged in
    const saved = localStorage.getItem("invora_user");
    if (saved === "undefined") {
      localStorage.removeItem("invora_user");
    } else if (saved) {
        // Verificamos si el token y estado del tenant siguen válidos
        axios.get("/api/v1/auth/me")
          .then(() => navigate("/catalogo", { state: { skipAuthCheck: true } }))
          .catch(() => {
          // Si da 401, el interceptor global se encarga de limpiar el caché y dejar al usuario en Login con su mensaje.
        });
    }
  }, [navigate]);

  return (
    <div className="flex size-full" style={{ background: C.left }}>
      <PanelMarca />
      {view === "login" && <FormularioAcceso onForgotPassword={() => setView("forgot")} />}
      {view === "forgot" && <FormularioRecuperar onBack={() => setView("login")} />}
      {view === "reset" && <FormularioRestablecer token={resetToken} email={resetEmail} onDone={() => { setView("login"); window.history.replaceState({}, document.title, window.location.pathname); }} />}
    </div>
  );
}
