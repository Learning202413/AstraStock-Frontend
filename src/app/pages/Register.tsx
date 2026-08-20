import React, { useState } from "react";
import { ArrowRight, Eye, EyeOff, AtSign, KeyRound, CheckSquare, Square, X, Hash, Building2, User } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import imgAstraStockLogo from "@/assets/logos/astrastock-horizontal.png";
import axios from "axios";
import { C, f } from "../theme";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "sonner";

// ─── Constelación SVG ────────────────────────────────────────────────────────
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
      <div
        className="absolute right-0 top-12 bottom-12 w-px"
        style={{ background: "rgba(0,196,232,0.08)" }}
      />
      <div className="absolute -bottom-28 -right-28 pointer-events-none select-none">
        <Constelacion size={440} opacity={0.08} />
      </div>

      <div className="relative z-10 max-w-[480px]">
        <p
          className="mb-5"
          style={{ fontFamily: f, fontSize: 11, fontWeight: 600, letterSpacing: "2.2px", textTransform: "uppercase", color: C.cyanFaint }}
        >
          Para negocios en el Perú
        </p>
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
        <div style={{ borderTop: `1px solid rgba(0,196,232,0.08)` }}>
          {modulos.map(({ nombre, detalle }) => (
            <div
              key={nombre}
              className="flex items-start gap-4 py-4"
              style={{ borderBottom: "1px solid rgba(0,196,232,0.06)" }}
            >
              <div
                className="shrink-0"
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
        <div className="flex justify-center pt-3 pb-0 sm:hidden">
          <div className="w-10 h-1 rounded-full" style={{ background: "rgba(150,176,192,0.2)" }} />
        </div>
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
          </button>
        </div>
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

// ─── Modales legales ─────────────────────────────────────────────────────────
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

// ─── Etiqueta de sección en formulario ───────────────────────────────────────
function EtiquetaSeccion({ texto }: { texto: string }) {
  return (
    <div className="flex items-center gap-3">
      <p style={{ fontFamily: f, fontSize: 10, fontWeight: 700, letterSpacing: "1.8px", textTransform: "uppercase", color: C.cyanFaint, flexShrink: 0 }}>
        {texto}
      </p>
      <div className="flex-1" style={{ height: 1, background: "rgba(0,196,232,0.07)" }} />
    </div>
  );
}

// ─── Componentes de formulario compartidos ───────────────────────────────────
function TerminosCheckbox({
  acepta, setAcepta, setError, setModal,
}: {
  acepta: boolean;
  setAcepta: (v: boolean) => void;
  setError: (v: string) => void;
  setModal: (v: "terminos" | "privacidad") => void;
}) {
  return (
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
  );
}

function MensajeError({ texto }: { texto: string }) {
  return (
    <p style={{ fontFamily: f, fontSize: 11, color: C.error, lineHeight: 1.5 }}>
      {texto}
    </p>
  );
}

function BotonSubmit({ cargando, texto }: { cargando: boolean; texto: string }) {
  return (
    <button
      type="submit"
      disabled={cargando}
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
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), 0 2px 12px rgba(27,62,181,0.35)",
        opacity: cargando ? 0.65 : 1,
      }}
    >
      {cargando ? (
        <div className="w-4 h-4 rounded-full border-2 animate-spin"
          style={{ borderColor: "rgba(255,255,255,0.2)", borderTopColor: "#fff" }} />
      ) : (
        <>{texto} <ArrowRight className="w-[14px] h-[14px] ml-1" /></>
      )}
    </button>
  );
}

// ─── Formulario de Registro Principal ─────────────────────────────────────────
function FormularioRegistro() {
  const navigate = useNavigate();

  // Registro
  const [ruc,         setRuc]         = useState("");
  const [razonSocial, setRazonSocial] = useState("");
  const [nombre,      setNombre]      = useState("");
  const [correo,      setCorreo]      = useState("");
  const [claveReg,    setClaveReg]    = useState("");
  const [verClaveReg, setVerClaveReg] = useState(false);

  // Compartido
  const [acepta,    setAcepta]    = useState(false);
  const [cargando,  setCargando]  = useState(false);
  const [error,     setError]     = useState("");
  const [modal,     setModal]     = useState<"terminos" | "privacidad" | null>(null);

  const enviarRegistro = async (e: React.FormEvent) => {
    e.preventDefault();
    const rucLimpio = ruc.trim();
    if (!/^\d{11}$/.test(rucLimpio)) {
      setError("El RUC debe tener exactamente 11 dígitos."); return;
    }
    if (!["10", "20"].includes(rucLimpio.slice(0, 2))) {
      setError("El RUC debe comenzar con 10 (persona natural) o 20 (empresa)."); return;
    }
    if (!razonSocial.trim()) { setError("Ingresa la razón social de tu empresa."); return; }
    if (!nombre.trim()) { setError("Ingresa tu nombre completo."); return; }
    if (!correo.includes("@") || !correo.includes(".")) {
      setError("Ingresa un correo electrónico válido."); return;
    }
    if (claveReg.length < 8) { setError("La contraseña debe tener al menos 8 caracteres."); return; }
    if (!acepta) { setError("Acepta los términos para continuar."); return; }
    
    setError("");
    setCargando(true);
    
    try {
      await axios.get("/sanctum/csrf-cookie");
      await axios.post("/api/v1/auth/register", { 
        ruc: rucLimpio, 
        razon_social: razonSocial, 
        name: nombre, 
        email: correo, 
        password: claveReg 
      });
      
      toast.success("Registro exitoso. Inicia sesión para continuar.");
      navigate("/login");
    } catch (err: any) {
        setError(err.response?.data?.message || "Error al registrar la empresa.");
    } finally {
      setCargando(false);
    }
  };

  return (
    <>
      {modal === "terminos"   && <ModalTerminos   onClose={() => setModal(null)} />}
      {modal === "privacidad" && <ModalPrivacidad onClose={() => setModal(null)} />}

      <div
        className="flex items-start justify-center w-full lg:w-[440px] xl:w-[480px] shrink-0 self-stretch overflow-y-auto"
        style={{ background: C.right }}
      >
        <div className="w-full max-w-[360px] mx-auto px-6 flex flex-col" style={{ paddingTop: 32, paddingBottom: 32 }}>

          {/* Logo */}
          <div className="flex justify-center" style={{ marginBottom: 24 }}>
            <ImageWithFallback
              src={imgAstraStockLogo}
              alt="AstraStock"
              className="w-auto object-contain"
              style={{ height: 80 }}
            />
          </div>

          {/* Encabezado dinámico */}
          <div className="mb-7">
            <h2 style={{ fontFamily: f, fontSize: 21, fontWeight: 700, color: C.white, letterSpacing: "-0.4px", marginBottom: 4 }}>
              Crea tu cuenta
            </h2>
            <p style={{ fontFamily: f, fontSize: 13, color: C.silverFaint }}>
              ¿Ya tienes cuenta?{" "}
              <Link to="/login"
                className="hover:opacity-80 transition-opacity"
                style={{ fontFamily: f, fontSize: 13, color: C.cyanMid, fontWeight: 600 }}>
                Inicia sesión
              </Link>
            </p>
          </div>

          <form onSubmit={enviarRegistro} className="flex flex-col gap-4">

            <EtiquetaSeccion texto="Tu empresa" />

            {/* RUC */}
            <div className="flex flex-col gap-1.5">
              <label style={{ fontFamily: f, fontSize: 12, fontWeight: 600, color: C.silver }}>
                RUC
              </label>
              <Campo
                tipo="text"
                valor={ruc}
                onChange={(v) => { setRuc(v.replace(/\D/g, "").slice(0, 11)); setError(""); }}
                placeholder="Ej: 20123456789"
                icono={<Hash className="w-4 h-4" />}
              />
              <p style={{ fontFamily: f, fontSize: 11, lineHeight: 1.5, color: "rgba(150,176,192,0.4)" }}>
                11 dígitos · Verificaremos que no esté registrado en Invora.
              </p>
            </div>

            {/* Razón Social */}
            <div className="flex flex-col gap-1.5">
              <label style={{ fontFamily: f, fontSize: 12, fontWeight: 600, color: C.silver }}>
                Razón Social
              </label>
              <Campo
                tipo="text"
                valor={razonSocial}
                onChange={(v) => { setRazonSocial(v); setError(""); }}
                placeholder="Nombre legal de tu empresa"
                icono={<Building2 className="w-4 h-4" />}
              />
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: "rgba(0,196,232,0.06)", margin: "2px 0" }} />

            <EtiquetaSeccion texto="Tu cuenta" />

            {/* Nombre */}
            <div className="flex flex-col gap-1.5">
              <label style={{ fontFamily: f, fontSize: 12, fontWeight: 600, color: C.silver }}>
                Nombre completo
              </label>
              <Campo
                tipo="text"
                valor={nombre}
                onChange={(v) => { setNombre(v); setError(""); }}
                placeholder="Ej: Juan Pérez"
                icono={<User className="w-4 h-4" />}
              />
            </div>

            {/* Correo */}
            <div className="flex flex-col gap-1.5">
              <label style={{ fontFamily: f, fontSize: 12, fontWeight: 600, color: C.silver }}>
                Correo electrónico
              </label>
              <Campo
                tipo="email"
                valor={correo}
                onChange={(v) => { setCorreo(v); setError(""); }}
                placeholder="Será tu usuario para ingresar"
                icono={<AtSign className="w-4 h-4" />}
              />
            </div>

            {/* Contraseña */}
            <div className="flex flex-col gap-1.5">
              <label style={{ fontFamily: f, fontSize: 12, fontWeight: 600, color: C.silver }}>
                Contraseña
              </label>
              <Campo
                tipo={verClaveReg ? "text" : "password"}
                valor={claveReg}
                onChange={(v) => { setClaveReg(v); setError(""); }}
                placeholder="Mínimo 8 caracteres"
                icono={<KeyRound className="w-4 h-4" />}
                fin={
                  <button
                    type="button"
                    onClick={() => setVerClaveReg(!verClaveReg)}
                    className="shrink-0 transition-opacity hover:opacity-70 flex"
                    style={{ color: verClaveReg ? C.cyan : C.cyanFaint }}
                  >
                    {verClaveReg ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                }
              />
            </div>

            <TerminosCheckbox acepta={acepta} setAcepta={setAcepta} setError={setError} setModal={setModal} />

            {error && <MensajeError texto={error} />}

            <BotonSubmit cargando={cargando} texto="Crear cuenta" />
          </form>

          {/* Pie */}
          <div className="flex items-center justify-center gap-3 mt-8" style={{ opacity: 0.3 }}>
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

// ─── App ──────────────────────────────────────────────────────────────────────
export default function Register() {
  return (
    <div className="flex size-full" style={{ background: C.left }}>
      <PanelMarca />
      <FormularioRegistro />
    </div>
  );
}
