"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MessageSquare, Mail, MapPin, Send, Clock, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function ContatoPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-[#0F1E36] text-[#F4EFEA]">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="relative pt-16 pb-16 md:pt-20 md:pb-20 border-b border-[var(--border-subtle)] bg-[#0b1629]/40">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs uppercase font-mono tracking-widest text-[var(--accent)] font-semibold block mb-3">
                {t("contactPage.badge")}
              </span>
              <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl mb-4 text-[var(--text-primary)]">
                {t("contactPage.title")}
              </h1>
              <p className="text-base md:text-lg text-[var(--text-secondary)]">
                {t("contactPage.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Conteúdo Principal */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Coluna da Esquerda: Dados de Contato e Localização */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-3 text-[var(--text-primary)]">
                    {t("contactPage.directTitle")}
                  </h2>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {t("contactPage.directDesc")}
                  </p>
                </div>

                <div className="space-y-5 text-sm">
                  <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#0b1629] border border-[var(--border-subtle)]">
                    <div className="w-10 h-10 rounded-lg bg-[#14243f] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent)] shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <strong className="block text-[var(--text-primary)]">
                        {t("contactPage.hq")}
                      </strong>
                      <span className="text-xs text-[var(--text-secondary)]">
                        Taubaté - SP, Brasil
                      </span>
                      <p className="text-[11px] text-[var(--text-muted)] mt-1">
                        {t("contactPage.hqDesc")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#0b1629] border border-[var(--border-subtle)]">
                    <div className="w-10 h-10 rounded-lg bg-[#14243f] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent)] shrink-0">
                      <MessageSquare size={18} />
                    </div>
                    <div>
                      <strong className="block text-[var(--text-primary)]">
                        {t("contactPage.whatsapp")}
                      </strong>
                      <a
                        href="https://wa.me/5512988921999"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-[var(--accent)] hover:underline font-mono"
                      >
                        +55 (12) 98892-1999
                      </a>
                      <p className="text-[11px] text-[var(--text-muted)] mt-1">
                        {t("contactPage.whatsappDesc")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#0b1629] border border-[var(--border-subtle)]">
                    <div className="w-10 h-10 rounded-lg bg-[#14243f] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent)] shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <strong className="block text-[var(--text-primary)]">
                        {t("contactPage.email")}
                      </strong>
                      <a
                        href="mailto:contato@gmarcondes.tech"
                        className="text-xs text-[var(--accent)] hover:underline font-mono"
                      >
                        contato@gmarcondes.tech
                      </a>
                      <p className="text-[11px] text-[var(--text-muted)] mt-1">
                        {t("contactPage.emailDesc")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#0b1629] border border-[var(--border-subtle)]">
                    <div className="w-10 h-10 rounded-lg bg-[#14243f] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent)] shrink-0">
                      <Clock size={18} />
                    </div>
                    <div>
                      <strong className="block text-[var(--text-primary)]">
                        {t("contactPage.hours")}
                      </strong>
                      <span className="text-xs text-[var(--text-secondary)]">
                        {t("contactPage.hoursDesc")}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#14243f]/60 border border-[var(--border-strong)] flex items-center gap-3 text-xs text-[var(--text-secondary)]">
                  <ShieldCheck size={20} className="text-[var(--accent)] shrink-0" />
                  <span>{t("contactPage.privacy")}</span>
                </div>
              </div>

              {/* Coluna da Direita: Formulário de Briefing */}
              <div className="lg:col-span-7">
                <div className="card-boutique p-8 md:p-10">
                  <h3 className="text-2xl font-bold mb-2 text-[var(--text-primary)]">
                    {t("contactPage.formTitle")}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] mb-8">
                    {t("contactPage.formSubtitle")}
                  </p>

                  <form
                    action="https://wa.me/5512988921999"
                    method="GET"
                    target="_blank"
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)] mb-2 font-medium">
                          {t("contactPage.name")} *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Gabriel Marcondes"
                          className="w-full px-4 py-3 rounded-xl bg-[#0b1629] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)] mb-2 font-medium">
                          {t("contactPage.company")} *
                        </label>
                        <input
                          type="text"
                          name="company"
                          required
                          placeholder="Company / Location"
                          className="w-full px-4 py-3 rounded-xl bg-[#0b1629] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)] mb-2 font-medium">
                          {t("contactPage.emailLabel")} *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="corporate@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#0b1629] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)] mb-2 font-medium">
                          {t("contactPage.phone")}
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3 rounded-xl bg-[#0b1629] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)] mb-2 font-medium">
                        {t("contactPage.interest")}
                      </label>
                      <select
                        name="interest"
                        className="w-full px-4 py-3 rounded-xl bg-[#0b1629] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)]"
                      >
                        <option value="Enterprise Systems">{t("contactPage.interestOpt3")}</option>
                        <option value="BarberSpace">{t("contactPage.interestOpt1")}</option>
                        <option value="Agentes de IA">{t("contactPage.interestOpt2")}</option>
                        <option value="Integracao de APIs">{t("contactPage.interestOpt4")}</option>
                        <option value="Consultoria Geral">{t("contactPage.interestOpt5")}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)] mb-2 font-medium">
                        {t("contactPage.details")}
                      </label>
                      <textarea
                        rows={4}
                        name="message"
                        required
                        placeholder={t("contactPage.detailsPlaceholder")}
                        className="w-full px-4 py-3 rounded-xl bg-[#0b1629] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)] resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full justify-center text-sm py-3.5 mt-2"
                    >
                      <Send size={16} />
                      <span>{t("contactPage.submit")}</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
