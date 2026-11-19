import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Award, GraduationCap, Code2, MapPin, ExternalLink, ArrowRight, ShieldCheck, HeartHandshake } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre a Empresa | Consultoria & Engenharia de Software · G. Marcondes",
  description: "Conheça a G. Marcondes Soluções em TI: sediada em Taubaté/SP, fundada por Gabriel Morais Marcondes (Engenheiro UNIFEI), entregando software de alto padrão e inteligência técnica para empresas.",
};

export default function SobrePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F1E36] text-[#F4EFEA]">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section Institucional */}
        <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 border-b border-[var(--border-subtle)] bg-[#0b1629]/40">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
              <div className="badge-boutique mb-6">
                <MapPin size={14} />
                <span>Taubaté/SP · Vale do Paraíba &amp; Global</span>
              </div>

              <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl mb-6 text-[var(--text-primary)]">
                A Engenharia de Software Feita para Durar.
              </h1>

              <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mb-8 leading-relaxed">
                Nascemos para preencher uma lacuna crônica de mercado: empresas que precisam de tecnologia séria, mas não querem lidar com burocracias impessoais nem com ferramentas frágeis e amadoras.
              </p>
            </div>
          </div>
        </section>

        {/* Nossa Filosofia de Trabalho */}
        <section className="py-24">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6 text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
                <span className="text-xs uppercase font-mono tracking-widest text-[var(--accent)] font-semibold block">
                  Nossa Proposta de Valor
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
                  Engenharia com Proximidade: Rigor Técnico e Atendimento Executivo
                </h2>
                <p>
                  A <strong>G. Morais Marcondes Soluções em Tecnologia da Informação LTDA</strong> atua como uma consultoria especializada em engenharia de software e desenvolvimento de soluções digitais. Isso significa que não temos dezenas de intermediários, gerentes de conta que não entendem de código ou suporte terceirizado em outro estado.
                </p>
                <p>
                  Aqui, cada linha de código, cada modelo de banco de dados e cada arquitetura de integração é pensada e validada diretamente por quem tem formação sólida em engenharia.
                </p>
                <p>
                  Entregamos aos nossos parceiros o mesmo nível de robustez técnica exigido por grandes empresas de tecnologia, mas com a agilidade, transparência e proximidade que os negócios modernos demandam.
                </p>
              </div>

              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="card-boutique p-6 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#0F1E36] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent)] mb-4">
                      <GraduationCap size={20} />
                    </div>
                    <strong className="block text-base font-bold text-[var(--text-primary)] mb-2">
                      Rigor da Engenharia
                    </strong>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      Projetos estruturados com bases matemáticas, testes e modelagem de arquitetura formal, garantindo que o sistema suporte o crescimento do negócio.
                    </p>
                  </div>
                </div>

                <div className="card-boutique p-6 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#0F1E36] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent)] mb-4">
                      <ShieldCheck size={20} />
                    </div>
                    <strong className="block text-base font-bold text-[var(--text-primary)] mb-2">
                      Segurança &amp; LGPD
                    </strong>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      Ambientes com isolamento lógico de banco de dados, criptografia e conformidade estrita com a legislação brasileira de proteção de dados.
                    </p>
                  </div>
                </div>

                <div className="card-boutique p-6 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#0F1E36] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent)] mb-4">
                      <Code2 size={20} />
                    </div>
                    <strong className="block text-base font-bold text-[var(--text-primary)] mb-2">
                      Código Proprietário
                    </strong>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      Em nossos projetos sob medida, o código e os dados pertencem integralmente à sua empresa, sem aprisionamento tecnológico em plataformas obscuras.
                    </p>
                  </div>
                </div>

                <div className="card-boutique p-6 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#0F1E36] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent)] mb-4">
                      <HeartHandshake size={20} />
                    </div>
                    <strong className="block text-base font-bold text-[var(--text-primary)] mb-2">
                      Atendimento Direto
                    </strong>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      Comunicação de fundador para fundador. Suporte ágil e reuniões consultivas com quem realmente programa e sustenta o seu sistema.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Liderança Técnica do Fundador */}
        <section className="py-20 border-t border-[var(--border-subtle)] bg-[#0b1629]/50">
          <div className="container-custom">
            <div className="card-boutique p-8 md:p-12 relative overflow-hidden">
              <div className="max-w-3xl">
                <div className="badge-boutique mb-4">
                  <Award size={14} />
                  <span>Direção Técnica &amp; Fundador</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                  Gabriel Morais Marcondes
                </h2>

                <p className="text-[var(--accent)] font-medium text-sm md:text-base mb-6 font-mono">
                  Engenheiro de Controle e Automação (UNIFEI) · Engenheiro de Software
                </p>

                <div className="text-[var(--text-secondary)] text-sm md:text-base space-y-4 mb-8 leading-relaxed">
                  <p>
                    Formado pela renomada <strong>Universidade Federal de Itajubá (UNIFEI)</strong>, Gabriel traz a precisão analítica e o pensamento sistêmico da automação industrial para o desenvolvimento de software corporativo.
                  </p>
                  <p>
                    Com anos de experiência construindo aplicativos móveis em Flutter, plataformas de alta escala em Next.js e backends resilientes conectados a gateways bancários e APIs corporativas, ele lidera cada projeto da G. Marcondes com foco em solidez e longevidade.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://www.gabrielmoraisdev.com.br"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary text-xs uppercase tracking-wider"
                  >
                    <span>Acessar Portfólio Pessoal Técnico (Gabriel Morais)</span>
                    <ExternalLink size={15} />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/gabriel-morais-marcondes-flutter-fullstack/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary text-xs uppercase tracking-wider"
                  >
                    <span>Perfil no LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 text-center">
          <div className="container-custom max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vamos Conversar Sobre o Futuro Digital do seu Negócio?
            </h2>
            <p className="text-[var(--text-secondary)] mb-8">
              Atendemos presencialmente no Vale do Paraíba e com suporte remoto estruturado para clientes no Brasil e no exterior.
            </p>
            <Link href="/contato" className="btn-primary text-base">
              <span>Falar com Nossa Equipe</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
