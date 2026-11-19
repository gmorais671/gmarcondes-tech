import { Scissors, Bot, Layers, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Solutions() {
  return (
    <section id="solucoes" className="py-24 border-t border-[var(--border-subtle)] bg-[#0b1629]/50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-xs uppercase font-mono tracking-widest text-[var(--accent)] font-semibold mb-3">
            Pilares de Atuação
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5">
            Soluções Tecnológicas Projetadas para Resolver Dores Reais
          </h2>
          <p className="text-[var(--text-secondary)] text-base md:text-lg">
            Unimos produtos proprietários prontos para operar com a capacidade de criar sistemas e integrações complexas sob demanda.
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
                SaaS Multi-Tenant
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-4 text-[var(--text-primary)]">
                BarberSpace
              </h3>
              <p className="text-[var(--text-secondary)] text-sm mb-6 leading-relaxed">
                Plataforma em nuvem para barbearias e centros de estética. Automatiza o agendamento de clientes, elimina cálculos manuais de comissão e gerencia o caixa da sua operação.
              </p>

              <ul className="space-y-3 mb-8 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
                  <span>Agendamento online fluido no navegador (sem app pesado)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
                  <span>Split automático de pagamentos e repasse aos profissionais</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
                  <span>Clube de assinaturas recorrentes com faturamento previsível</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
                  <span>Lembretes anti-falta automáticos</span>
                </li>
              </ul>
            </div>

            <Link
              href="/solucoes#barberspace"
              className="btn-secondary w-full text-xs uppercase tracking-wider justify-between group"
            >
              <span>Ver Detalhes do BarberSpace</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* PRODUTO 2: AGENTES DE IA & ATENDIMENTO */}
          <div className="card-boutique p-8 flex flex-col justify-between border-[var(--border-strong)] relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[var(--accent)] text-[#0F1E36] text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-bl-lg">
              Automação 24/7
            </div>

            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0F1E36] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent)] mb-6 shadow-sm">
                <Bot size={24} />
              </div>
              <span className="text-xs uppercase font-mono tracking-wider text-[var(--accent)] font-medium">
                IA &amp; Atendimento Oficial
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-4 text-[var(--text-primary)]">
                Agentes de IA no WhatsApp
              </h3>
              <p className="text-[var(--text-secondary)] text-sm mb-6 leading-relaxed">
                Atendimento humanizado 24/7 com IA treinada para clínicas, consultórios e empresas de serviços. Integração com a API Oficial da Meta e DDD local.
              </p>

              <ul className="space-y-3 mb-8 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
                  <span>Conexão oficial da Meta (Cloud API) sem risco de bloqueio</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
                  <span>Respostas inteligentes a dúvidas, tabelas de preço e horários</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
                  <span>Triagem de clientes, qualificação e agendamento automático</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
                  <span>Servidores dedicados com Docker e proteção total LGPD</span>
                </li>
              </ul>
            </div>

            <Link
              href="/solucoes#agentes-ia"
              className="btn-primary w-full text-xs uppercase tracking-wider justify-between group"
            >
              <span>Ver Detalhes dos Agentes de IA</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* PRODUTO 3: ENGENHARIA SOB MEDIDA & INTEGRAÇÃO DE APIS */}
          <div className="card-boutique p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0F1E36] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent)] mb-6 shadow-sm">
                <Layers size={24} />
              </div>
              <span className="text-xs uppercase font-mono tracking-wider text-[var(--accent)] font-medium">
                Desenvolvimento &amp; Integração
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-4 text-[var(--text-primary)]">
                Sistemas &amp; Integrações de APIs
              </h3>
              <p className="text-[var(--text-secondary)] text-sm mb-6 leading-relaxed">
                Construção de aplicações corporativas, aplicativos mobile em Flutter e integração de sistemas legados com APIs de RH (Ponto+), bancos e ERPs.
              </p>

              <ul className="space-y-3 mb-8 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
                  <span>Apps nativos para iOS e Android em Flutter</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
                  <span>Integrações com APIs de ponto (Ponto+), ERPs e gateways (Asaas)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
                  <span>Plataformas web em Next.js / Node.js escaláveis</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
                  <span>Arquiteturas offline-first, microsserviços e segurança</span>
                </li>
              </ul>
            </div>

            <Link
              href="/solucoes#sistemas-integracoes"
              className="btn-secondary w-full text-xs uppercase tracking-wider justify-between group"
            >
              <span>Ver Detalhes de Integração</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
