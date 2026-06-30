"use client";
import { TESTIMONIALS } from "../../lib/testimonials";
import { useT } from "../../lib/i18n";
import { Reveal } from "../primitives/Reveal";
import { SectionLabel } from "../primitives/SectionLabel";
import { PhotoPlaceholder } from "../primitives/PhotoPlaceholder";
import { SITE_IMAGES } from "../../lib/siteImages";

export function TestimonialsSection() {
  const t = useT();
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: "rgba(245,247,252,0.78)",
        backdropFilter: "blur(10px)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-12">
        <Reveal className="text-center mb-12 md:mb-16">
          <SectionLabel>
            <span className="mx-auto">{t("testimonials.eyebrow")}</span>
          </SectionLabel>
          <h2 className="font-display text-[34px] sm:text-[46px] md:text-[52px] leading-tight text-[#0d162a]">
            {t("testimonials.heading")}
          </h2>
        </Reveal>

        <div className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:pb-0">
          {TESTIMONIALS.map((item, i) => (
            <Reveal
              key={item.id}
              delay={Math.min(i * 90, 360)}
              direction="up"
              className="snap-center shrink-0 w-[85vw] sm:w-[420px] lg:w-full lg:h-full"
            >
              <figure className="group h-full flex flex-col overflow-hidden rounded-3xl bg-white p-6 md:p-8 shadow-md border border-black/5 hover:shadow-2xl hover:border-[#ff0008]/20 transition-all duration-300">
                {/* Quote icon */}
                <svg
                  className="text-[#ff0008]/30 group-hover:text-[#ff0008]/50 transition-colors shrink-0"
                  width="32" height="32" viewBox="0 0 24 24" fill="currentColor"
                >
                  <path d="M9 7H5a2 2 0 00-2 2v4a2 2 0 002 2h2v1a3 3 0 01-3 3v2a5 5 0 005-5V9a2 2 0 00-2-2zm10 0h-4a2 2 0 00-2 2v4a2 2 0 002 2h2v1a3 3 0 01-3 3v2a5 5 0 005-5V9a2 2 0 00-2-2z" />
                </svg>

                {/* Quote body */}
                <blockquote className="font-quote mt-4 text-[15px] md:text-[16px] leading-7 text-[#0d162a]/85 flex-1">
                  {t(item.quoteKey)}
                </blockquote>

                {/* Author row — fixed positioning */}
                <div className="mt-6 pt-5 border-t border-black/10">
                  <div className="flex items-center gap-3">
                    {/* Avatar — explicit fixed size, never shifts */}
                    <div className="flex-shrink-0 h-11 w-11 rounded-full overflow-hidden">
                      <PhotoPlaceholder
                        src={SITE_IMAGES.testimonials[item.id]?.src}
                        alt={SITE_IMAGES.testimonials[item.id]?.alt || item.name}
                        tone={item.avatarTone}
                        className="h-full w-full"
                      />
                    </div>
                    {/* Name + role — clamped so long names don't push avatar away */}
                    <div className="min-w-0 flex-1">
                      <figcaption className="text-[14px] font-semibold text-[#0d162a] leading-tight truncate">
                        {item.name}
                      </figcaption>
                      <div className="text-[11px] tracking-[0.18em] text-[#5f6368] uppercase mt-0.5 truncate">
                        {t(item.roleKey)}
                      </div>
                    </div>
                  </div>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}