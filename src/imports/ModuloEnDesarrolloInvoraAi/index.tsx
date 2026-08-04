import svgPaths from "./svg-xazn7te37u";
import imgInvoraLogo from "./ce9b63ddec0d0540535ce820f1e5f82f6a0ab9b5.png";

function InvoraLogo() {
  return (
    <div className="h-[40px] max-w-[248px] relative shrink-0 w-[65.64px]" data-name="Invora Logo">
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
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Container">
          <path d={svgPaths.p2d8e4cc0} fill="white" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">Nueva Venta</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#00677f] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center p-[16px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
          <Container1 />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[40px] relative shrink-0 w-full" data-name="Button:margin">
      <Button />
    </div>
  );
}

function Container3() {
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

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Dashboard</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
          <Container3 />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
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

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Catálogo</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
          <Container5 />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[13px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 20 13" width="20">
        <g id="Container">
          <path d={svgPaths.pa9e6b00} fill="#00677F" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#00677f] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">Kárdex</p>
        </div>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-[rgba(0,103,127,0.1)] relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div aria-hidden className="absolute border-[#00677f] border-l-4 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pl-[20px] pr-[16px] py-[16px] relative size-full">
          <Container7 />
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
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

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Facturación</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
          <Container9 />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
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

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Guías (GRE)</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
          <Container11 />
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
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

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Gastos</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
          <Container13 />
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
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

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Contactos</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
          <Container15 />
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px relative w-full" data-name="Nav">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
      <Link4 />
      <Link5 />
      <Link6 />
    </div>
  );
}

function Container17() {
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

function Link7() {
  return (
    <div className="relative rounded-[2px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container17 />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">Configuración</p>
          </div>
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

function Link8() {
  return (
    <div className="relative rounded-[2px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container18 />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">Ayuda</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pt-[25px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#dae2fd] border-solid border-t inset-0 pointer-events-none" />
      <Link7 />
      <Link8 />
    </div>
  );
}

function AsideSideNavigationBarHiddenOnMobile() {
  return (
    <div className="absolute bg-[#faf8ff] content-stretch flex flex-col h-[1024px] items-start justify-between left-0 overflow-auto px-[16px] py-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-0 w-[280px] z-[3]" data-name="Aside - Side Navigation Bar (Hidden on Mobile)">
      <Margin />
      <ButtonMargin />
      <Nav />
      <HorizontalBorder />
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p8a35e00} fill="#6C797F" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c797f] text-[16px] w-full">
        <p className="leading-[normal]">Buscar...</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f2f3ff] content-stretch flex flex-col items-start overflow-clip px-[16px] py-[10px] relative rounded-[12px] shrink-0 w-[320px]" data-name="Input">
      <Container21 />
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container20 />
        <Input />
      </div>
    </div>
  );
}

function Container23() {
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

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[12px] shrink-0" data-name="Button">
      <Container23 />
    </div>
  );
}

function Container24() {
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

function Button2() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[12px] shrink-0" data-name="Button">
      <Container24 />
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[15.99px] items-center relative size-full">
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function HeaderTopNavigationBar() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(250,248,255,0.95)] h-[72px] relative shrink-0 w-full" data-name="Header - Top Navigation Bar">
      <div aria-hidden className="absolute border-[rgba(218,226,253,0.5)] border-b border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-px px-[40px] relative size-full">
          <Container19 />
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function HeaderTopNavigationBarMargin() {
  return (
    <div className="h-[72px] relative shrink-0 w-full z-[2]" data-name="Header - Top Navigation Bar:margin">
      <div className="content-stretch flex flex-col items-start pl-[280px] relative size-full">
        <HeaderTopNavigationBar />
      </div>
    </div>
  );
}

function MainContentCanvasModuleInConstructionPaints() {
  return <div className="absolute bg-[#faf8ff] inset-0" data-name="Main Content Canvas (Module in Construction) paints" />;
}

function SvgInnerNodeRing() {
  return (
    <div className="absolute left-[16px] size-[224px] top-[16px]" data-name="SVG - Inner Node Ring">
      <svg className="absolute block inset-0 size-full" fill="none" height="224" preserveAspectRatio="none" viewBox="0 0 224 224" width="224">
        <g id="SVG - Inner Node Ring">
          <path d={svgPaths.p23485700} id="Vector" stroke="#00D2FF" strokeOpacity="0.3" strokeWidth="2.1" />
          <path d={svgPaths.p1b750100} fill="#00D2FF" fillOpacity="0.3" id="Vector_2" />
          <path d={svgPaths.p3d064500} fill="#00D2FF" fillOpacity="0.3" id="Vector_3" />
          <path d={svgPaths.p1dc1cb00} fill="#00D2FF" fillOpacity="0.3" id="Vector_4" />
          <path d={svgPaths.p2a662f80} fill="#00D2FF" fillOpacity="0.3" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[45px] relative shrink-0 w-[54.75px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="45" preserveAspectRatio="none" viewBox="0 0 54.75 45" width="54.75">
        <g id="Container">
          <path d={svgPaths.p19155180} fill="#00D2FF" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function CoreElement() {
  return (
    <div className="bg-[#faf8ff] content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[128px]" data-name="Core Element">
      <div aria-hidden className="absolute border border-[#dae2fd] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-1/2 rounded-[12px] shadow-[0px_20px_25px_-5px_rgba(0,103,127,0.1)] size-[128px] top-1/2" data-name="Core Element:shadow" />
      <Container26 />
      <div className="absolute bg-[#00d2ff] right-[9px] rounded-[12px] shadow-[0px_0px_10px_0px_#00d2ff] size-[12px] top-[9px]" data-name="Intelligence Indicator Dot" />
    </div>
  );
}

function IllustrationArea() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[256px]" data-name="Illustration Area">
      <svg className="absolute block inset-0 size-full" fill="none" height="256" preserveAspectRatio="none" viewBox="0 0 256 256" width="256">
        <g id="SVG - Outer Node Ring">
          <path d={svgPaths.pee6b980} id="Vector" stroke="#DAE2FD" strokeDasharray="5.12 5.12" strokeOpacity="0.5" strokeWidth="1.28" />
          <path d={svgPaths.p23d5c300} fill="#DAE2FD" fillOpacity="0.5" id="Vector_2" />
          <path d={svgPaths.p3b54cbc0} fill="#DAE2FD" fillOpacity="0.5" id="Vector_3" />
          <path d={svgPaths.p22d54600} fill="#DAE2FD" fillOpacity="0.5" id="Vector_4" />
        </g>
      </svg>
      <SvgInnerNodeRing />
      <CoreElement />
    </div>
  );
}

function IllustrationAreaMargin() {
  return (
    <div className="content-stretch flex flex-col h-[272px] items-start pb-[16px] relative shrink-0 w-[256px]" data-name="Illustration Area:margin">
      <IllustrationArea />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[48px] text-center tracking-[-0.96px] whitespace-nowrap">
        <p className="leading-[56px] mb-0">Estamos optimizando este</p>
        <p className="leading-[56px]">módulo</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[512px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[26px] mb-0">Pronto tendrás acceso a nuevas funcionalidades de inteligencia</p>
        <p className="leading-[26px]">para tu negocio. Nuestro equipo está ajustando los últimos detalles.</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="content-stretch flex flex-col items-start px-[80px] relative size-full">
        <Container27 />
      </div>
    </div>
  );
}

function Typography() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Typography">
      <Heading />
      <Margin1 />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[20.05px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20.05" preserveAspectRatio="none" viewBox="0 0 20 20.05" width="20">
        <g id="Container">
          <path d={svgPaths.p3f50100} fill="white" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonCta() {
  return (
    <div className="bg-[#00d2ff] content-stretch drop-shadow-[0px_0px_7.5px_rgba(0,210,255,0.4)] flex gap-[7.99px] items-center px-[40px] py-[16px] relative rounded-[2px] shrink-0" data-name="Button - CTA">
      <Container28 />
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">Notificarme al activar</p>
      </div>
    </div>
  );
}

function ButtonCtaMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0" data-name="Button - CTA:margin">
      <ButtonCta />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[672px] relative shrink-0 w-[672px]" data-name="Container">
      <IllustrationAreaMargin />
      <Typography />
      <ButtonCtaMargin />
    </div>
  );
}

function MainContentCanvasModuleInConstruction() {
  return (
    <div className="relative shrink-0 w-full" data-name="Main Content Canvas (Module in Construction)">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[40px] py-[194px] relative size-full">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,210,255,0.05)] blur-[50px] left-1/2 rounded-[12px] size-[600px] top-1/2" data-name="Abstract Background Elements" />
          <div className="absolute bg-[rgba(0,103,127,0.05)] blur-[40px] bottom-[43.49%] left-[45%] right-1/4 rounded-[12px] top-1/4" data-name="Overlay+Blur" />
          <MainContentCanvasModuleInConstructionPaints />
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function MainContentCanvasModuleInConstructionMargin() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Main Content Canvas (Module in Construction):margin">
      <div className="content-stretch flex flex-col items-start pl-[280px] relative size-full">
        <MainContentCanvasModuleInConstruction />
      </div>
    </div>
  );
}

export default function ModuloEnDesarrolloInvoraAi() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(250, 248, 255) 0%, rgb(250, 248, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Módulo en Desarrollo - Invora AI">
      <AsideSideNavigationBarHiddenOnMobile />
      <HeaderTopNavigationBarMargin />
      <MainContentCanvasModuleInConstructionMargin />
    </div>
  );
}