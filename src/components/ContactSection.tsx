import { MessageSquare, Mail, MapPin, Send } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contato" className="py-24 border-t border-[var(--border-subtle)]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase font-mono tracking-widest text-[var(--accent)] font-semibold mb-3">
                Diagnóstico &amp; Contato
              </p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Pronto para Elevar o Nível Tecnológico do seu Negócio?
              </h2>
              <p className="text-[var(--text-secondary)] text-base mb-8 leading-relaxed">
                Seja para implementar o <strong>BarberSpace</strong>, automatizar seu WhatsApp com a <strong>API Oficial da Meta</strong> ou desenvolver um software sob medida, converse diretamente conosco.
              </p>

              <div className="space-y-4 text-sm text-[var(--text-secondary)]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#14243f] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent)] shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <strong className="block text-[var(--text-primary)]">Taubaté/SP</strong>
                    <span className="text-xs text-[var(--text-muted)]">Atuação em todo o Vale do Paraíba &amp; Remoto Global</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#14243f] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent)] shrink-0">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <strong className="block text-[var(--text-primary)]">WhatsApp Comercial</strong>
                    <a href="https://wa.me/5512988921999" target="_blank" rel="noreferrer" className="text-xs text-[var(--accent)] hover:underline">
                      +55 (12) 98892-1999
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#14243f] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent)] shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <strong className="block text-[var(--text-primary)]">E-mail Corporativo</strong>
                    <a href="mailto:contato@gmarcondes.tech" className="text-xs text-[var(--accent)] hover:underline">
                      contato@gmarcondes.tech
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-[var(--border-subtle)]">
              <a
                href="https://wa.me/5512988921999?text=Ol%C3%A1%2C%20gostaria%20de%20um%20diagn%C3%B3stico%20de%20tecnologia%20para%20minha%20empresa."
                target="_blank"
                rel="noreferrer"
                className="btn-primary w-full text-center"
              >
                <MessageSquare size={18} />
                <span>Conversar pelo WhatsApp Agora</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="card-boutique p-8 md:p-10">
              <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)]">
                Solicite uma Proposta Técnica
              </h3>
              <p className="text-xs text-[var(--text-muted)] mb-6">
                Preencha os campos abaixo para entendermos a demanda do seu negócio.
              </p>

              <form
                action="https://wa.me/5512988921999"
                method="GET"
                target="_blank"
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)] mb-2 font-medium">
                      Seu Nome
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
                      Empresa / Cidade
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      placeholder="Ex: Barbearia Vip / Taubaté"
                      className="w-full px-4 py-3 rounded-xl bg-[#0b1629] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)] mb-2 font-medium">
                    Solução de Interesse
                  </label>
                  <select
                    name="interest"
                    className="w-full px-4 py-3 rounded-xl bg-[#0b1629] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)]"
                  >
                    <option value="BarberSpace">BarberSpace (Gestão de Barbearia / Estética)</option>
                    <option value="Agente de IA WhatsApp">Agente de IA no WhatsApp (API Oficial Meta)</option>
                    <option value="Software Sob Medida">Desenvolvimento de App / Sistema Sob Medida</option>
                    <option value="Consultoria Geral">Diagnóstico Geral de Tecnologia</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)] mb-2 font-medium">
                    Resumo do Desafio
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    placeholder="Conte brevemente o que você precisa resolver hoje na sua operação..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0b1629] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)] resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center text-sm py-3.5 mt-2"
                >
                  <Send size={16} />
                  <span>Enviar Solicitação via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
