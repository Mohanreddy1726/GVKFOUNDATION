"use client";
import { PhotoPlaceholder } from "../primitives/PhotoPlaceholder";
import { SITE_IMAGES } from "../../lib/siteImages";

export const PROGRAM_ACCENTS = ["#ff0008", "#4f7bff", "#f59e0b", "#6effc1", "#ff7a4d", "#ff5a8a"];

export function ProgramSpotlight({ slug, eyebrow, title, description, images }) {
  const spotlight = SITE_IMAGES.programs[slug]?.spotlight || {};
  return (
    <div
      className="relative rounded-3xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.82)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[360px]">
        {/* Text */}
        <div className="lg:col-span-7 flex flex-col justify-center p-7 md:p-10 lg:p-12 order-1">
          <div
            className="w-10 h-1 rounded-full mb-5"
            style={{ background: PROGRAM_ACCENTS[0] }}
          />
          {eyebrow && (
            <span
              className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase mb-3"
              style={{ color: PROGRAM_ACCENTS[0] }}
            >
              {eyebrow}
            </span>
          )}
          <h2 className="font-display text-[26px] sm:text-[32px] md:text-[38px] leading-tight text-[#0d162a]">
            {title}
          </h2>
          <p className="font-body mt-4 max-w-xl text-[14px] md:text-[15px] leading-7 text-[#5f6368]">
            {description}
          </p>
          {slug && (
            <a
              href={`/programs/${slug}`}
              className="mt-6 self-start inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{ background: PROGRAM_ACCENTS[0] }}
            >
              Explore program →
            </a>
          )}
        </div>
        {/* Image mosaic */}
        <div className="lg:col-span-5 grid grid-rows-2 gap-3 p-4 md:p-5 order-2 h-[240px] lg:h-auto">
          {[1, 2].map((n) => {
            const img = spotlight[n];
            return (
              <PhotoPlaceholder
                key={n}
                src={img?.src}
                alt={img?.alt || `${title} ${n}`}
                tone={img?.tone || images[n - 1]?.tone || "navy"}
                className="rounded-2xl w-full h-full shadow-md hover:scale-[1.02] transition-transform duration-300"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}