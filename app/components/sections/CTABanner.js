"use client";
import { useT } from "../../lib/i18n";
import { Reveal } from "../primitives/Reveal";
import { PillButton } from "../primitives/PillButton";

export function CTABanner() {
  const t = useT();
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28 text-white text-center"
      id="contact"
      style={{
        background: "rgba(10,14,30,0.6)",
        backdropFilter: "blur(10px)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        className="absolute inset-0 opacity-45"
        style={{ background: "radial-gradient(circle at 50% 50%, #ff0008 0%, transparent 62%)" }}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute rounded-full border border-white/6"
            style={{
              width: `${i * 260}px`,
              height: `${i * 260}px`,
              animation: `ctaPulse ${2 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>
      <Reveal className="relative mx-auto max-w-3xl px-5 md:px-12">
        <h2 className="font-display text-[32px] sm:text-[44px] md:text-[54px] leading-[1.1]">
          {t("cta.heading")}{" "}
          <em className="font-display-italic">{t("cta.headingEm")}</em>
        </h2>
        <p className="font-body mt-6 text-[14px] md:text-[15px] leading-7 text-white/70">{t("cta.body")}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <PillButton
            variant="red"
            onClick={() => document.getElementById("donate")?.scrollIntoView({ behavior: "smooth" })}
          >
            {t("cta.donate")}
          </PillButton>
          <PillButton
            variant="outline"
            onClick={() => document.getElementById("volunteer")?.scrollIntoView({ behavior: "smooth" })}
          >
            {t("cta.getInvolved")}
          </PillButton>
        </div>
      </Reveal>
      <style>{`@keyframes ctaPulse{0%,100%{transform:scale(1);opacity:.5}50%{transform:scale(1.06);opacity:.12}}`}</style>
    </section>
  );
}