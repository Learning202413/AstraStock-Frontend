import svgPaths from "./svg-poein6joux";
import imgInvoraLogo from "./1819d7e43c41a7a5e0c0b8ecd6db2c36c57d0a60.png";

function Margin() {
  return (
    <div className="h-[18px] relative shrink-0 w-[26px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 26 18" width="26">
        <g id="Margin">
          <path d={svgPaths.p8a35e00} fill="#6C797F" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-full">
        <p className="leading-[normal]">Buscar movimientos, productos o documentos...</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[6px] pt-[5px] px-[12px] relative size-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-[#faf8ff] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0 w-[384px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#bbc9cf] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[17px] py-[5px] relative size-full">
        <Margin />
        <Input />
      </div>
    </div>
  );
}

function Container2() {
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
    <div className="content-stretch flex flex-col items-center justify-center pb-[14px] pt-[8px] px-[8px] relative rounded-[12px] shrink-0" data-name="Button">
      <Container2 />
      <div className="absolute bg-[#00d2ff] right-[7.99px] rounded-[12px] size-[8px] top-[8px]" data-name="Background" />
    </div>
  );
}

function Container3() {
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
    <div className="content-stretch flex flex-col items-center justify-center pb-[14px] pt-[8px] px-[8px] relative rounded-[12px] shrink-0" data-name="Button">
      <Container3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.99px] items-center relative size-full">
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
          <BackgroundBorderShadow />
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[32px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[40px]">Kárdex Valorizado</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[12.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 12.6667 13.3333" width="12.6667">
        <g id="Container">
          <path d={svgPaths.p24d11980} fill="#6C797F" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c797f] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">SKU: PROD-8924-A1 · Laptops Dell XPS 15</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[3.5px] items-start relative shrink-0" data-name="Container">
      <Heading />
      <Container5 />
    </div>
  );
}

function Container8() {
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

function Button2() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[4px] items-center px-[17px] py-[9px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#bbc9cf] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container8 />
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Exportar CSV</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 10.5 10.5" width="10.5">
        <g id="Container">
          <path d={svgPaths.p38ac19c0} fill="white" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#00d2ff] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[4px] items-center pb-[9.5px] pt-[8.5px] px-[16px] relative rounded-[4px] shrink-0" data-name="Button">
      <Container9 />
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">Nuevo Ajuste</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
      <Button2 />
      <Button3 />
    </div>
  );
}

function PageHeader() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Page Header">
      <Container4 />
      <Container7 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Overlay">
      <svg className="absolute block inset-0 size-full" fill="none" height="28" preserveAspectRatio="none" viewBox="0 0 28 28" width="28">
        <g id="Overlay">
          <rect fill="#00D2FF" fillOpacity="0.1" height="28" rx="6" width="28" />
          <path d={svgPaths.p2291db80} fill="#00D2FF" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6c797f] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">STOCK ACTUAL</p>
      </div>
      <Overlay />
    </div>
  );
}

function Margin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Container10 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid leading-[0] relative size-full whitespace-nowrap">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-bold justify-center left-0 text-[#131b2e] text-[48px] top-[27.5px] tracking-[-0.96px]">
          <p className="leading-[56px]">142</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center left-[86.27px] not-italic text-[#6c797f] text-[14px] top-[38.5px]">
          <p className="leading-[20px]">unidades</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-white min-h-[140px] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between min-h-[inherit] p-[25px] relative size-full">
          <Margin1 />
          <Paragraph />
          <div className="absolute bg-gradient-to-r bottom-px from-[#00d2ff] h-[4px] left-px right-[1.01px] to-[#6c98ff]" data-name="Gradient" />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-2px_rgba(0,0,0,0.03)]" />
    </div>
  );
}

function Overlay1() {
  return (
    <div className="h-[26px] relative shrink-0 w-[17.35px]" data-name="Overlay">
      <svg className="absolute block inset-0 size-full" fill="none" height="26" preserveAspectRatio="none" viewBox="0 0 17.35 26" width="17.35">
        <g id="Overlay">
          <rect fill="#2559BD" fillOpacity="0.1" height="26" rx="6" width="17.35" />
          <path d={svgPaths.p160ddd00} fill="#2559BD" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6c797f] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">VALORIZACIÓN TOTAL</p>
      </div>
      <Overlay1 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Container11 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid leading-[0] relative size-full whitespace-nowrap">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-bold justify-center left-0 text-[#131b2e] text-[48px] top-[27.5px] tracking-[-0.96px]">
          <p className="leading-[56px]">$170,400</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center left-[200.52px] not-italic text-[#6c797f] text-[14px] top-[38.5px]">
          <p className="leading-[20px]">USD</p>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[7px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="7" preserveAspectRatio="none" viewBox="0 0 11.6667 7" width="11.6667">
        <g id="Container">
          <path d={svgPaths.pde19380} fill="#059669" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#059669] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">+5.2% este mes</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#d1fae5] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Background">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <Background />
      </div>
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div className="bg-white min-h-[140px] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between min-h-[inherit] pb-[7px] pt-[25px] px-[25px] relative size-full">
          <Margin2 />
          <Paragraph1 />
          <Margin3 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-2px_rgba(0,0,0,0.03)]" />
    </div>
  );
}

function KpiCardsColumn() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[24px] items-start justify-center justify-self-stretch relative row-1 self-start shrink-0" data-name="KPI Cards (Column 1)">
      <BackgroundBorderShadow1 />
      <BackgroundBorderShadow2 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[18px] whitespace-nowrap">
        <p className="leading-[24px]">Tendencia de Stock y Valor</p>
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

function ImageClip() {
  return (
    <div className="absolute inset-[0_-0.39px_0_0]" data-name="image clip">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip pl-[91px] pr-[9px] py-[4.5px] relative rounded-[inherit] size-full">
        <Image />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Últimos 30 días</p>
        </div>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="bg-[#faf8ff] relative rounded-[6px] self-stretch shrink-0" data-name="Options">
      <div aria-hidden className="absolute border border-[#bbc9cf] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[9px] py-[5px] relative size-full">
          <ImageClip />
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Options />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container15 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Container14 />
      </div>
    </div>
  );
}

function SvgLineaDeTendenciaSVgSimulada() {
  return (
    <div className="absolute h-[224px] left-0 overflow-clip right-[-0.01px] top-0" data-name="SVG - Línea de tendencia SVg simulada">
      <div className="absolute inset-[20%_0]" data-name="Vector">
        <div className="absolute inset-[-4.08%_-1.4%_-10.33%_-1.15%]">
          <svg className="block size-full" fill="none" height="153.757" preserveAspectRatio="none" viewBox="0 0 569.485 153.757" width="569.485">
            <g filter="url(#filter0_d_0_18)" id="Vector">
              <path d={svgPaths.p11e339b0} stroke="#00D2FF" strokeWidth="7.7934" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="153.757" id="filter0_d_0_18" width="569.485" x="-2.08616e-07" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="3" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.823529 0 0 0 0 1 0 0 0 0.3 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_18" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_18" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[20%_0_0_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="179.2" preserveAspectRatio="none" viewBox="0 0 555.34 179.2" width="555.34">
          <path d={svgPaths.p377d2b80} fill="url(#paint0_linear_0_46)" id="Vector" opacity="0.1" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_46" x1="0" x2="0" y1="0" y2="179.2">
              <stop stopColor="#00D2FF" />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[58%_48%_38%_48%]" data-name="Vector">
        <div className="absolute inset-[-32.62%_-13.16%]">
          <svg className="block size-full" fill="none" height="14.805" preserveAspectRatio="none" viewBox="0 0 28.0587 14.805" width="28.0587">
            <g id="Vector">
              <path d={svgPaths.p15fd7f00} fill="white" />
              <path d={svgPaths.p15fd7f00} stroke="#00D2FF" strokeWidth="5.84505" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[18%_-2%_78%_98%]" data-name="Vector">
        <div className="absolute inset-[-32.62%_-13.16%]">
          <svg className="block size-full" fill="none" height="14.805" preserveAspectRatio="none" viewBox="0 0 28.0587 14.805" width="28.0587">
            <g id="Vector">
              <path d={svgPaths.p15fd7f00} fill="white" />
              <path d={svgPaths.p15fd7f00} stroke="#00D2FF" strokeWidth="5.84505" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6c797f] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">01/10</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6c797f] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">15/10</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6c797f] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">30/10</p>
      </div>
    </div>
  );
}

function EtiquetasX() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-start justify-between left-0 pt-[4px] px-[4px] right-[-0.01px]" data-name="Etiquetas X">
      <Container17 />
      <Container18 />
      <Container19 />
    </div>
  );
}

function SimulacionDeGraficoPlaceholderVisual() {
  return (
    <div className="h-[248px] relative shrink-0 w-full" data-name="Simulación de Gráfico (Placeholder Visual)">
      <div className="absolute bg-[#bbc9cf] bottom-[24px] left-0 top-0 w-px" data-name="Ejes" />
      <div className="absolute bg-[#bbc9cf] bottom-[24px] h-px left-0 right-[-0.01px]" data-name="Horizontal Divider" />
      <div className="absolute bg-[rgba(187,201,207,0.3)] h-px left-0 right-[-0.01px] top-0" data-name="Líneas guía horizontales" />
      <div className="absolute bg-[rgba(187,201,207,0.3)] bottom-[74.6%] left-0 right-[-0.01px] top-1/4" data-name="Horizontal Divider" />
      <div className="-translate-y-1/2 absolute bg-[rgba(187,201,207,0.3)] h-px left-0 right-[-0.01px] top-[calc(50%+0.5px)]" data-name="Horizontal Divider" />
      <div className="absolute bg-[rgba(187,201,207,0.3)] bottom-[24.6%] left-0 right-[-0.01px] top-3/4" data-name="Horizontal Divider" />
      <SvgLineaDeTendenciaSVgSimulada />
      <EtiquetasX />
    </div>
  );
}

function SimulacionDeGraficoPlaceholderVisualMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Simulación de Gráfico (Placeholder Visual):margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <SimulacionDeGraficoPlaceholderVisual />
      </div>
    </div>
  );
}

function GraficoColumns() {
  return (
    <div className="bg-white col-[2/span_2] justify-self-stretch min-h-[300px] relative rounded-[8px] row-1 self-start shrink-0" data-name="Gráfico (Columns 2 & 3)">
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start min-h-[inherit] p-[25px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.01px_0_0] rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-2px_rgba(0,0,0,0.03)]" data-name="Gráfico (Columns 2 & 3):shadow" />
        <Margin4 />
        <SimulacionDeGraficoPlaceholderVisualMargin />
      </div>
    </div>
  );
}

function BentoGridResumenYGrafico() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_352px] relative shrink-0 w-full" data-name="Bento Grid - Resumen y Gráfico">
      <KpiCardsColumn />
      <GraficoColumns />
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[18px] whitespace-nowrap">
          <p className="leading-[24px]">Historial de Movimientos</p>
        </div>
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

function Container22() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[0.92px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Todos los tipos</p>
        </div>
      </div>
    </div>
  );
}

function Options1() {
  return (
    <div className="bg-white content-stretch flex items-center pl-[41px] pr-[17px] py-[5px] relative rounded-[6px] shrink-0" data-name="Options">
      <div aria-hidden className="absolute border border-[#bbc9cf] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip pl-[129px] pr-[9px] py-[4.5px] relative rounded-[inherit] size-full">
        <Image1 />
      </div>
      <Container22 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bottom-[20%] content-stretch flex flex-col items-start left-[8px] top-[20%]" data-name="Container">
      <div className="h-[9px] relative shrink-0 w-[13.5px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="9" preserveAspectRatio="none" viewBox="0 0 13.5 9" width="13.5">
          <path d={svgPaths.p1b72c490} fill="#6C797F" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <Options1 />
      <Container23 />
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Container21 />
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="bg-[#faf8ff] relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[17px] pt-[16px] px-[16px] relative size-full">
          <Heading2 />
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="relative shrink-0 w-[156.69px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6c797f] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">FECHA / HORA</p>
        </div>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="relative shrink-0 w-[227.05px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6c797f] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">DOCUMENTO REF.</p>
        </div>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="relative shrink-0 w-[132.25px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6c797f] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">TIPO</p>
        </div>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="relative shrink-0 w-[117.77px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[16px] py-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6c797f] text-[12px] text-right tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">CANTIDAD</p>
        </div>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="relative shrink-0 w-[137.23px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[16px] py-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6c797f] text-[12px] text-right tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">VALOR ANT.</p>
        </div>
      </div>
    </div>
  );
}

function Cell5() {
  return (
    <div className="relative shrink-0 w-[147.02px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[16px] py-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6c797f] text-[12px] text-right tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">VALOR NUEVO</p>
        </div>
      </div>
    </div>
  );
}

function HeaderRow() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-start justify-center mb-[-1px] pb-px relative shrink-0 w-full" data-name="Header → Row">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Cell />
      <Cell1 />
      <Cell2 />
      <Cell3 />
      <Cell4 />
      <Cell5 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-full">
        <p className="leading-[20px]">24 Oct, 2023</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c797f] text-[12px] w-full">
        <p className="leading-[16px]">14:30 hrs</p>
      </div>
    </div>
  );
}

function Data() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start px-[16px] py-[16.5px] relative shrink-0 w-[156.69px]" data-name="Data">
      <Container24 />
      <Container25 />
    </div>
  );
}

function Container27() {
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

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#00677f] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">FAC-001-492</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[150px] overflow-clip relative shrink-0 w-[150px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#6c797f] text-[12px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px]">Proveedor Compumax S.A.</p>
      </div>
    </div>
  );
}

function Data1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start px-[16px] py-[16.5px] relative shrink-0 w-[227.05px]" data-name="Data">
      <Container26 />
      <Container29 />
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
        <g id="Container">
          <path d={svgPaths.p25217600} fill="#166534" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Background">
      <Container30 />
      <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#166534] text-[10px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">ENTRADA</p>
      </div>
    </div>
  );
}

function Data2() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] py-[21.5px] relative shrink-0 w-[132.25px]" data-name="Data">
      <Background1 />
    </div>
  );
}

function Data3() {
  return (
    <div className="content-stretch flex flex-col items-end pb-[26px] pt-[25px] px-[16px] relative shrink-0 w-[117.77px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#166534] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">+50</p>
      </div>
    </div>
  );
}

function Data4() {
  return (
    <div className="content-stretch flex flex-col items-end pb-[26px] pt-[25px] px-[16px] relative shrink-0 w-[137.23px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c797f] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">$110,400</p>
      </div>
    </div>
  );
}

function Data5() {
  return (
    <div className="content-stretch flex flex-col items-end pb-[26px] pt-[25px] px-[16px] relative shrink-0 w-[147.02px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">$170,400</p>
      </div>
    </div>
  );
}

function RowFila1Entrada() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] relative shrink-0 w-full" data-name="Row - Fila 1 (Entrada)">
      <Data />
      <Data1 />
      <Data2 />
      <Data3 />
      <Data4 />
      <Data5 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-full">
        <p className="leading-[20px]">22 Oct, 2023</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c797f] text-[12px] w-full">
        <p className="leading-[16px]">09:15 hrs</p>
      </div>
    </div>
  );
}

function Data6() {
  return (
    <div className="relative shrink-0 w-[156.69px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start px-[16px] py-[16.5px] relative size-full">
        <Container31 />
        <Container32 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[10.667px] relative shrink-0 w-[14.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="10.6667" preserveAspectRatio="none" viewBox="0 0 14.6667 10.6667" width="14.6667">
        <g id="Container">
          <path d={svgPaths.p3e6ef100} fill="#6C797F" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#00677f] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">GRE-T002-881</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Container34 />
      <Container35 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[150px] overflow-clip relative shrink-0 w-[150px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c797f] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Despacho Sucursal Norte</p>
      </div>
    </div>
  );
}

function Data7() {
  return (
    <div className="relative shrink-0 w-[227.05px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start px-[16px] py-[16.5px] relative size-full">
        <Container33 />
        <Container36 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
        <g id="Container">
          <path d={svgPaths.p36cde60} fill="#991B1B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#fee2e2] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Background">
      <Container37 />
      <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#991b1b] text-[10px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">SALIDA</p>
      </div>
    </div>
  );
}

function Data8() {
  return (
    <div className="relative shrink-0 w-[132.25px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[21.5px] relative size-full">
        <Background2 />
      </div>
    </div>
  );
}

function Data9() {
  return (
    <div className="relative shrink-0 w-[117.77px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[26px] pt-[25px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#991b1b] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[20px]">-12</p>
        </div>
      </div>
    </div>
  );
}

function Data10() {
  return (
    <div className="relative shrink-0 w-[137.23px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[26px] pt-[25px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c797f] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[20px]">$124,800</p>
        </div>
      </div>
    </div>
  );
}

function Data11() {
  return (
    <div className="relative shrink-0 w-[147.02px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[26px] pt-[25px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[20px]">$110,400</p>
        </div>
      </div>
    </div>
  );
}

function RowFila2Salida() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pt-px relative shrink-0 w-full" data-name="Row - Fila 2 (Salida)">
      <div aria-hidden className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <Data6 />
      <Data7 />
      <Data8 />
      <Data9 />
      <Data10 />
      <Data11 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-full">
        <p className="leading-[20px]">15 Oct, 2023</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c797f] text-[12px] w-full">
        <p className="leading-[16px]">16:45 hrs</p>
      </div>
    </div>
  );
}

function Data12() {
  return (
    <div className="relative shrink-0 w-[156.69px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start px-[16px] py-[16.5px] relative size-full">
        <Container38 />
        <Container39 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Container">
          <path d={svgPaths.p2ce9880} fill="#6C797F" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">AJU-2023-08</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Container41 />
      <Container42 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[150px] overflow-clip relative shrink-0 w-[150px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c797f] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Merma en almacén</p>
      </div>
    </div>
  );
}

function Data13() {
  return (
    <div className="relative shrink-0 w-[227.05px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start px-[16px] py-[16.5px] relative size-full">
        <Container40 />
        <Container43 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
        <g id="Container">
          <path d={svgPaths.p3316a100} fill="#92400E" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#fef3c7] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Background">
      <Container44 />
      <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#92400e] text-[10px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">AJUSTE</p>
      </div>
    </div>
  );
}

function Data14() {
  return (
    <div className="relative shrink-0 w-[132.25px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[21.5px] relative size-full">
        <Background3 />
      </div>
    </div>
  );
}

function Data15() {
  return (
    <div className="relative shrink-0 w-[117.77px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[26px] pt-[25px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#92400e] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[20px]">-2</p>
        </div>
      </div>
    </div>
  );
}

function Data16() {
  return (
    <div className="relative shrink-0 w-[137.23px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[26px] pt-[25px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c797f] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[20px]">$127,200</p>
        </div>
      </div>
    </div>
  );
}

function Data17() {
  return (
    <div className="relative shrink-0 w-[147.02px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[26px] pt-[25px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[20px]">$124,800</p>
        </div>
      </div>
    </div>
  );
}

function RowFila3Ajuste() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pt-px relative shrink-0 w-full" data-name="Row - Fila 3 (Ajuste)">
      <div aria-hidden className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <Data12 />
      <Data13 />
      <Data14 />
      <Data15 />
      <Data16 />
      <Data17 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] w-full">
        <p className="leading-[20px]">01 Oct, 2023</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c797f] text-[12px] w-full">
        <p className="leading-[16px]">10:00 hrs</p>
      </div>
    </div>
  );
}

function Data18() {
  return (
    <div className="relative shrink-0 w-[156.69px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start p-[16px] relative size-full">
        <Container45 />
        <Container46 />
      </div>
    </div>
  );
}

function Container48() {
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

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#00677f] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">FAC-001-102</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Container48 />
      <Container49 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[150px] overflow-clip relative shrink-0 w-[150px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c797f] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Inventario Inicial</p>
      </div>
    </div>
  );
}

function Data19() {
  return (
    <div className="relative shrink-0 w-[227.05px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start p-[16px] relative size-full">
        <Container47 />
        <Container50 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
        <g id="Container">
          <path d={svgPaths.p25217600} fill="#166534" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Background">
      <Container51 />
      <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#166534] text-[10px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">ENTRADA</p>
      </div>
    </div>
  );
}

function Data20() {
  return (
    <div className="relative shrink-0 w-[132.25px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[21px] pt-[21.5px] px-[16px] relative size-full">
        <Background4 />
      </div>
    </div>
  );
}

function Data21() {
  return (
    <div className="relative shrink-0 w-[117.77px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[25.5px] pt-[25px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#166534] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[20px]">+106</p>
        </div>
      </div>
    </div>
  );
}

function Data22() {
  return (
    <div className="relative shrink-0 w-[137.23px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[25.5px] pt-[25px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c797f] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[20px]">$0</p>
        </div>
      </div>
    </div>
  );
}

function Data23() {
  return (
    <div className="relative shrink-0 w-[147.02px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[25.5px] pt-[25px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[20px]">$127,200</p>
        </div>
      </div>
    </div>
  );
}

function RowFila4EntradaInicial() {
  return (
    <div className="content-stretch flex items-start justify-center pt-px relative shrink-0 w-full" data-name="Row - Fila 4 (Entrada inicial)">
      <div aria-hidden className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
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
      <RowFila1Entrada />
      <RowFila2Salida />
      <RowFila3Ajuste />
      <RowFila4EntradaInicial />
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

function Container52() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c797f] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Mostrando 1 - 4 de 24 registros</p>
        </div>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 7.4 12" width="7.4">
        <g id="Container">
          <path d={svgPaths.p3ed0080} fill="#6C797F" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center opacity-50 pb-[10px] pt-[4px] px-[4px] relative rounded-[2px] shrink-0" data-name="Button">
      <Container54 />
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[rgba(0,210,255,0.1)] content-stretch flex items-center justify-center pb-[6.5px] pt-[5.5px] relative rounded-[2px] shrink-0 size-[32px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#00d2ff] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">1</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[6.5px] pt-[5.5px] relative rounded-[2px] shrink-0 size-[32px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">2</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[6.5px] pt-[5.5px] relative rounded-[2px] shrink-0 size-[32px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">3</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 7.4 12" width="7.4">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="#6C797F" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[10px] pt-[4px] px-[4px] relative rounded-[2px] shrink-0" data-name="Button">
      <Container55 />
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">
        <Button4 />
        <Button5 />
        <Button6 />
        <Button7 />
        <Button8 />
      </div>
    </div>
  );
}

function PaginacionSimple() {
  return (
    <div className="bg-[#f8fafc] relative shrink-0 w-full" data-name="Paginación Simple">
      <div aria-hidden className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[16px] pt-[17px] px-[16px] relative size-full">
          <Container52 />
          <Container53 />
        </div>
      </div>
    </div>
  );
}

function TablaDeHistorialDataList() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Tabla de Historial (Data List)">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <BackgroundHorizontalBorder />
        <Table />
        <PaginacionSimple />
      </div>
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-2px_rgba(0,0,0,0.03)]" />
    </div>
  );
}

function MainCanvas() {
  return (
    <div className="flex-[1_0_0] max-w-[1440px] min-h-px relative w-full z-[1]" data-name="Main - Canvas">
      <div className="content-stretch flex flex-col gap-[40px] items-start max-w-[inherit] p-[40px] relative size-full">
        <PageHeader />
        <BentoGridResumenYGrafico />
        <TablaDeHistorialDataList />
      </div>
    </div>
  );
}

function MainContentArea() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full isolate items-start min-h-[1098px] min-w-px relative" data-name="Main Content Area">
      <HeaderTopNavBar />
      <MainCanvas />
    </div>
  );
}

function InvoraLogo() {
  return (
    <div className="h-[64px] max-w-[248px] relative shrink-0 w-[105.02px]" data-name="Invora Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[99.99%] left-0 max-w-none top-0 w-full" src={imgInvoraLogo} />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] relative size-full">
          <InvoraLogo />
        </div>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[40px] relative shrink-0 w-full" data-name="Margin">
      <Container56 />
    </div>
  );
}

function Container57() {
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

function Button9() {
  return (
    <div className="bg-[#00d2ff] content-stretch flex gap-[7.99px] items-center justify-center pl-[62.38px] pr-[62.39px] py-[8px] relative rounded-[4px] shrink-0" data-name="Button">
      <Container57 />
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">Nueva Venta</p>
      </div>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[40px] relative shrink-0" data-name="Button:margin">
      <Button9 />
    </div>
  );
}

function Container59() {
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

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3c494e] text-[18px] whitespace-nowrap">
        <p className="leading-[24px]">Dashboard</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container59 />
          <Container60 />
        </div>
      </div>
    </div>
  );
}

function Container61() {
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

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3c494e] text-[18px] whitespace-nowrap">
        <p className="leading-[24px]">Catálogo</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container61 />
          <Container62 />
        </div>
      </div>
    </div>
  );
}

function Container63() {
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

function Container64() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#00677f] text-[18px] whitespace-nowrap">
          <p className="leading-[24px]">Kárdex</p>
        </div>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-[rgba(0,210,255,0.1)] relative rounded-[4px] shrink-0 w-full" data-name="Link">
      <div aria-hidden className="absolute border-[#00677f] border-r-4 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pl-[16px] pr-[20px] py-[8px] relative size-full">
          <Container63 />
          <Container64 />
        </div>
      </div>
    </div>
  );
}

function Container65() {
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

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3c494e] text-[18px] whitespace-nowrap">
        <p className="leading-[24px]">Facturación</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container65 />
          <Container66 />
        </div>
      </div>
    </div>
  );
}

function Container67() {
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

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3c494e] text-[18px] whitespace-nowrap">
        <p className="leading-[24px]">Guías (GRE)</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container67 />
          <Container68 />
        </div>
      </div>
    </div>
  );
}

function Container69() {
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

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3c494e] text-[18px] whitespace-nowrap">
        <p className="leading-[24px]">Gastos</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container69 />
          <Container70 />
        </div>
      </div>
    </div>
  );
}

function Container71() {
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

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3c494e] text-[18px] whitespace-nowrap">
        <p className="leading-[24px]">Contactos</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container71 />
          <Container72 />
        </div>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px relative w-full" data-name="Container">
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

function Container73() {
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

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3c494e] text-[18px] whitespace-nowrap">
        <p className="leading-[24px]">Configuración</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container73 />
          <Container74 />
        </div>
      </div>
    </div>
  );
}

function Container75() {
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

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3c494e] text-[18px] whitespace-nowrap">
        <p className="leading-[24px]">Ayuda</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container75 />
          <Container76 />
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

function SideNavBar() {
  return (
    <div className="absolute bg-[#faf8ff] content-stretch flex flex-col h-[1098px] items-start justify-between left-0 overflow-auto px-[16px] py-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-0 w-[280px]" data-name="SideNavBar">
      <Margin5 />
      <ButtonMargin />
      <Container58 />
      <HorizontalBorder />
    </div>
  );
}

export default function KardexValorizadoInvoraIntelligence() {
  return (
    <div className="content-stretch flex items-start justify-center pl-[280px] relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(250, 248, 255) 0%, rgb(250, 248, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Kárdex Valorizado - Invora Intelligence">
      <MainContentArea />
      <SideNavBar />
    </div>
  );
}