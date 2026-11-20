"use client";

import { ExternalLink, GraduationCap, Award, Code2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function Leadership() {
  const { t } = useLanguage();

  return (
    <section id="engenharia" className="py-24 border-t border-[var(--border-subtle)] bg-[#0b1629]/40">
      <div className="container-custom">
        <div className="card-boutique p-8 md:p-14 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <div className="badge-boutique mb-4">
                <Award size={14} />
                <span>{t("leadership.badge")}</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {t("leadership.name")}
              </h2>

              <p className="text-[var(--accent)] font-medium text-sm md:text-base mb-6 font-mono">
                {t("leadership.role")}
              </p>

              <div className="text-[var(--text-secondary)] text-sm md:text-base space-y-4 mb-8 leading-relaxed max-w-3xl">
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

            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="p-6 rounded-xl bg-[#0F1E36] border border-[var(--border-subtle)]">
                <div className="flex items-center gap-3 text-[var(--accent)] mb-2">
                  <GraduationCap size={20} />
                  <strong className="text-sm font-semibold text-[var(--text-primary)]">
                    {t("leadership.card1Title")}
                  </strong>
                </div>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {t("leadership.card1Desc")}
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#0F1E36] border border-[var(--border-subtle)]">
                <div className="flex items-center gap-3 text-[var(--accent)] mb-2">
                  <Code2 size={20} />
                  <strong className="text-sm font-semibold text-[var(--text-primary)]">
                    {t("leadership.card2Title")}
                  </strong>
                </div>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {t("leadership.card2Desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
