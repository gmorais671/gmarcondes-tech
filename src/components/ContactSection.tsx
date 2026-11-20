"use client";

import { Mail, MessageSquare, Send } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contato" className="py-24 border-t border-[var(--border-subtle)]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Coluna da Esquerda: Contexto e Contatos Diretos */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="badge-boutique mb-4">
                <span>{t("contact.badge")}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                {t("contact.title")}
              </h2>
              <p className="text-[var(--text-secondary)] text-base md:text-lg mb-10 leading-relaxed">
                {t("contact.subtitle")}
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#14243f] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent)] shrink-0">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <strong className="block text-[var(--text-primary)]">
                      {t("contact.whatsappCard")}
                    </strong>
                    <span className="text-xs text-[var(--text-muted)]">
                      {t("contact.whatsappDesc")}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#14243f] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent)] shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <strong className="block text-[var(--text-primary)]">
                      {t("contact.emailCard")}
                    </strong>
                    <a href="mailto:contato@gmarcondes.tech" className="text-xs text-[var(--accent)] hover:underline">
                      contato@gmarcondes.tech
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-[var(--border-subtle)]">
              <a
                href="https://wa.me/5512988921999?text=Ol%C3%A1%2C%20gostaria%20de%20um%20diagn%C3%B3stico%20de%20tecnologia%20para%20minha%20empresa."
                target="_blank"
                rel="noreferrer"
                className="btn-primary w-full text-center text-sm"
              >
                <MessageSquare size={16} />
                <span>{t("contact.whatsappBtn")}</span>
              </a>
            </div>
          </div>

          {/* Coluna da Direita: Formulário de Diagnóstico */}
          <div className="lg:col-span-7">
            <div className="card-boutique p-8 md:p-10">
              <h3 className="text-xl font-bold mb-6 text-[var(--text-primary)]">
                {t("contact.formTitle")}
              </h3>

              <form
                action="https://formspree.io/f/xyzgmarcondes"
                method="POST"
                className="space-y-4 text-sm"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-1.5">
                      {t("contact.formName")} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Gabriel Marcondes"
                      className="w-full px-4 py-3 rounded-lg bg-[#0F1E36] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-gray-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-1.5">
                      {t("contact.formEmail")} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="corporate@company.com"
                      className="w-full px-4 py-3 rounded-lg bg-[#0F1E36] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-gray-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-1.5">
                      {t("contact.formCompany")}
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Sua Empresa ou Startup"
                      className="w-full px-4 py-3 rounded-lg bg-[#0F1E36] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-gray-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-1.5">
                      {t("contact.formNeed")}
                    </label>
                    <select
                      name="solution"
                      className="w-full px-4 py-3 rounded-lg bg-[#0F1E36] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                    >
                      <option value="enterprise">{t("contact.formNeedOpt1")}</option>
                      <option value="barberspace">{t("contact.formNeedOpt2")}</option>
                      <option value="ia">{t("contact.formNeedOpt3")}</option>
                      <option value="cloud">{t("contact.formNeedOpt4")}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-1.5">
                    Contexto do Projeto
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder={t("contact.formMsg")}
                    className="w-full px-4 py-3 rounded-lg bg-[#0F1E36] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-gray-600 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-3.5 text-sm uppercase tracking-wider font-semibold justify-center"
                >
                  <Send size={16} />
                  <span>{t("contact.formSubmit")}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
