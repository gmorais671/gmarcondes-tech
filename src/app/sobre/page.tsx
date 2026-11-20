"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Award, GraduationCap, Code2, MapPin, ExternalLink, ArrowRight, ShieldCheck, HeartHandshake } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

export default function SobrePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-[#0F1E36] text-[#F4EFEA]">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section Institucional */}
        <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 border-b border-[var(--border-subtle)] bg-[#0b1629]/40">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
              <div className="badge-boutique mb-6">
                <MapPin size={14} />
                <span>{t("about.badge")}</span>
              </div>

              <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl mb-6 text-[var(--text-primary)]">
                {t("about.title")}
              </h1>

              <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
                {t("about.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Nossa Filosofia de Trabalho */}
        <section className="py-24">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6 text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
                <span className="text-xs uppercase font-mono tracking-widest text-[var(--accent)] font-semibold block">
                  {t("about.badge")}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
                  {t("about.propTitle")}
                </h2>
                <p>{t("about.propP1")}</p>
                <p>{t("about.propP2")}</p>
                <p>{t("about.propP3")}</p>
              </div>

              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="card-boutique p-6 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#0F1E36] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent)] mb-4">
                      <GraduationCap size={20} />
                    </div>
                    <strong className="block text-base font-bold text-[var(--text-primary)] mb-2">
                      {t("about.card1Title")}
                    </strong>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {t("about.card1Desc")}
                    </p>
                  </div>
                </div>

                <div className="card-boutique p-6 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#0F1E36] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent)] mb-4">
                      <ShieldCheck size={20} />
                    </div>
                    <strong className="block text-base font-bold text-[var(--text-primary)] mb-2">
                      {t("about.card2Title")}
                    </strong>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {t("about.card2Desc")}
                    </p>
                  </div>
                </div>

                <div className="card-boutique p-6 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#0F1E36] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent)] mb-4">
                      <Code2 size={20} />
                    </div>
                    <strong className="block text-base font-bold text-[var(--text-primary)] mb-2">
                      {t("about.card3Title")}
                    </strong>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {t("about.card3Desc")}
                    </p>
                  </div>
                </div>

                <div className="card-boutique p-6 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#0F1E36] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent)] mb-4">
                      <HeartHandshake size={20} />
                    </div>
                    <strong className="block text-base font-bold text-[var(--text-primary)] mb-2">
                      {t("about.card4Title")}
                    </strong>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {t("about.card4Desc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Liderança Técnica do Fundador */}
        <section className="py-20 border-t border-[var(--border-subtle)] bg-[#0b1629]/50">
          <div className="container-custom">
            <div className="card-boutique p-8 md:p-12 relative overflow-hidden">
              <div className="max-w-3xl">
                <div className="badge-boutique mb-4">
                  <Award size={14} />
                  <span>{t("leadership.badge")}</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                  {t("leadership.name")}
                </h2>

                <p className="text-[var(--accent)] font-medium text-sm md:text-base mb-6 font-mono">
                  {t("leadership.role")}
                </p>

                <div className="text-[var(--text-secondary)] text-sm md:text-base space-y-4 mb-8 leading-relaxed">
                  <p>{t("leadership.p1")}</p>
                  <p>{t("leadership.p2")}</p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://www.gabrielmoraisdev.com.br"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary text-xs uppercase tracking-wider"
                  >
                    <span>{t("leadership.portfolioBtn")}</span>
                    <ExternalLink size={15} />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/gabriel-morais-marcondes-flutter-fullstack/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary text-xs uppercase tracking-wider"
                  >
                    <span>{t("leadership.linkedinBtn")}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chamada Final para Contato */}
        <section className="py-20 border-t border-[var(--border-subtle)] text-center">
          <div className="container-custom max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-[var(--text-primary)]">
              {t("contact.title")}
            </h2>
            <p className="text-[var(--text-secondary)] text-base mb-8">
              {t("contact.subtitle")}
            </p>
            <Link href="/contato" className="btn-primary text-base">
              <span>{t("nav.contact")}</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
