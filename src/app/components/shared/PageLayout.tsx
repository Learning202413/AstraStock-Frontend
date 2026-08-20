import React from "react";

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  actionButton?: React.ReactNode;
  children: React.ReactNode;
}

export function PageLayout({ title, subtitle, actionButton, children }: PageLayoutProps) {
  return (
    <div className="size-full flex flex-col relative" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      <main className="flex-1 overflow-auto p-4 sm:p-6 md:p-8 bg-slate-50/50">
        <div className="max-w-5xl mx-auto flex flex-col h-full">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 shrink-0">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800">{title}</h2>
              {subtitle && <p className="text-slate-500 text-sm mt-1">{subtitle}</p>}
            </div>
            {actionButton && <div className="w-full sm:w-auto shrink-0">{actionButton}</div>}
          </div>
          
          {/* Content */}
          <div className="flex-1 min-h-0 flex flex-col">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
