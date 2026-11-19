import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Soluções Tecnológicas | BarberSpace, Agentes de IA e Sistemas · G. Marcondes",
  description:
    "Conheça o portfólio completo da G. Marcondes: SaaS BarberSpace, Agentes de IA no WhatsApp com API oficial da Meta e Sistemas Sob Medida com integração de APIs corporativas.",
};

export default function SolucoesPage() {
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
                <span>Portfólio de Engenharia &amp; Produtos</span>
              </div>

              <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl mb-6 text-[var(--text-primary)]">
                Soluções Tecnológicas para Eficiência, Escala &amp; Controle.
              </h1>

              <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
                Combinamos produtos proprietários consolidados em produção com capacidade técnica para construir sistemas complexos e integrações de APIs corporativas.
              </p>

              {/* Barra de Navegação Rápida entre as Soluções */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#barberspace"
                  className="px-4 py-2 rounded-lg bg-[#14243f] border border-[var(--border-subtle)] text-xs md:text-sm font-medium hover:border-[var(--accent)] transition-colors"
                >
                  1. BarberSpace (SaaS)
                </a>
                <a
                  href="#agentes-ia"
                  className="px-4 py-2 rounded-lg bg-[#14243f] border border-[var(--border-subtle)] text-xs md:text-sm font-medium hover:border-[var(--accent)] transition-colors"
                >
                  2. Agentes de IA no WhatsApp
                </a>
                <a
                  href="#sistemas-integracoes"
                  className="px-4 py-2 rounded-lg bg-[#14243f] border border-[var(--border-subtle)] text-xs md:text-sm font-medium hover:border-[var(--accent)] transition-colors"
                >
                  3. Sistemas &amp; Integrações de APIs
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
                  <span>SaaS MULTI-TENANT</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                  BarberSpace: Plataforma Completa de Gestão para Barbearias e Estética
                </h2>

                <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                  Desenvolvido para eliminar o retrabalho operacional de comandas manuais e cálculos de repasse. Seu cliente agenda sozinho em segundos e você gerencia o caixa em tempo real.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[var(--text-secondary)]">
                  <div className="flex items-start gap-2.5">
                    <CalendarCheck size={18} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[var(--text-primary)]">Agendamento sem App</strong>
                      <span className="text-xs">Link direto e fluido pelo celular.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CreditCard size={18} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[var(--text-primary)]">Split de Pagamentos</strong>
                      <span className="text-xs">Repasse automático de comissões via gateway.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <ShieldCheck size={18} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[var(--text-primary)]">Clube de Assinaturas</strong>
                      <span className="text-xs">Planos mensais com cobrança recorrente Asaas.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[var(--text-primary)]">Lembretes Anti-Falta</strong>
                      <span className="text-xs">Confirmação automática de horários no WhatsApp.</span>
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
                    <span>Agendar Demonstração do BarberSpace</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="card-boutique p-8 bg-[#0b1629]">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">
                    Como o BarberSpace Resolve o Caixa da Barbearia
                  </h3>
                  <div className="space-y-4 text-xs md:text-sm">
                    <div className="p-4 rounded-xl bg-[#0F1E36] border border-red-500/20">
                      <strong className="block text-red-400 mb-1">Rotina Tradicional (Fricção e Erros):</strong>
                      <p className="text-[var(--text-muted)]">
                        Horas no domingo calculando porcentagem de cada barbeiro na calculadora, comandas rasuradas e dinheiro misturado na mesma conta sem clareza contábil.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#14243f] border border-[var(--accent)]/40">
                      <strong className="block text-[var(--accent)] mb-1">Com o BarberSpace (Engenharia Financeira):</strong>
                      <p className="text-[var(--text-secondary)]">
                        No exato momento em que o cliente paga, a comissão do profissional vai para a conta dele e a taxa da casa fica na sua conta jurídica. Zero atrito e zero bitributação.
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
                    <span>Exemplo de Conversão Fora do Horário Comercial</span>
                  </h4>
                  <div className="space-y-4 text-xs md:text-sm">
                    <div className="p-4 rounded-xl bg-[#0b1629] border border-[var(--border-subtle)] text-right">
                      <span className="text-[10px] text-[var(--text-muted)] block mb-1">Paciente · Domingo 23h45</span>
                      <p className="text-[var(--text-primary)]">
                        &quot;Boa noite! Vocês atendem Unimed para consulta dermatológica particular ou exame?&quot;
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#14243f] border border-[var(--accent)]/30 text-left">
                      <span className="text-[10px] text-[var(--accent)] font-mono block mb-1">Agente de IA Oficial · 23h45</span>
                      <p className="text-[var(--text-secondary)]">
                        &quot;Olá! Boa noite. Atendemos sim consultas pelo plano Unimed. Para atendimento particular com a médica especialista, o investimento é de R$ 350 com retorno em 21 dias. Gostaria de ver os horários para esta semana?&quot;
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#14243f] border border-[var(--border-strong)] text-[var(--accent)] text-xs font-mono font-semibold">
                  <Bot size={14} />
                  <span>AUTOMAÇÃO INTELIGENTE &amp; META API</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                  Agentes de IA no WhatsApp: Atendimento Oficial 24/7 sem Risco de Bloqueio
                </h2>

                <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                  Mais de 40% dos clientes buscam atendimento à noite e nos fins de semana. Implementamos agentes inteligentes conectados exclusivamente à API Oficial da Meta (Cloud API), com o seu DDD local (12 ou da sua cidade).
                </p>

                <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[var(--accent)]" />
                    <span>Conexão oficial homologada pela Meta: zero risco de banimento de chip</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[var(--accent)]" />
                    <span>Compreensão de áudios, textos e linguagem natural humanizada</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[var(--accent)]" />
                    <span>Triagem de clientes, respostas a dúvidas de procedimentos e agendamento</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[var(--accent)]" />
                    <span>Servidores dedicados com Docker e conformidade estrita com a LGPD</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href="https://wa.me/5512988921999?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20demonstra%C3%A7%C3%A3o%20do%20Agente%20de%20IA%20no%20WhatsApp."
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary text-xs uppercase tracking-wider"
                  >
                    <span>Implantar Agente de IA</span>
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
                  <span>DESENVOLVIMENTO &amp; INTEGRAÇÕES</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                  Sistemas Sob Medida &amp; Integrações Robustas de APIs
                </h2>

                <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                  Construímos softwares corporativos que resolvem gargalos operacionais específicos: aplicativos mobile nativos em Flutter, painéis administrativos escaláveis em Next.js e conexões entre sistemas que hoje operam isolados.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[var(--text-secondary)]">
                  <div className="flex items-start gap-2.5">
                    <Smartphone size={18} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[var(--text-primary)]">Mobile em Flutter</strong>
                      <span className="text-xs">Apps iOS/Android com suporte offline-first.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Globe size={18} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[var(--text-primary)]">Plataformas Web Next.js</strong>
                      <span className="text-xs">Portais de clientes e dashboards corporativos.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Network size={18} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[var(--text-primary)]">Integração de APIs (Ponto+)</strong>
                      <span className="text-xs">Sincronização de ponto, ERPs e sistemas legados.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Database size={18} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[var(--text-primary)]">Bancos &amp; Infraestrutura</strong>
                      <span className="text-xs">PostgreSQL, microsserviços e Docker.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contato"
                    className="btn-primary text-xs uppercase tracking-wider"
                  >
                    <span>Solicitar Briefing de Projeto</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="card-boutique p-8 bg-[#0b1629]">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                    <Cpu size={18} className="text-[var(--accent)]" />
                    <span>Exemplos de Ecossistemas Integrados</span>
                  </h3>
                  <div className="space-y-4 text-xs md:text-sm">
                    <div className="p-4 rounded-xl bg-[#0F1E36] border border-[var(--border-subtle)]">
                      <strong className="block text-[var(--accent)] mb-1">Ponto Eletrônico &amp; RH (API Ponto+)</strong>
                      <p className="text-[var(--text-secondary)]">
                        Automatização de coleta de batidas e validação de jornadas diretamente com o sistema central da empresa.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0F1E36] border border-[var(--border-subtle)]">
                      <strong className="block text-[var(--accent)] mb-1">Gateways Financeiros &amp; Bancos (Asaas / Pagar.me)</strong>
                      <p className="text-[var(--text-secondary)]">
                        Conciliação automática via Webhook, emissão de cobranças e repasses com segurança transacional.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0F1E36] border border-[var(--border-subtle)]">
                      <strong className="block text-[var(--accent)] mb-1">Meta Cloud API (WhatsApp Corporativo)</strong>
                      <p className="text-[var(--text-secondary)]">
                        Alertas automáticos, confirmações de agendamento e notificações transacionais disparadas por eventos do banco de dados.
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
              Precisa de Tecnologia Sólida para o seu Negócio?
            </h2>
            <p className="text-[var(--text-secondary)] mb-8">
              Atendimento presencial no Vale do Paraíba e consultoria remota estruturada para empresas de todo o país.
            </p>
            <Link href="/contato" className="btn-primary text-base">
              <span>Falar com Nossa Equipe de Engenharia</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
