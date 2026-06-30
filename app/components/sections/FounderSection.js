"use client";
import { useT } from "../../lib/i18n";
import { Reveal } from "../primitives/Reveal";
import { SectionLabel } from "../primitives/SectionLabel";
import { PhotoPlaceholder } from "../primitives/PhotoPlaceholder";
import { SITE_IMAGES } from "../../lib/siteImages";

export function FounderSection() {
  const t = useT();
  return (
    <section
      className="relative py-16 md:py-24"
      style={{
        background: "rgba(248,250,252,0.78)",
        backdropFilter: "blur(8px)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-12 items-center gap-10 md:gap-14 px-5 md:px-12">
        <Reveal className="lg:col-span-5" direction="left">
          <div className="relative">
            <PhotoPlaceholder
              src={SITE_IMAGES.founder.portrait.src}
              alt={SITE_IMAGES.founder.portrait.alt}
              tone={SITE_IMAGES.founder.portrait.tone}
              className="h-[360px] sm:h-[450px] md:h-[510px] w-full rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 h-28 w-28 rounded-2xl bg-[#ff0008]/10 border-2 border-[#ff0008]/20" />
          </div>
        </Reveal>
        <div className="lg:col-span-7">
          <Reveal direction="up">
            <SectionLabel>{t("founder.eyebrow")}</SectionLabel>
          </Reveal>
          <Reveal direction="up" delay={100}>
            <h2 className="font-display text-[32px] sm:text-[46px] md:text-[52px] leading-tight text-[#0d162a]">
              {t("founder.heading").split("\n").map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </h2>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <div className="mt-6 flex items-center gap-4">
              <div className="grid h-12 w-12 md:h-14 md:w-14 flex-shrink-0 place-items-center rounded-full bg-[#ff0008]/10 text-[#ff0008]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5Zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5Z" />
                </svg>
              </div>
              <div>
                <div className="text-[15px] font-semibold text-[#0d162a]">Dr. GUNDALA VIJAY KUMAR (GVK)</div>
                <div className="text-xs tracking-[0.2em] text-[#5f6368] uppercase">{t("founder.role")}</div>
              </div>
            </div>
          </Reveal>
          <Reveal direction="up" delay={300}>
            <blockquote className="font-quote mt-7 border-l-4 border-[#ff0008] pl-5 text-[18px] md:text-[20px] text-[#0d162a]">
              {t("founder.quote")}
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}