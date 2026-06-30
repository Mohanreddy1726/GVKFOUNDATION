"use client";
import { notFound } from "next/navigation";
import { Reveal } from "../../components/primitives/Reveal";
import { PillButton } from "../../components/primitives/PillButton";
import { SectionLabel } from "../../components/primitives/SectionLabel";
import { PhotoPlaceholder } from "../../components/primitives/PhotoPlaceholder";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { CTABanner } from "../../components/sections/CTABanner";
import { DonationForm } from "../../components/forms/DonationForm";
import { getProgram } from "../../lib/programs";
import { useT, useTp } from "../../lib/i18n";
import { SITE_IMAGES } from "../../lib/siteImages";

function OutcomeList({ items, tp }) {
  if (!items || !items.length) return null;
  return (
    <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
      {items.map((o, i) => (
        <Reveal key={i} delay={i * 80} direction="up">
          <li className="flex items-start gap-3 rounded-2xl bg-white border border-black/5 shadow-sm px-5 py-4 hover:border-[#ff0008]/25 hover:-translate-y-0.5 transition-all duration-300">
            <span className="mt-1 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-[#ff0008]/15 text-[#ff0008]">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M5 12l5 5 9-11" />
              </svg>
            </span>
            <span className="text-[14px] md:text-[15px] font-medium text-[#0d162a]">{tp(o)}</span>
          </li>
        </Reveal>
      ))}
    </ul>
  );
}

function GalleryGrid({ slug, tones }) {
  if (!tones || !tones.length) return null;
  const gallery = SITE_IMAGES.programs[slug]?.gallery || {};
  return (
    <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-5">
      {tones.map((tone, i) => {
        const slot = gallery[i + 1];
        return (
          <Reveal key={`${tone}-${i}`} delay={i * 60} direction="up">
            <PhotoPlaceholder
              src={slot?.src}
              alt={slot?.alt || `${slug} gallery ${i + 1}`}
              tone={slot?.tone || tone}
              className="h-[180px] sm:h-[220px] md:h-[260px] w-full rounded-2xl shadow-lg hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
            />
          </Reveal>
        );
      })}
    </div>
  );
}

export default function ProgramDetailPage({ slug }) {
  const t = useT();
  const tp = useTp();
  const program = getProgram(slug);

  if (!program) {
    notFound();
  }

  const accent = program.accent;
  const heroGradient = `radial-gradient(circle at 70% 40%, ${accent}33 0%, transparent 55%), linear-gradient(135deg, ${accent}1a 0%, #050817 60%, #0d162a 100%)`;

  return (
    <>
      <section
        className="relative pt-32 md:pt-40 pb-20 md:pb-28 text-white overflow-hidden"
        style={{ background: heroGradient, position: "relative", zIndex: 1 }}
      >
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: `radial-gradient(circle at 20% 80%, ${accent}22 0%, transparent 60%)` }} />
        <div className="relative mx-auto max-w-[1440px] px-5 md:px-12">
          <Reveal>
            <a
              href="/#programs"
              className="inline-flex items-center gap-2 text-[12px] font-eyebrow tracking-[0.22em] text-white/55 hover:text-white transition-colors mb-8"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              {t("programs.back")}
            </a>
          </Reveal>
          <Reveal delay={80}>
            <SectionLabel color={accent}>{tp(program.eyebrow)}</SectionLabel>
          </Reveal>
          <Reveal delay={140}>
            <h1 className="font-display text-[40px] sm:text-[56px] md:text-[68px] leading-[1.05] tracking-tight max-w-4xl">
              {tp(program.name)}
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="font-body mt-6 max-w-2xl text-[16px] md:text-[18px] leading-7 text-white/80">
              {tp(program.shortDesc)}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap gap-3">
              <PillButton variant="red" as="a" href="/#donate">
                {t("programs.donateHere")}
              </PillButton>
              <PillButton variant="outline" as="a" href="/#programs">
                {t("programs.back")}
              </PillButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        className="py-16 md:py-24"
        style={{
          background: "rgba(255,255,255,0.78)",
          backdropFilter: "blur(10px)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="mx-auto max-w-[1100px] px-5 md:px-12">
          <Reveal>
            <h2 className="font-display text-[28px] sm:text-[36px] md:text-[42px] leading-tight text-[#0d162a]">
              {t("programs.sectionHeading")}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-body mt-6 max-w-3xl text-[15px] md:text-[16px] leading-7 text-[#5f6368]">
              {tp(program.longDesc)}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-10 flex items-center gap-3">
              <span className="inline-block h-px w-10" style={{ background: accent }} />
              <span className="font-eyebrow" style={{ color: accent }}>
                OUTCOMES
              </span>
            </div>
          </Reveal>
          <OutcomeList items={program.outcomes} tp={tp} />

          <Reveal delay={300}>
            <div className="mt-12 flex items-center gap-3">
              <span className="inline-block h-px w-10" style={{ background: accent }} />
              <span className="font-eyebrow" style={{ color: accent }}>
                GALLERY
              </span>
            </div>
          </Reveal>
          <GalleryGrid slug={slug} tones={program.galleryTones} />
        </div>
      </section>

      <section
        className="relative py-16 md:py-24 text-white overflow-hidden"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${accent}55 0%, transparent 62%), rgba(10,14,30,0.6)`,
          backdropFilter: "blur(10px)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Reveal className="relative mx-auto max-w-3xl px-5 md:px-12 text-center">
          <h2 className="font-display text-[28px] sm:text-[40px] md:text-[48px] leading-[1.1]">
            {tp(program.shortDesc)}
          </h2>
          <p className="font-body mt-5 text-[15px] leading-7 text-white/75 max-w-2xl mx-auto">
            {tp(program.longDesc)}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PillButton variant="red" as="a" href="/#donate">
              {t("programs.supportHere")}
            </PillButton>
            <PillButton variant="outline" as="a" href="/#programs">
              {t("programs.back")}
            </PillButton>
          </div>
        </Reveal>
      </section>

      <CTABanner />
      <DonationForm />
      <Footer />
    </>
  );
}