"use client";
import { PhotoPlaceholder } from "../primitives/PhotoPlaceholder";
import { PROGRAM_ACCENTS } from "./ProgramSpotlight";
import { SITE_IMAGES } from "../../lib/siteImages";

export function ProgramCard({ slug, eyebrow, title, description, images, accentIdx }) {
  const accent = PROGRAM_ACCENTS[accentIdx % PROGRAM_ACCENTS.length];
  const img = SITE_IMAGES.programs[slug]?.card;
  return (
    <div
      className="group relative flex flex-col rounded-3xl overflow-hidden hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300"
      style={{
        background: "rgba(255,255,255,0.82)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      {/* Accent left bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-3xl z-10"
        style={{ background: accent }}
      />
      {/* Top image */}
      <div className="relative h-[180px] overflow-hidden">
        <PhotoPlaceholder
          src={img?.src}
          alt={img?.alt || title}
          tone={img?.tone || images[0]?.tone || "navy"}
          className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div
          className="absolute top-4 left-4 rounded-full px-3 py-1 text-[10px] font-bold tracking-[0.18em] uppercase text-white"
          style={{ background: accent }}
        >
          {eyebrow || "Program"}
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-col flex-1 p-5 md:p-6 pl-6">
        <h3 className="font-display text-[18px] md:text-[20px] leading-snug text-[#0d162a] mt-1">
          {title}
        </h3>
        <p className="font-body mt-3 text-[13px] leading-6 text-[#5f6368] flex-1 line-clamp-3">
          {description}
        </p>
        {slug && (
          <a
            href={`/programs/${slug}`}
            className="mt-4 self-start text-[13px] font-semibold transition-all duration-200 flex items-center gap-1.5 hover:gap-2.5"
            style={{ color: accent }}
          >
            Learn more →
          </a>
        )}
      </div>
    </div>
  );
}