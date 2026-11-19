import { ShieldCheck, Cpu, ArrowRight, Network } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
      {/* Luz ambiente de fundo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(198,168,124,0.12),transparent_70%)] pointer-events-none -z-10" />

      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="badge-boutique mb-8 animate-fade-in">
            <span className="dot-pulse" />
            <span>Consultoria &amp; Engenharia de Software · Taubaté/SP</span>
          </div>

          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-[var(--text-primary)] max-w-5xl">
            Engenharia de Software, Plataformas SaaS &amp; Integrações de Sistemas.
          </h1>

          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mb-10 leading-relaxed font-normal">
            Projetamos produtos digitais de alta confiabilidade, aplicativos sob medida e integrações robustas entre plataformas, APIs corporativas e Inteligência Artificial.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
            <Link
              href="/contato"
              className="btn-primary w-full sm:w-auto text-base"
            >
              <span>Solicitar Diagnóstico Técnico</span>
              <ArrowRight size={18} />
            </Link>
            <Link href="#solucoes" className="btn-secondary w-full sm:w-auto text-base">
              Conhecer Nossos Produtos &amp; Serviços
            </Link>
          </div>

          {/* Selos de Confiança Técnica */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-12 border-t border-[var(--border-subtle)] w-full max-w-3xl">
            <div className="flex items-center justify-center gap-3 text-left">
              <div className="p-2.5 rounded-lg bg-[#14243f] border border-[var(--border-subtle)] text-[var(--accent)]">
                <Cpu size={20} />
              </div>
              <div>
                <strong className="block text-sm font-semibold text-[var(--text-primary)]">
                  Formação UNIFEI
                </strong>
                <span className="text-xs text-[var(--text-muted)]">
                  Engenharia de Controle &amp; Automação
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 text-left">
              <div className="p-2.5 rounded-lg bg-[#14243f] border border-[var(--border-subtle)] text-[var(--accent)]">
                <Network size={20} />
              </div>
              <div>
                <strong className="block text-sm font-semibold text-[var(--text-primary)]">
                  Integrações de APIs
                </strong>
                <span className="text-xs text-[var(--text-muted)]">
                  Ponto+, ERPs, Bancos e Meta API
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 text-left">
              <div className="p-2.5 rounded-lg bg-[#14243f] border border-[var(--border-subtle)] text-[var(--accent)]">
                <ShieldCheck size={20} />
              </div>
              <div>
                <strong className="block text-sm font-semibold text-[var(--text-primary)]">
                  SaaS &amp; Infraestrutura
                </strong>
                <span className="text-xs text-[var(--text-muted)]">
                  Containers Docker, Cloud &amp; LGPD
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
