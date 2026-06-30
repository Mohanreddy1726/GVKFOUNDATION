"use client";
import { useState, useRef, useEffect } from "react";
import { useT } from "../../lib/i18n";
import { Reveal } from "../primitives/Reveal";
import { SectionLabel } from "../primitives/SectionLabel";

export function VisionSection() {
  const t = useT();

  const slides = [
    {
      tag: "Our Mission",
      tagKey: "vision.carousel.mission.tag",
      titleKey: "vision.carousel.mission.title",
      bodyKey: "vision.carousel.mission.body",
      accent: "#ff0008",
      fallbackTag: "Our Mission",
      fallbackTitle: "Transforming Lives Through Action",
      fallbackBody:
        "We deliver education, health, and empowerment programs to underserved communities — turning intention into measurable impact for every family we reach.",
    },
    {
      tag: "Our Vision",
      tagKey: "vision.carousel.vision.tag",
      titleKey: "vision.carousel.vision.title",
      bodyKey: "vision.carousel.vision.body",
      accent: "#4f7bff",
      fallbackTag: "Our Vision",
      fallbackTitle: "A Dignified Future for Every Child",
      fallbackBody:
        "We envision an India where no child's potential is limited by circumstance — where dignity, opportunity, and belonging are universal birthrights.",
    },
    {
      tag: "Our Values",
      tagKey: "vision.carousel.values.tag",
      titleKey: "vision.carousel.values.title",
      bodyKey: "vision.carousel.values.body",
      accent: "#f59e0b",
      fallbackTag: "Our Values",
      fallbackTitle: "Integrity · Compassion · Accountability",
      fallbackBody:
        "Every rupee entrusted to us is stewarded with total transparency. We believe authentic change begins with honest relationships and radical accountability to those we serve.",
    },
  ];

  const safeT = (key, fallback) => {
    try {
      const result = t(key);
      return result && result !== key ? result : fallback;
    } catch {
      return fallback;
    }
  };

  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef(null);

  const goTo = (idx) => {
    if (animating || idx === active) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(idx);
      setAnimating(false);
    }, 220);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setActive((p) => (p + 1) % slides.length);
        setAnimating(false);
      }, 220);
    }, 4000);
    return () => clearInterval(timerRef.current);
  }, []);

  const slide = slides[active];

  return (
    <section
      className="relative overflow-hidden py-20 md:py-28 text-white"
      style={{
        background: "rgba(13,22,42,0.55)",
        backdropFilter: "blur(10px)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        className="absolute inset-0 opacity-35 pointer-events-none"
        style={{ background: "radial-gradient(circle at 80% 30%, #2c3e7a 0%, transparent 55%)" }}
      />
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle at 10% 80%, #ff0008 0%, transparent 45%)" }}
      />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-12 items-center gap-10 md:gap-12 px-5 md:px-12">

        {/* Left: text */}
        <Reveal className="lg:col-span-6" direction="left">
          <SectionLabel color="#ff0008">
            {safeT("vision.eyebrow", "Our Direction")}
          </SectionLabel>
          <h2 className="font-display text-[36px] sm:text-[48px] md:text-[54px] leading-[1.1]">
            {safeT("vision.heading", "Built on purpose,\ndriven by impact")
              .split("\n")
              .map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
          </h2>
          <p className="font-body mt-6 max-w-md text-[15px] leading-7 text-white/70">
            {safeT(
              "vision.body",
              "Every initiative we run is anchored in a clear sense of why — and sustained by the communities we serve."
            )}
          </p>
        </Reveal>

        {/* Right: carousel */}
        <Reveal className="lg:col-span-6" direction="right" delay={150}>
          <div className="relative">
            {/* Card */}
            <div
              className="rounded-3xl border border-white/10 shadow-2xl overflow-hidden p-8 md:p-10 flex flex-col gap-6"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(20px)",
                minHeight: 280,
                opacity: animating ? 0 : 1,
                transform: animating ? "translateY(10px)" : "translateY(0)",
                transition: "opacity 0.22s ease, transform 0.22s ease",
              }}
            >
              {/* Tag pill */}
              <span
                className="self-start inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-bold tracking-[0.18em] uppercase"
                style={{
                  background: `${slide.accent}22`,
                  color: slide.accent,
                  border: `1px solid ${slide.accent}44`,
                }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: slide.accent }}
                />
                {safeT(slide.tagKey, slide.fallbackTag)}
              </span>

              {/* Title */}
              <h3 className="font-display text-[22px] sm:text-[26px] md:text-[28px] leading-snug text-white">
                {safeT(slide.titleKey, slide.fallbackTitle)}
              </h3>

              {/* Body */}
              <p className="font-body text-[14px] md:text-[15px] leading-7 text-white/65 flex-1">
                {safeT(slide.bodyKey, slide.fallbackBody)}
              </p>

              {/* Accent line */}
              <div
                className="h-0.5 w-16 rounded-full"
                style={{
                  background: `linear-gradient(to right, ${slide.accent}, transparent)`,
                }}
              />
            </div>

            {/* Dot nav */}
            <div className="mt-5 flex items-center gap-2.5 justify-center">
              {slides.map((s, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    clearInterval(timerRef.current);
                    goTo(i);
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === active ? 24 : 8,
                    height: 8,
                    background:
                      i === active
                        ? slides[i].accent
                        : "rgba(255,255,255,0.25)",
                  }}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}