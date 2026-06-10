"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/planes", label: "Planes" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header style={{ backgroundColor: "var(--color-bg-nav)" }}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span
            className="text-xl font-bold tracking-widest uppercase"
            style={{ color: "var(--color-brand-cream)", letterSpacing: "0.12em" }}
          >
            SABIFIN
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium tracking-wide transition-colors"
              style={{
                color:
                  pathname === l.href
                    ? "var(--color-green-400)"
                    : "var(--color-text-on-brand)",
                opacity: pathname === l.href ? 1 : 0.85,
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="text-sm font-medium px-5 py-2 rounded-lg transition-colors"
            style={{
              backgroundColor: "var(--color-green-400)",
              color: "var(--color-green-900)",
            }}
          >
            Hablemos
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
          style={{ color: "var(--color-brand-cream)" }}
        >
          {open ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t px-6 py-4 flex flex-col gap-4"
          style={{
            borderColor: "var(--color-green-600)",
            backgroundColor: "var(--color-green-900)",
          }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium py-1"
              style={{ color: "var(--color-text-on-brand)" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            onClick={() => setOpen(false)}
            className="text-sm font-medium px-5 py-2 rounded-lg text-center mt-2"
            style={{
              backgroundColor: "var(--color-green-400)",
              color: "var(--color-green-900)",
            }}
          >
            Hablemos
          </Link>
        </div>
      )}
    </header>
  );
}
