import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nosotros — Sabifin",
  description: "Sabifin es una consultora organizacional argentina con más de tres años de trayectoria. Dirección estratégica externa para PyMEs.",
};

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "var(--color-brand-green)" }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-green-400)", letterSpacing: "0.18em" }}>
            Quiénes somos
          </p>
          <h1 className="text-4xl md:text-5xl font-bold max-w-2xl" style={{ color: "var(--color-brand-cream)" }}>
            No somos consultores. Somos tu equipo de dirección externo.
          </h1>
        </div>
      </section>

      {/* Propuesta de valor */}
      <section style={{ backgroundColor: "var(--color-white)" }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--color-brand-green)" }}>
                Tres años transformando PyMEs argentinas
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--color-text-secondary)" }}>
                Sabifin nació de una observación simple: la mayoría de las PyMEs argentinas tienen dueños trabajadores, comprometidos, con ganas de crecer. Pero sin estructura, sin sistemas y sin datos claros, terminan atrapados en el día a día sin poder escalar.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--color-text-secondary)" }}>
                Las empresas grandes tienen directores financieros, gerentes comerciales, jefes de operaciones. Las PyMEs, en cambio, tienen al dueño haciendo todo. Nosotros venimos a cambiar esa ecuación.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                No ejecutamos tareas aisladas ni entregamos informes que terminan en un cajón. Instalamos <strong style={{ color: "var(--color-text-primary)" }}>sistemas de gobierno empresarial</strong> que funcionan y que el equipo adopta: estructura, procesos, indicadores y seguimiento real.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { title: "Diagnóstico honesto", desc: "Empezamos por ver la realidad sin filtros. No vendemos soluciones genéricas — cada plan surge del diagnóstico real de tu negocio." },
                { title: "Acompañamiento continuo", desc: "No desaparecemos después de entregar un informe. Estamos cada semana, ajustando, respondiendo, avanzando." },
                { title: "Foco en resultados", desc: "Medimos el éxito con datos: márgenes, estructura de costos, indicadores de equipo, proceso productivo. No con promesas." },
                { title: "Lenguaje de dueño de pyme", desc: "Hablamos claro, sin tecnicismos. El objetivo es que entiendas tu negocio mejor, no que dependas de nosotros para entenderlo." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-1 rounded-full flex-shrink-0 mt-1" style={{ backgroundColor: "var(--color-green-400)", minHeight: "40px" }} />
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: "var(--color-text-primary)" }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Diferencial */}
      <section style={{ backgroundColor: "var(--color-brand-cream)" }} className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-green-400)", letterSpacing: "0.18em" }}>
            Nuestro diferencial
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: "var(--color-brand-green)" }}>
            Sistemas, no tareas sueltas
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-left mt-10">
            <div className="rounded-xl p-6" style={{ backgroundColor: "var(--color-white)", border: "1px solid var(--color-border-light)" }}>
              <p className="text-sm font-semibold mb-3 uppercase tracking-wide" style={{ color: "var(--color-error)" }}>Sin Sabifin</p>
              <ul className="space-y-2">
                {[
                  "Tomás decisiones a intuición",
                  "No sabés si ganás o perdés de verdad",
                  "El negocio depende 100% de vos",
                  "Cada área funciona por separado",
                  "No tenés tiempo para pensar en crecer",
                ].map((item) => (
                  <li key={item} className="text-sm flex items-start gap-2" style={{ color: "var(--color-text-secondary)" }}>
                    <span style={{ color: "var(--color-error)" }}>✗</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: "var(--color-green-100)", border: "1px solid var(--color-green-400)" }}>
              <p className="text-sm font-semibold mb-3 uppercase tracking-wide" style={{ color: "var(--color-brand-green)" }}>Con Sabifin</p>
              <ul className="space-y-2">
                {[
                  "Decidís con datos e indicadores reales",
                  "Conocés tu margen, flujo y rentabilidad",
                  "Tu equipo funciona con procesos claros",
                  "Todas las áreas están alineadas",
                  "Tenés tiempo y cabeza para crecer",
                ].map((item) => (
                  <li key={item} className="text-sm flex items-start gap-2" style={{ color: "var(--color-brand-green)" }}>
                    <span>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fotos reales */}
      <section style={{ backgroundColor: "var(--color-white)" }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-center" style={{ color: "var(--color-green-400)", letterSpacing: "0.18em" }}>
            Nuestros clientes
          </p>
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "var(--color-brand-green)" }}>
            Trabajamos en el terreno, con personas reales
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Foto grande a la izquierda */}
            <div className="col-span-2 md:col-span-2 rounded-xl overflow-hidden" style={{ height: "420px", border: "1px solid var(--color-border-light)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/IMG_2827.jpg" alt="Local de cliente Sabifin" className="w-full h-full object-cover" />
            </div>
            {/* Dos fotos apiladas a la derecha */}
            <div className="flex flex-col gap-4">
              <div className="rounded-xl overflow-hidden flex-1" style={{ height: "200px", border: "1px solid var(--color-border-light)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/IMG_2828.jpg" alt="Local de cliente Sabifin" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden flex-1" style={{ height: "200px", border: "1px solid var(--color-border-light)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/IMG_2829.jpg" alt="Local de cliente Sabifin" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-brand-green)" }} className="py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--color-brand-cream)" }}>
            ¿Querés saber cómo trabajamos con tu tipo de negocio?
          </h2>
          <p className="mb-8" style={{ color: "var(--color-text-on-brand)", opacity: 0.8 }}>
            La primera conversación es sin compromiso. Contanos tu situación y te decimos si somos el match correcto.
          </p>
          <Link href="/contacto" className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold" style={{ backgroundColor: "var(--color-green-400)", color: "var(--color-green-900)" }}>
            Hablemos
          </Link>
        </div>
      </section>
    </>
  );
}
