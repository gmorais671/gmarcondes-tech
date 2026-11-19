import { ExternalLink, GraduationCap, Award, Code2 } from "lucide-react";

export function Leadership() {
  return (
    <section id="engenharia" className="py-24 border-t border-[var(--border-subtle)] bg-[#0b1629]/40">
      <div className="container-custom">
        <div className="card-boutique p-8 md:p-14 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <div className="badge-boutique mb-4">
                <Award size={14} />
                <span>Liderança Técnica &amp; Fundador</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Gabriel Morais Marcondes
              </h2>

              <p className="text-[var(--accent)] font-medium text-sm md:text-base mb-6 font-mono">
                Engenheiro de Controle e Automação (UNIFEI) · Engenheiro de Software
              </p>

              <div className="text-[var(--text-secondary)] text-sm md:text-base space-y-4 mb-8 leading-relaxed max-w-3xl">
                <p>
                  Com sólida formação pela <strong>Universidade Federal de Itajubá (UNIFEI)</strong> e anos de experiência entregando softwares em produção de alta criticidade, Gabriel lidera a arquitetura técnica de todos os projetos da G. Marcondes.
                </p>
                <p>
                  Sua atuação combina engenharia mobile avançada (Flutter nativo, offline-first, WebSockets), plataformas web escaláveis em Next.js e infraestrutura corporativa (Docker, Python, Node.js e integrações oficiais de Inteligência Artificial).
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://www.gabrielmoraisdev.com.br"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary text-xs uppercase tracking-wider"
                >
                  <span>Ver Portfólio Pessoal &amp; Estudos de Caso Técnicos</span>
                  <ExternalLink size={15} />
                </a>

                <a
                  href="https://www.linkedin.com/in/gabriel-morais-marcondes-flutter-fullstack/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary text-xs uppercase tracking-wider"
                >
                  <span>Conectar no LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="p-6 rounded-xl bg-[#0F1E36] border border-[var(--border-subtle)]">
                <div className="flex items-center gap-3 text-[var(--accent)] mb-2">
                  <GraduationCap size={20} />
                  <strong className="text-sm font-semibold text-[var(--text-primary)]">
                    Base em Engenharia
                  </strong>
                </div>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Rigor matemático, modelagem de processos e arquitetura resiliente herdados da Engenharia de Automação UNIFEI.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#0F1E36] border border-[var(--border-subtle)]">
                <div className="flex items-center gap-3 text-[var(--accent)] mb-2">
                  <Code2 size={20} />
                  <strong className="text-sm font-semibold text-[var(--text-primary)]">
                    Full-Cycle Ownership
                  </strong>
                </div>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Acompanhamento de ponta a ponta: da especificação de requisitos ao monitoramento de servidores e bancos de dados em produção.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
