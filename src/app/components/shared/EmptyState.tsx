import React from "react";
import { LucideIcon } from "lucide-react";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
}

export function EmptyState({ icon: Icon, title, subtitle }: EmptyStateProps) {
  return (
    <div className="p-12 text-center">
      <Icon className="w-12 h-12 mx-auto mb-3 text-slate-300 animate-pulse" />
      <h3 className="text-base font-semibold text-slate-600 mb-1">{title}</h3>
      {subtitle && <p className="text-sm text-slate-400">{subtitle}</p>}
    </div>
  );
}
