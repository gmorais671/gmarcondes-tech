"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Scissors,
  Bot,
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  CreditCard,
  CalendarCheck,
  Clock,
  Cpu,
  Network,
  Smartphone,
  Globe,
  Database
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

export default function SolucoesPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-[#0F1E36] text-[#F4EFEA]">
      <Navbar />

      <main className="flex-1">
        {/* Header da Página de Soluções */}
        <section className="relative pt-16 pb-20 md:pt-24 md:pb-24 border-b border-[var(--border-subtle)] bg-[#0b1629]/40">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
              <div className="badge-boutique mb-6">
                <Layers size={14} />
                <span>{t("solPage.badge")}</span>
              </div>

              <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl mb-6 text-[var(--text-primary)]">
                {t("solPage.title")}
              </h1>

              <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
                {t("solPage.subtitle")}
              </p>

              {/* Barra de Navegação Rápida entre as Soluções */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#barberspace"
                  className="px-4 py-2 rounded-lg bg-[#14243f] border border-[var(--border-subtle)] text-xs md:text-sm font-medium hover:border-[var(--accent)] transition-colors"
                >
                  {t("solPage.tab1")}
                </a>
                <a
                  href="#agentes-ia"
                  className="px-4 py-2 rounded-lg bg-[#14243f] border border-[var(--border-subtle)] text-xs md:text-sm font-medium hover:border-[var(--accent)] transition-colors"
                >
                  {t("solPage.tab2")}
                </a>
                <a
                  href="#sistemas-integracoes"
                  className="px-4 py-2 rounded-lg bg-[#14243f] border border-[var(--border-subtle)] text-xs md:text-sm font-medium hover:border-[var(--accent)] transition-colors"
                >
                  {t("solPage.tab3")}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SEÇÃO 1: BARBERSPACE */}
        {/* ============================================================ */}
        <section id="barberspace" className="py-24 border-b border-[var(--border-subtle)] scroll-mt-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#14243f] border border-[var(--border-strong)] text-[var(--accent)] text-xs font-mono font-semibold">
                  <Scissors size={14} />
                  <span>{t("solPage.barberTag")}</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                  {t("solPage.barberTitle")}
                </h2>

                <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                  {t("solPage.barberDesc")}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[var(--text-secondary)]">
                  <div className="flex items-start gap-2.5">
                    <CalendarCheck size={18} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[var(--text-primary)]">{t("solPage.barberF1Title")}</strong>
                      <span className="text-xs">{t("solPage.barberF1Desc")}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CreditCard size={18} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[var(--text-primary)]">{t("solPage.barberF2Title")}</strong>
                      <span className="text-xs">{t("solPage.barberF2Desc")}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <ShieldCheck size={18} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[var(--text-primary)]">{t("solPage.barberF3Title")}</strong>
                      <span className="text-xs">{t("solPage.barberF3Desc")}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[var(--text-primary)]">{t("solPage.barberF4Title")}</strong>
                      <span className="text-xs">{t("solPage.barberF4Desc")}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href="https://wa.me/5512988921999?text=Ol%C3%A1%2C%20gostaria%20de%20testar%20o%20BarberSpace%20na%20minha%20barbearia."
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary text-xs uppercase tracking-wider"
                  >
                    <span>{t("solPage.barberCta")}</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="card-boutique p-8 bg-[#0b1629]">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">
                    {t("solPage.barberBoxTitle")}
                  </h3>
                  <div className="space-y-4 text-xs md:text-sm">
                    <div className="p-4 rounded-xl bg-[#0F1E36] border border-red-500/20">
                      <strong className="block text-red-400 mb-1">{t("solPage.barberBoxBadTitle")}</strong>
                      <p className="text-[var(--text-muted)]">
                        {t("solPage.barberBoxBadDesc")}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#14243f] border border-[var(--accent)]/40">
                      <strong className="block text-[var(--accent)] mb-1">{t("solPage.barberBoxGoodTitle")}</strong>
                      <p className="text-[var(--text-secondary)]">
                        {t("solPage.barberBoxGoodDesc")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SEÇÃO 2: AGENTES DE IA NO WHATSAPP */}
        {/* ============================================================ */}
        <section id="agentes-ia" className="py-24 border-b border-[var(--border-subtle)] bg-[#0b1629]/50 scroll-mt-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="p-8 rounded-2xl bg-[#0F1E36] border border-[var(--border-strong)] shadow-xl">
                  <h4 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                    <Clock size={18} className="text-[var(--accent)]" />
                    <span>{t("solPage.aiDemoTitle")}</span>
                  </h4>
                  <div className="space-y-4 text-xs md:text-sm">
                    <div className="p-4 rounded-xl bg-[#0b1629] border border-[var(--border-subtle)] text-right">
                      <span className="text-[10px] text-[var(--text-muted)] block mb-1">{t("solPage.aiDemoPatient")}</span>
                      <p className="text-[var(--text-primary)]">
                        {t("solPage.aiDemoQ")}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#14243f] border border-[var(--accent)]/30 text-left">
                      <span className="text-[10px] text-[var(--accent)] font-mono block mb-1">{t("solPage.aiDemoAgent")}</span>
                      <p className="text-[var(--text-secondary)]">
                        {t("solPage.aiDemoA")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#14243f] border border-[var(--border-strong)] text-[var(--accent)] text-xs font-mono font-semibold">
                  <Bot size={14} />
                  <span>{t("solPage.aiTag")}</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                  {t("solPage.aiTitle")}
                </h2>

                <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                  {t("solPage.aiDesc")}
                </p>

                <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0" />
                    <span>{t("solPage.aiF1")}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0" />
                    <span>{t("solPage.aiF2")}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0" />
                    <span>{t("solPage.aiF3")}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0" />
                    <span>{t("solPage.aiF4")}</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href="https://wa.me/5512988921999?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20demonstra%C3%A7%C3%A3o%20do%20Agente%20de%20IA%20no%20WhatsApp."
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary text-xs uppercase tracking-wider"
                  >
                    <span>{t("solPage.aiCta")}</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SEÇÃO 3: SISTEMAS SOB MEDIDA & INTEGRAÇÕES DE APIS */}
        {/* ============================================================ */}
        <section id="sistemas-integracoes" className="py-24 scroll-mt-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#14243f] border border-[var(--border-strong)] text-[var(--accent)] text-xs font-mono font-semibold">
                  <Layers size={14} />
                  <span>{t("solPage.customTag")}</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                  {t("solPage.customTitle")}
                </h2>

                <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                  {t("solPage.customDesc")}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[var(--text-secondary)]">
                  <div className="flex items-start gap-2.5">
                    <Cpu size={18} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[var(--text-primary)]">{t("solPage.customF1Title")}</strong>
                      <span className="text-xs">{t("solPage.customF1Desc")}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Globe size={18} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[var(--text-primary)]">{t("solPage.customF2Title")}</strong>
                      <span className="text-xs">{t("solPage.customF2Desc")}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Smartphone size={18} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[var(--text-primary)]">{t("solPage.customF3Title")}</strong>
                      <span className="text-xs">{t("solPage.customF3Desc")}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Database size={18} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[var(--text-primary)]">{t("solPage.customF4Title")}</strong>
                      <span className="text-xs">{t("solPage.customF4Desc")}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contato"
                    className="btn-primary text-xs uppercase tracking-wider"
                  >
                    <span>{t("solPage.customCta")}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="card-boutique p-8 bg-[#0b1629]">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                    <Cpu size={18} className="text-[var(--accent)]" />
                    <span>{t("solPage.customBoxTitle")}</span>
                  </h3>
                  <div className="space-y-4 text-xs md:text-sm">
                    <div className="p-4 rounded-xl bg-[#0F1E36] border border-[var(--border-subtle)]">
                      <strong className="block text-[var(--accent)] mb-1">{t("solPage.customEx1Title")}</strong>
                      <p className="text-[var(--text-secondary)]">
                        {t("solPage.customEx1Desc")}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0F1E36] border border-[var(--border-subtle)]">
                      <strong className="block text-[var(--accent)] mb-1">{t("solPage.customEx2Title")}</strong>
                      <p className="text-[var(--text-secondary)]">
                        {t("solPage.customEx2Desc")}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0F1E36] border border-[var(--border-subtle)]">
                      <strong className="block text-[var(--accent)] mb-1">{t("solPage.customEx3Title")}</strong>
                      <p className="text-[var(--text-secondary)]">
                        {t("solPage.customEx3Desc")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Geral */}
        <section className="py-20 text-center border-t border-[var(--border-subtle)] bg-[#0b1629]/40">
          <div className="container-custom max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("solPage.ctaBottomTitle")}
            </h2>
            <p className="text-[var(--text-secondary)] mb-8">
              {t("solPage.ctaBottomSubtitle")}
            </p>
            <Link href="/contato" className="btn-primary text-base">
              <span>{t("solPage.ctaBottomBtn")}</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
