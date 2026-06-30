"use client";
import { useT } from "../../lib/i18n";
import { Reveal } from "../primitives/Reveal";
import { SectionLabel } from "../primitives/SectionLabel";
import { PhotoPlaceholder } from "../primitives/PhotoPlaceholder";
import { SITE_IMAGES } from "../../lib/siteImages";

export function MomentsGallery() {
  const t = useT();
  return (
    <section
      className="py-16 md:py-24"
      id="stories"
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
            <span className="mx-auto">{t("moments.eyebrow")}</span>
          </SectionLabel>
          <h2 className="font-display text-[32px] sm:text-[44px] md:text-[52px] leading-tight text-[#0d162a] max-w-3xl mx-auto">
            {t("moments.heading").split("\n").map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </h2>
        </Reveal>
        <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {[1, 2, 3, 4, 5, 6].map((n) => {
            const m = SITE_IMAGES.moments[n];
            return (
              <Reveal key={n} delay={n * 60} direction="up">
                <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
                  <PhotoPlaceholder
                    src={m.src}
                    alt={m.alt}
                    tone={m.tone}
                    className="h-[200px] md:h-[255px] w-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-2xl" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}