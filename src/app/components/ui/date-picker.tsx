import * as React from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "./utils";
import { Calendar } from "./calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./popover";

export function DatePicker({
  date,
  setDate,
  placeholder = "Seleccionar fecha",
  className,
  disabled,
}: {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  placeholder?: string;
  className?: string;
  disabled?: any;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cn(
            "flex w-full items-center justify-start rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 hover:bg-slate-50",
            !date && "text-slate-400",
            className
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4 shrink-0 text-slate-400" />
          <span className="truncate">{date ? format(date, "P", { locale: es }) : placeholder}</span>
        </button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-auto p-0 bg-white border-slate-200 shadow-md rounded-xl overflow-hidden" 
        align="start"
        side="bottom"
        avoidCollisions={false}
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          locale={es}
          disabled={disabled}
        />
      </PopoverContent>
    </Popover>
  );
}
