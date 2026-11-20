"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { LanguageSwitch } from "./LanguageSwitch";

function InstagramIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[#070f1c] text-[var(--text-secondary)]">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-3.5 mb-4 group">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-[var(--border-strong)] bg-[#0F1E36] p-0.5 shadow-md">
                <Image
                  src="/brand/logo.jpg"
                  alt="Logo G. Marcondes"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <span className="font-bold text-base tracking-tight text-[var(--text-primary)] block">
                  {t("nav.brand")}
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[var(--accent)] font-medium -mt-1 block">
                  {t("nav.subtitle")}
                </span>
              </div>
            </Link>

            <p className="text-xs leading-relaxed max-w-sm mb-6 text-[var(--text-muted)]">
              Consultoria e engenharia de software especializada. Plataformas SaaS, enterprise full-stack (.NET, Angular, AWS) e automação com IA oficial.
            </p>

            <div className="flex items-center gap-3">
              <LanguageSwitch />
            </div>
          </div>

          <div className="md:col-span-2">
            <strong className="block text-xs uppercase tracking-wider text-[var(--text-primary)] font-semibold mb-4 font-mono">
              {t("footer.colSolutions")}
            </strong>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/solucoes#barberspace" className="hover:text-[var(--accent)] transition-colors">
                  BarberSpace
                </Link>
              </li>
              <li>
                <Link href="/solucoes#agentes-ia" className="hover:text-[var(--accent)] transition-colors">
                  Agentes de IA WhatsApp
                </Link>
              </li>
              <li>
                <Link href="/solucoes#sistemas-sob-medida" className="hover:text-[var(--accent)] transition-colors">
                  Sistemas Sob Medida
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <strong className="block text-xs uppercase tracking-wider text-[var(--text-primary)] font-semibold mb-4 font-mono">
              {t("footer.colCompany")}
            </strong>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/sobre" className="hover:text-[var(--accent)] transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-[var(--accent)] transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <strong className="block text-xs uppercase tracking-wider text-[var(--text-primary)] font-semibold mb-4 font-mono">
              {t("footer.colChannels")}
            </strong>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href="https://instagram.com/gmarcondes.tech"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors"
                >
                  <InstagramIcon size={14} className="text-[var(--accent)]" />
                  <span>{t("footer.insta")}</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.gabrielmoraisdev.com.br"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-[var(--accent)] hover:underline"
                >
                  <ExternalLink size={14} />
                  <span>{t("footer.personalPortfolio")}</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/gabriel-morais-marcondes-flutter-fullstack/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors"
                >
                  <LinkedinIcon size={14} className="text-[var(--accent)]" />
                  <span>{t("footer.linkedin")}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-12 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} G. Morais Marcondes Soluções em Tecnologia da Informação LTDA. {t("footer.rights")}</p>
          <p className="text-[11px] text-[var(--text-muted)]">
            {t("footer.location")}
          </p>
        </div>
      </div>
    </footer>
  );
}
