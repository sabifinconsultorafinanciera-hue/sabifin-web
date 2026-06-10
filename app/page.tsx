import Link from "next/link";

function IconChart() {
  return (
    <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5l4-4 4 4 4-6 4 3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 19.5h18" />
    </svg>
  );
}
function IconTarget() {
  return (
    <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconPeople() {
  return (
    <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}
function IconGear() {
  return (
    <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

const services = [
  { icon: <IconChart />, title: "Administración Financiera", desc: "Orden de ingresos, egresos, márgenes y proyecciones. Informe mensual con resumen ejecutivo, estado de resultados e indicadores clave." },
  { icon: <IconTarget />, title: "Gestión Comercial", desc: "Estrategia de ventas, propuesta de valor, pricing y posicionamiento competitivo para que vendas mejor, no más barato." },
  { icon: <IconPeople />, title: "Talentos Humanos", desc: "Estructura de equipo, roles y procesos internos para que el negocio deje de depender exclusivamente de vos." },
  { icon: <IconGear />, title: "Producción y Operaciones", desc: "Implementación de normas ISO 9001 y mejora de procesos productivos para operar con más eficiencia y menos errores." },
];

const steps = [
  { num: "01", title: "Diagnóstico inicial", desc: "Analizamos en detalle tu negocio: números, procesos, equipo y posicionamiento. Sin filtros." },
  { num: "02", title: "Plan a medida", desc: "Diseñamos un plan de trabajo concreto con prioridades claras según el estado actual de tu empresa." },
  { num: "03", title: "Implementación y seguimiento", desc: "Trabajamos con vos cada semana para ejecutar el plan, ajustar y mantener el rumbo." },
  { num: "04", title: "Informe ejecutivo mensual", desc: "Cada mes recibís un informe con tus indicadores clave y las decisiones recomendadas para el mes siguiente." },
];

const clients = [
  "Blöt Vöx", "Blöt Indumentaria", "Blöt Cöffe", "Elásticos del Sol",
  "Génova", "Universo Melmac", "Maiver Jeans", "Lidase",
  "Todo Valijas", "Samix Child", "Mi Wara", "Clavistore",
  "Forvo", "Textil Rodas", "El Clubsito", "Quattro Kaffé",
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{ backgroundColor: "var(--color-brand-green)" }} className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-36">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "var(--color-green-400)", letterSpacing: "0.18em" }}>
              Consultora Organizacional · Argentina
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{ color: "var(--color-brand-cream)", letterSpacing: "-0.01em" }}>
              Tu empresa más ordenada, rentable y preparada para crecer.
            </h1>
            <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl" style={{ color: "var(--color-text-on-brand)", opacity: 0.8 }}>
              No somos "un contador más". Instalamos sistemas de gobierno empresarial — estructura, procesos e indicadores — como si fuéramos tu equipo de dirección externo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contacto" className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-sm transition-colors" style={{ backgroundColor: "var(--color-green-400)", color: "var(--color-green-900)" }}>
                Agendá una conversación gratuita
              </Link>
              <Link href="/servicios" className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-sm border transition-colors" style={{ borderColor: "var(--color-green-400)", color: "var(--color-green-400)" }}>
                Ver servicios
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 hidden md:block" style={{ backgroundImage: "repeating-linear-gradient(45deg, #52B788 0, #52B788 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
      </section>

      {/* PREGUNTA DISPARADORA */}
      <section style={{ backgroundColor: "var(--color-brand-cream)" }} className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-2xl md:text-3xl font-semibold leading-snug" style={{ color: "var(--color-text-primary)" }}>
            ¿Si te vas una semana de vacaciones, tu negocio sigue funcionando?
          </p>
          <p className="mt-6 text-lg leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
            Si la respuesta es "no" o "no sé", no tenés un negocio — tenés un trabajo disfrazado de negocio. Sabifin te ayuda a cambiar eso.
          </p>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section style={{ backgroundColor: "var(--color-white)" }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-green-400)", letterSpacing: "0.18em" }}>
                Quiénes somos
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "var(--color-brand-green)" }}>
                Dirección Estratégica Externa
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--color-text-secondary)" }}>
                Sabifin es una consultora organizacional argentina con más de tres años de trayectoria trabajando con PyMEs en crecimiento.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--color-text-secondary)" }}>
                No ejecutamos tareas aisladas. Instalamos <strong style={{ color: "var(--color-text-primary)" }}>sistemas de gobierno empresarial</strong>: estructura, procesos, indicadores y seguimiento continuo.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                El resultado es que dejás de tomar decisiones a ciegas y empezás a dirigir tu empresa con datos reales y claridad.
              </p>
              <Link href="/nosotros" className="inline-flex items-center gap-2 mt-8 font-semibold text-sm" style={{ color: "var(--color-brand-green)" }}>
                Conocé más sobre Sabifin
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "3+", label: "años de experiencia" },
                { num: "16+", label: "clientes activos" },
                { num: "4", label: "áreas de trabajo" },
                { num: "100%", label: "enfoque en PyMEs" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl p-6 text-center" style={{ backgroundColor: "var(--color-brand-cream)", border: "1px solid var(--color-border-light)" }}>
                  <p className="text-3xl font-bold mb-1" style={{ color: "var(--color-brand-green)" }}>{stat.num}</p>
                  <p className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--color-text-muted)" }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section style={{ backgroundColor: "var(--color-brand-cream)" }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-green-400)", letterSpacing: "0.18em" }}>Servicios</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--color-brand-green)" }}>Las cuatro áreas donde trabajamos</h2>
            <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: "var(--color-text-secondary)" }}>Trabajamos de forma integral o enfocada en el área donde más lo necesitás.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.title} className="rounded-xl p-8" style={{ backgroundColor: "var(--color-white)", boxShadow: "var(--shadow-card)", border: "1px solid var(--color-border-light)" }}>
                <div className="mb-4" style={{ color: "var(--color-brand-green)" }}>{s.icon}</div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: "var(--color-text-primary)" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/servicios" className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-lg border transition-colors" style={{ borderColor: "var(--color-brand-green)", color: "var(--color-brand-green)" }}>
              Ver todos los servicios en detalle
            </Link>
          </div>
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section style={{ backgroundColor: "var(--color-brand-green)" }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-green-400)", letterSpacing: "0.18em" }}>Metodología</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--color-brand-cream)" }}>Cómo trabajamos</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.num}>
                <p className="text-4xl font-bold mb-3" style={{ color: "var(--color-green-400)", opacity: 0.6 }}>{step.num}</p>
                <h3 className="font-semibold mb-2" style={{ color: "var(--color-brand-cream)" }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-on-brand)", opacity: 0.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASO DE ÉXITO */}
      <section style={{ backgroundColor: "var(--color-white)" }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-green-400)", letterSpacing: "0.18em" }}>Casos de éxito</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--color-brand-green)" }}>Resultados concretos, no promesas</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--color-border-light)", minHeight: "320px", backgroundColor: "var(--color-brand-cream)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/foto_local_pablo.jpg" alt="Local de Pablo, cliente de Sabifin" className="w-full h-full object-cover" style={{ minHeight: "320px" }} />
            </div>
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-6" style={{ backgroundColor: "var(--color-green-100)", color: "var(--color-brand-green)" }}>
                Caso real
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--color-text-primary)" }}>
                "Pasé de no saber si ganaba o perdía, a tener datos claros cada mes."
              </h3>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--color-text-secondary)" }}>
                Pablo llegó a Sabifin con un local que crecía en ventas pero no sabía por qué la plata no alcanzaba. Sin números claros, tomaba decisiones a intuición.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
                En tres meses implementamos un sistema de seguimiento, identificamos los productos más rentables y reorganizamos la estructura de costos. Hoy Pablo tiene un informe mensual y decide con datos.
              </p>
              <p className="text-sm font-medium" style={{ color: "var(--color-text-muted)" }}>— Pablo, dueño de local comercial</p>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTES */}
      <section style={{ backgroundColor: "var(--color-brand-cream)" }} className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-widest mb-10" style={{ color: "var(--color-text-muted)", letterSpacing: "0.18em" }}>
            Empresas que confían en Sabifin
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {clients.map((name) => (
              <span key={name} className="px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: "var(--color-white)", color: "var(--color-text-secondary)", border: "1px solid var(--color-border-light)" }}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ backgroundColor: "var(--color-brand-green)" }} className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "var(--color-brand-cream)" }}>
            El primer paso es una conversación.
          </h2>
          <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--color-text-on-brand)", opacity: 0.8 }}>
            Sin compromiso, sin tecnicismos. Contanos dónde está tu negocio hoy y qué querés lograr. De ahí arrancamos.
          </p>
          <Link href="/contacto" className="inline-flex items-center justify-center px-10 py-4 rounded-lg font-semibold transition-colors" style={{ backgroundColor: "var(--color-green-400)", color: "var(--color-green-900)" }}>
            Hablemos sin compromiso
          </Link>
        </div>
      </section>
    </>
  );
}
