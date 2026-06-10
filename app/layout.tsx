import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Sabifin — Consultora Organizacional",
  description: "Tu empresa más ordenada, rentable y preparada para crecer. Dirección estratégica externa para PyMEs argentinas.",
  keywords: "consultora, pymes, argentina, gestión financiera, administración empresarial, sabifin",
  openGraph: {
    title: "Sabifin — Consultora Organizacional",
    description: "Tu empresa más ordenada, rentable y preparada para crecer.",
    siteName: "Sabifin",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
