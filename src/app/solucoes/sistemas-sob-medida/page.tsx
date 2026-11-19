import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Layers, Smartphone, Globe, Network, Database, ShieldCheck, ArrowRight, CheckCircle2, Server, Cpu } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sistemas Sob Medida & Integração de APIs | Flutter, Next.js e Backends · G. Marcondes",
  description: "Desenvolvimento de aplicativos mobile Flutter, plataformas web escaláveis em Next.js e integrações complexas de APIs (Ponto+, ERPs, gateways de pagamento Asaas e microsserviços).",
};

export default function SistemasSobMedidaPage() {
  const capabilities = [
    {
      icon: Smartphone,
      title: "Aplicativos Mobile em Flutter (iOS & Android)",
      desc: "Desenvolvimento de apps nativos de alta performance a partir de uma base de código unificada. Especialidade em arquitetura offline-first, coleta de dados em campo, WebSockets e sincronização em segundo plano."
    },
    {
      icon: Globe,
      title: "Plataformas Web & Painéis Administrativos",
      desc: "Sistemas web corporativos construídos em Next.js, React e Node.js. Foco em velocidade de carregamento, segurança de acessos baseada em papéis (RBAC) e interfaces intuitivas que a sua equipe realmente gosta de usar."
    },
    {
      icon: Network,
      title: "Integração de APIs Corporativas & Sistemas de RH",
      desc: "Conexão fluida entre sistemas que não conversam entre si. Experiência sólida integrando APIs de gestão de ponto e RH (como Ponto+), ERPs de mercado, CRMs e plataformas de automação."
    },
    {
      icon: Database,
      title: "Modelagem de Bancos de Dados & APIs RESTful",
      desc: "Arquitetura de backends seguros em Node.js e Python, com modelagem relacional de dados em PostgreSQL e MySQL, garantindo integridade transacional e escalabilidade conforme o negócio cresce."
    },
    {
      icon: Server,
      title: "Gateways de Pagamento & Cobrança Recorrente",
      desc: "Integração completa com plataformas financeiras (Asaas, Pagar.me, PIX dinâmico com Webhooks de conciliação imediata, emissão de boletos e split inteligente de comissões)."
    },
    {
      icon: ShieldCheck,
      title: "DevOps, Docker & Infraestrutura em Nuvem",
      desc: "Ambientes conteinerizados com Docker Compose, servidores virtuais (VPS), proxies reversos Nginx com certificados SSL automáticos e pipelines de deploy contínuo (CI/CD)."
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
                <Layers size={14} />
                <span>Engenharia de Software Sob Demanda</span>
              </div>

              <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl mb-6 text-[var(--text-primary)]">
                Sistemas Sob Medida &amp; Integrações Robustas de APIs.
              </h1>

              <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mb-10 leading-relaxed">
                Desenvolvemos aplicativos móveis, plataformas corporativas e integrações entre ecossistemas complexos (sistemas de RH, ERPs e gateways financeiros) com rigor de engenharia e foco em resultados.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contato"
                  className="btn-primary text-base"
                >
                  <span>Solicitar Proposta de Desenvolvimento</span>
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="https://wa.me/5512988921999?text=Ol%C3%A1%2C%20tenho%20um%20projeto%20de%20software%20sob%20medida%20para%20conversar."
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary text-base"
                >
                  Falar Diretamente pelo WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Grade de Especialidades */}
        <section className="py-24">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-xs uppercase font-mono tracking-widest text-[var(--accent)] font-semibold mb-3">
                Stack &amp; Competências
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                O que Construímos para a sua Empresa
              </h2>
              <p className="text-[var(--text-secondary)]">
                Da concepção e arquitetura de dados até o deploy e sustentação em ambiente de produção.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((c, i) => {
                const Icon = c.icon;
                return (
                  <div key={i} className="card-boutique p-8 flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-[#0F1E36] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent)] mb-6 shadow-sm">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                        {c.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {c.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Destaque em Integração de APIs */}
        <section className="py-20 border-y border-[var(--border-subtle)] bg-[#0b1629]/60">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <span className="text-xs uppercase font-mono tracking-widest text-[var(--accent)] font-semibold block mb-3">
                  Interoperabilidade &amp; Dados
                </span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  Conecte Seus Sistemas Legados a Qualquer Plataforma Moderna
                </h2>
                <p className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed mb-6">
                  Muitas empresas sofrem com equipes perdendo horas redigitando planilhas ou dados de um sistema para o outro porque as ferramentas internas não conversam entre si.
                </p>
                <p className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed mb-8">
                  Nós construímos <strong>pontes e integrações seguras</strong>: seja para sincronizar dados de ponto e jornada com a API da <strong>Ponto+</strong>, conectar ERPs legados ao seu e-commerce, ou alimentar agentes inteligentes com a base de dados do seu CRM.
                </p>

                <ul className="space-y-3 text-sm text-[var(--text-primary)] mb-8">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[var(--accent)]" />
                    <span>Automação de rotinas manuais e eliminação de retrabalho</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[var(--accent)]" />
                    <span>Conexão com APIs de RH, contabilidade, fiscal e ERPs</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[var(--accent)]" />
                    <span>Webhooks em tempo real e monitoramento ativo de falhas</span>
                  </li>
                </ul>

                <Link
                  href="/contato"
                  className="btn-primary"
                >
                  <span>Mapear Desafio de Integração</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="lg:col-span-6">
                <div className="p-8 rounded-2xl bg-[#0F1E36] border border-[var(--border-strong)] shadow-xl">
                  <h4 className="text-lg font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                    <Cpu size={20} className="text-[var(--accent)]" />
                    <span>Exemplos de Ecossistemas Integrados</span>
                  </h4>

                  <div className="space-y-4 text-xs md:text-sm">
                    <div className="p-4 rounded-xl bg-[#0b1629] border border-[var(--border-subtle)]">
                      <strong className="block text-[var(--accent)] mb-1">Ponto Eletrônico &amp; RH (Ponto+)</strong>
                      <p className="text-[var(--text-secondary)]">
                        Consumo de batidas, sincronização de jornada e cruzamento automático de escalas com o sistema interno da empresa via API REST.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0b1629] border border-[var(--border-subtle)]">
                      <strong className="block text-[var(--accent)] mb-1">Gateways Financeiros (Asaas / Pagar.me)</strong>
                      <p className="text-[var(--text-secondary)]">
                        Cobranças automáticas recorrentes no cartão, split de pagamento em tempo real e conciliação instantânea via Webhook.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0b1629] border border-[var(--border-subtle)]">
                      <strong className="block text-[var(--accent)] mb-1">Meta Cloud API (WhatsApp Corporativo)</strong>
                      <p className="text-[var(--text-secondary)]">
                        Notificações transacionais, lembretes de agendamento e acionamento de fluxos a partir de eventos do banco de dados.
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
              Precisa de um Software Sólido para a sua Empresa?
            </h2>
            <p className="text-[var(--text-secondary)] mb-8">
              Atendimento executivo no Vale do Paraíba e atuação para empresas em todo o território nacional.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contato" className="btn-primary text-base">
                <span>Enviar Briefing do Projeto</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
