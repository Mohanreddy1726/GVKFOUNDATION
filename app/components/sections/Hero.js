"use client";
import { useEffect, useState } from "react";
import { useT } from "../../lib/i18n";
import { PillButton } from "../primitives/PillButton";
import { PhotoPlaceholder } from "../primitives/PhotoPlaceholder";
import { HeroVideoTile } from "../primitives/HeroVideoTile";
import { SITE_IMAGES } from "../../lib/siteImages";

export function Hero() {
  const t = useT();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 120);
    return () => clearTimeout(timer);
  }, []);
  const stats = [
    { n: "700+", k: "hero.stat.lives" },
    { n: "300+", k: "hero.stat.programs" },
    { n: "500+", k: "hero.stat.volunteers" },
  ];
  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-[#050817]/55 via-[#0a1230]/40 to-[#050817]/55" />
      <div
        className="absolute inset-0 opacity-70"
        style={{ background: "radial-gradient(circle at 65% 45%, #1e2f6a 0%, transparent 58%)" }}
      />
      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-1 lg:grid-cols-12 items-center gap-10 px-5 md:px-12 pt-28 pb-16">
        <div className="lg:col-span-6 text-white">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-white/70 mb-7"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "none" : "translateY(20px)",
              transition: "all 0.65s ease 0.1s",
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff0008] animate-pulse" />
            {t("hero.badge")}
          </div>
          <h1
            className="font-display text-[44px] sm:text-[56px] lg:text-[66px] xl:text-[76px] leading-[1.03] tracking-tight"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "none" : "translateY(36px)",
              transition: "all 0.85s cubic-bezier(0.22,1,0.36,1) 0.22s",
            }}
          >
            {t("hero.titleLine1")}
            <br />
            {t("hero.titleLine2")}
            <br />
            <span className="font-display-italic text-[#ff0008]" style={{ textShadow: "0 0 40px rgba(255,0,8,0.4)" }}>
              {t("hero.titleLine3")}
            </span>
          </h1>
          <p
            className="font-body mt-6 max-w-md text-[15px] leading-7 text-white/75"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "none" : "translateY(24px)",
              transition: "all 0.7s ease 0.48s",
            }}
          >
            {t("hero.subtitle")}
          </p>
          <div
            className="mt-8 flex flex-wrap gap-3"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "none" : "translateY(20px)",
              transition: "all 0.7s ease 0.62s",
            }}
          >
            <PillButton
              variant="red"
              onClick={() => document.getElementById("donate")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t("hero.ctaDonate")}
            </PillButton>
            <PillButton variant="outline">{t("hero.ctaExplore")}</PillButton>
          </div>
          <div className="mt-10 flex flex-wrap gap-6" style={{ opacity: mounted ? 1 : 0, transition: "all 0.7s ease 0.78s" }}>
            {stats.map((s) => (
              <div key={s.k} className="flex items-center gap-2">
                <span className="font-stat text-[22px] text-white">{s.n}</span>
                <span className="font-body text-xs text-white/45 leading-tight max-w-[60px]">{t(s.k)}</span>
              </div>
            ))}
          </div>
        </div>
        <div
          className="lg:col-span-6 relative h-[320px] sm:h-[440px] lg:h-[520px]"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateX(52px)",
            transition: "all 0.95s cubic-bezier(0.22,1,0.36,1) 0.38s",
          }}
        >
          <div
            className="absolute right-0 top-0 w-[75%] h-[57%] rounded-2xl shadow-2xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <HeroVideoTile
              src={SITE_IMAGES.hero.image1.src}
              alt={SITE_IMAGES.hero.image1.alt}
              videoSrc={SITE_IMAGES.hero.image1.videoSrc}
              tone={SITE_IMAGES.hero.image1.tone}
            />
          </div>
          <div
            className="absolute left-0 top-[38%] w-[65%] h-[52%] rounded-2xl shadow-2xl overflow-hidden"
            style={{
              background: "rgba(13,22,42,0.5)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <HeroVideoTile
              src={SITE_IMAGES.hero.image2.src}
              alt={SITE_IMAGES.hero.image2.alt}
              videoSrc={SITE_IMAGES.hero.image2.videoSrc}
              tone={SITE_IMAGES.hero.image2.tone}
            />
          </div>
          <div
            className="absolute right-5 bottom-5 rounded-2xl px-5 py-4 text-white shadow-xl"
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <div className="font-stat text-2xl">95%</div>
            <div className="font-body text-xs text-white/60 mt-0.5">{t("hero.successRate")}</div>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/35 text-[10px] tracking-widest uppercase"
        style={{ animation: "heroBounce 2s ease-in-out infinite" }}
      >
        <span>{t("hero.scroll")}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 9l7 7 7-7" />
        </svg>
      </div>
      <style>{`@keyframes heroBounce{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(9px)}}`}</style>
    </section>
  );
}