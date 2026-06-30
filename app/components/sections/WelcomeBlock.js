"use client";
import { useT } from "../../lib/i18n";
import { Reveal } from "../primitives/Reveal";
import { SectionLabel } from "../primitives/SectionLabel";
import { PillCard } from "../primitives/PillCard";
import { SITE_IMAGES } from "../../lib/siteImages";

export function WelcomeBlock() {
  const t = useT();
  const { image1, image2 } = SITE_IMAGES.welcome;
  return (
    <section
      className="relative py-16 md:py-24 overflow-hidden"
      style={{
        background: "rgba(245,247,252,0.78)",
        backdropFilter: "blur(8px)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#ff0008]/3 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-12 items-center gap-10 md:gap-16 px-5 md:px-12">
        <Reveal className="lg:col-span-5" direction="left">
          <div className="relative h-[300px] sm:h-[380px]">
            {image1.src ? (
              <img
                src={image1.src}
                alt={image1.alt}
                loading="lazy"
                decoding="async"
                className="absolute left-0 top-0 h-[55%] w-[75%] rounded-2xl shadow-md object-cover"
              />
            ) : (
              <div className="absolute left-0 top-0 h-[55%] w-[75%] rounded-2xl bg-gradient-to-br from-[#f3eadb] to-[#e8dcc4] shadow-md" />
            )}
            {image2.src ? (
              <img
                src={image2.src}
                alt={image2.alt}
                loading="lazy"
                decoding="async"
                className="absolute right-0 bottom-0 h-[65%] w-[80%] rounded-2xl shadow-xl object-cover"
              />
            ) : (
              <div className="absolute right-0 bottom-0 h-[65%] w-[80%] rounded-2xl bg-gradient-to-br from-[#0d162a] to-[#1f3057] shadow-xl" />
            )}
          </div>
        </Reveal>
        <div className="lg:col-span-7">
          <Reveal direction="up">
            <SectionLabel>{t("welcome.eyebrow")}</SectionLabel>
          </Reveal>
          <Reveal direction="up" delay={100}>
            <h2 className="font-display text-[32px] sm:text-[40px] md:text-[44px] leading-tight text-[#0d162a]">
              {t("welcome.heading").split("\n").map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </h2>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <p className="font-body mt-5 max-w-xl text-[15px] leading-7 text-[#5f6368]">{t("welcome.body")}</p>
          </Reveal>
          <Reveal direction="up" delay={300}>
            <div className="mt-7 flex flex-wrap gap-3">
              {[t("welcome.pill.education"), t("welcome.pill.health"), t("welcome.pill.community")].map((l) => (
                <PillCard key={l} label={l} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}