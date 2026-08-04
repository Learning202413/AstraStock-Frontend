import svgPaths from "./svg-xng2iietme";
import imgUserProfilePhoto from "./60de9df5838aba877430f2676a1961450f813f52.png";
import imgInvoraIntelligenceLogo from "./ce9b63ddec0d0540535ce820f1e5f82f6a0ab9b5.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[32px] tracking-[-0.8px] whitespace-nowrap">
        <p className="leading-[40px]">Intelligence Dashboard</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[16px] whitespace-nowrap">
        <p className="leading-[26px]">{`Today's operational overview`}</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Heading />
      <Container1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-full">
          <p className="leading-[normal]">Buscar producto, documento...</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-[256px]" data-name="Input">
      <div className="content-stretch flex items-start justify-center overflow-clip pb-[11px] pl-[41px] pr-[17px] pt-[10px] relative rounded-[inherit] size-full">
        <Container4 />
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bottom-[18.42%] content-stretch flex flex-col items-start left-[12px] top-[18.42%]" data-name="Container">
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
          <path d={svgPaths.p8a35e00} fill="#6C797F" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Input />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Container">
          <path d={svgPaths.p30dddd98} fill="#3C494E" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
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

function Container6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Soporte</p>
      </div>
    </div>
  );
}

function UserProfilePhoto() {
  return (
    <div className="pointer-events-none relative rounded-[12px] shrink-0 size-[32px]" data-name="User profile photo">
      <div className="absolute inset-0 overflow-hidden rounded-[12px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgUserProfilePhoto} />
      </div>
      <div aria-hidden className="absolute border border-[#dae2fd] border-solid inset-0 rounded-[12px]" />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[7.99px] items-center relative shrink-0" data-name="Container">
      <Container10 />
      <UserProfilePhoto />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Container">
      <Container3 />
      <Container6 />
      <div className="bg-[#dae2fd] h-[24px] relative shrink-0 w-px" data-name="Vertical Divider" />
      <Container9 />
    </div>
  );
}

function TopNavBarDesktopHeaderContext() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative shrink-0 w-full z-[2]" data-name="TopNavBar (Desktop Header context)">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[40px] py-[24px] relative size-full">
          <Container />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="h-[37px] relative shrink-0 w-[31.833px]" data-name="Background">
      <svg className="absolute block inset-0 size-full" fill="none" height="37" preserveAspectRatio="none" viewBox="0 0 31.8333 37" width="31.8333">
        <g id="Background">
          <rect fill="#F2F3FF" height="37" rx="4" width="31.8333" />
          <path d={svgPaths.p243c99a0} fill="#2559BD" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6c797f] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">VALORIZACIÓN TOTAL</p>
        </div>
        <Background />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[48px] tracking-[-1.2px] w-full">
          <p className="leading-[56px]">S/ 425k</p>
        </div>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[8px] relative shrink-0 w-[17.333px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 17.3333 8" width="17.3333">
        <g id="Margin">
          <path d={svgPaths.p19734dc0} fill="#16A34A" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#16a34a] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">+2.4%</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c797f] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">vs mes anterior</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Margin />
        <Container15 />
        <Margin1 />
      </div>
    </div>
  );
}

function Valuation() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Valuation">
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[25px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-2px_rgba(0,0,0,0.03)]" data-name="Valuation:shadow" />
        <Container12 />
        <Container13 />
        <Container14 />
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="h-[36.167px] relative shrink-0 w-[34.333px]" data-name="Background">
      <svg className="absolute block inset-0 size-full" fill="none" height="36.1667" preserveAspectRatio="none" viewBox="0 0 34.3333 36.1667" width="34.3333">
        <g id="Background">
          <rect fill="#F2F3FF" height="36.1667" rx="4" width="34.3333" />
          <path d={svgPaths.p1790a400} fill="#2559BD" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6c797f] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">UTILIDAD REAL (MES)</p>
        </div>
        <Background1 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[48px] tracking-[-1.2px] w-full">
          <p className="leading-[56px]">S/ 84k</p>
        </div>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="h-[8px] relative shrink-0 w-[17.333px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 17.3333 8" width="17.3333">
        <g id="Margin">
          <path d={svgPaths.p19734dc0} fill="#16A34A" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#16a34a] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">+12%</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c797f] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">vs objetivo</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Margin2 />
        <Container19 />
        <Margin3 />
      </div>
    </div>
  );
}

function Utility() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Utility">
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[25px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_0.17px_0] rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-2px_rgba(0,0,0,0.03)]" data-name="Utility:shadow" />
        <Container16 />
        <Container17 />
        <Container18 />
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="h-[38.667px] relative shrink-0 w-[32.667px]" data-name="Background">
      <svg className="absolute block inset-0 size-full" fill="none" height="38.6667" preserveAspectRatio="none" viewBox="0 0 32.6667 38.6667" width="32.6667">
        <g id="Background">
          <rect fill="#F2F3FF" height="38.6667" rx="4" width="32.6667" />
          <path d={svgPaths.p260dec80} fill="#2559BD" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6c797f] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">VENTAS DIARIAS</p>
        </div>
        <Background2 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[48px] tracking-[-1.2px] w-full">
          <p className="leading-[56px]">S/ 12.5k</p>
        </div>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="h-[8px] relative shrink-0 w-[17.333px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 17.3333 8" width="17.3333">
        <g id="Margin">
          <path d={svgPaths.p296d7f00} fill="#EF4444" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ef4444] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">-1.2%</p>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c797f] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">vs ayer</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Margin4 />
        <Container23 />
        <Margin5 />
      </div>
    </div>
  );
}

function DailySales() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Daily Sales">
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[25px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_-0.33px_0] rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-2px_rgba(0,0,0,0.03)]" data-name="Daily Sales:shadow" />
        <Container20 />
        <Container21 />
        <Container22 />
      </div>
    </div>
  );
}

function SunatStatusPaints() {
  return (
    <div className="absolute bg-white inset-[0_0_-0.5px_0] rounded-[8px]" data-name="SUNAT Status paints">
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-2px_rgba(0,0,0,0.03)]" />
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Container">
      <div className="absolute inset-[-18.18%_-18.27%_0_0]">
        <svg className="block size-full" fill="none" height="26" preserveAspectRatio="none" viewBox="0 0 26.02 26" width="26.02">
          <g id="Container">
            <path d={svgPaths.p10fd0e00} fill="#00D2FF" id="Icon" />
            <rect fill="#00D2FF" height="12" id="Background" rx="6" width="12" x="14.02" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6c797f] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">ESTADO SUNAT</p>
      </div>
      <Container25 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Container24 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[32px] tracking-[-0.32px] w-full">
        <p className="leading-[40px]">Conectado</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#22c55e] relative rounded-[12px] shrink-0 size-[8px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c797f] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Operativo • 12ms de latencia</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.5px] items-start relative size-full">
        <Container27 />
        <Container28 />
      </div>
    </div>
  );
}

function SunatStatus() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="SUNAT Status">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
          <SunatStatusPaints />
          <Margin6 />
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function SectionQuickIndicatorsBento() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Section - Quick Indicators Bento">
      <Valuation />
      <Utility />
      <DailySales />
      <SunatStatus />
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[19px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 22 19" width="22">
        <g id="Container">
          <path d={svgPaths.p7555480} fill="#BA1A1A" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container30 />
        <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[18px] whitespace-nowrap">
          <p className="leading-[24px]">Alertas de Stock</p>
        </div>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(186,26,26,0.1)] relative rounded-[6px] shrink-0" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[4px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ba1a1a] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">3 Items</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[9px] relative size-full">
        <Heading1 />
        <Overlay />
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#e2e7ff] content-stretch flex items-center justify-center pb-[12.5px] pt-[11.5px] relative rounded-[6px] shrink-0 size-[40px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">SKU-A</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Acer Nitro 5</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c797f] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Min: 10</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container34 />
      <Container35 />
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Background3 />
        <Container33 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ba1a1a] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">4 und.</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#00d2ff] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px]">Reordenar</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container37 />
        <Container38 />
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Border">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[9px] relative size-full">
          <Container32 />
          <Container36 />
        </div>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#e2e7ff] content-stretch flex items-center justify-center pb-[12.5px] pt-[11.5px] relative rounded-[6px] shrink-0 size-[40px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">SKU-B</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Logitech MX Master</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c797f] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Min: 20</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container41 />
      <Container42 />
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Background4 />
        <Container40 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ba1a1a] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">8 und.</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#00d2ff] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px]">Reordenar</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container44 />
        <Container45 />
      </div>
    </div>
  );
}

function Border1() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Border">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[9px] relative size-full">
          <Container39 />
          <Container43 />
        </div>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#e2e7ff] content-stretch flex items-center justify-center pb-[12.5px] pt-[11.5px] relative rounded-[6px] shrink-0 size-[40px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">SKU-C</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">{`Dell U2720Q 27"`}</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c797f] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Min: 5</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container48 />
      <Container49 />
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Background5 />
        <Container47 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ba1a1a] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">2 und.</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#00d2ff] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px]">Reordenar</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container51 />
        <Container52 />
      </div>
    </div>
  );
}

function Border2() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Border">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[9px] relative size-full">
          <Container46 />
          <Container50 />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Border />
        <Border1 />
        <Border2 />
      </div>
    </div>
  );
}

function StockAlerts() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Stock Alerts">
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[25px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-2px_rgba(0,0,0,0.03)]" data-name="Stock Alerts:shadow" />
        <HorizontalBorder />
        <Container31 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[18px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 20 18" width="20">
        <g id="Container">
          <path d={svgPaths.p3c508c40} fill="#00677F" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container53 />
        <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[18px] whitespace-nowrap">
          <p className="leading-[24px]">Productos Top (Pareto)</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[9px] relative size-full">
        <Heading2 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">{`MacBook Pro 16"`}</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c797f] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">24% vol.</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container57 />
      <Container58 />
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#eaedff] h-[8px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#00d2ff] inset-[0_15%_0_0] rounded-[12px]" data-name="Background" />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container56 />
      <Background6 />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">iPhone 15 Pro</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c797f] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">18% vol.</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative size-full">
        <Container61 />
        <Container62 />
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#eaedff] h-[8px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[rgba(0,103,127,0.8)] inset-[0_35%_0_0] rounded-[12px]" data-name="Overlay" />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container60 />
      <Background7 />
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">AirPods Pro 2</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c797f] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">12% vol.</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container65 />
      <Container66 />
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#eaedff] h-[8px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[rgba(37,89,189,0.6)] inset-[0_55%_0_0] rounded-[12px]" data-name="Overlay" />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container64 />
      <Background8 />
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">iPad Air M1</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c797f] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">8% vol.</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container69 />
      <Container70 />
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-[#eaedff] h-[8px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#b2c2dc] inset-[0_70%_0_0] rounded-[12px]" data-name="Background" />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container68 />
      <Background9 />
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Container55 />
        <Container59 />
        <Container63 />
        <Container67 />
      </div>
    </div>
  );
}

function Top5Products() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Top 5 Products">
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[25px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-2px_rgba(0,0,0,0.03)]" data-name="Top 5 Products:shadow" />
        <HorizontalBorder1 />
        <Container54 />
      </div>
    </div>
  );
}

function Top5ProductsMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-full" data-name="Top 5 Products:margin">
      <Top5Products />
    </div>
  );
}

function MiddleLeftStockAlertsPareto() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Middle Left: Stock Alerts & Pareto">
      <StockAlerts />
      <Top5ProductsMargin />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[18px] whitespace-nowrap">
        <p className="leading-[24px]">Últimos Movimientos de Kárdex</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c797f] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Seguimiento en vivo del flujo de inventario</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading3 />
        <Container72 />
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="relative shrink-0 size-[10.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="10.6667" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6667" width="10.6667">
        <g id="Container">
          <path d={svgPaths.p2b41a9d0} fill="#00D2FF" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#00d2ff] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[20px]">Ver Todo</p>
        </div>
        <Container73 />
      </div>
    </div>
  );
}

function OverlayHorizontalBorder() {
  return (
    <div className="bg-[rgba(248,250,252,0.5)] relative shrink-0 w-full" data-name="Overlay+HorizontalBorder">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[25px] pt-[24px] px-[24px] relative size-full">
          <Container71 />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="relative shrink-0 w-[202.75px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6c797f] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">FECHA/HORA</p>
        </div>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="relative shrink-0 w-[259.2px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6c797f] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">PRODUCTO</p>
        </div>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="relative shrink-0 w-[169.84px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6c797f] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">TIPO</p>
        </div>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="relative shrink-0 w-[98.38px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[16px] py-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6c797f] text-[12px] text-right tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">CANT</p>
        </div>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="relative shrink-0 w-[219.83px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6c797f] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">REF. DOCUMENTO</p>
        </div>
      </div>
    </div>
  );
}

function HeaderRow() {
  return (
    <div className="bg-white content-stretch flex items-start justify-center mb-[-1px] pb-px relative shrink-0 w-full" data-name="Header → Row">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Cell />
      <Cell1 />
      <Cell2 />
      <Cell3 />
      <Cell4 />
    </div>
  );
}

function Data() {
  return (
    <div className="relative shrink-0 w-[202.75px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15px] pt-[14px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Hoy, 10:42 AM</p>
        </div>
      </div>
    </div>
  );
}

function Data1() {
  return (
    <div className="relative shrink-0 w-[259.2px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15px] pt-[14px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">{`MacBook Pro 16"`}</p>
        </div>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="relative shrink-0 size-[9.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.33333" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333" width="9.33333">
        <g id="Container">
          <path d={svgPaths.p2ab80140} fill="#B91C1C" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-[#fef2f2] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Background">
      <Container75 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b91c1c] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Salida</p>
      </div>
    </div>
  );
}

function Data2() {
  return (
    <div className="relative shrink-0 w-[169.84px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[12.5px] relative size-full">
        <Background10 />
      </div>
    </div>
  );
}

function Data3() {
  return (
    <div className="relative shrink-0 w-[98.38px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[15px] pt-[14px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[20px]">-2</p>
        </div>
      </div>
    </div>
  );
}

function Data4() {
  return (
    <div className="relative shrink-0 w-[219.83px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[16.5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6c797f] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">F001-004291</p>
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pb-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Data />
      <Data1 />
      <Data2 />
      <Data3 />
      <Data4 />
    </div>
  );
}

function Data5() {
  return (
    <div className="relative shrink-0 w-[202.75px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15px] pt-[14px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Hoy, 09:15 AM</p>
        </div>
      </div>
    </div>
  );
}

function Data6() {
  return (
    <div className="relative shrink-0 w-[259.2px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15px] pt-[14px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Logitech MX Master</p>
        </div>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="relative shrink-0 size-[9.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.33333" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333" width="9.33333">
        <g id="Container">
          <path d={svgPaths.p1f49bc80} fill="#15803D" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background11() {
  return (
    <div className="bg-[#f0fdf4] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Background">
      <Container76 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#15803d] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Ingreso</p>
      </div>
    </div>
  );
}

function Data7() {
  return (
    <div className="relative shrink-0 w-[169.84px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[12.5px] relative size-full">
        <Background11 />
      </div>
    </div>
  );
}

function Data8() {
  return (
    <div className="relative shrink-0 w-[98.38px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[15px] pt-[14px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[20px]">+50</p>
        </div>
      </div>
    </div>
  );
}

function Data9() {
  return (
    <div className="relative shrink-0 w-[219.83px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[16.5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6c797f] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">GR-002-1192</p>
        </div>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pb-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Data5 />
      <Data6 />
      <Data7 />
      <Data8 />
      <Data9 />
    </div>
  );
}

function Data10() {
  return (
    <div className="relative shrink-0 w-[202.75px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15px] pt-[14px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Ayer, 16:30 PM</p>
        </div>
      </div>
    </div>
  );
}

function Data11() {
  return (
    <div className="relative shrink-0 w-[259.2px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15px] pt-[14px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">iPhone 15 Pro</p>
        </div>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="relative shrink-0 size-[9.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.33333" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333" width="9.33333">
        <g id="Container">
          <path d={svgPaths.p2ab80140} fill="#B91C1C" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background12() {
  return (
    <div className="bg-[#fef2f2] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Background">
      <Container77 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b91c1c] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Salida</p>
      </div>
    </div>
  );
}

function Data12() {
  return (
    <div className="relative shrink-0 w-[169.84px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[12.5px] relative size-full">
        <Background12 />
      </div>
    </div>
  );
}

function Data13() {
  return (
    <div className="relative shrink-0 w-[98.38px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[15px] pt-[14px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[20px]">-1</p>
        </div>
      </div>
    </div>
  );
}

function Data14() {
  return (
    <div className="relative shrink-0 w-[219.83px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[16.5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6c797f] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">B002-001102</p>
        </div>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pb-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Data10 />
      <Data11 />
      <Data12 />
      <Data13 />
      <Data14 />
    </div>
  );
}

function Data15() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[14.5px] pt-[14px] px-[16px] relative shrink-0 w-[202.75px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Ayer, 11:20 AM</p>
      </div>
    </div>
  );
}

function Data16() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[14.5px] pt-[14px] px-[16px] relative shrink-0 w-[259.2px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">AirPods Pro 2</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="relative shrink-0 size-[9.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.33333" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333" width="9.33333">
        <g id="Container">
          <path d={svgPaths.p2ab80140} fill="#B91C1C" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background13() {
  return (
    <div className="bg-[#fef2f2] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Background">
      <Container78 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b91c1c] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Salida</p>
      </div>
    </div>
  );
}

function Data17() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative shrink-0 w-[169.84px]" data-name="Data">
      <Background13 />
    </div>
  );
}

function Data18() {
  return (
    <div className="content-stretch flex flex-col items-end pb-[14.5px] pt-[14px] px-[16px] relative shrink-0 w-[98.38px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">-5</p>
      </div>
    </div>
  );
}

function Data19() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] pt-[16.5px] px-[16px] relative shrink-0 w-[219.83px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6c797f] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">F001-004290</p>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Row">
      <Data15 />
      <Data16 />
      <Data17 />
      <Data18 />
      <Data19 />
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
    <div className="content-stretch flex flex-col items-start min-w-[600px] relative shrink-0 w-full" data-name="Table">
      <HeaderRow />
      <Body />
    </div>
  );
}

function Container74() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto pb-[75px] relative rounded-[inherit] size-full">
        <Table />
      </div>
    </div>
  );
}

function RecentMovementsKardex() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Recent Movements (Kardex)">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <OverlayHorizontalBorder />
        <Container74 />
      </div>
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-2px_rgba(0,0,0,0.03)]" />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6c797f] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[16px]">COMPROBANTES EMITIDOS (HOY)</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[8px] items-baseline leading-[0] relative shrink-0 w-full whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-bold justify-center relative shrink-0 text-[#131b2e] text-[48px] tracking-[-0.96px]">
        <p className="leading-[56px]">142</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center not-italic relative shrink-0 text-[#6c797f] text-[14px]">
        <p className="leading-[20px]">docs</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pb-px relative size-full">
          <div className="bg-[#3b82f6] relative rounded-[12px] shrink-0 size-[8px]" data-name="Background" />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">98 Facturas</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pb-px relative size-full">
          <div className="bg-[#a855f7] relative rounded-[12px] shrink-0 size-[8px]" data-name="Background" />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131b2e] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">44 Boletas</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container81 />
      <Container82 />
    </div>
  );
}

function Container79() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading4 />
        <Paragraph />
        <Container80 />
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667" width="11.6667">
        <g id="Container">
          <path d={svgPaths.p3dc33e00} fill="#00D2FF" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6c797f] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">TASA DE ÉXITO SUNAT</p>
      </div>
      <Container83 />
    </div>
  );
}

function Heading4Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Heading5 />
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#16a34a] text-[48px] tracking-[-0.96px] whitespace-nowrap">
        <p className="leading-[56px]">99.8%</p>
      </div>
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c797f] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Tasa de Éxito</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-end relative size-full">
        <Container85 />
        <Margin7 />
      </div>
    </div>
  );
}

function Background14() {
  return (
    <div className="bg-[#eaedff] h-[6px] relative rounded-[12px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#22c55e] inset-[0_0.2%_0_0] rounded-[12px]" data-name="Background" />
    </div>
  );
}

function Margin8() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <Background14 />
      </div>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="VerticalBorder">
      <div aria-hidden className="absolute border-[#f1f5f9] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center pl-[25px] py-[7px] relative size-full">
          <Heading4Margin />
          <Container84 />
          <Margin8 />
        </div>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute bottom-[-39px] h-[131px] right-[-39px] w-[112.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="131" preserveAspectRatio="none" viewBox="0 0 112.5 131" width="112.5">
        <g id="Container" opacity="0.05">
          <path d={svgPaths.p2019d280} fill="#131B2E" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function InvoicingSummary() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Invoicing Summary">
      <div className="flex flex-row justify-center overflow-x-clip overflow-y-auto rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-start justify-center p-[25px] relative size-full">
          <Container79 />
          <VerticalBorder />
          <Container86 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_2px_4px_-2px_rgba(0,0,0,0.03)]" />
    </div>
  );
}

function InvoicingSummaryMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-full" data-name="Invoicing Summary:margin">
      <InvoicingSummary />
    </div>
  );
}

function MiddleRightKardexInvoicing() {
  return (
    <div className="col-[2/span_2] content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Middle Right: Kardex & Invoicing">
      <RecentMovementsKardex />
      <InvoicingSummaryMargin />
    </div>
  );
}

function Container29() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_588px] relative shrink-0 w-full" data-name="Container">
      <MiddleLeftStockAlertsPareto />
      <MiddleRightKardexInvoicing />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start max-w-[1440px] pb-[40px] relative shrink-0 w-full" data-name="Container">
      <SectionQuickIndicatorsBento />
      <Container29 />
    </div>
  );
}

function MainCanvas() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full z-[1]" data-name="Main - Canvas">
      <div className="overflow-auto rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[57px] py-[40px] relative size-full">
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function MainContentWrapper() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col h-[1105px] isolate items-start min-h-[1056px] min-w-px overflow-x-clip overflow-y-auto relative" data-name="Main Content Wrapper">
      <TopNavBarDesktopHeaderContext />
      <MainCanvas />
    </div>
  );
}

function InvoraIntelligenceLogo() {
  return (
    <div className="h-[40px] max-w-[287px] relative shrink-0 w-[65.64px]" data-name="Invora Intelligence Logo">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgInvoraIntelligenceLogo} />
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#dae2fd] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[41px] pt-[40px] px-[24px] relative size-full">
          <InvoraIntelligenceLogo />
        </div>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p191dcc80} fill="#2559BD" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2559bd] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Panel Principal</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="flex h-[38px] items-center justify-center relative shrink-0 w-[257.45px]">
      <div className="flex-none scale-x-95 scale-y-95">
        <div className="bg-[rgba(108,152,255,0.1)] content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative rounded-[8px] w-[271px]" data-name="Link">
          <Container88 />
          <Container89 />
        </div>
      </div>
    </div>
  );
}

function Container90() {
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

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Inventario</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="flex h-[38px] items-center justify-center relative shrink-0 w-[257.45px]">
      <div className="flex-none scale-x-95 scale-y-95">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative rounded-[8px] w-[271px]" data-name="Link">
          <Container90 />
          <Container91 />
        </div>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[16px] relative shrink-0 w-[19.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 19.5 16" width="19.5">
        <g id="Container">
          <path d={svgPaths.p29002e00} fill="#3C494E" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Kárdex</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="flex h-[38px] items-center justify-center relative shrink-0 w-[257.45px]">
      <div className="flex-none scale-x-95 scale-y-95">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative rounded-[8px] w-[271px]" data-name="Link">
          <Container92 />
          <Container93 />
        </div>
      </div>
    </div>
  );
}

function Container94() {
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

function Container95() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">{`Facturación & SUNAT`}</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="flex h-[38px] items-center justify-center relative shrink-0 w-[257.45px]">
      <div className="flex-none scale-x-95 scale-y-95">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative rounded-[8px] w-[271px]" data-name="Link">
          <Container94 />
          <Container95 />
        </div>
      </div>
    </div>
  );
}

function Container96() {
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

function Container97() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Guías de Remisión</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="flex h-[38px] items-center justify-center relative shrink-0 w-[257.45px]">
      <div className="flex-none scale-x-95 scale-y-95">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative rounded-[8px] w-[271px]" data-name="Link">
          <Container96 />
          <Container97 />
        </div>
      </div>
    </div>
  );
}

function Container98() {
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

function Container99() {
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
    <div className="flex h-[38px] items-center justify-center relative shrink-0 w-[257.45px]">
      <div className="flex-none scale-x-95 scale-y-95">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative rounded-[8px] w-[271px]" data-name="Link">
          <Container98 />
          <Container99 />
        </div>
      </div>
    </div>
  );
}

function Container100() {
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

function Container101() {
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
    <div className="flex h-[38px] items-center justify-center relative shrink-0 w-[257.45px]">
      <div className="flex-none scale-x-95 scale-y-95">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative rounded-[8px] w-[271px]" data-name="Link">
          <Container100 />
          <Container101 />
        </div>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="overflow-auto rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start pb-[435px] pl-[14.78px] pr-[14.77px] pt-[25px] relative size-full">
          <Link />
          <Link1 />
          <Link2 />
          <Link3 />
          <Link4 />
          <Link5 />
          <Link6 />
        </div>
      </div>
    </div>
  );
}

function Container102() {
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

function Button1() {
  return (
    <div className="bg-[#00d2ff] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <Container102 />
          <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
            <p className="leading-[24px]">Generar Reporte</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container104() {
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

function Container105() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Configuración</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container104 />
          <Container105 />
        </div>
      </div>
    </div>
  );
}

function Container106() {
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

function Container107() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3c494e] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Ayuda</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Container106 />
          <Container107 />
        </div>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Link7 />
        <Link8 />
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#dae2fd] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[16px] pt-[17px] px-[24px] relative size-full">
        <Button1 />
        <Container103 />
      </div>
    </div>
  );
}

function SideNavBar() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[1056px] items-start left-0 pr-px top-0 w-[288px]" data-name="SideNavBar">
      <div aria-hidden className="absolute border-[#dae2fd] border-r border-solid inset-0 pointer-events-none" />
      <HorizontalBorder2 />
      <Container87 />
      <HorizontalBorder3 />
    </div>
  );
}

export default function DashboardInvoraClaridadImpecablePro() {
  return (
    <div className="bg-white content-stretch flex items-start justify-center pl-[288px] relative size-full" data-name="Dashboard Invora - Claridad Impecable Pro">
      <MainContentWrapper />
      <SideNavBar />
    </div>
  );
}