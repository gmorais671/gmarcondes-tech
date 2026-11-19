import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gmarcondes.tech"),
  title: "G. Marcondes | Soluções em TI · Engenharia de Software, SaaS & IA",
  description:
    "Consultoria e engenharia de software em Taubaté/SP. Plataforma SaaS BarberSpace, Agentes Inteligentes no WhatsApp com API oficial da Meta e desenvolvimento sob medida.",
  keywords: [
    "Engenharia de Software",
    "G. Marcondes",
    "BarberSpace",
    "Agente de IA WhatsApp",
    "Meta Cloud API",
    "Taubaté",
    "Vale do Paraíba",
    "SaaS",
    "Flutter",
    "Next.js"
  ],
  authors: [{ name: "Gabriel Morais Marcondes" }],
  openGraph: {
    title: "G. Marcondes | Soluções em TI · Engenharia de Software & IA",
    description: "Sistemas sob medida, SaaS BarberSpace e Agentes de IA dedicados no WhatsApp com API oficial da Meta.",
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
      <body>{children}</body>
    </html>
  );
}
