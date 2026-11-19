import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Bot, ShieldCheck, ArrowRight, MessageSquare, Clock, Cpu, Lock, CheckCircle2, UserCheck } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Agentes de IA no WhatsApp | Atendimento 24/7 com API Oficial da Meta · G. Marcondes",
  description: "Automação de atendimento inteligente para clínicas, consultórios e empresas. Conexão oficial via Meta Cloud API, sem risco de banimento, com DDD local e total conformidade com a LGPD.",
};

export default function AgentesIAPage() {
  const benefits = [
    {
      icon: Clock,
      title: "Atendimento 24 Horas, 7 Dias por Semana",
      desc: "Mais de 40% dos clientes buscam informações e agendamentos fora do horário comercial (à noite ou nos fins de semana). Seu agente de IA responde em segundos sem deixar o lead esfriar."
    },
    {
      icon: ShieldCheck,
      title: "Conexão Oficial com a Meta (Cloud API)",
      desc: "Implementamos exclusivamente a API Oficial da Meta com o seu DDD local (12 ou da sua cidade). Risco zero de bloqueio ou banimento do número institucional da sua empresa."
    },
    {
      icon: Cpu,
      title: "Conversação Natural & Humanizada",
      desc: "Esqueça os robôs antigos de 'digite 1 para financeiro, digite 2 para suporte'. A IA compreende frases completas, mensagens de áudio e gírias com naturalidade e contexto."
    },
    {
      icon: UserCheck,
      title: "Triagem Inteligente & Transbordo Humano",
      desc: "O agente qualifica o cliente, tira dúvidas recorrentes e, quando necessário, transfere o atendimento de forma organizada para a secretária ou equipe interna."
    },
    {
      icon: Lock,
      title: "Segurança de Dados & Conformidade LGPD",
      desc: "Infraestrutura dedicada rodando em containers Docker seguros. Os históricos e dados de clientes pertencem exclusivamente à sua empresa."
    },
    {
      icon: MessageSquare,
      title: "Agendamento Automatizado",
      desc: "Conexão direta com a sua agenda ou sistema de gestão para oferecer horários disponíveis e confirmar compromissos sem atrito."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0F1E36] text-[#F4EFEA]">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 border-b border-[var(--border-subtle)] bg-[#0b1629]/40">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
              <div className="badge-boutique mb-6">
                <Bot size={14} />
                <span>Meta Cloud API Oficial &amp; Self-Hosted</span>
              </div>

              <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl mb-6 text-[var(--text-primary)]">
                Agentes de IA no WhatsApp: Atendimento Ágil, Seguro &amp; Humanizado 24/7.
              </h1>

              <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mb-10 leading-relaxed">
                Transforme o canal mais importante da sua empresa em um consultor incansável. Sem risco de banimento de número, com DDD local e inteligência treinada no contexto do seu negócio.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://wa.me/5512988921999?text=Ol%C3%A1%2C%20gostaria%20de%20testar%20uma%20demonstra%C3%A7%C3%A3o%20do%20Agente%20de%20IA%20no%20WhatsApp."
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary text-base"
                >
                  <span>Testar Demonstração ao Vivo</span>
                  <ArrowRight size={18} />
                </a>
                <Link href="/contato" className="btn-secondary text-base">
                  Solicitar Diagnóstico para Minha Empresa
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Grade de Benefícios */}
        <section className="py-24">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-xs uppercase font-mono tracking-widest text-[var(--accent)] font-semibold mb-3">
                Engenharia de Conversação
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Por que a API Oficial Faz Toda a Diferença?
              </h2>
              <p className="text-[var(--text-secondary)]">
                Projetamos agentes robustos sobre a infraestrutura da Meta com rigor de engenharia de software e privacidade total.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div key={i} className="card-boutique p-8 flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-[#0F1E36] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent)] mb-6 shadow-sm">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                        {b.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Demonstração de Caso de Uso */}
        <section className="py-20 border-y border-[var(--border-subtle)] bg-[#0b1629]/60">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <span className="text-xs uppercase font-mono tracking-widest text-[var(--accent)] font-semibold block mb-3">
                  Experiência Real do Cliente
                </span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  Resposta Imediata Quando o Seu Concorrente Está Dormindo
                </h2>
                <p className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed mb-6">
                  Quando um paciente ou cliente em potencial pesquisa um serviço no domingo à noite, ele entra em contato com 3 ou 4 empresas. A primeira que responder de forma clara, educada e segura leva o atendimento.
                </p>
                <p className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed mb-8">
                  Nossos agentes compreendem preços, tabelas de convênio, procedimentos, horários vagos e respondem em até 3 segundos. Se a dúvida for complexa, a IA agradece, armazena a solicitação e alerta a sua equipe humana para assumir no primeiro minuto da manhã.
                </p>

                <ul className="space-y-3 text-sm text-[var(--text-primary)] mb-8">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[var(--accent)]" />
                    <span>Ideal para Clínicas Médicas, Odontológicas e Estética</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[var(--accent)]" />
                    <span>Perfeito para Escritórios de Advocacia, Contabilidade e Serviços</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[var(--accent)]" />
                    <span>Implementação rápida com treinamento customizado para o seu nicho</span>
                  </li>
                </ul>

                <a
                  href="https://wa.me/5512988921999?text=Quero%20agendar%20um%20diagn%C3%B3stico%20para%20implantar%20IA%20no%20meu%20WhatsApp."
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  <span>Solicitar Proposta para Minha Empresa</span>
                  <ArrowRight size={16} />
                </a>
              </div>

              <div className="lg:col-span-6">
                <div className="p-8 rounded-2xl bg-[#0F1E36] border border-[var(--border-strong)] shadow-xl">
                  <h4 className="text-lg font-bold text-[var(--text-primary)] mb-4">
                    Simulação de Diálogo (Domingo, 23h45)
                  </h4>
                  <div className="space-y-4 text-xs md:text-sm font-sans">
                    <div className="p-4 rounded-xl bg-[#0b1629] border border-[var(--border-subtle)] text-right">
                      <span className="text-[10px] text-[var(--text-muted)] block mb-1">Cliente · 23h45</span>
                      <p className="text-[var(--text-primary)]">
                        &quot;Boa noite! Vocês atendem convênio Unimed para consulta dermatológica particular ou exame?&quot;
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#14243f] border border-[var(--accent)]/30 text-left">
                      <span className="text-[10px] text-[var(--accent)] font-mono block mb-1">Agente de IA (G. Marcondes) · 23h45</span>
                      <p className="text-[var(--text-secondary)]">
                        &quot;Olá! Boa noite. Tudo bem? Atendemos sim o convênio Unimed para consultas clínicas! Para atendimento particular com a especialista, o valor é R$ 350 com retorno em até 21 dias. Gostaria de checar os horários disponíveis para esta semana?&quot;
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0b1629] border border-[var(--border-subtle)] text-right">
                      <span className="text-[10px] text-[var(--text-muted)] block mb-1">Cliente · 23h46</span>
                      <p className="text-[var(--text-primary)]">
                        &quot;Quero sim! Tem vaga na quarta à tarde?&quot;
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#14243f] border border-[var(--accent)]/30 text-left">
                      <span className="text-[10px] text-[var(--accent)] font-mono block mb-1">Agente de IA (G. Marcondes) · 23h46</span>
                      <p className="text-[var(--text-secondary)]">
                        &quot;Temos às 14h30 e às 16h00 com a Dra. Mariana na quarta-feira. Qual desses horários fica melhor para você reservar?&quot;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 text-center">
          <div className="container-custom max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Não Deixe Leads Valiosos Sem Resposta no WhatsApp
            </h2>
            <p className="text-[var(--text-secondary)] mb-8">
              Atendimento executivo no Vale do Paraíba e implantação para empresas de todo o Brasil.
            </p>
            <a
              href="https://wa.me/5512988921999?text=Ol%C3%A1%2C%20vamos%20conversar%20sobre%20o%20Agente%20de%20IA%20no%20WhatsApp."
              target="_blank"
              rel="noreferrer"
              className="btn-primary text-base"
            >
              <span>Conversar com o Especialista</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
