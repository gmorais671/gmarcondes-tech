import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

function InstagramIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[#070e1a] py-16 text-sm text-[var(--text-muted)]">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[var(--border-subtle)]">
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg overflow-hidden border border-[var(--border-strong)] bg-[#0F1E36] p-0.5 shadow-sm">
                <Image
                  src="/brand/logo.jpg"
                  alt="Logo G. Marcondes"
                  width={36}
                  height={36}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div>
                <span className="text-base font-bold text-[var(--text-primary)] block tracking-tight">
                  G. MARCONDES
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[var(--accent)] font-medium block">
                  Soluções em TI
                </span>
              </div>
            </Link>

            <p className="text-xs text-[var(--text-secondary)] max-w-sm leading-relaxed">
              Consultoria e engenharia de software especializada em sistemas sob medida, plataformas SaaS e integração de APIs corporativas.
            </p>

            <span className="text-xs font-mono text-[var(--text-muted)]">
              G. Morais Marcondes Soluções em TI LTDA · Taubaté/SP
            </span>
          </div>

          <div className="md:col-span-3">
            <strong className="block text-xs uppercase tracking-wider text-[var(--text-primary)] font-semibold mb-4 font-mono">
              Soluções &amp; Produtos
            </strong>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/solucoes#barberspace" className="hover:text-[var(--accent)] transition-colors">
                  BarberSpace (SaaS de Barbearias)
                </Link>
              </li>
              <li>
                <Link href="/solucoes#agentes-ia" className="hover:text-[var(--accent)] transition-colors">
                  Agentes de IA &amp; Atendimento 24/7
                </Link>
              </li>
              <li>
                <Link href="/solucoes#sistemas-integracoes" className="hover:text-[var(--accent)] transition-colors">
                  Sistemas Sob Medida &amp; APIs
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-[var(--accent)] transition-colors">
                  Sobre a Empresa
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-[var(--accent)] transition-colors">
                  Solicitar Proposta
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <strong className="block text-xs uppercase tracking-wider text-[var(--text-primary)] font-semibold mb-4 font-mono">
              Canais Oficiais &amp; Engenharia
            </strong>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href="https://instagram.com/gmarcondes.tech"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors"
                >
                  <InstagramIcon size={14} className="text-[var(--accent)]" />
                  <span>Instagram Oficial (@gmarcondes.tech)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.gabrielmoraisdev.com.br"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-[var(--accent)] hover:underline"
                >
                  <ExternalLink size={14} />
                  <span>Portfólio Pessoal do Fundador (Gabriel Morais)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/gabriel-morais-marcondes-flutter-fullstack/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors"
                >
                  <LinkedinIcon size={14} className="text-[var(--accent)]" />
                  <span>LinkedIn Executivo</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} G. Morais Marcondes Soluções em Tecnologia da Informação LTDA. Todos os direitos reservados.</p>
          <p className="text-[11px] text-[var(--text-muted)]">
            Taubaté, Pindamonhangaba, São José dos Campos · Atuação Remota Global
          </p>
        </div>
      </div>
    </footer>
  );
}
