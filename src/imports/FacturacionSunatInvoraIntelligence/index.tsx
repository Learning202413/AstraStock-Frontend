import svgPaths from "./svg-nss2t82baa";
import imgInvoraLogo from "./207da6590921f813adc07c350558581abc4e5060.png";

function InvoraLogo() {
  return (
    <div className="h-[48px] max-w-[248px] relative shrink-0 w-[78.77px]" data-name="Invora Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgInvoraLogo} />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] relative size-full">
          <InvoraLogo />
        </div>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[40px] relative shrink-0 w-full" data-name="Margin">
      <Container />
    </div>
  );
}

function Container1() {
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

function Button() {
  return (
    <div className="bg-[#00d2ff] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[7.99px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <Container1 />
          <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
            <p className="leading-[24px]">Nueva Venta</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-name="Button:margin">
      <Button />
    </div>
  );
}

function Container2() {
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

function Container3() {
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
          <Container2 />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
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

function Container5() {
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
          <Container4 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
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

function Container7() {
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
          <Container6 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 18 20" width="18">
        <g id="Container">
          <path d={svgPaths.p23f62780} fill="#00677F" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#00677f] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Facturación</p>
        </div>
      </div>
    </div>
  );
}

function ItemLink3() {
  return (
    <div className="bg-[rgba(0,210,255,0.1)] relative rounded-[4px] shrink-0 w-full" data-name="Item → Link">
      <div aria-hidden className="absolute border-[#00677f] border-r-4 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pl-[16px] pr-[20px] py-[8px] relative size-full">
          <Container8 />
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 22 16" width="22">
        <g id="Container">
          <path d={svgPaths.p146eb80} fill="#3C494E" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Guías (GRE)</p>
      </div>
    </div>
  );
}

function ItemLink4() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container10 />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
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

function Container13() {
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
          <Container12 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
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

function Container15() {
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
          <Container14 />
          <Container15 />
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

function Container16() {
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

function Container17() {
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
          <Container16 />
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
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

function Container19() {
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
          <Container18 />
          <Container19 />
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
    <div className="content-stretch flex flex-col items-start pt-[9px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#dae2fd] border-solid border-t inset-0 pointer-events-none" />
      <List1 />
    </div>
  );
}

function SideNavBar() {
  return (
    <div className="absolute bg-[#faf8ff] content-stretch flex flex-col h-[1024px] items-start justify-between left-0 overflow-auto px-[16px] py-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-0 w-[280px] z-[3]" data-name="SideNavBar">
      <Margin />
      <ButtonMargin />
      <List />
      <HorizontalBorder />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#00677f] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">Invora Intelligence</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c797f] text-[14px] w-full">
          <p className="leading-[normal]">Buscar comprobantes...</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-[256px]" data-name="Input">
      <div className="content-stretch flex items-start justify-center overflow-clip pb-[11px] pl-[41px] pr-[17px] pt-[10px] relative rounded-[inherit] size-full">
        <Container22 />
      </div>
      <div aria-hidden className="absolute border border-[#bbc9cf] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bottom-[18.42%] content-stretch flex flex-col items-start left-[8px] top-[18.42%]" data-name="Container">
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
          <path d={svgPaths.p8a35e00} fill="#6C797F" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Input />
      <Container23 />
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Heading />
        <Container21 />
      </div>
    </div>
  );
}

function Container25() {
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

function ButtonNotificaciones() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[14px] pt-[8px] px-[8px] relative rounded-[12px] shrink-0" data-name="Button - Notificaciones">
      <Container25 />
    </div>
  );
}

function Container26() {
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

function ButtonPerfil() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[14px] pt-[8px] px-[8px] relative rounded-[12px] shrink-0" data-name="Button - Perfil">
      <Container26 />
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.99px] items-center relative size-full">
        <ButtonNotificaciones />
        <ButtonPerfil />
      </div>
    </div>
  );
}

function HeaderTopNavBar() {
  return (
    <div className="backdrop-blur-[6px] bg-[#faf8ff] h-[72px] relative shrink-0 w-full" data-name="Header - TopNavBar">
      <div aria-hidden className="absolute border-[#dae2fd] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-px px-[24px] relative size-full">
          <Container20 />
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function HeaderTopNavBarMargin() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start pl-[280px] relative shrink-0 w-[1560px] z-[2]" data-name="Header - TopNavBar:margin">
      <HeaderTopNavBar />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[32px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[40px]">{`Facturación & SUNAT`}</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Gestión de comprobantes electrónicos emitidos.</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Heading1 />
      <Container29 />
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Container">
          <path d={svgPaths.p38806900} fill="#131B2E" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center px-[17px] py-[9px] relative rounded-[2px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#bbc9cf] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <Container31 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Exportar</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Button1 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container28 />
      <Container30 />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3c494e] text-[12px] tracking-[0.6px] w-full">
        <p className="leading-[16px]">Rango de Fechas</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-full">
          <p className="leading-[20px]">01/10/2023 - 31/10/2023</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#faf8ff] relative rounded-[2px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[41px] pr-[9px] py-[5px] relative size-full">
          <Container34 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#bbc9cf] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute bottom-[20%] content-stretch flex flex-col items-start left-[8px] top-[20%]" data-name="Container">
      <div className="h-[15px] relative shrink-0 w-[13.5px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 13.5 15" width="13.5">
          <path d={svgPaths.p3b95cda0} fill="#6C797F" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input1 />
      <Container35 />
    </div>
  );
}

function Container32() {
  return (
    <div className="min-w-[200px] relative shrink-0 w-[284.66px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start min-w-[inherit] relative size-full">
        <Label />
        <Container33 />
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3c494e] text-[12px] tracking-[0.6px] w-full">
        <p className="leading-[16px]">Tipo de Documento</p>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="image">
      <svg className="absolute block inset-0 size-full" fill="none" height="21" preserveAspectRatio="none" viewBox="0 0 21 21" width="21">
        <g id="image">
          <path d="M6.3 8.4L10.5 12.6L14.7 8.4" id="Vector" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.575" />
        </g>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-full">
          <p className="leading-[20px]">Todos los documentos</p>
        </div>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="bg-[#faf8ff] relative rounded-[2px] shrink-0 w-full" data-name="Options">
      <div aria-hidden className="absolute border border-[#bbc9cf] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[9px] py-[5px] relative size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip pl-[254.67px] pr-[9px] py-[4.5px] relative rounded-[inherit] size-full">
            <Image />
          </div>
          <Container37 />
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="min-w-[200px] relative shrink-0 w-[284.67px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start min-w-[inherit] relative size-full">
        <Label1 />
        <Options />
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3c494e] text-[12px] tracking-[0.6px] w-full">
        <p className="leading-[16px]">Estado SUNAT</p>
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="image">
      <svg className="absolute block inset-0 size-full" fill="none" height="21" preserveAspectRatio="none" viewBox="0 0 21 21" width="21">
        <g id="image">
          <path d="M6.3 8.4L10.5 12.6L14.7 8.4" id="Vector" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.575" />
        </g>
      </svg>
    </div>
  );
}

function Container39() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-full">
          <p className="leading-[20px]">Todos los estados</p>
        </div>
      </div>
    </div>
  );
}

function Options1() {
  return (
    <div className="bg-[#faf8ff] relative rounded-[2px] shrink-0 w-full" data-name="Options">
      <div aria-hidden className="absolute border border-[#bbc9cf] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[9px] py-[5px] relative size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip pl-[254.67px] pr-[9px] py-[4.5px] relative rounded-[inherit] size-full">
            <Image1 />
          </div>
          <Container39 />
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="min-w-[200px] relative shrink-0 w-[284.67px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start min-w-[inherit] relative size-full">
        <Label2 />
        <Options1 />
      </div>
    </div>
  );
}

function Filters() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Filters">
      <div aria-hidden className="absolute border border-[#dae2fd] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-end justify-center p-[17px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05)]" data-name="Filters:shadow" />
          <Container32 />
          <Container36 />
          <Container38 />
        </div>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="relative shrink-0 w-[131.25px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3c494e] text-[12px] tracking-[0.6px] whitespace-nowrap">
          <p className="leading-[16px]">Fecha</p>
        </div>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="relative shrink-0 w-[165.28px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3c494e] text-[12px] tracking-[0.6px] whitespace-nowrap">
          <p className="leading-[16px]">Comprobante</p>
        </div>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="relative shrink-0 w-[245.03px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3c494e] text-[12px] tracking-[0.6px] whitespace-nowrap">
          <p className="leading-[16px]">Cliente</p>
        </div>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="relative shrink-0 w-[125.47px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[16px] py-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3c494e] text-[12px] text-right tracking-[0.6px] whitespace-nowrap">
          <p className="leading-[16px]">Total (S/)</p>
        </div>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="relative shrink-0 w-[143.25px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3c494e] text-[12px] tracking-[0.6px] whitespace-nowrap">
          <p className="leading-[16px]">Estado SUNAT</p>
        </div>
      </div>
    </div>
  );
}

function Cell5() {
  return (
    <div className="relative shrink-0 w-[107.72px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[16px] py-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3c494e] text-[12px] text-right tracking-[0.6px] whitespace-nowrap">
          <p className="leading-[16px]">Acciones</p>
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
    <div className="relative shrink-0 w-[131.25px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[13px] pt-[12px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">24 Oct 2023</p>
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 12 13.3333" width="12">
        <g id="Container">
          <path d={svgPaths.p385f3380} fill="#6C797F" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Data1() {
  return (
    <div className="relative shrink-0 w-[149.28px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center pl-[16px] relative size-full">
        <Container40 />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">F001-000452</p>
        </div>
      </div>
    </div>
  );
}

function Data2() {
  return (
    <div className="relative shrink-0 w-[261.03px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[13px] pl-[32px] pr-[16px] pt-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">TechCorp Latam S.A.C.</p>
        </div>
      </div>
    </div>
  );
}

function Data3() {
  return (
    <div className="relative shrink-0 w-[125.47px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[13px] pt-[12px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[20px]">4,520.00</p>
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#e2e7ff] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Background">
      <div className="bg-[#00d2ff] relative rounded-[12px] shrink-0 size-[6px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#00677f] text-[11px] tracking-[0.275px] whitespace-nowrap">
        <p className="leading-[20px]">Aceptado</p>
      </div>
    </div>
  );
}

function Data4() {
  return (
    <div className="relative shrink-0 w-[143.25px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[8.5px] relative size-full">
        <Background />
      </div>
    </div>
  );
}

function Container41() {
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

function Button2() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[5px] relative shrink-0" data-name="Button">
      <Container41 />
    </div>
  );
}

function Data5() {
  return (
    <div className="relative shrink-0 w-[107.72px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[16px] py-[10px] relative size-full">
        <Button2 />
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-center justify-center mb-[-1px] pb-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[#dae2fd] border-b border-solid inset-0 pointer-events-none" />
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
    <div className="relative shrink-0 w-[131.25px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[13px] pt-[12px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">23 Oct 2023</p>
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 12 13.3333" width="12">
        <g id="Container">
          <path d={svgPaths.p8a865c0} fill="#6C797F" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Data7() {
  return (
    <div className="relative shrink-0 w-[149.28px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center pl-[16px] relative size-full">
        <Container42 />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">B002-000189</p>
        </div>
      </div>
    </div>
  );
}

function Data8() {
  return (
    <div className="relative shrink-0 w-[261.03px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[13px] pl-[32px] pr-[16px] pt-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Juan Pérez Gonzáles</p>
        </div>
      </div>
    </div>
  );
}

function Data9() {
  return (
    <div className="relative shrink-0 w-[125.47px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[13px] pt-[12px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[20px]">150.50</p>
        </div>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#e2e7ff] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Background">
      <div className="bg-[#00d2ff] relative rounded-[12px] shrink-0 size-[6px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#00677f] text-[11px] tracking-[0.275px] whitespace-nowrap">
        <p className="leading-[20px]">Aceptado</p>
      </div>
    </div>
  );
}

function Data10() {
  return (
    <div className="relative shrink-0 w-[143.25px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[8.5px] relative size-full">
        <Background1 />
      </div>
    </div>
  );
}

function Container43() {
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

function Button3() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[5px] relative shrink-0" data-name="Button">
      <Container43 />
    </div>
  );
}

function Data11() {
  return (
    <div className="relative shrink-0 w-[107.72px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[16px] py-[10px] relative size-full">
        <Button3 />
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-center justify-center mb-[-1px] pb-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[#dae2fd] border-b border-solid inset-0 pointer-events-none" />
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
    <div className="relative shrink-0 w-[131.25px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[19px] pt-[18px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">22 Oct 2023</p>
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 12 13.3333" width="12">
        <g id="Container">
          <path d={svgPaths.p16868180} fill="#6C797F" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Container45 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">FC01-000012</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[11px] w-full">
        <p className="leading-[20px]">Nota de Crédito</p>
      </div>
    </div>
  );
}

function Data13() {
  return (
    <div className="relative shrink-0 w-[165.28px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[8px] relative size-full">
        <Container44 />
        <Container46 />
      </div>
    </div>
  );
}

function Data14() {
  return (
    <div className="relative shrink-0 w-[245.03px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[19px] pt-[18px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Inversiones del Norte S.R.L.</p>
        </div>
      </div>
    </div>
  );
}

function Data15() {
  return (
    <div className="relative shrink-0 w-[125.47px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[19px] pt-[18px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ba1a1a] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[20px]">-1,200.00</p>
        </div>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#ffdad6] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Background">
      <div className="bg-[#ba1a1a] relative rounded-[12px] shrink-0 size-[6px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#93000a] text-[11px] tracking-[0.275px] whitespace-nowrap">
        <p className="leading-[20px]">Rechazado</p>
      </div>
    </div>
  );
}

function Data16() {
  return (
    <div className="relative shrink-0 w-[143.25px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[14.5px] relative size-full">
        <Background2 />
      </div>
    </div>
  );
}

function Container47() {
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

function Button4() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[5px] relative shrink-0" data-name="Button">
      <Container47 />
    </div>
  );
}

function Data17() {
  return (
    <div className="relative shrink-0 w-[107.72px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end p-[16px] relative size-full">
        <Button4 />
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pb-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[#dae2fd] border-b border-solid inset-0 pointer-events-none" />
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
    <div className="relative shrink-0 w-[131.25px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[13px] pt-[12px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">22 Oct 2023</p>
        </div>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 12 13.3333" width="12">
        <g id="Container">
          <path d={svgPaths.p385f3380} fill="#6C797F" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Data19() {
  return (
    <div className="relative shrink-0 w-[149.28px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center pl-[16px] relative size-full">
        <Container48 />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">F001-000451</p>
        </div>
      </div>
    </div>
  );
}

function Data20() {
  return (
    <div className="relative shrink-0 w-[261.03px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[13px] pl-[32px] pr-[16px] pt-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Global Logistics S.A.</p>
        </div>
      </div>
    </div>
  );
}

function Data21() {
  return (
    <div className="relative shrink-0 w-[125.47px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[13px] pt-[12px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[20px]">8,950.00</p>
        </div>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#d2d9f4] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Background">
      <div className="bg-[#6c797f] relative rounded-[12px] shrink-0 size-[6px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[11px] tracking-[0.275px] whitespace-nowrap">
        <p className="leading-[20px]">Pendiente</p>
      </div>
    </div>
  );
}

function Data22() {
  return (
    <div className="relative shrink-0 w-[143.25px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[8.5px] relative size-full">
        <Background3 />
      </div>
    </div>
  );
}

function Container49() {
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

function Button5() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[5px] relative shrink-0" data-name="Button">
      <Container49 />
    </div>
  );
}

function Data23() {
  return (
    <div className="relative shrink-0 w-[107.72px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[16px] py-[10px] relative size-full">
        <Button5 />
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex items-center justify-center pb-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[#dae2fd] border-b border-solid inset-0 pointer-events-none" />
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

function Table() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <HeaderRow />
        <Body />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Mostrando 1 a 4 de 128 comprobantes</p>
        </div>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[9px] relative shrink-0 w-[5.55px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="9" preserveAspectRatio="none" viewBox="0 0 5.55 9" width="5.55">
        <g id="Container">
          <path d={svgPaths.p1250fe00} fill="#3C494E" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[32px]" data-name="Button">
      <Container52 />
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[rgba(0,210,255,0.1)] content-stretch flex items-center justify-center pb-[6.5px] pt-[5.5px] relative rounded-[2px] shrink-0 size-[32px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#00677f] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">1</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[6.5px] pt-[5.5px] relative rounded-[2px] shrink-0 size-[32px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">2</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[6.5px] pt-[5.5px] relative rounded-[2px] shrink-0 size-[32px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">3</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[9px] relative shrink-0 w-[5.55px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="9" preserveAspectRatio="none" viewBox="0 0 5.55 9" width="5.55">
        <g id="Container">
          <path d={svgPaths.p4874b00} fill="#3C494E" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[32px]" data-name="Button">
      <Container53 />
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">
        <Button6 />
        <Button7 />
        <Button8 />
        <Button9 />
        <Button10 />
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="bg-[#faf8ff] relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#dae2fd] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[8px] pt-[9px] px-[16px] relative size-full">
          <Container50 />
          <Container51 />
        </div>
      </div>
    </div>
  );
}

function DataTable() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Data Table">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Table />
        <BackgroundHorizontalBorder />
      </div>
      <div aria-hidden className="absolute border border-[#dae2fd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function MainContent() {
  return (
    <div className="bg-[#faf8ff] min-h-[952px] relative shrink-0 w-full z-[1]" data-name="Main Content">
      <div className="content-stretch flex flex-col gap-[24px] items-start min-h-[inherit] pb-[440px] pt-[40px] px-[40px] relative size-full">
        <Container27 />
        <Filters />
        <DataTable />
      </div>
    </div>
  );
}

export default function FacturacionSunatInvoraIntelligence() {
  return (
    <div className="content-stretch flex flex-col isolate items-center pl-[280px] relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(250, 248, 255) 0%, rgb(250, 248, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Facturación & SUNAT - Invora Intelligence">
      <SideNavBar />
      <HeaderTopNavBarMargin />
      <MainContent />
    </div>
  );
}