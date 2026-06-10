import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Planes — Sabifin",
  description: "Plan Inicial, Avanzado, Integral y PPE. Elegí el plan de Sabifin que mejor se adapta al momento de tu empresa.",
};

const plans = [
  {
    name: "Plan Inicial",
    target: "Para emprendedores y microempresas",
    desc: "Para negocios que recién empiezan a ordenarse o que nunca tuvieron un sistema de gestión. El punto de partida para dejar de operar a intuición.",
    features: [
      "Diagnóstico inicial del negocio",
      "Orden básico de ingresos y egresos",
      "Informe mensual simplificado",
      "Seguimiento quincenal",
      "Foco en una área prioritaria",
    ],
    highlight: false,
  },
  {
    name: "Plan Avanzado",
    target: "Para PyMEs en crecimiento",
    desc: "Para empresas que ya tienen cierta estructura pero sienten que el crecimiento las está desbordando. Ordenamos las cuatro áreas con profundidad.",
    features: [
      "Trabajo en las 4 áreas de Sabifin",
      "Informe mensual ejecutivo completo",
      "Seguimiento semanal",
      "Tablero de indicadores personalizado",
      "Plan de acción con prioridades",
      "Reunión de revisión mensual",
    ],
    highlight: true,
  },
  {
    name: "Plan Integral",
    target: "Para empresas con estructura formada",
    desc: "Para empresas que ya tienen equipo y procesos, pero necesitan un salto de nivel en gestión, liderazgo y estrategia para escalar con solidez.",
    features: [
      "Todo lo del Plan Avanzado",
      "Acompañamiento en decisiones estratégicas",
      "Desarrollo del equipo directivo",
      "Implementación ISO 9001 (si aplica)",
      "Plan de profesionalización a 12 meses",
      "Prioridad de respuesta y soporte",
    ],
    highlight: false,
  },
];

export default function PlanesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "var(--color-brand-green)" }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-green-400)", letterSpacing: "0.18em" }}>Planes</p>
          <h1 className="text-4xl md:text-5xl font-bold max-w-2xl" style={{ color: "var(--color-brand-cream)" }}>
            Elegí el plan que se adapta al momento de tu empresa.
          </h1>
          <p className="mt-6 text-lg max-w-xl" style={{ color: "var(--color-text-on-brand)", opacity: 0.8 }}>
            No hay un plan único para todos. Partimos de donde estás y avanzamos a tu ritmo.
          </p>
        </div>
      </section>

      {/* Planes */}
      <section style={{ backgroundColor: "var(--color-brand-cream)" }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="rounded-2xl overflow-hidden flex flex-col"
                style={{
                  backgroundColor: plan.highlight ? "var(--color-brand-green)" : "var(--color-white)",
                  border: plan.highlight ? "2px solid var(--color-green-400)" : "1px solid var(--color-border-light)",
                  boxShadow: plan.highlight ? "var(--shadow-md)" : "var(--shadow-card)",
                }}
              >
                {plan.highlight && (
                  <div className="px-6 py-2 text-center text-xs font-semibold uppercase tracking-widest" style={{ backgroundColor: "var(--color-green-400)", color: "var(--color-green-900)" }}>
                    Más elegido
                  </div>
                )}
                <div className="p-8 flex flex-col flex-1">
                  <div className="mb-6">
                    <h2 className="text-xl font-bold mb-1" style={{ color: plan.highlight ? "var(--color-brand-cream)" : "var(--color-text-primary)" }}>
                      {plan.name}
                    </h2>
                    <p className="text-xs font-medium uppercase tracking-wide mb-4" style={{ color: plan.highlight ? "var(--color-green-400)" : "var(--color-text-muted)" }}>
                      {plan.target}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: plan.highlight ? "var(--color-text-on-brand)" : "var(--color-text-secondary)", opacity: plan.highlight ? 0.85 : 1 }}>
                      {plan.desc}
                    </p>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: plan.highlight ? "var(--color-green-400)" : "var(--color-text-muted)", letterSpacing: "0.15em" }}>
                      Qué incluye
                    </p>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm" style={{ color: plan.highlight ? "var(--color-text-on-brand)" : "var(--color-text-secondary)", opacity: plan.highlight ? 0.9 : 1 }}>
                          <span className="flex-shrink-0 mt-0.5" style={{ color: "var(--color-green-400)" }}>✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto">
                    <p className="text-center text-xs mb-4" style={{ color: plan.highlight ? "var(--color-text-on-brand)" : "var(--color-text-muted)", opacity: 0.7 }}>
                      Precio a consultar
                    </p>
                    <Link
                      href="/contacto"
                      className="block w-full text-center py-3 rounded-lg font-semibold text-sm transition-colors"
                      style={{
                        backgroundColor: plan.highlight ? "var(--color-green-400)" : "transparent",
                        color: plan.highlight ? "var(--color-green-900)" : "var(--color-brand-green)",
                        border: plan.highlight ? "none" : "1.5px solid var(--color-brand-green)",
                      }}
                    >
                      Consultá este plan
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PPE */}
      <section style={{ backgroundColor: "var(--color-white)" }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-2xl overflow-hidden grid md:grid-cols-2" style={{ border: "2px solid var(--color-brand-green)" }}>
            <div className="p-10" style={{ backgroundColor: "var(--color-brand-green)" }}>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-4" style={{ backgroundColor: "var(--color-green-400)", color: "var(--color-green-900)" }}>
                Premium
              </div>
              <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--color-brand-cream)" }}>PPE</h2>
              <p className="font-semibold mb-4" style={{ color: "var(--color-green-400)" }}>Programa de Profesionalización Empresarial</p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--color-text-on-brand)", opacity: 0.8 }}>
                Para empresas que facturan más de $10 millones por mes y tienen cinco o más personas en el equipo. El PPE es un programa de 12 meses de dirección estratégica externa con acompañamiento intensivo.
              </p>
              <div className="text-sm font-medium" style={{ color: "var(--color-green-400)" }}>Para quién:</div>
              <ul className="mt-2 space-y-1">
                {["Facturación +$10M/mes", "5 o más personas en el equipo", "Quiere un salto de nivel en 12 meses"].map((i) => (
                  <li key={i} className="text-sm flex items-center gap-2" style={{ color: "var(--color-text-on-brand)", opacity: 0.8 }}>
                    <span style={{ color: "var(--color-green-400)" }}>→</span> {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-10" style={{ backgroundColor: "var(--color-brand-cream)" }}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "var(--color-green-400)", letterSpacing: "0.15em" }}>El programa incluye</p>
              <ul className="space-y-4">
                {[
                  { title: "Reunión semanal de dirección", desc: "Seguimiento del plan, resolución de problemas y toma de decisiones en tiempo real." },
                  { title: "Tablero de indicadores mensual", desc: "Dashboard completo con los KPIs clave de todas las áreas de la empresa." },
                  { title: "Informe ejecutivo mensual", desc: "Análisis profundo con recomendaciones estratégicas para el mes siguiente." },
                  { title: "Acompañamiento en decisiones críticas", desc: "Soporte directo en momentos de decisión: inversiones, contrataciones, cambios de rumbo." },
                  { title: "Plan de profesionalización a 12 meses", desc: "Hoja de ruta clara con objetivos, hitos y métricas de éxito." },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "var(--color-brand-green)" }} />
                    <div>
                      <p className="text-sm font-semibold mb-0.5" style={{ color: "var(--color-text-primary)" }}>{item.title}</p>
                      <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link href="/contacto" className="block w-full text-center mt-8 py-3 rounded-lg font-semibold text-sm" style={{ backgroundColor: "var(--color-brand-green)", color: "var(--color-brand-cream)" }}>
                Quiero saber más sobre el PPE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / No prices note */}
      <section style={{ backgroundColor: "var(--color-brand-cream)" }} className="py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--color-brand-green)" }}>¿Por qué no publicamos precios?</h2>
          <p className="text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
            Porque cada empresa es distinta. El alcance, la frecuencia y la profundidad del trabajo dependen del diagnóstico inicial. Preferimos hablar con vos, entender tu situación y ofrecerte una propuesta que tenga sentido — no un precio genérico que después decepciona.
          </p>
          <Link href="/contacto" className="inline-flex items-center gap-2 mt-8 font-semibold text-sm" style={{ color: "var(--color-brand-green)" }}>
            Hablemos y te preparamos una propuesta
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
