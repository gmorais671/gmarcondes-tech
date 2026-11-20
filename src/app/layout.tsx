import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  metadataBase: new URL("https://gmarcondes.tech"),
  title: "G. Marcondes | IT Solutions · Enterprise Software Engineering, SaaS & Cloud",
  description:
    "Consultoria e engenharia de software especializada. Plataformas SaaS, Enterprise Full-Stack (.NET, Angular, AWS), Agentes Inteligentes no WhatsApp com API oficial da Meta e desenvolvimento sob medida.",
  keywords: [
    "Engenharia de Software",
    "G. Marcondes",
    "Senior Full Stack",
    ".NET",
    "C#",
    "Angular",
    "AWS",
    "Next.js",
    "BarberSpace",
    "Agente de IA WhatsApp",
    "Meta Cloud API",
    "Taubaté",
    "Vale do Paraíba",
    "SaaS",
    "Flutter"
  ],
  authors: [{ name: "Gabriel Morais Marcondes" }],
  openGraph: {
    title: "G. Marcondes | IT Solutions · Enterprise Software Engineering & Cloud",
    description: "Sistemas corporativos sob medida (.NET, Angular, AWS), SaaS BarberSpace e Agentes de IA dedicados no WhatsApp com API oficial da Meta.",
    images: [{ url: "/brand/logo.jpg" }],
  },
  icons: {
    icon: "/brand/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <LanguageProvider>
          {children}
          <FloatingWhatsApp />
        </LanguageProvider>
      </body>
    </html>
  );
}
