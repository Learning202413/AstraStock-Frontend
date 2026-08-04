# Plan: Invora SaaS — App completa mejorada

## Contexto
El usuario tiene 8 pantallas de Figma para su SaaS de gestión de inventarios "Invora Intelligence". El objetivo es un SPA completo con navegación real, identidad visual coherente, y evitando los patrones AI-genéricos que señala el estilo impeccable (gradientes morados, cards anidados, Inter como default, pure black/gray, padding insuficiente).

## Pantallas a construir
1. **Login** — Split screen oscuro (izquierda: branding, derecha: form)
2. **Dashboard** — KPIs, alertas de stock, movimientos kárdex, productos top, estado SUNAT
3. **Catálogo de Productos** — Stats + tabla con filtros, paginación
4. **Kárdex Valorizado** — Stock actual, valorización, gráfico AreaChart real (recharts), historial
5. **Facturación & SUNAT** — Filtros fecha/tipo/estado SUNAT, tabla comprobantes
6. **Guías de Remisión (GRE)** — Stats guías activas + tabla de listado
7. **Módulo en Desarrollo** — Pantalla genérica para CUALQUIER módulo no disponible aún (se muestra cuando el usuario navega a un módulo que todavía está en construcción — no solo Gastos/Contactos, sino cualquiera que se agregue en el futuro)
8. **404** — Página no encontrada

## Arquitectura
- **App.tsx** con estado `page` (useState) para routing sin dependencias adicionales
- **AppShell**: Sidebar izquierdo (280px) + Header top bar → renderiza la página activa
- **Login** fuera del shell (pantalla completa split-screen)
- Transición login → dashboard al hacer click en "Iniciar Sesión"

## Estética: principios impeccable aplicados
- **Sin Inter como predeterminado** → Usar **Hanken Grotesk** para UI (headings, nav, botones) — más distintivo
- **Sin puro negro/gris** → Todos los grises son tintados con el teal/cyan del brand: `#131B2E`, `#3C494E`, `#6C797F`  
- **Sin gradientes genéricos** → Solo el cyan accent `#00D2FF` como color de acción, sin gradientes decorativos en la app shell
- **Whitespace generoso** → Padding 24-32px en contenedores, no cramped
- **JetBrains Mono** → Solo para SKUs, códigos de comprobante, números de guía — no como display font
- **Be Vietnam Pro** → Solo en la pantalla de login (branding)
- **Hover states explícitos** → Sidebar items, rows de tabla, botones
- **Tipografía con jerarquía real** → Heading en Hanken Grotesk bold, body más pequeño/ligero

## Stack de diseño

### Fuentes (fonts.css)
```
Be Vietnam Pro: 600,700,800 (solo login)
Hanken Grotesk: 400,500,600,700 (app UI)
JetBrains Mono: 400,500 (datos: SKUs, códigos)
```

### Tokens de color (theme.css a actualizar)
```
--background: #FAF8FF        (fondo app claro con tinte lila)
--foreground: #131B2E        (texto primario, tintado azul-oscuro)
--card: #FFFFFF              
--primary: #00677F           (teal oscuro — botón "Nueva Venta")
--primary-foreground: #FFFFFF
--accent: #00D2FF            (cyan brillante — activos, badges, acción)
--muted: #EEF0F8             (superficies subdued)
--muted-foreground: #6C797F  (texto secundario)
--border: #DAE2FD            (borde sidebar, tablas)
--sidebar: #FAF8FF           
```

### Componentes clave del sidebar
- Logo Invora (img pequeño) + texto "Invora" + "Intelligence" en mono
- Botón "Nueva Venta" (teal oscuro, ancho completo)
- Nav items: icon + label, estado activo con borde izquierdo cyan + bg tintado
- Footer: Configuración, Ayuda

## Assets a importar (ES module imports)
- Login logo grande: `@/imports/LoginInvoraLogoRefinadoPro2X/6373d67a0bacdd532ea6497bf67e00798f9d315b.png`
- App logo pequeño: `@/imports/PaginaNoEncontrada404InvoraAi/9ebcfd49e22e1d03d149bce64cdf72b1ff2e7bbe.png`
- 404 illustration: `@/imports/PaginaNoEncontrada404InvoraAi/c569f973621b22624a8ce1fe1ec449143e117651.png`
- Módulo en desarrollo logo: `@/imports/ModuloEnDesarrolloInvoraAi/ce9b63ddec0d0540535ce820f1e5f82f6a0ab9b5.png`
- Login gradient SVG: importado desde `@/imports/LoginInvoraLogoRefinadoPro2X/svg-dwl9v`
- Login SVG paths: `@/imports/LoginInvoraLogoRefinadoPro2X/svg-5yzw4kenv6`
- ImageWithFallback: `@/app/components/figma/ImageWithFallback`

## Datos de ejemplo (hardcoded, realistas)
- Dashboard: KPIs S/ 425k / S/ 84k / S/ 12.5k + 3 alertas stock + 4 movimientos kárdex + 4 productos top
- Catálogo: 4 productos con SKU, stock, precios en soles
- Kárdex: stock 142 uds, valor $170,400, 4 movimientos, AreaChart con datos reales
- Facturación: 4 comprobantes con estados Aceptado/Rechazado/Pendiente
- GRE: 4 guías con estados SUNAT

## Navegación
- Sidebar con items clickeables: Dashboard, Catálogo, Kárdex, Facturación, Guías (GRE), Gastos, Contactos
- Gastos y Contactos → mostrar `<ModuloEnDesarrollo>` con el nombre del módulo como prop
- 404 → accesible, botón "Volver al Dashboard" funciona
- Login → click en Iniciar Sesión lleva al Dashboard

## Archivos a modificar
1. `src/styles/fonts.css` — Google Fonts imports
2. `src/styles/theme.css` — Tokens de color Invora (preservar estructura @theme inline)
3. `src/app/App.tsx` — SPA completo (~600-900 líneas), todas las pantallas en un archivo

## Verificación
- Navegar entre todas las pantallas desde el sidebar → correcto resaltado activo
- Login form → dashboard al hacer submit
- recharts AreaChart se renderiza en Kárdex
- Gastos y Contactos muestran el módulo genérico "en desarrollo"
- Logo Invora visible en login y sidebar
- Sin gradientes morados, sin Inter como body font, sin pure black
