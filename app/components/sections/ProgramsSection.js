"use client";
import { PROGRAMS } from "../../lib/programs";
import { useTp } from "../../lib/i18n";
import { Reveal } from "../primitives/Reveal";
import { SectionLabel } from "../primitives/SectionLabel";
import { PillButton } from "../primitives/PillButton";
import { ProgramSpotlight } from "../programs/ProgramSpotlight";
import { ProgramCard } from "../programs/ProgramCard";

export function ProgramsSection() {
  const tp = useTp();
  return (
    <div
      id="programs"
      className="py-14 md:py-20 px-5 md:px-12"
      style={{
        background: "rgba(246,248,252,0.85)",
        backdropFilter: "blur(10px)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <Reveal direction="up">
          <div className="mb-10 md:mb-14">
            <SectionLabel>Our Programs</SectionLabel>
            <h2 className="font-display text-[34px] sm:text-[46px] md:text-[52px] leading-tight text-[#0d162a] max-w-2xl">
              Every program, a promise kept
            </h2>
          </div>
        </Reveal>

        {/* Spotlight — first program */}
        {PROGRAMS.length > 0 && (
          <Reveal direction="up" delay={80}>
            <ProgramSpotlight
              slug={PROGRAMS[0].slug}
              eyebrow={tp(PROGRAMS[0].eyebrow)}
              title={tp(PROGRAMS[0].shortDesc)}
              description={tp(PROGRAMS[0].longDesc)}
              images={PROGRAMS[0].imageTones.map((tone) => ({ tone }))}
            />
          </Reveal>
        )}

        {/* Card grid — remaining programs */}
        {PROGRAMS.length > 1 && (
          <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {PROGRAMS.slice(1).map((p, i) => (
              <Reveal key={p.slug} delay={Math.min((i + 1) * 70, 320)} direction="up">
                <ProgramCard
                  slug={p.slug}
                  eyebrow={tp(p.eyebrow)}
                  title={tp(p.shortDesc)}
                  description={tp(p.longDesc)}
                  images={p.imageTones.map((tone) => ({ tone }))}
                  accentIdx={i + 1}
                />
              </Reveal>
            ))}
          </div>
        )}

        {/* CTA */}
        <Reveal className="mt-10 md:mt-14 flex justify-center" delay={100}>
          <PillButton variant="dark">View all programs →</PillButton>
        </Reveal>
      </div>
    </div>
  );
}