"use client";

import { Check, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function TechnicalDifference() {
  const { t } = useLanguage();

  const points = [
    {
      feature: t("techDiff.row1Feature"),
      agencies: t("techDiff.row1Agencies"),
      gmarcondes: t("techDiff.row1GMarcondes"),
    },
    {
      feature: t("techDiff.row2Feature"),
      agencies: t("techDiff.row2Agencies"),
      gmarcondes: t("techDiff.row2GMarcondes"),
    },
    {
      feature: t("techDiff.row3Feature"),
      agencies: t("techDiff.row3Agencies"),
      gmarcondes: t("techDiff.row3GMarcondes"),
    },
    {
      feature: t("techDiff.row4Feature"),
      agencies: t("techDiff.row4Agencies"),
      gmarcondes: t("techDiff.row4GMarcondes"),
    },
  ];

  return (
    <section className="py-24 border-t border-[var(--border-subtle)]">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase font-mono tracking-widest text-[var(--accent)] font-semibold mb-3">
            {t("techDiff.badge")}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5">
            {t("techDiff.title")}
          </h2>
          <p className="text-[var(--text-secondary)] text-base md:text-lg">
            {t("techDiff.subtitle")}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-[var(--border-subtle)]">
                <th className="py-5 px-6 text-sm font-semibold text-[var(--text-muted)] w-1/3">
                  {t("techDiff.colCriteria")}
                </th>
                <th className="py-5 px-6 text-sm font-medium text-[var(--text-muted)] w-1/3">
                  {t("techDiff.colTraditional")}
                </th>
                <th className="py-5 px-6 text-sm font-bold text-[var(--accent)] w-1/3 bg-[#14243f]/40 rounded-t-xl">
                  {t("techDiff.colGMarcondes")}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-subtle)] text-sm">
              {points.map((p, i) => (
                <tr key={i} className="hover:bg-[#0b1629]/40 transition-colors">
                  <td className="py-5 px-6 font-medium text-[var(--text-primary)]">
                    {p.feature}
                  </td>
                  <td className="py-5 px-6 text-[var(--text-muted)]">
                    <div className="flex items-start gap-2">
                      <X size={16} className="text-red-400 shrink-0 mt-0.5" />
                      <span>{p.agencies}</span>
                    </div>
                  </td>
                  <td className="py-5 px-6 font-medium text-[var(--text-primary)] bg-[#14243f]/20">
                    <div className="flex items-start gap-2 text-[var(--accent-soft)]">
                      <Check size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
                      <span>{p.gmarcondes}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
