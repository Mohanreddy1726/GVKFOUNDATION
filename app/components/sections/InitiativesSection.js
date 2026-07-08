"use client";
import { useT } from "../../lib/i18n";
import { Reveal } from "../primitives/Reveal";
import { SectionLabel } from "../primitives/SectionLabel";
import { PillButton } from "../primitives/PillButton";
import { PhotoPlaceholder } from "../primitives/PhotoPlaceholder";
import { SITE_IMAGES } from "../../lib/siteImages";

function InitiativeCard({ title, description, src, alt, tone = "navy" }) {
  return (
    <div className="group rounded-2xl bg-white p-5 md:p-6 shadow-md border border-black/5 hover:shadow-xl hover:-translate-y-1.5 hover:border-[#ff0008]/15 transition-all duration-300 flex flex-col cursor-default">
      <PhotoPlaceholder src={src} alt={alt} tone={tone} className="h-28 md:h-32 w-full rounded-xl mb-4 group-hover:scale-[1.02] transition-transform duration-300" />
      <h3 className="text-[14px] md:text-[16px] font-semibold text-[#0d162a] leading-snug flex-1">{title}</h3>
      <p className="font-body mt-2 text-[12px] md:text-[13px] leading-6 text-[#5f6368]">{description}</p>
    </div>
  );
}

export function InitiativesSection() {
  const t = useT();
  const cards = [
    ["initiatives.card.1.title", "initiatives.card.1.desc", "cream"],
    ["initiatives.card.2.title", "initiatives.card.2.desc", "olive"],
    ["initiatives.card.3.title", "initiatives.card.3.desc", "rust"],
    ["initiatives.card.4.title", "initiatives.card.4.desc", "navy"],
    ["initiatives.card.5.title", "initiatives.card.5.desc", "sand"],
    ["initiatives.card.6.title", "initiatives.card.6.desc", "slate"],
    ["initiatives.card.7.title", "initiatives.card.7.desc", "cream"],
    ["initiatives.card.8.title", "initiatives.card.8.desc", "olive"],
    ["initiatives.card.9.title", "initiatives.card.9.desc", "rust"],
    ["initiatives.card.10.title", "initiatives.card.10.desc", "navy"],
    ["initiatives.card.11.title", "initiatives.card.11.desc", "sand"],
    ["initiatives.card.12.title", "initiatives.card.12.desc", "slate"],
  ];
  return (
    <section
      className="py-16 md:py-24"
      style={{
        background: "rgba(246,248,252,0.78)",
        backdropFilter: "blur(8px)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-6 md:gap-8 mb-10 md:mb-14">
          <Reveal className="lg:col-span-7" direction="left">
            <SectionLabel>{t("initiatives.eyebrow")}</SectionLabel>
            <h2 className="font-display text-[34px] sm:text-[46px] md:text-[52px] leading-tight text-[#0d162a]">
              {t("initiatives.heading").split("\n").map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" direction="right" delay={100}>
            <p className="font-body text-[14px] md:text-[15px] leading-7 text-[#5f6368]">{t("initiatives.sub")}</p>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {cards.map(([tk, dk, tone], i) => {
            const img = SITE_IMAGES.initiatives[i + 1];
            return (
              <Reveal key={tk} delay={Math.min(i * 45, 280)} direction="up">
                <InitiativeCard
                  title={t(tk)}
                  description={t(dk)}
                  src={img.src}
                  alt={img.alt}
                  tone={tone}
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}