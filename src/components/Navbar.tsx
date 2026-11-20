"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageSquare } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { LanguageSwitch } from "./LanguageSwitch";

export function Navbar() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0F1E36]/90 border-b border-[var(--border-subtle)]">
      <div className="container-custom h-20 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl overflow-hidden border border-[var(--border-strong)] bg-[#0F1E36] p-0.5 shadow-md transition-transform group-hover:scale-105">
            <Image
              src="/brand/logo.jpg"
              alt="Logo G. Marcondes"
              width={44}
              height={44}
              priority
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm md:text-base tracking-tight text-[var(--text-primary)]">
              {t("nav.brand")}
            </span>
            <span className="text-[9px] md:text-[10px] uppercase font-mono tracking-widest text-[var(--accent)] font-medium -mt-0.5">
              {t("nav.subtitle")}
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[var(--text-secondary)]">
          <Link href="/" className="hover:text-[var(--text-primary)] transition-colors">
            {t("nav.home")}
          </Link>
          <Link href="/solucoes" className="hover:text-[var(--text-primary)] transition-colors">
            {t("nav.solutions")}
          </Link>
          <Link href="/sobre" className="hover:text-[var(--text-primary)] transition-colors">
            {t("nav.about")}
          </Link>
          <Link href="/contato" className="hover:text-[var(--text-primary)] transition-colors">
            {t("nav.contact")}
          </Link>
        </nav>

        <div className="flex items-center gap-2.5 md:gap-4">
          <LanguageSwitch />

          <a
            href="https://wa.me/5512988921999?text=Ol%C3%A1%2C%20gostaria%20de%20um%20diagn%C3%B3stico%20de%20tecnologia%20para%20minha%20empresa."
            target="_blank"
            rel="noreferrer"
            className="btn-primary py-2 px-3 md:py-2.5 md:px-4 text-xs md:text-sm shrink-0"
          >
            <MessageSquare size={15} />
            <span className="hidden sm:inline">{t("nav.cta")}</span>
            <span className="sm:hidden">Contato</span>
          </a>
        </div>
      </div>
    </header>
  );
}
