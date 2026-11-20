"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { Globe } from "lucide-react";

export function LanguageSwitch({ className = "" }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`inline-flex items-center gap-1.5 p-1 rounded-lg bg-[#0b1629] border border-[var(--border-subtle)] text-xs font-mono font-medium ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <Globe size={13} className="text-[var(--accent)] ml-1 shrink-0" />
      <button
        type="button"
        onClick={() => setLanguage("pt")}
        className={`px-2 py-1 rounded transition-all duration-200 ${
          language === "pt"
            ? "bg-[var(--accent)] text-[#0F1E36] font-bold shadow-sm"
            : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
        }`}
        title="Português"
      >
        PT
      </button>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`px-2 py-1 rounded transition-all duration-200 ${
          language === "en"
            ? "bg-[var(--accent)] text-[#0F1E36] font-bold shadow-sm"
            : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
        }`}
        title="English"
      >
        EN
      </button>
    </div>
  );
}
