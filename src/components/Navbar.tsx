"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, Menu, X, ArrowRight, Layers, Home, Info, Mail } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { LanguageSwitch } from "./LanguageSwitch";

export function Navbar() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Fecha o menu mobile caso a tela seja redimensionada para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Previne rolagem do body quando o menu mobile está aberto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0F1E36]/90 border-b border-[var(--border-subtle)]">
      <div className="container-custom h-18 sm:h-20 flex items-center justify-between gap-3">
        {/* LOGO & NOME DA MARCA */}
        <Link
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-2.5 sm:gap-3 group shrink-0 min-w-0"
        >
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl overflow-hidden border border-[var(--border-strong)] bg-[#0F1E36] p-0.5 shadow-md transition-transform group-hover:scale-105 shrink-0">
            <Image
              src="/brand/logo.jpg"
              alt="Logo G. Marcondes"
              width={44}
              height={44}
              priority
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-bold text-sm sm:text-base tracking-tight text-[var(--text-primary)] truncate">
              {t("nav.brand")}
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-widest text-[var(--accent)] font-medium -mt-0.5 truncate">
              {t("nav.subtitle")}
            </span>
          </div>
        </Link>

        {/* NAVEGAÇÃO DESKTOP (LG EM DIANTE) */}
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

        {/* LADO DIREITO: SWITCHER + CTA (DESKTOP) + HAMBÚRGUER (MOBILE) */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <LanguageSwitch />

          {/* Botão de Contato Desktop */}
          <a
            href="https://wa.me/5512988921999?text=Ol%C3%A1%2C%20gostaria%20de%20um%20diagn%C3%B3stico%20de%20tecnologia%20para%20minha%20empresa."
            target="_blank"
            rel="noreferrer"
            className="hidden lg:inline-flex btn-primary py-2.5 px-4 text-sm shrink-0"
          >
            <MessageSquare size={15} />
            <span>{t("nav.cta")}</span>
          </a>

          {/* Botão Hambúrguer Mobile */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#0b1629] border border-[var(--border-subtle)] text-[var(--accent)] hover:bg-[#14243f] transition-colors focus:outline-none"
            aria-label="Abrir Menu de Navegação"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* DRAWER / MENU MOBILE SUSPENSO */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] sm:top-[80px] bottom-0 bg-[#0F1E36]/98 backdrop-blur-xl border-b border-[var(--border-subtle)] z-40 overflow-y-auto animate-fade-in flex flex-col justify-between p-6">
          <div className="space-y-4">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[var(--accent)] font-semibold block mb-2">
              Menu de Navegação
            </span>

            <nav className="space-y-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#0b1629] border border-[var(--border-subtle)] text-[var(--text-primary)] font-medium text-base hover:border-[var(--accent)] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Home size={18} className="text-[var(--accent)]" />
                  <span>{t("nav.home")}</span>
                </div>
                <ArrowRight size={16} className="text-[var(--text-muted)]" />
              </Link>

              <Link
                href="/solucoes"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#0b1629] border border-[var(--border-subtle)] text-[var(--text-primary)] font-medium text-base hover:border-[var(--accent)] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Layers size={18} className="text-[var(--accent)]" />
                  <span>{t("nav.solutions")}</span>
                </div>
                <ArrowRight size={16} className="text-[var(--text-muted)]" />
              </Link>

              <Link
                href="/sobre"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#0b1629] border border-[var(--border-subtle)] text-[var(--text-primary)] font-medium text-base hover:border-[var(--accent)] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Info size={18} className="text-[var(--accent)]" />
                  <span>{t("nav.about")}</span>
                </div>
                <ArrowRight size={16} className="text-[var(--text-muted)]" />
              </Link>

              <Link
                href="/contato"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#0b1629] border border-[var(--border-subtle)] text-[var(--text-primary)] font-medium text-base hover:border-[var(--accent)] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-[var(--accent)]" />
                  <span>{t("nav.contact")}</span>
                </div>
                <ArrowRight size={16} className="text-[var(--text-muted)]" />
              </Link>
            </nav>
          </div>

          <div className="pt-6 border-t border-[var(--border-subtle)] space-y-4">
            <a
              href="https://wa.me/5512988921999?text=Ol%C3%A1%2C%20gostaria%20de%20um%20diagn%C3%B3stico%20de%20tecnologia%20para%20minha%20empresa."
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full py-3.5 text-center text-sm font-semibold justify-center"
            >
              <MessageSquare size={16} />
              <span>{t("nav.cta")} (WhatsApp)</span>
            </a>

            <p className="text-center text-[11px] text-[var(--text-muted)]">
              G. Morais Marcondes Soluções em TI LTDA · Taubaté/SP
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
