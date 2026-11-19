import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MessageSquare, Mail, MapPin, Send, Clock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Contato & Solicitação de Proposta | G. Marcondes Soluções em TI",
  description: "Solicite um diagnóstico técnico ou proposta comercial para sua empresa. Atendimento direto via WhatsApp corporativo e formulário institucional em Taubaté/SP.",
};

export default function ContatoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F1E36] text-[#F4EFEA]">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="relative pt-16 pb-16 md:pt-20 md:pb-20 border-b border-[var(--border-subtle)] bg-[#0b1629]/40">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs uppercase font-mono tracking-widest text-[var(--accent)] font-semibold block mb-3">
                Canais de Atendimento
              </span>
              <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl mb-4 text-[var(--text-primary)]">
                Fale com a Nossa Engenharia.
              </h1>
              <p className="text-base md:text-lg text-[var(--text-secondary)]">
                Conte-nos sobre o desafio técnico ou operacional do seu negócio. Retornamos com uma avaliação clara de viabilidade, prazos e investimentos.
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
                    Atendimento Executivo Direto
                  </h2>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    Você falará diretamente com quem lidera a concepção técnica e a entrega das soluções. Sem robôs impessoais de triagem na primeira conversa.
                  </p>
                </div>

                <div className="space-y-5 text-sm">
                  <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#0b1629] border border-[var(--border-subtle)]">
                    <div className="w-10 h-10 rounded-lg bg-[#14243f] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent)] shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <strong className="block text-[var(--text-primary)]">Sede Operacional</strong>
                      <span className="text-xs text-[var(--text-secondary)]">
                        Taubaté - SP, Brasil
                      </span>
                      <p className="text-[11px] text-[var(--text-muted)] mt-1">
                        Atendimento presencial no Vale do Paraíba (Taubaté, Pindamonhangaba, São José dos Campos) e remoto global.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#0b1629] border border-[var(--border-subtle)]">
                    <div className="w-10 h-10 rounded-lg bg-[#14243f] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent)] shrink-0">
                      <MessageSquare size={18} />
                    </div>
                    <div>
                      <strong className="block text-[var(--text-primary)]">WhatsApp Comercial</strong>
                      <a
                        href="https://wa.me/5512988921999"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-[var(--accent)] hover:underline font-mono"
                      >
                        +55 (12) 98892-1999
                      </a>
                      <p className="text-[11px] text-[var(--text-muted)] mt-1">
                        Canal ágil para dúvidas comerciais e alinhamentos de escopo.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#0b1629] border border-[var(--border-subtle)]">
                    <div className="w-10 h-10 rounded-lg bg-[#14243f] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent)] shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <strong className="block text-[var(--text-primary)]">E-mail Corporativo</strong>
                      <a
                        href="mailto:contato@gmarcondes.tech"
                        className="text-xs text-[var(--accent)] hover:underline font-mono"
                      >
                        contato@gmarcondes.tech
                      </a>
                      <p className="text-[11px] text-[var(--text-muted)] mt-1">
                        Para envio de RFPs, minutas de briefing e documentos formais.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#0b1629] border border-[var(--border-subtle)]">
                    <div className="w-10 h-10 rounded-lg bg-[#14243f] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent)] shrink-0">
                      <Clock size={18} />
                    </div>
                    <div>
                      <strong className="block text-[var(--text-primary)]">Horário de Operação</strong>
                      <span className="text-xs text-[var(--text-secondary)]">
                        Segunda a Sexta-feira, das 09h00 às 18h00
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#14243f]/60 border border-[var(--border-strong)] flex items-center gap-3 text-xs text-[var(--text-secondary)]">
                  <ShieldCheck size={20} className="text-[var(--accent)] shrink-0" />
                  <span>Seus dados são confidenciais e protegidos nos termos da LGPD.</span>
                </div>
              </div>

              {/* Coluna da Direita: Formulário de Briefing */}
              <div className="lg:col-span-7">
                <div className="card-boutique p-8 md:p-10">
                  <h3 className="text-2xl font-bold mb-2 text-[var(--text-primary)]">
                    Solicitar Proposta ou Diagnóstico Técnico
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] mb-8">
                    Preencha as informações para agendarmos uma conversa de alinhamento com a nossa equipe.
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
                          Seu Nome Completo
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Ex: Carlos Silva"
                          className="w-full px-4 py-3 rounded-xl bg-[#0b1629] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)] mb-2 font-medium">
                          Empresa &amp; Cidade
                        </label>
                        <input
                          type="text"
                          name="company"
                          required
                          placeholder="Ex: Clínica Alpha / Taubaté"
                          className="w-full px-4 py-3 rounded-xl bg-[#0b1629] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)] mb-2 font-medium">
                          E-mail Corporativo
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="carlos@empresa.com.br"
                          className="w-full px-4 py-3 rounded-xl bg-[#0b1629] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)] mb-2 font-medium">
                          WhatsApp / Telefone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="(12) 99999-9999"
                          className="w-full px-4 py-3 rounded-xl bg-[#0b1629] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)] mb-2 font-medium">
                        Solução ou Projeto de Interesse
                      </label>
                      <select
                        name="interest"
                        className="w-full px-4 py-3 rounded-xl bg-[#0b1629] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)]"
                      >
                        <option value="BarberSpace">BarberSpace (Plataforma para Barbearias e Estética)</option>
                        <option value="Agentes de IA">Agentes de IA no WhatsApp (API Oficial da Meta)</option>
                        <option value="Sistemas Sob Medida">Desenvolvimento de App Mobile (Flutter) ou Sistema Web</option>
                        <option value="Integracao de APIs">Integração de APIs Corporativas (Ponto+, ERPs, Bancos)</option>
                        <option value="Consultoria Geral">Diagnóstico Geral de Tecnologia &amp; Arquitetura</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)] mb-2 font-medium">
                        Detalhes do Desafio / Requisitos Iniciais
                      </label>
                      <textarea
                        rows={4}
                        name="message"
                        required
                        placeholder="Descreva brevemente o que sua empresa busca construir, automatizar ou integrar..."
                        className="w-full px-4 py-3 rounded-xl bg-[#0b1629] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)] resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full justify-center text-sm py-3.5 mt-2"
                    >
                      <Send size={16} />
                      <span>Encaminhar Solicitação pelo WhatsApp</span>
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
