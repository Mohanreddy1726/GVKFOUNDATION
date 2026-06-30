"use client";
export function SectionLabel({ children, color = "#0d162a" }) {
  return (
    <div className="flex items-center gap-3 mb-4 md:mb-5">
      <span className="inline-block h-px w-8 md:w-10" style={{ background: color }} />
      <span className="font-eyebrow" style={{ color }}>
        {children}
      </span>
    </div>
  );
}