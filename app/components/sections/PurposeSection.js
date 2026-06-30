"use client";
import { useT } from "../../lib/i18n";
import { Reveal } from "../primitives/Reveal";
import { SectionLabel } from "../primitives/SectionLabel";

export function PurposeSection() {
  const t = useT();
  const keys = ["purpose.point1", "purpose.point2", "purpose.point3", "purpose.point4"];
  return (
    <section
      className="py-16 md:py-24"
      id="about"
      style={{
        background: "rgba(248,250,252,0.78)",
        backdropFilter: "blur(8px)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-12 items-start gap-10 md:gap-16 px-5 md:px-12">
        <Reveal className="lg:col-span-5" direction="left">
          <h2 className="font-display text-[32px] sm:text-[40px] md:text-[44px] leading-tight text-[#0d162a]">
            {t("purpose.heading").split("\n").map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p className="font-body mt-6 max-w-md text-[15px] leading-7 text-[#5f6368]">{t("purpose.sub")}</p>
        </Reveal>
        <div className="lg:col-span-7 space-y-4">
          {keys.map((k, i) => (
            <Reveal key={k} delay={i * 80} direction="right">
              <div className="group flex items-center gap-4 rounded-2xl bg-white px-5 md:px-6 py-4 md:py-5 shadow-sm border border-black/5 hover:shadow-md hover:border-[#ff0008]/20 hover:-translate-y-0.5 transition-all duration-300">
                <span className="flex-shrink-0 grid h-9 w-9 md:h-10 md:w-10 place-items-center rounded-full bg-[#ff0008] text-white group-hover:scale-110 transition-transform duration-300">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12l5 5 9-11" />
                  </svg>
                </span>
                <span className="text-[14px] md:text-[15px] font-medium text-[#0d162a]">{t(k)}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}