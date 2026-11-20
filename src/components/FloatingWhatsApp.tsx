"use client";

import { MessageSquare } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function FloatingWhatsApp() {
  const { language } = useLanguage();

  const tooltipText =
    language === "en" ? "Talk to an Engineer" : "Falar com Especialista";

  return (
    <aside aria-label="WhatsApp Contact" className="fixed bottom-5 right-5 z-40">
      <a
        href="https://wa.me/5512988921999?text=Ol%C3%A1%2C%20gostaria%20de%20um%20diagn%C3%B3stico%20de%20tecnologia%20para%20minha%20empresa."
        target="_blank"
        rel="noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#0F1E36] border-2 border-[var(--accent)] text-[var(--accent)] shadow-2xl hover:bg-[var(--accent)] hover:text-[#0F1E36] transition-all duration-300 hover:scale-110 active:scale-95"
        title={tooltipText}
      >
        {/* Ponto indicador de status online */}
        <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-[#0F1E36]"></span>
        </span>

        <MessageSquare size={24} className="transition-transform group-hover:scale-110" />

        {/* Tooltip flutuante no desktop */}
        <span className="hidden md:block absolute right-16 px-3 py-1.5 rounded-lg bg-[#0F1E36] border border-[var(--border-strong)] text-xs text-[var(--text-primary)] font-medium shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          {tooltipText}
        </span>
      </a>
    </aside>
  );
}
