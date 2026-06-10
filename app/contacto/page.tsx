import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto — Sabifin",
  description: "Hablemos. La primera conversación es sin compromiso. Contanos dónde está tu negocio hoy.",
};

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "var(--color-brand-green)" }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-green-400)", letterSpacing: "0.18em" }}>Contacto</p>
          <h1 className="text-4xl md:text-5xl font-bold max-w-xl" style={{ color: "var(--color-brand-cream)" }}>
            El primer paso es una conversación.
          </h1>
          <p className="mt-6 text-lg max-w-lg" style={{ color: "var(--color-text-on-brand)", opacity: 0.8 }}>
            Sin compromiso, sin tecnicismos. Contanos dónde está tu negocio hoy y qué querés lograr. De ahí arrancamos.
          </p>
        </div>
      </section>

      {/* Contacto */}
      <section style={{ backgroundColor: "var(--color-brand-cream)" }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold mb-8" style={{ color: "var(--color-brand-green)" }}>
                Cómo contactarnos
              </h2>
              <div className="space-y-6">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/5491172398900?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20Sabifin."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 rounded-xl transition-colors group"
                  style={{ backgroundColor: "var(--color-white)", border: "1px solid var(--color-border-light)", boxShadow: "var(--shadow-card)" }}
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#25D366" }}>
                    <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold mb-1" style={{ color: "var(--color-text-primary)" }}>WhatsApp</p>
                    <p className="text-sm mb-2" style={{ color: "var(--color-text-secondary)" }}>La forma más rápida de conectar. Respondemos en el día.</p>
                    <p className="text-sm font-medium" style={{ color: "#25D366" }}>Escribinos por WhatsApp →</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:sabifinconsultorafinanciera@gmail.com?subject=Consulta%20sobre%20Sabifin"
                  className="flex items-start gap-4 p-6 rounded-xl transition-colors"
                  style={{ backgroundColor: "var(--color-white)", border: "1px solid var(--color-border-light)", boxShadow: "var(--shadow-card)" }}
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--color-brand-green)" }}>
                    <svg width="22" height="22" fill="none" stroke="white" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold mb-1" style={{ color: "var(--color-text-primary)" }}>Email</p>
                    <p className="text-sm mb-2" style={{ color: "var(--color-text-secondary)" }}>Para consultas más detalladas o propuestas formales.</p>
                    <p className="text-sm font-medium" style={{ color: "var(--color-brand-green)" }}>sabifinconsultorafinanciera@gmail.com</p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/sabifin_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 rounded-xl transition-colors"
                  style={{ backgroundColor: "var(--color-white)", border: "1px solid var(--color-border-light)", boxShadow: "var(--shadow-card)" }}
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)" }}>
                    <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold mb-1" style={{ color: "var(--color-text-primary)" }}>Instagram</p>
                    <p className="text-sm mb-2" style={{ color: "var(--color-text-secondary)" }}>Contenido sobre gestión, finanzas y crecimiento para PyMEs.</p>
                    <p className="text-sm font-medium" style={{ color: "var(--color-brand-green)" }}>@sabifin_</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Qué esperar */}
            <div>
              <h2 className="text-2xl font-bold mb-8" style={{ color: "var(--color-brand-green)" }}>
                ¿Qué pasa cuando nos contactás?
              </h2>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Respondemos en el día", desc: "Te contactamos para conocer brevemente tu situación y entender qué necesitás." },
                  { step: "2", title: "Conversación inicial gratuita", desc: "Una charla de 30 minutos para entender tu negocio y ver si somos el match correcto. Sin compromiso." },
                  { step: "3", title: "Propuesta a medida", desc: "Si tiene sentido para ambas partes, te preparamos una propuesta con el alcance, la dinámica y el plan de trabajo." },
                  { step: "4", title: "Arrancamos", desc: "Con el diagnóstico inicial. Sin burocracia, sin contratos interminables — directo al trabajo." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm" style={{ backgroundColor: "var(--color-brand-green)", color: "var(--color-brand-cream)" }}>
                      {item.step}
                    </div>
                    <div className="pt-0.5">
                      <p className="font-semibold mb-1" style={{ color: "var(--color-text-primary)" }}>{item.title}</p>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-10 p-6 rounded-xl"
                style={{ backgroundColor: "var(--color-green-100)", border: "1px solid var(--color-green-400)" }}
              >
                <p className="font-semibold mb-2" style={{ color: "var(--color-brand-green)" }}>Primer conversación sin costo</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-brand-green)", opacity: 0.8 }}>
                  El diagnóstico inicial es el primer paso y no tiene costo. Queremos entender tu situación antes de ofrecerte cualquier cosa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
