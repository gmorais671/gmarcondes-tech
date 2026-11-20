"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, Menu, X, ArrowRight, Home, Layers, Info, Mail } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { LanguageSwitch } from "./LanguageSwitch";

export function Navbar() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Fecha o drawer ao redimensionar para telas maiores (>= md / 768px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Bloqueia a rolagem do body quando o drawer estiver aberto
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
    <>
      <header className="sticky top-0 z-40 bg-[#0F1E36]/90 backdrop-blur-md border-b border-[var(--border-subtle)]">
        <div className="container-custom h-18 sm:h-20 flex items-center justify-between gap-3">
          {/* LOGO: No mobile é APENAS o ícone; no desktop mostra o texto */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 group shrink-0"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden border border-[var(--border-strong)] bg-[#0F1E36] p-0.5 shadow-md transition-transform group-hover:scale-105 shrink-0">
              <Image
                src="/brand/logo.jpg"
                alt="Logo G. Marcondes"
                width={44}
                height={44}
                priority
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="hidden md:flex flex-col min-w-0">
              <span className="font-bold text-base tracking-tight text-[var(--text-primary)]">
                {t("nav.brand")}
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[var(--accent)] font-medium -mt-0.5">
                {t("nav.subtitle")}
              </span>
            </div>
          </Link>

          {/* NAVEGAÇÃO DESKTOP (A partir de md: 768px) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[var(--text-secondary)]">
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

          {/* LADO DIREITO */}
          <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
            {/* Seletor de Idioma */}
            <LanguageSwitch />

            {/* Botão de Contato Desktop (envolto em div hidden md:block) */}
            <div className="hidden md:block">
              <a
                href="https://wa.me/5512988921999?text=Ol%C3%A1%2C%20gostaria%20de%20um%20diagn%C3%B3stico%20de%20tecnologia%20para%20minha%20empresa."
                target="_blank"
                rel="noreferrer"
                className="btn-primary py-2.5 px-4 text-xs md:text-sm shrink-0"
              >
                <MessageSquare size={15} />
                <span>{t("nav.cta")}</span>
              </a>
            </div>

            {/* Botão Hambúrguer Mobile */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-lg bg-[#0b1629] border border-[var(--border-subtle)] text-[var(--accent)] hover:bg-[#14243f] transition-colors focus:outline-none"
              aria-label="Abrir Menu de Navegação"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* DRAWER MOBILE LATERAL (Renderizado fora do <header> para não sofrer limitação de backdrop-filter) */}
      {/* 1. Backdrop escurecido com desfoque */}
      <div
        className={`fixed inset-0 z-50 bg-black/70 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* 2. Gaveta Deslizante Lateral (Drawer) */}
      <aside
        className={`fixed top-0 right-0 bottom-0 w-[85vw] max-w-[340px] z-50 bg-[#0F1E36] border-l border-[var(--border-strong)] shadow-2xl flex flex-col justify-between p-6 transition-transform duration-300 ease-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Menu de Navegação Mobile"
      >
        <div className="flex flex-col gap-6">
          {/* Topo do Drawer: Logo + Botão Fechar */}
          <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg overflow-hidden border border-[var(--border-strong)] bg-[#0b1629] p-0.5">
                <Image
                  src="/brand/logo.jpg"
                  alt="Logo G. Marcondes"
                  width={36}
                  height={36}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm text-[var(--text-primary)]">G. MARCONDES</span>
                <span className="text-[9px] uppercase font-mono tracking-widest text-[var(--accent)]">Menu</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-[#0b1629] border border-[var(--border-subtle)] text-[var(--accent)] hover:bg-[#14243f] transition-colors focus:outline-none"
              aria-label="Fechar Menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Links de Navegação com ícones */}
          <nav className="flex flex-col gap-2.5">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3.5 rounded-xl bg-[#0b1629]/80 border border-[var(--border-subtle)] text-[var(--text-primary)] font-medium text-base hover:border-[var(--accent)] transition-all active:scale-[0.98]"
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
              className="flex items-center justify-between p-3.5 rounded-xl bg-[#0b1629]/80 border border-[var(--border-subtle)] text-[var(--text-primary)] font-medium text-base hover:border-[var(--accent)] transition-all active:scale-[0.98]"
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
              className="flex items-center justify-between p-3.5 rounded-xl bg-[#0b1629]/80 border border-[var(--border-subtle)] text-[var(--text-primary)] font-medium text-base hover:border-[var(--accent)] transition-all active:scale-[0.98]"
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
              className="flex items-center justify-between p-3.5 rounded-xl bg-[#0b1629]/80 border border-[var(--border-subtle)] text-[var(--text-primary)] font-medium text-base hover:border-[var(--accent)] transition-all active:scale-[0.98]"
            >
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[var(--accent)]" />
                <span>{t("nav.contact")}</span>
              </div>
              <ArrowRight size={16} className="text-[var(--text-muted)]" />
            </Link>
          </nav>
        </div>

        {/* Rodapé do Drawer */}
        <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-col gap-4">
          <a
            href="https://wa.me/5512988921999?text=Ol%C3%A1%2C%20gostaria%20de%20um%20diagn%C3%B3stico%20de%20tecnologia%20para%20minha%20empresa."
            target="_blank"
            rel="noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary w-full py-3.5 text-center text-sm font-semibold justify-center shadow-lg"
          >
            <MessageSquare size={16} />
            <span>{t("nav.cta")}</span>
          </a>

          <p className="text-center text-[11px] text-[var(--text-muted)]">
            G. Morais Marcondes Soluções em TI LTDA · Taubaté-SP & Global
          </p>
        </div>
      </aside>
    </>
  );
}
