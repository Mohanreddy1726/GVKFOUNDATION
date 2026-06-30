"use client";
import { STATS } from "../../lib/stats";
import { useT } from "../../lib/i18n";
import { useScrollReveal } from "../../lib/hooks/useScrollReveal";
import { useCountUp } from "../../lib/hooks/useCountUp";
import { Reveal } from "../primitives/Reveal";

function StatCard({ value, label }) {
  const [ref, visible] = useScrollReveal();
  const display = useCountUp(value, 1800, visible);
  return (
    <div
      ref={ref}
      className="rounded-2xl border border-white/12 p-5 md:p-7 backdrop-blur hover:border-white/25 hover:-translate-y-1 transition-all duration-300"
      style={{ background: "rgba(255,255,255,0.06)" }}
    >
      <div className="font-stat font-display text-[36px] md:text-[48px] leading-none text-white">{display}</div>
      <div className="font-body mt-3 text-sm text-white/55">{label}</div>
    </div>
  );
}

export function StatsBlock() {
  const t = useT();
  return (
    <section
      className="relative py-16 md:py-24 text-white overflow-hidden"
      id="impact"
      style={{
        background: "rgba(10,16,36,0.6)",
        backdropFilter: "blur(10px)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{ background: "radial-gradient(circle at 20% 50%, #2c3e7a 0%, transparent 60%)" }}
      />
      <div className="relative mx-auto max-w-[1440px] px-5 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          <Reveal className="lg:col-span-6" direction="left">
            <h2 className="font-display text-[34px] sm:text-[46px] md:text-[52px] leading-[1.1]">
              {t("stats.heading").split("\n").map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </h2>
            <p className="font-body mt-6 max-w-xl text-[15px] leading-7 text-white/65">{t("stats.sub")}</p>
          </Reveal>
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 md:gap-6">
            {STATS.map((s, i) => (
              <Reveal key={s.id} delay={i * 80} direction="up">
                <StatCard value={s.value} label={t(s.labelKey)} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}