"use client";

import { Scissors, Bot, Layers, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

export function Solutions() {
  const { t } = useLanguage();

  return (
    <section id="solucoes" className="py-24 border-t border-[var(--border-subtle)] bg-[#0b1629]/50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-xs uppercase font-mono tracking-widest text-[var(--accent)] font-semibold mb-3">
            {t("solutions.badge")}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5">
            {t("solutions.title")}
          </h2>
          <p className="text-[var(--text-secondary)] text-base md:text-lg">
            {t("solutions.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* PRODUTO 1: BARBERSPACE */}
          <div className="card-boutique p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0F1E36] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent)] mb-6 shadow-sm">
                <Scissors size={24} />
              </div>
              <span className="text-xs uppercase font-mono tracking-wider text-[var(--accent)] font-medium">
                {t("solutions.barberTag")}
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-4 text-[var(--text-primary)]">
                {t("solutions.barberTitle")}
              </h3>
              <p className="text-[var(--text-secondary)] text-sm mb-6 leading-relaxed">
                {t("solutions.barberDesc")}
              </p>

              <ul className="space-y-3 mb-8 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
                  <span>{t("solutions.barberF1")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
                  <span>{t("solutions.barberF2")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
                  <span>{t("solutions.barberF3")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
                  <span>{t("solutions.barberF4")}</span>
                </li>
              </ul>
            </div>

            <Link
              href="/solucoes#barberspace"
              className="btn-secondary w-full text-xs uppercase tracking-wider justify-between group"
            >
              <span>{t("solutions.barberCta")}</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* PRODUTO 2: AGENTES DE IA & ATENDIMENTO */}
          <div className="card-boutique p-8 flex flex-col justify-between border-[var(--border-strong)] relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[var(--accent)] text-[#0F1E36] text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-bl-lg">
              {t("solutions.aiHighlight")}
            </div>

            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0F1E36] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent)] mb-6 shadow-sm">
                <Bot size={24} />
              </div>
              <span className="text-xs uppercase font-mono tracking-wider text-[var(--accent)] font-medium">
                {t("solutions.aiTag")}
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-4 text-[var(--text-primary)]">
                {t("solutions.aiTitle")}
              </h3>
              <p className="text-[var(--text-secondary)] text-sm mb-6 leading-relaxed">
                {t("solutions.aiDesc")}
              </p>

              <ul className="space-y-3 mb-8 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
                  <span>{t("solutions.aiF1")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
                  <span>{t("solutions.aiF2")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
                  <span>{t("solutions.aiF3")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
                  <span>{t("solutions.aiF4")}</span>
                </li>
              </ul>
            </div>

            <Link
              href="/solucoes#agentes-ia"
              className="btn-primary w-full text-xs uppercase tracking-wider justify-between group"
            >
              <span>{t("solutions.aiCta")}</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* PRODUTO 3: ENGENHARIA SOB MEDIDA & SISTEMAS CORPORATIVOS */}
          <div className="card-boutique p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0F1E36] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent)] mb-6 shadow-sm">
                <Layers size={24} />
              </div>
              <span className="text-xs uppercase font-mono tracking-wider text-[var(--accent)] font-medium">
                {t("solutions.customTag")}
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-4 text-[var(--text-primary)]">
                {t("solutions.customTitle")}
              </h3>
              <p className="text-[var(--text-secondary)] text-sm mb-6 leading-relaxed">
                {t("solutions.customDesc")}
              </p>

              <ul className="space-y-3 mb-8 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
                  <span>{t("solutions.customF1")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
                  <span>{t("solutions.customF2")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
                  <span>{t("solutions.customF3")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
                  <span>{t("solutions.customF4")}</span>
                </li>
              </ul>
            </div>

            <Link
              href="/solucoes#sistemas-sob-medida"
              className="btn-secondary w-full text-xs uppercase tracking-wider justify-between group"
            >
              <span>{t("solutions.customCta")}</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
