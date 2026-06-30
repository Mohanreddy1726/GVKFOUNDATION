"use client";
import { useT } from "../../lib/i18n";
import { useInView } from "../../lib/hooks/useInView";

export function FloatingDonatePill() {
  const t = useT();
  const [ref, inView] = useInView({ threshold: 0.05 });
  return (
    <>
      <div ref={ref} aria-hidden="true" style={{ height: 1, width: 1, position: "absolute", top: "50%", left: 0 }} />
      <a
        href="/#donate"
        aria-label={t("fab.aria")}
        className="group fixed bottom-6 right-6 z-50 inline-flex items-center justify-center gap-0 lg:hover:gap-2 w-14 h-14 lg:hover:w-auto lg:hover:px-5 rounded-full bg-[#ff0008] text-white shadow-2xl shadow-red-500/30 transition-all duration-300 hover:bg-[#dd0007] hover:shadow-red-500/50 focus:outline-none overflow-hidden whitespace-nowrap"
        style={{
          opacity: inView ? 0 : 1,
          transform: inView ? "translateY(8px) scale(0.92)" : "translateY(0) scale(1)",
          pointerEvents: inView ? "none" : "auto",
        }}
      >
        <span className="grid place-items-center flex-shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 21s-7-4.35-7-10a4 4 0 017-2.65A4 4 0 0119 11c0 5.65-7 10-7 10z" />
          </svg>
        </span>
        <span className="text-[14px] font-semibold max-w-0 opacity-0 lg:group-hover:max-w-[120px] lg:group-hover:opacity-100 transition-[max-width,opacity] duration-300 ease-out">
          {t("fab.donate")}
        </span>
      </a>
    </>
  );
}