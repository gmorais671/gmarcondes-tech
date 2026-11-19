import { Check, X } from "lucide-react";

export function TechnicalDifference() {
  const points = [
    {
      feature: "Conexão e Segurança no WhatsApp",
      agencies: "Automações não oficiais que expõem o número corporativo a riscos de bloqueio",
      gmarcondes: "API Oficial da Meta (Cloud API) com número e DDD local 100% seguros",
    },
    {
      feature: "Infraestrutura e Dados",
      agencies: "Ambientes compartilhados com limitações para grandes volumes",
      gmarcondes: "Servidores dedicados com Docker, isolamento lógico e conformidade com a LGPD",
    },
    {
      feature: "Atendimento & Acompanhamento",
      agencies: "Suporte intermediado por atendentes sem domínio do código",
      gmarcondes: "Contato direto com o engenheiro responsável pela concepção e implantação",
    },
    {
      feature: "Evolução e Integração",
      agencies: "Dificuldade para conectar com ERPs próprios e regras de negócio avançadas",
      gmarcondes: "Código sob medida, modular e preparado para integrações e novas fases de crescimento",
    },
  ];

  return (
    <section className="py-24 border-t border-[var(--border-subtle)]">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase font-mono tracking-widest text-[var(--accent)] font-semibold mb-3">
            Diferencial Técnico
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5">
            Por que Desenvolver com a G. Marcondes?
          </h2>
          <p className="text-[var(--text-secondary)] text-base md:text-lg">
            A diferença prática de contar com uma infraestrutura projetada para estabilidade, segurança e longevidade operacional.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-[var(--border-subtle)]">
                <th className="py-5 px-6 text-sm font-semibold text-[var(--text-muted)] w-1/3">
                  Critério de Decisão
                </th>
                <th className="py-5 px-6 text-sm font-medium text-[var(--text-muted)] w-1/3">
                  Modelos Tradicionais de Mercado
                </th>
                <th className="py-5 px-6 text-sm font-bold text-[var(--accent)] w-1/3 bg-[#14243f]/40 rounded-t-xl">
                  G. Marcondes | Soluções em TI
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-subtle)] text-sm">
              {points.map((p, i) => (
                <tr key={i} className="hover:bg-[#0b1629]/40 transition-colors">
                  <td className="py-5 px-6 font-medium text-[var(--text-primary)]">
                    {p.feature}
                  </td>
                  <td className="py-5 px-6 text-[var(--text-muted)]">
                    <div className="flex items-start gap-2">
                      <X size={16} className="text-red-400 shrink-0 mt-0.5" />
                      <span>{p.agencies}</span>
                    </div>
                  </td>
                  <td className="py-5 px-6 font-medium text-[var(--text-primary)] bg-[#14243f]/20">
                    <div className="flex items-start gap-2 text-[var(--accent-soft)]">
                      <Check size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
                      <span>{p.gmarcondes}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
