import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Scissors, CheckCircle2, ArrowRight, ShieldCheck, Zap, CreditCard, CalendarCheck, BarChart3, Users } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BarberSpace | Plataforma SaaS para Gestão de Barbearias · G. Marcondes",
  description: "Sistema completo para gestão de barbearias: agendamento online 24/7 sem baixar app, split automático de pagamentos e clube de assinaturas recorrentes.",
};

export default function BarberSpacePage() {
  const features = [
    {
      icon: CalendarCheck,
      title: "Agendamento Online Instantâneo",
      desc: "O cliente acessa a página da sua barbearia pelo celular, escolhe o profissional, o serviço e o horário em menos de 15 segundos. Sem precisar baixar aplicativos pesados da loja."
    },
    {
      icon: CreditCard,
      title: "Split Inteligente de Pagamentos",
      desc: "Divisão automática de faturamento entre a barbearia e os profissionais parceiros. O dinheiro da comissão vai direto para a conta do barbeiro, eliminando bi-tributação e horas de fechamento manual."
    },
    {
      icon: Users,
      title: "Clube de Assinaturas Recorrente",
      desc: "Crie planos mensais de cortes e barba com cobrança automática no cartão de crédito via gateway Asaas, garantindo faturamento previsível todo início de mês."
    },
    {
      icon: Zap,
      title: "Lembretes Automáticos Anti-Falta",
      desc: "Notificações automáticas de confirmação de horário pelo WhatsApp para reduzir o principal ralo de faturamento de uma barbearia: o cliente que esquece e não comparece."
    },
    {
      icon: BarChart3,
      title: "Fechamento de Caixa & Métricas",
      desc: "Relatórios em tempo real de faturamento bruto, ticket médio por cliente, ranking de serviços mais rentáveis e conciliação financeira com um clique."
    },
    {
      icon: ShieldCheck,
      title: "Segurança & Alta Disponibilidade",
      desc: "Ambiente multi-tenant em nuvem, com backups diários e dados criptografados, garantindo que seu estabelecimento nunca pare por instabilidade."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0F1E36] text-[#F4EFEA]">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section do Produto */}
        <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 border-b border-[var(--border-subtle)] bg-[#0b1629]/40">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
              <div className="badge-boutique mb-6">
                <Scissors size={14} />
                <span>SaaS Multi-Tenant Especializado</span>
              </div>

              <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl mb-6 text-[var(--text-primary)]">
                BarberSpace: Gestão Inteligente, Agendamento Fluido &amp; Split Automático.
              </h1>

              <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mb-10 leading-relaxed">
                Desenvolvido com padrão de engenharia para eliminar de vez comandas de papel, discussões sobre repasse de comissões e furos de agenda na sua barbearia.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://wa.me/5512988921999?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20demonstra%C3%A7%C3%A3o%20do%20BarberSpace%20na%20minha%20barbearia."
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary text-base"
                >
                  <span>Agendar Demonstração Gratuita</span>
                  <ArrowRight size={18} />
                </a>
                <Link href="/contato" className="btn-secondary text-base">
                  Falar sobre Implantação
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Grade de Recursos */}
        <section className="py-24">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-xs uppercase font-mono tracking-widest text-[var(--accent)] font-semibold mb-3">
                Recursos Projetados para Escala
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Tudo o que sua Barbearia Precisa em Uma Única Plataforma
              </h2>
              <p className="text-[var(--text-secondary)]">
                Projetado tanto para barbearias em expansão quanto para redes com múltiplos profissionais e unidades.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={i} className="card-boutique p-8 flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-[#0F1E36] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent)] mb-6 shadow-sm">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                        {f.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Destaque Split Financeiro */}
        <section className="py-20 border-y border-[var(--border-subtle)] bg-[#0b1629]/60">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <span className="text-xs uppercase font-mono tracking-widest text-[var(--accent)] font-semibold block mb-3">
                  Lei do Salão Parceiro &amp; Finanças
                </span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  Adeus Cálculo Manual de Comissões e Risco Tributário
                </h2>
                <p className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed mb-6">
                  No modelo tradicional, o estabelecimento recebe todo o dinheiro na maquininha, paga imposto sobre o total bruto e depois calcula comissões manualmente no domingo à noite.
                </p>
                <p className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed mb-8">
                  Com o <strong>Split Integrado do BarberSpace</strong>, a divisão é feita no momento da transação via gateway bancário. A comissão cai diretamente na conta do profissional parceiro e a cota do estabelecimento fica na sua conta jurídica, em estrita conformidade contábil.
                </p>

                <ul className="space-y-3 text-sm text-[var(--text-primary)] mb-8">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[var(--accent)]" />
                    <span>Eliminação do tempo gasto com conciliação manual</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[var(--accent)]" />
                    <span>Transparência total para os profissionais parceiros</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[var(--accent)]" />
                    <span>Cobrança automatizada via PIX e Cartão de Crédito</span>
                  </li>
                </ul>

                <a
                  href="https://wa.me/5512988921999?text=Quero%20entender%20como%20o%20split%20de%20pagamentos%20do%20BarberSpace%20funciona%20na%20pr%C3%A1tica."
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  <span>Solicitar Apresentação Técnica</span>
                  <ArrowRight size={16} />
                </a>
              </div>

              <div className="lg:col-span-6">
                <div className="p-8 rounded-2xl bg-[#0F1E36] border border-[var(--border-strong)] shadow-xl">
                  <h4 className="text-lg font-bold text-[var(--text-primary)] mb-4">
                    Comparativo Operacional
                  </h4>
                  <div className="space-y-4 text-xs md:text-sm">
                    <div className="p-4 rounded-xl bg-[#0b1629] border border-red-500/20">
                      <strong className="block text-red-400 mb-1">Como a maioria opera hoje:</strong>
                      <p className="text-[var(--text-muted)]">
                        Comandas de papel rasuradas, maquininhas avulsas, cliente ligando no WhatsApp enquanto o barbeiro corta o cabelo, e horas perdidas na calculadora para fechar o pagamento semanal da equipe.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#14243f] border border-[var(--accent)]/40">
                      <strong className="block text-[var(--accent)] mb-1">Com o BarberSpace:</strong>
                      <p className="text-[var(--text-secondary)]">
                        O cliente agenda sozinho em segundos, recebe confirmação no WhatsApp, o pagamento é dividido no milissegundo pelo gateway e o relatório financeiro fica pronto em tempo real.
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
              Modernize a Operação da sua Barbearia Hoje Mesmo
            </h2>
            <p className="text-[var(--text-secondary)] mb-8">
              Atendimento presencial no Vale do Paraíba (Taubaté, Pindamonhangaba, São José dos Campos) e suporte remoto para todo o Brasil.
            </p>
            <a
              href="https://wa.me/5512988921999?text=Ol%C3%A1%2C%20vamos%20implantar%20o%20BarberSpace."
              target="_blank"
              rel="noreferrer"
              className="btn-primary text-base"
            >
              <span>Conversar com a Equipe de Engenharia</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
