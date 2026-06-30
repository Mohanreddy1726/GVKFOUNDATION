"use client";
import { useT } from "../../lib/i18n";
import { useScrollReveal } from "../../lib/hooks/useScrollReveal";
import { Reveal } from "../primitives/Reveal";
import { SectionLabel } from "../primitives/SectionLabel";

export function ImmersiveShowcase() {
  const t = useT();
  const [ref, visible] = useScrollReveal({ threshold: 0.25 });
  const floats = [
    { l: "immersive.pillar.education", c: "#4f7bff" },
    { l: "immersive.pillar.health", c: "#ff7a4d" },
    { l: "immersive.pillar.empowerment", c: "#ffd166" },
    { l: "immersive.pillar.community", c: "#6effc1" },
    { l: "immersive.pillar.opportunity", c: "#ff5a8a" },
    { l: "immersive.pillar.dignity", c: "#7adcff" },
  ];
  return (
    <section
      ref={ref}
      id="immersive"
      className="relative overflow-hidden text-white"
      style={{ position: "relative", zIndex: 1 }}
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-8 md:gap-12">
          <div className="lg:col-span-7">
            <Reveal direction="up">
              <SectionLabel color="#ff0008">{t("immersive.eyebrow")}</SectionLabel>
            </Reveal>
            <Reveal direction="up" delay={100}>
              <h2 className="font-display text-[34px] sm:text-[46px] md:text-[56px] leading-[1.05] tracking-tight">
                {t("immersive.headingLine")}
                <br />
                <span
                  style={{
                    background: "linear-gradient(90deg,#ff4d6a,#ff0008,#c40006,#7a0004)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {t("immersive.headingHighlight")}
                </span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal direction="right" delay={150}>
              <p className="font-body text-[15px] md:text-[16px] leading-7 text-white/80 max-w-md">
                {t("immersive.sub")}
              </p>
            </Reveal>
          </div>
        </div>
        <div
          className="mt-14 md:mt-20 flex flex-wrap items-center justify-center gap-3 md:gap-4"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(30px)",
            transition: "all 0.9s cubic-bezier(0.22,1,0.36,1) 0.2s",
          }}
        >
          {floats.map((f, i) => (
            <div
              key={f.l}
              className="group relative inline-flex items-center gap-3 rounded-full px-5 py-3 md:px-7 md:py-4 border border-white/15 backdrop-blur-md cursor-default"
              style={{
                background: "rgba(255,255,255,0.06)",
                animation: `floatPillar ${3 + (i % 3) * 0.6}s ease-in-out ${i * 0.18}s infinite`,
              }}
            >
              <span className="h-3 w-3 rounded-full" style={{ background: f.c, boxShadow: `0 0 18px ${f.c}` }} />
              <span className="text-[13px] md:text-[15px] font-medium tracking-wide">{t(f.l)}</span>
            </div>
          ))}
        </div>
        <Reveal direction="up" delay={400}>
          <div className="mt-16 flex justify-center">
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-white/55 hover:text-white text-sm tracking-[0.22em] uppercase transition-colors"
            >
              <span>{t("immersive.scroll")}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 9l7 7 7-7" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
      <style>{`@keyframes floatPillar{0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}}`}</style>
    </section>
  );
}