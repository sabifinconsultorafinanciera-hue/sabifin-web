import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servicios — Sabifin",
  description: "Administración financiera, gestión comercial, talentos humanos y producción. Las cuatro áreas donde Sabifin transforma tu PyME.",
};

const services = [
  {
    num: "01",
    area: "Administración Financiera",
    tagline: "De no saber si ganás o perdés, a decidir con datos.",
    desc: "La mayoría de los dueños de PyME saben cuánto venden pero no cuánto ganan de verdad. Ordenamos tus números desde la raíz: ingresos, egresos, márgenes, estructura de costos y proyecciones.",
    includes: [
      "Informe mensual con resumen ejecutivo y estado de resultados",
      "Identificación de fugas de rentabilidad",
      "Análisis de flujo de caja y proyecciones",
      "Tablero de indicadores financieros clave",
      "Recomendaciones concretas para el mes siguiente",
    ],
  },
  {
    num: "02",
    area: "Gestión Comercial",
    tagline: "Vendés mejor cuando sabés qué vendés y a quién.",
    desc: "Bajar precios cuando bajan las ventas es el error más común — y el más costoso. Trabajamos la estrategia comercial desde adentro: propuesta de valor, posicionamiento, pricing y proceso de ventas.",
    includes: [
      "Definición de cliente ideal y propuesta de valor",
      "Estrategia de pricing y estructura de márgenes",
      "Posicionamiento frente a la competencia",
      "Proceso comercial y seguimiento de ventas",
      "Plan de acción para reactivar o escalar ventas",
    ],
  },
  {
    num: "03",
    area: "Talentos Humanos y Liderazgo",
    tagline: "Tu negocio no puede depender solo de vos.",
    desc: "Cuando el negocio depende 100% del dueño, no puede crecer — porque el dueño tiene un límite. Construimos la estructura de equipo y los procesos internos para que el negocio funcione sin que estés encima de todo.",
    includes: [
      "Diseño de estructura organizacional",
      "Definición clara de roles y responsabilidades",
      "Procesos internos documentados y replicables",
      "Plan de liderazgo y delegación efectiva",
      "Métricas de desempeño del equipo",
    ],
  },
  {
    num: "04",
    area: "Producción y Operaciones",
    tagline: "Operar mejor no es trabajar más — es trabajar con sistema.",
    desc: "La eficiencia operativa impacta directamente en la rentabilidad. Implementamos normas ISO 9001 y mejoras de procesos para que tu operación sea más consistente, medible y escalable.",
    includes: [
      "Diagnóstico y mapeo de procesos productivos",
      "Implementación de normas ISO 9001",
      "Reducción de errores y reprocesos",
      "Indicadores de eficiencia operativa",
      "Plan de mejora continua documentado",
    ],
  },
];

export default function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "var(--color-brand-green)" }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-green-400)", letterSpacing: "0.18em" }}>Servicios</p>
          <h1 className="text-4xl md:text-5xl font-bold max-w-2xl" style={{ color: "var(--color-brand-cream)" }}>
            Cuatro áreas. Un objetivo: que tu empresa funcione.
          </h1>
          <p className="mt-6 text-lg max-w-xl" style={{ color: "var(--color-text-on-brand)", opacity: 0.8 }}>
            Trabajamos de forma integral o enfocándonos en el área donde más lo necesitás. Siempre con seguimiento real, no entregas únicas.
          </p>
        </div>
      </section>

      {/* Servicios */}
      <section style={{ backgroundColor: "var(--color-brand-cream)" }} className="py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          {services.map((s, i) => (
            <div
              key={s.num}
              className="rounded-2xl overflow-hidden"
              style={{ backgroundColor: "var(--color-white)", border: "1px solid var(--color-border-light)", boxShadow: "var(--shadow-card)" }}
            >
              <div className={`grid md:grid-cols-2 ${i % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}>
                <div
                  className={`p-10 ${i % 2 === 1 ? "md:col-start-2" : ""}`}
                  style={{ borderRight: i % 2 === 0 ? "1px solid var(--color-border-light)" : "none", borderLeft: i % 2 === 1 ? "1px solid var(--color-border-light)" : "none" }}
                >
                  <span className="text-5xl font-bold" style={{ color: "var(--color-brand-cream)" }}>{s.num}</span>
                  <h2 className="text-2xl font-bold mt-2 mb-2" style={{ color: "var(--color-brand-green)" }}>{s.area}</h2>
                  <p className="font-medium mb-4 text-base" style={{ color: "var(--color-text-primary)" }}>{s.tagline}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{s.desc}</p>
                </div>
                <div className="p-10" style={{ backgroundColor: "var(--color-brand-cream)" }}>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-green-400)", letterSpacing: "0.15em" }}>Qué incluye</p>
                  <ul className="space-y-3">
                    {s.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "var(--color-text-secondary)" }}>
                        <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: "var(--color-green-100)", color: "var(--color-brand-green)" }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-brand-green)" }} className="py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--color-brand-cream)" }}>
            ¿No sabés por dónde empezar?
          </h2>
          <p className="mb-8" style={{ color: "var(--color-text-on-brand)", opacity: 0.8 }}>
            El diagnóstico inicial nos ayuda a identificar dónde está el mayor problema y qué área atacar primero.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold" style={{ backgroundColor: "var(--color-green-400)", color: "var(--color-green-900)" }}>
              Agendá el diagnóstico gratuito
            </Link>
            <Link href="/planes" className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold border" style={{ borderColor: "var(--color-green-400)", color: "var(--color-green-400)" }}>
              Ver planes y precios
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
