"use client";
import { useEffect, useState } from "react";
import { PROGRAMS } from "../../lib/programs";
import { PillButton } from "../primitives/PillButton";

function ProgramsDropdown({ onPick }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        onFocus={() => setOpen(true)}
        className="relative group opacity-80 hover:opacity-100 transition-opacity flex items-center gap-1.5 focus:outline-none"
      >
        Programs
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
        <span
          className={`absolute -bottom-1 left-0 h-0.5 bg-[#ff0008] transition-all duration-300 ${
            open ? "w-full" : "w-0 group-hover:w-full"
          }`}
        />
      </button>

      <div
        role="menu"
        className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 transition-all duration-200 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-1 pointer-events-none"
        }`}
      >
        <div
          className="min-w-[260px] rounded-2xl border border-white/10 shadow-2xl shadow-black/40 overflow-hidden"
          style={{
            background: "rgba(13,22,42,0.96)",
            backdropFilter: "blur(18px)",
          }}
        >
          {PROGRAMS.map((p) => (
            <a
              key={p.slug}
              href={`/programs/${p.slug}`}
              role="menuitem"
              onClick={() => {
                setOpen(false);
                onPick?.();
              }}
              className="group/item flex items-center gap-3 px-4 py-3 hover:bg-white/8 transition-colors duration-200 border-b border-white/5 last:border-b-0"
            >
              <span
                className="flex-shrink-0 h-2 w-2 rounded-full transition-transform duration-300 group-hover/item:scale-125"
                style={{ background: p.accent, boxShadow: `0 0 12px ${p.accent}` }}
                aria-hidden="true"
              />
              <span className="font-body text-[14px] text-white/85 group-hover/item:text-white transition-colors">
                {p.name.en}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const navItems = [
    { label: "About", anchor: "/foundation#about" },
    { label: "Impact", anchor: "/foundation#impact" },
    { label: "Stories", anchor: "/foundation#stories" },
    { label: "Contact", anchor: "/foundation#contact" },
  ];
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(13,22,42,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.35)" : "none",
      }}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 md:px-12 py-4 md:py-5 text-white">
        <a href="/foundation" className="flex items-center" aria-label="GVK Foundation — Home">
          <img
            src="https://ik.imagekit.io/icuvd8hly/Foundation%20website%20images/GVK%20foundation%20FULL%20LOGO%20LATEST%20png%20(1).png"
            alt="GVK Foundation"
            className="h-9 md:h-13 w-auto"
          />
        </a>
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9 text-sm font-medium">
          {navItems.map((it) => (
            <a
              key={it.anchor}
              href={it.anchor}
              className="relative group opacity-80 hover:opacity-100 transition-opacity"
            >
              {it.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff0008] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <ProgramsDropdown />
        </nav>
        <div className="flex items-center gap-3">
          <PillButton
            variant="red"
            className="hidden sm:inline-flex"
            onClick={() => document.getElementById("donate")?.scrollIntoView({ behavior: "smooth" })}
          >
            Donate Now
          </PillButton>
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${menuOpen ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0"}`}
        style={{ background: "rgba(13,22,42,0.98)", backdropFilter: "blur(18px)" }}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {navItems.map((it) => (
            <a
              key={it.anchor}
              href={it.anchor}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-white hover:bg-white/5 rounded-lg px-4 py-3 text-sm font-medium transition"
            >
              {it.label}
            </a>
          ))}

          {/* Mobile programs accordion */}
          <button
            type="button"
            aria-expanded={mobileProgramsOpen}
            onClick={() => setMobileProgramsOpen((v) => !v)}
            className="flex items-center justify-between text-white/80 hover:text-white hover:bg-white/5 rounded-lg px-4 py-3 text-sm font-medium transition"
          >
            <span>Programs</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className={`transition-transform duration-300 ${mobileProgramsOpen ? "rotate-180" : ""}`}
              aria-hidden="true"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              mobileProgramsOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="ml-3 mt-1 mb-2 border-l border-white/10 pl-3 flex flex-col gap-1">
              {PROGRAMS.map((p) => (
                <a
                  key={p.slug}
                  href={`/programs/${p.slug}`}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 text-white/65 hover:text-white hover:bg-white/5 rounded-lg px-3 py-2.5 text-sm transition"
                >
                  <span
                    className="flex-shrink-0 h-2 w-2 rounded-full"
                    style={{ background: p.accent, boxShadow: `0 0 8px ${p.accent}` }}
                    aria-hidden="true"
                  />
                  {p.name.en}
                </a>
              ))}
            </div>
          </div>

          <PillButton
            variant="red"
            className="mt-2 self-start"
            onClick={() => {
              setMenuOpen(false);
              document.getElementById("donate")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Donate Now
          </PillButton>
        </nav>
      </div>
    </header>
  );
}