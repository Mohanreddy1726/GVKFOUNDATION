"use client";
import { useT } from "../../lib/i18n";
import { Reveal } from "../primitives/Reveal";
import { SectionLabel } from "../primitives/SectionLabel";

export function AwardsSection() {
  const t = useT();
  const awards = [
    ["awards.card.1.title", "awards.card.1.desc"],
    ["awards.card.2.title", "awards.card.2.desc"],
    ["awards.card.3.title", "awards.card.3.desc"],
  ];
  return (
    <section
      className="py-16 md:py-24"
      style={{
        background: "rgba(255,255,255,0.78)",
        backdropFilter: "blur(8px)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-12 text-center">
        <Reveal>
          <SectionLabel>
            <span className="mx-auto">{t("awards.eyebrow")}</span>
          </SectionLabel>
          <h2 className="font-display text-[30px] sm:text-[38px] md:text-[44px] leading-tight text-[#0d162a]">{t("awards.heading")}</h2>
        </Reveal>
        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {awards.map(([tk, sk], i) => (
            <Reveal key={tk} delay={i * 100} direction="up">
              <div className="group rounded-2xl bg-[#0d162a] p-6 md:p-8 text-left text-white hover:bg-[#1a2548] hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 h-full">
                <div className="grid h-11 w-11 md:h-12 md:w-12 place-items-center rounded-full bg-[#ff0008]/15 text-[#ff0008] group-hover:bg-[#ff0008]/30 transition-colors duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2 14.6 8.4 21 9.2l-5 4.6L17.4 21 12 17.3 6.6 21 8 13.8l-5-4.6 6.4-.8L12 2Z" />
                  </svg>
                </div>
                <h3 className="mt-5 text-[17px] md:text-[19px] font-semibold">{t(tk)}</h3>
                <p className="font-body mt-2 text-[13px] leading-6 text-white/65">{t(sk)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}