import svgPaths from "./svg-elxmxg1gxf";
import imgInvoraLogo from "./207da6590921f813adc07c350558581abc4e5060.png";

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-full">
          <p className="leading-[normal]">Buscar guías, comprobantes...</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#faf8ff] flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[11px] pl-[41px] pr-[9px] pt-[10px] relative size-full">
          <Container2 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#bbc9cf] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center max-w-[448px] min-w-px relative" data-name="Container">
      <Input />
      <div className="absolute left-[11px] size-[18px] top-[10px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
          <path d={svgPaths.p8a35e00} fill="#6C797F" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[408px] relative size-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 16 20" width="16">
        <g id="Container">
          <path d={svgPaths.p164b49c0} fill="#3C494E" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Button">
      <Container4 />
      <div className="absolute bg-[#00d2ff] right-[8px] rounded-[12px] size-[8px] top-[8px]" data-name="Background" />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Container">
          <path d={svgPaths.p3de21300} fill="#3C494E" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Button">
      <Container5 />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function HeaderTopNavBar() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.8)] h-[72px] relative shrink-0 w-full z-[2]" data-name="Header - TopNavBar">
      <div aria-hidden className="absolute border-[#dae2fd] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-px px-[24px] relative size-full">
          <Container />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[48px] tracking-[-0.96px] whitespace-nowrap">
        <p className="leading-[56px]">Guías de Remisión (GRE)</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[16px] whitespace-nowrap">
        <p className="leading-[26px]">Gestión y control de traslados electrónicos SUNAT.</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Heading />
      <Container7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p33b3fb00} fill="white" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#00d2ff] content-stretch flex gap-[8px] items-center px-[24px] py-[8px] relative rounded-[4px] shrink-0" data-name="Button">
      <Container8 />
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">Generar GRE</p>
      </div>
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header Section">
      <Container6 />
      <Button2 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3c494e] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">EN TRÁNSITO</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 22 16" width="22">
        <g id="Container">
          <path d={svgPaths.p146eb80} fill="#00D2FF" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container10 />
        <Container11 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[48px] tracking-[-0.96px] w-full">
          <p className="leading-[56px]">124</p>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c797f] text-[14px] w-full">
          <p className="leading-[20px]">Guías activas hoy</p>
        </div>
      </div>
    </div>
  );
}

function Widget1EnTransito() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[290.66px]" data-name="Widget 1: En Tránsito">
      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[25px] relative rounded-[inherit] size-full">
        <div className="absolute bg-[rgba(0,210,255,0.1)] blur-[12px] right-[-15px] rounded-[12px] size-[96px] top-[-15px]" data-name="Overlay+Blur" />
        <Container9 />
        <Container12 />
        <Container13 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(218,226,253,0.5)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-2px_rgba(0,0,0,0.03)]" />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3c494e] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">POR VALIDAR SUNAT</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[21px] relative shrink-0 w-[19px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="21" preserveAspectRatio="none" viewBox="0 0 19 21" width="19">
        <g id="Container">
          <path d={svgPaths.p1574ee00} fill="#BA1A1A" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container15 />
        <Container16 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[48px] tracking-[-0.96px] w-full">
          <p className="leading-[56px]">3</p>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c797f] text-[14px] w-full">
          <p className="leading-[20px]">Requieren atención</p>
        </div>
      </div>
    </div>
  );
}

function Widget2PorValidarSunat() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[290.67px]" data-name="Widget 2: Por Validar SUNAT">
      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[25px] relative rounded-[inherit] size-full">
        <div className="absolute bg-[rgba(186,26,26,0.1)] blur-[12px] right-[-15px] rounded-[12px] size-[96px] top-[-15px]" data-name="Overlay+Blur" />
        <Container14 />
        <Container17 />
        <Container18 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(218,226,253,0.5)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-2px_rgba(0,0,0,0.03)]" />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3c494e] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">EFICIENCIA MES</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[12px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 20 12" width="20">
        <g id="Container">
          <path d={svgPaths.p33125000} fill="#2559BD" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container20 />
        <Container21 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-baseline leading-[0] relative size-full whitespace-nowrap">
        <div className="flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-bold justify-center relative shrink-0 text-[#131b2e] text-[48px] tracking-[-0.96px]">
          <p className="leading-[56px]">98.5%</p>
        </div>
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center not-italic relative shrink-0 text-[#6c98ff] text-[14px]">
          <p className="leading-[20px]">+1.2%</p>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c797f] text-[14px] w-full">
          <p className="leading-[20px]">Entregas sin incidencias</p>
        </div>
      </div>
    </div>
  );
}

function Widget3EficienciaDeEntrega() {
  return (
    <div className="bg-[#faf8ff] relative rounded-[8px] shrink-0 w-[290.66px]" data-name="Widget 3: Eficiencia de Entrega">
      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[25px] relative rounded-[inherit] size-full">
        <div className="absolute bottom-px opacity-20 right-[1.01px] size-[128px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 128 128' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(9.051 0 0 9.051 64 64)'><stop stop-color='rgba(0,210,255,1)' offset='0.1'/><stop stop-color='rgba(0,210,255,0)' offset='0.1'/></radialGradient></defs></svg>\")" }} data-name="Gradient" />
        <Container19 />
        <Paragraph />
        <Container22 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(218,226,253,0.5)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-2px_rgba(0,0,0,0.03)]" />
    </div>
  );
}

function DashboardWidgetsBentoGridStyle() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Dashboard Widgets (Bento Grid Style)">
      <Widget1EnTransito />
      <Widget2PorValidarSunat />
      <Widget3EficienciaDeEntrega />
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[18px] whitespace-nowrap">
          <p className="leading-[24px]">Listado de Guías Remitente</p>
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[9px] relative shrink-0 w-[13.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="9" preserveAspectRatio="none" viewBox="0 0 13.5 9" width="13.5">
        <g id="Container">
          <path d={svgPaths.p1b72c490} fill="#0F172A" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center px-[17px] py-[9px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container25 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Filtrar</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Container">
          <path d={svgPaths.p38806900} fill="#0F172A" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center px-[17px] py-[9px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container26 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Exportar</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Button3 />
        <Button4 />
      </div>
    </div>
  );
}

function TableToolbar() {
  return (
    <div className="bg-[rgba(250,248,255,0.5)] relative shrink-0 w-full" data-name="Table Toolbar">
      <div aria-hidden className="absolute border-[#dae2fd] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[17px] pt-[16px] px-[16px] relative size-full">
          <Container23 />
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="relative shrink-0 w-[131.7px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3c494e] text-[12px] tracking-[0.6px] whitespace-nowrap">
          <p className="leading-[16px] mb-0">NÚMERO DE</p>
          <p className="leading-[16px]">GUÍA</p>
        </div>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="relative shrink-0 w-[222.72px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24.5px] pt-[24px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3c494e] text-[12px] tracking-[0.6px] whitespace-nowrap">
          <p className="leading-[16px]">MOTIVO DE TRASLADO</p>
        </div>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="relative shrink-0 w-[143.89px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24.5px] pt-[24px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3c494e] text-[12px] tracking-[0.6px] whitespace-nowrap">
          <p className="leading-[16px]">FECHA EMISIÓN</p>
        </div>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="relative shrink-0 w-[200px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24.5px] pt-[24px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3c494e] text-[12px] tracking-[0.6px] whitespace-nowrap">
          <p className="leading-[16px]">PUNTO DE LLEGADA</p>
        </div>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="relative shrink-0 w-[125.23px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3c494e] text-[12px] tracking-[0.6px] whitespace-nowrap">
          <p className="leading-[16px] mb-0">ESTADO</p>
          <p className="leading-[16px]">SUNAT</p>
        </div>
      </div>
    </div>
  );
}

function Cell5() {
  return (
    <div className="relative shrink-0 w-[94.45px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[24.5px] pt-[24px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3c494e] text-[12px] text-right tracking-[0.6px] whitespace-nowrap">
          <p className="leading-[16px]">ACCIONES</p>
        </div>
      </div>
    </div>
  );
}

function HeaderRow() {
  return (
    <div className="bg-[#faf8ff] content-stretch flex items-start justify-center mb-[-1px] pb-px relative shrink-0 w-full" data-name="Header → Row">
      <div aria-hidden className="absolute border-[#dae2fd] border-b border-solid inset-0 pointer-events-none" />
      <Cell />
      <Cell1 />
      <Cell2 />
      <Cell3 />
      <Cell4 />
      <Cell5 />
    </div>
  );
}

function Data() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[17px] pt-[16px] px-[16px] relative shrink-0 w-[131.7px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px] mb-0">EG01-</p>
        <p className="leading-[20px]">0004592</p>
      </div>
    </div>
  );
}

function Data1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[27px] pt-[26px] px-[16px] relative shrink-0 w-[222.72px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Venta sujeta a confirmación</p>
      </div>
    </div>
  );
}

function Data2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[17px] pt-[16px] px-[16px] relative shrink-0 w-[143.89px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c797f] text-[14px] whitespace-nowrap">
        <p className="leading-[20px] mb-0">12 Oct 2023,</p>
        <p className="leading-[20px]">08:30</p>
      </div>
    </div>
  );
}

function Data3() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[200px] overflow-clip pb-[27px] pt-[26px] px-[16px] relative shrink-0 w-[200px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131b2e] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px]">Av. Los Frutales 345, Ate, Lima</p>
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(0,210,255,0.1)] content-stretch flex gap-[4px] items-center px-[9px] py-[5px] relative rounded-[12px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(0,210,255,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-[#00d2ff] relative rounded-[12px] shrink-0 size-[6px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#00677f] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Aceptado</p>
      </div>
    </div>
  );
}

function Data4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[22.5px] pt-[24.5px] px-[16px] relative shrink-0 w-[125.23px]" data-name="Data">
      <OverlayBorder />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[12.5px] relative shrink-0 w-[18.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="12.5" preserveAspectRatio="none" viewBox="0 0 18.3333 12.5" width="18.3333">
        <g id="Container">
          <path d={svgPaths.p2e870a60} fill="#6C797F" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[10px] pt-[4px] px-[4px] relative shrink-0" data-name="Button">
      <Container27 />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[3.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 3.33333 13.3333" width="3.33333">
        <g id="Container">
          <path d={svgPaths.p246f4800} fill="#6C797F" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[10px] pt-[4px] px-[4px] relative shrink-0" data-name="Button">
      <Container28 />
    </div>
  );
}

function Data5() {
  return (
    <div className="content-stretch flex gap-[4.5px] items-start justify-end px-[16px] py-[19.5px] relative shrink-0 w-[94.45px]" data-name="Data">
      <Button5 />
      <Button6 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] relative shrink-0 w-full" data-name="Row">
      <Data />
      <Data1 />
      <Data2 />
      <Data3 />
      <Data4 />
      <Data5 />
    </div>
  );
}

function Data6() {
  return (
    <div className="relative shrink-0 w-[131.7px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[17px] pt-[16px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] whitespace-nowrap">
          <p className="leading-[20px] mb-0">EG01-</p>
          <p className="leading-[20px]">0004593</p>
        </div>
      </div>
    </div>
  );
}

function Data7() {
  return (
    <div className="relative shrink-0 w-[222.72px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[17px] pt-[16px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] whitespace-nowrap">
          <p className="leading-[20px] mb-0">Traslado entre</p>
          <p className="leading-[20px]">establecimientos</p>
        </div>
      </div>
    </div>
  );
}

function Data8() {
  return (
    <div className="relative shrink-0 w-[143.89px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[17px] pt-[16px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c797f] text-[14px] whitespace-nowrap">
          <p className="leading-[20px] mb-0">12 Oct 2023,</p>
          <p className="leading-[20px]">09:15</p>
        </div>
      </div>
    </div>
  );
}

function Data9() {
  return (
    <div className="max-w-[200px] relative shrink-0 w-[200px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] overflow-clip pb-[27px] pt-[26px] px-[16px] relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131b2e] text-[14px] text-ellipsis whitespace-nowrap">
          <p className="leading-[20px]">Almacén Central Sur, Villa El Salvador</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#fffbeb] content-stretch flex gap-[4px] items-center px-[9px] py-[5px] relative rounded-[12px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#fef3c7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-[#f59e0b] relative rounded-[12px] shrink-0 size-[6px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b45309] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Enviado</p>
      </div>
    </div>
  );
}

function Data10() {
  return (
    <div className="relative shrink-0 w-[125.23px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[22.5px] pt-[24.5px] px-[16px] relative size-full">
        <BackgroundBorder />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[12.5px] relative shrink-0 w-[18.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="12.5" preserveAspectRatio="none" viewBox="0 0 18.3333 12.5" width="18.3333">
        <g id="Container">
          <path d={svgPaths.p2e870a60} fill="#6C797F" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[10px] pt-[4px] px-[4px] relative shrink-0" data-name="Button">
      <Container29 />
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[3.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 3.33333 13.3333" width="3.33333">
        <g id="Container">
          <path d={svgPaths.p246f4800} fill="#6C797F" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[10px] pt-[4px] px-[4px] relative shrink-0" data-name="Button">
      <Container30 />
    </div>
  );
}

function Data11() {
  return (
    <div className="relative shrink-0 w-[94.45px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4.5px] items-start justify-end px-[16px] py-[19.5px] relative size-full">
        <Button7 />
        <Button8 />
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pt-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[#dae2fd] border-solid border-t inset-0 pointer-events-none" />
      <Data6 />
      <Data7 />
      <Data8 />
      <Data9 />
      <Data10 />
      <Data11 />
    </div>
  );
}

function Data12() {
  return (
    <div className="relative shrink-0 w-[131.7px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[17px] pt-[16px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] whitespace-nowrap">
          <p className="leading-[20px] mb-0">EG01-</p>
          <p className="leading-[20px]">0004594</p>
        </div>
      </div>
    </div>
  );
}

function Data13() {
  return (
    <div className="relative shrink-0 w-[222.72px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[27px] pt-[26px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Venta sujeta a confirmación</p>
        </div>
      </div>
    </div>
  );
}

function Data14() {
  return (
    <div className="relative shrink-0 w-[143.89px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[17px] pt-[16px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c797f] text-[14px] whitespace-nowrap">
          <p className="leading-[20px] mb-0">12 Oct 2023,</p>
          <p className="leading-[20px]">10:05</p>
        </div>
      </div>
    </div>
  );
}

function Data15() {
  return (
    <div className="max-w-[200px] relative shrink-0 w-[200px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] overflow-clip pb-[27px] pt-[26px] px-[16px] relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131b2e] text-[14px] text-ellipsis whitespace-nowrap">
          <p className="leading-[20px]">Calle Las Begonias 120, San Isidro</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#fef2f2] content-stretch flex gap-[4px] items-center px-[9px] py-[5px] relative rounded-[12px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#fee2e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-[#ba1a1a] relative rounded-[12px] shrink-0 size-[6px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ba1a1a] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Rechazado</p>
      </div>
    </div>
  );
}

function Data16() {
  return (
    <div className="relative shrink-0 w-[125.23px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[22.5px] pt-[24.5px] px-[16px] relative size-full">
        <BackgroundBorder1 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[12.5px] relative shrink-0 w-[18.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="12.5" preserveAspectRatio="none" viewBox="0 0 18.3333 12.5" width="18.3333">
        <g id="Container">
          <path d={svgPaths.p2e870a60} fill="#6C797F" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[10px] pt-[4px] px-[4px] relative shrink-0" data-name="Button">
      <Container31 />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[3.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 3.33333 13.3333" width="3.33333">
        <g id="Container">
          <path d={svgPaths.p246f4800} fill="#6C797F" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[10px] pt-[4px] px-[4px] relative shrink-0" data-name="Button">
      <Container32 />
    </div>
  );
}

function Data17() {
  return (
    <div className="relative shrink-0 w-[94.45px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4.5px] items-start justify-end px-[16px] py-[19.5px] relative size-full">
        <Button9 />
        <Button10 />
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="bg-[rgba(186,26,26,0.05)] content-stretch flex items-start justify-center mb-[-1px] pt-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[#dae2fd] border-solid border-t inset-0 pointer-events-none" />
      <Data12 />
      <Data13 />
      <Data14 />
      <Data15 />
      <Data16 />
      <Data17 />
    </div>
  );
}

function Data18() {
  return (
    <div className="relative shrink-0 w-[131.7px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] whitespace-nowrap">
          <p className="leading-[20px] mb-0">EG01-</p>
          <p className="leading-[20px]">0004595</p>
        </div>
      </div>
    </div>
  );
}

function Data19() {
  return (
    <div className="relative shrink-0 w-[222.72px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[26.5px] pt-[26px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Venta sujeta a confirmación</p>
        </div>
      </div>
    </div>
  );
}

function Data20() {
  return (
    <div className="relative shrink-0 w-[143.89px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c797f] text-[14px] whitespace-nowrap">
          <p className="leading-[20px] mb-0">12 Oct 2023,</p>
          <p className="leading-[20px]">11:30</p>
        </div>
      </div>
    </div>
  );
}

function Data21() {
  return (
    <div className="max-w-[200px] relative shrink-0 w-[200px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] overflow-clip pb-[26.5px] pt-[26px] px-[16px] relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#131b2e] text-[14px] text-ellipsis whitespace-nowrap">
          <p className="leading-[20px]">Parque Industrial Mz B Lt 4, Callao</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="bg-[rgba(0,210,255,0.1)] content-stretch flex gap-[4px] items-center px-[9px] py-[5px] relative rounded-[12px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(0,210,255,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-[#00d2ff] relative rounded-[12px] shrink-0 size-[6px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#00677f] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Aceptado</p>
      </div>
    </div>
  );
}

function Data22() {
  return (
    <div className="relative shrink-0 w-[125.23px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[22px] pt-[24.5px] px-[16px] relative size-full">
        <OverlayBorder1 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[12.5px] relative shrink-0 w-[18.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="12.5" preserveAspectRatio="none" viewBox="0 0 18.3333 12.5" width="18.3333">
        <g id="Container">
          <path d={svgPaths.p2e870a60} fill="#6C797F" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[10px] pt-[4px] px-[4px] relative shrink-0" data-name="Button">
      <Container33 />
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[3.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 3.33333 13.3333" width="3.33333">
        <g id="Container">
          <path d={svgPaths.p246f4800} fill="#6C797F" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[10px] pt-[4px] px-[4px] relative shrink-0" data-name="Button">
      <Container34 />
    </div>
  );
}

function Data23() {
  return (
    <div className="relative shrink-0 w-[94.45px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4.5px] items-start justify-end pb-[19px] pt-[19.5px] px-[16px] relative size-full">
        <Button11 />
        <Button12 />
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex items-start justify-center pt-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[#dae2fd] border-solid border-t inset-0 pointer-events-none" />
      <Data18 />
      <Data19 />
      <Data20 />
      <Data21 />
      <Data22 />
      <Data23 />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Body">
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
}

function TableContentTable() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table Content → Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <HeaderRow />
        <Body />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c797f] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Mostrando 1 a 4 de 124 registros</p>
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[9px] relative shrink-0 w-[5.55px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="9" preserveAspectRatio="none" viewBox="0 0 5.55 9" width="5.55">
        <g id="Container">
          <path d={svgPaths.p1250fe00} fill="#0F172A" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center opacity-50 p-px relative rounded-[2px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <Container37 />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[9px] relative shrink-0 w-[5.55px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="9" preserveAspectRatio="none" viewBox="0 0 5.55 9" width="5.55">
        <g id="Container">
          <path d={svgPaths.p4874b00} fill="#0F172A" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-px relative rounded-[2px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <Container38 />
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <Button13 />
        <Button14 />
      </div>
    </div>
  );
}

function Pagination() {
  return (
    <div className="bg-[#faf8ff] relative shrink-0 w-full" data-name="Pagination">
      <div aria-hidden className="absolute border-[#dae2fd] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[16px] pt-[17px] px-[16px] relative size-full">
          <Container35 />
          <Container36 />
        </div>
      </div>
    </div>
  );
}

function DataTableSection() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative rounded-[8px] w-full" data-name="Data Table Section">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <TableToolbar />
        <TableContentTable />
        <Pagination />
      </div>
      <div aria-hidden className="absolute border border-[#dae2fd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-2px_rgba(0,0,0,0.03)]" />
    </div>
  );
}

function MainPageContent() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full z-[1]" data-name="Main - Page Content">
      <div className="content-stretch flex flex-col gap-[40px] items-start p-[40px] relative size-full">
        <HeaderSection />
        <DashboardWidgetsBentoGridStyle />
        <DataTableSection />
      </div>
    </div>
  );
}

function MainContentArea() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full isolate items-start min-h-[1096px] min-w-px relative" data-name="Main Content Area">
      <HeaderTopNavBar />
      <MainPageContent />
    </div>
  );
}

function InvoraLogo() {
  return (
    <div className="h-[48px] max-w-[248px] relative shrink-0 w-[78.77px]" data-name="Invora Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgInvoraLogo} />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[16px] relative size-full">
        <InvoraLogo />
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[40px] relative shrink-0 w-full" data-name="Margin">
      <Container39 />
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="Container">
          <path d={svgPaths.p2bb32400} fill="white" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-[#00d2ff] content-stretch flex gap-[7.99px] items-center justify-center py-[8px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <Container40 />
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">Nueva Venta</p>
      </div>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[40px] relative shrink-0 w-full" data-name="Button:margin">
      <Button15 />
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p20793584} fill="#3C494E" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Dashboard</p>
      </div>
    </div>
  );
}

function ItemLink() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container41 />
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Container">
          <path d={svgPaths.p643d217} fill="#3C494E" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Catálogo</p>
      </div>
    </div>
  );
}

function ItemLink1() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container43 />
          <Container44 />
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[13px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 20 13" width="20">
        <g id="Container">
          <path d={svgPaths.pa9e6b00} fill="#3C494E" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Kárdex</p>
      </div>
    </div>
  );
}

function ItemLink2() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container45 />
          <Container46 />
        </div>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 18 20" width="18">
        <g id="Container">
          <path d={svgPaths.p396ca1c0} fill="#3C494E" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Facturación</p>
      </div>
    </div>
  );
}

function ItemLink3() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container47 />
          <Container48 />
        </div>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 22 16" width="22">
        <g id="Container">
          <path d={svgPaths.p8da0700} fill="#00677F" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#00677f] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Guías (GRE)</p>
        </div>
      </div>
    </div>
  );
}

function ItemLink4() {
  return (
    <div className="bg-[rgba(0,210,255,0.1)] relative rounded-[4px] shrink-0 w-full" data-name="Item → Link">
      <div aria-hidden className="absolute border-[#00677f] border-r-4 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pl-[16px] pr-[20px] py-[8px] relative size-full">
          <Container49 />
          <Container50 />
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 22 16" width="22">
        <g id="Container">
          <path d={svgPaths.p26835240} fill="#3C494E" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Gastos</p>
      </div>
    </div>
  );
}

function ItemLink5() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container51 />
          <Container52 />
        </div>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 22 16" width="22">
        <g id="Container">
          <path d={svgPaths.p39955c80} fill="#3C494E" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Contactos</p>
      </div>
    </div>
  );
}

function ItemLink6() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container53 />
          <Container54 />
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px relative w-full" data-name="List">
      <ItemLink />
      <ItemLink1 />
      <ItemLink2 />
      <ItemLink3 />
      <ItemLink4 />
      <ItemLink5 />
      <ItemLink6 />
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20.1 20" width="20.1">
        <g id="Container">
          <path d={svgPaths.p3cdadd00} fill="#3C494E" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Configuración</p>
      </div>
    </div>
  );
}

function ItemLink7() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container55 />
          <Container56 />
        </div>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Container">
          <path d={svgPaths.p2816f2c0} fill="#3C494E" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Ayuda</p>
      </div>
    </div>
  );
}

function ItemLink8() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container57 />
          <Container58 />
        </div>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="relative shrink-0 w-full" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <ItemLink7 />
        <ItemLink8 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[25px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#dae2fd] border-solid border-t inset-0 pointer-events-none" />
      <List1 />
    </div>
  );
}

function SideNavBar() {
  return (
    <div className="absolute bg-[#faf8ff] content-stretch flex flex-col h-[1096px] items-start justify-between left-0 overflow-auto px-[16px] py-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-0 w-[280px]" data-name="SideNavBar">
      <Margin />
      <ButtonMargin />
      <List />
      <HorizontalBorder />
    </div>
  );
}

export default function GuiasDeRemisionGreInvoraIntelligence() {
  return (
    <div className="content-stretch flex items-start justify-center pl-[280px] relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(250, 248, 255) 0%, rgb(250, 248, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Guías de Remisión (GRE) - Invora Intelligence">
      <MainContentArea />
      <SideNavBar />
    </div>
  );
}