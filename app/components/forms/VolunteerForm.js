"use client";
import { useState } from "react";
import { useT } from "../../lib/i18n";
import { Reveal } from "../primitives/Reveal";
import { SectionLabel } from "../primitives/SectionLabel";
import { PillButton } from "../primitives/PillButton";

export function VolunteerForm() {
  const t = useT();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    interest: "",
    availability: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const interests = [
    { v: "education", l: "volunteer.area.education" },
    { v: "health", l: "volunteer.area.health" },
    { v: "food", l: "volunteer.area.food" },
    { v: "sports", l: "volunteer.area.sports" },
    { v: "community", l: "volunteer.area.community" },
    { v: "skills", l: "volunteer.area.skills" },
  ];
  const avails = [
    { v: "weekends", l: "volunteer.avail.weekends" },
    { v: "weekdays", l: "volunteer.avail.weekdays" },
    { v: "flexible", l: "volunteer.avail.flexible" },
  ];

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = t("volunteer.error.name");
    if (!form.email.trim()) e.email = t("volunteer.error.email");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = t("volunteer.error.emailInvalid");
    if (form.phone && !/^[+\d\s()-]{7,}$/.test(form.phone)) e.phone = t("volunteer.error.phone");
    if (!form.city.trim()) e.city = t("volunteer.error.city");
    if (!form.interest) e.interest = t("volunteer.error.area");
    if (!form.availability) e.availability = t("volunteer.error.area");
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const reset = () => {
    setForm({ name: "", email: "", phone: "", city: "", interest: "", availability: "", message: "" });
    setSubmitted(false);
    setErrors({});
  };

  // ── Success state ──
  if (submitted) {
    return (
      <section
        id="volunteer"
        className="relative py-20 md:py-28 text-white"
        style={{
          background: "rgba(10,18,42,0.88)",
          backdropFilter: "blur(12px)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{ background: "radial-gradient(circle at 50% 30%, #3b82f6 0%, transparent 55%)" }}
        />
        <Reveal className="relative mx-auto max-w-2xl px-5 md:px-12 text-center">
          <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[#3b82f6]/15 border border-[#3b82f6]/30">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.5">
              <path d="M5 12l5 5 9-11" />
            </svg>
          </div>
          <h2 className="font-display text-[32px] sm:text-[40px] md:text-[46px] leading-tight mt-6">
            {t("volunteer.thankHeading").replace("{name}", form.name.split(" ")[0])}
          </h2>
          <p className="font-display-italic text-[20px] md:text-[24px] text-[#60a5fa] mt-2">
            {t("volunteer.thankSub")}
          </p>
          <p className="font-body mt-5 text-[15px] leading-7 text-white/75 max-w-xl mx-auto">
            {t("volunteer.thankBody")
              .replace("{area}", form.interest)
              .replace("{city}", form.city)}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PillButton variant="blue" onClick={reset}>
              {t("volunteer.thankAnother")}
            </PillButton>
          </div>
        </Reveal>
      </section>
    );
  }

  // ── Form state ──
  return (
    <section
      id="volunteer"
      className="relative py-20 md:py-28 text-white"
      style={{
        background: "rgba(10,18,42,0.88)",
        backdropFilter: "blur(12px)",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Blue ambient glows */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, #2563eb 0%, transparent 45%), radial-gradient(circle at 80% 80%, #1e3a8a 0%, transparent 50%)",
        }}
      />
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(96,165,250,1) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-5 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start">

          {/* Left: info column */}
          <div className="lg:col-span-5">
            <Reveal direction="left">
              <SectionLabel color="#60a5fa">{t("volunteer.eyebrow")}</SectionLabel>
              <h2 className="font-display text-[32px] sm:text-[40px] md:text-[46px] leading-[1.05]">
                {t("volunteer.heading")}{" "}
                <span className="font-display-italic text-[#60a5fa]">
                  {t("volunteer.headingEm")}
                </span>
              </h2>
              <p className="font-body mt-5 text-[15px] leading-7 text-white/75 max-w-md">
                {t("volunteer.body")}
              </p>
              <div className="mt-7 space-y-3 max-w-md">
                {[
                  ["volunteer.bullet.difference.title", "volunteer.bullet.difference.body"],
                  ["volunteer.bullet.community.title", "volunteer.bullet.community.body"],
                  ["volunteer.bullet.flexible.title", "volunteer.bullet.flexible.body"],
                ].map(([tk, sk]) => (
                  <div key={tk} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-[#3b82f6]/20 text-[#60a5fa]">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 12l5 5 9-11" />
                      </svg>
                    </span>
                    <div>
                      <div className="text-[14px] font-semibold text-white">{t(tk)}</div>
                      <div className="font-body text-[13px] text-white/55 mt-0.5">{t(sk)}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative blue accent card */}
              <div
                className="mt-8 rounded-2xl p-5 border border-[#3b82f6]/20"
                style={{ background: "rgba(37,99,235,0.08)" }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-2 w-2 rounded-full bg-[#3b82f6] animate-pulse" />
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#60a5fa]">
                    500+ Volunteers Active
                  </span>
                </div>
                <p className="font-body text-[13px] text-white/55 leading-6">
                  Join a growing family of changemakers across Telangana dedicated to building a better tomorrow.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal className="lg:col-span-7" direction="right" delay={100}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl p-6 md:p-8 border border-[#3b82f6]/15 shadow-2xl"
              style={{ background: "rgba(255,255,255,0.03)" }}
              noValidate
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="vol-name" className="font-eyebrow block mb-2 text-white/50">
                    {t("volunteer.field.name")}
                  </label>
                  <input
                    id="vol-name"
                    type="text"
                    value={form.name}
                    onChange={set("name")}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                      errors.name ? "border-[#ff0008]" : "border-white/10"
                    } text-white placeholder-white/30 font-body text-[14px] focus:outline-none focus:border-[#3b82f6] focus:bg-white/8 transition`}
                    placeholder={t("volunteer.field.name")}
                  />
                  {errors.name && <p className="mt-1.5 text-[12px] text-[#ff0008]">{errors.name}</p>}
                </div>
                {/* Email */}
                <div>
                  <label htmlFor="vol-email" className="font-eyebrow block mb-2 text-white/50">
                    {t("volunteer.field.email")}
                  </label>
                  <input
                    id="vol-email"
                    type="email"
                    value={form.email}
                    onChange={set("email")}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                      errors.email ? "border-[#ff0008]" : "border-white/10"
                    } text-white placeholder-white/30 font-body text-[14px] focus:outline-none focus:border-[#3b82f6] focus:bg-white/8 transition`}
                    placeholder={t("volunteer.field.email")}
                  />
                  {errors.email && <p className="mt-1.5 text-[12px] text-[#ff0008]">{errors.email}</p>}
                </div>
              </div>

              <div className="mt-3 md:mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {/* Phone */}
                <div>
                  <label htmlFor="vol-phone" className="font-eyebrow block mb-2 text-white/50">
                    {t("volunteer.field.phone")}
                  </label>
                  <input
                    id="vol-phone"
                    type="tel"
                    value={form.phone}
                    onChange={set("phone")}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                      errors.phone ? "border-[#ff0008]" : "border-white/10"
                    } text-white placeholder-white/30 font-body text-[14px] focus:outline-none focus:border-[#3b82f6] focus:bg-white/8 transition`}
                    placeholder={t("volunteer.field.phone")}
                  />
                  {errors.phone && <p className="mt-1.5 text-[12px] text-[#ff0008]">{errors.phone}</p>}
                </div>
                {/* City */}
                <div>
                  <label htmlFor="vol-city" className="font-eyebrow block mb-2 text-white/50">
                    {t("volunteer.field.city")}
                  </label>
                  <input
                    id="vol-city"
                    type="text"
                    value={form.city}
                    onChange={set("city")}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                      errors.city ? "border-[#ff0008]" : "border-white/10"
                    } text-white placeholder-white/30 font-body text-[14px] focus:outline-none focus:border-[#3b82f6] focus:bg-white/8 transition`}
                    placeholder={t("volunteer.field.city")}
                  />
                  {errors.city && <p className="mt-1.5 text-[12px] text-[#ff0008]">{errors.city}</p>}
                </div>
              </div>

              <div className="mt-3 md:mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {/* Interest */}
                <div>
                  <label htmlFor="vol-interest" className="font-eyebrow block mb-2 text-white/50">
                    {t("volunteer.field.interest")}
                  </label>
                  <div className="relative">
                    <select
                      id="vol-interest"
                      value={form.interest}
                      onChange={set("interest")}
                      className={`w-full appearance-none px-4 py-3 pr-10 rounded-xl bg-white/5 border ${
                        errors.interest ? "border-[#ff0008]" : "border-white/10"
                      } text-white font-body text-[14px] focus:outline-none focus:border-[#3b82f6] focus:bg-white/8 transition cursor-pointer`}
                    >
                      <option value="" className="bg-[#0d162a]">{t("volunteer.field.area")}</option>
                      {interests.map((o) => (
                        <option key={o.v} value={o.v} className="bg-[#0d162a]">{t(o.l)}</option>
                      ))}
                    </select>
                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                  {errors.interest && <p className="mt-1.5 text-[12px] text-[#ff0008]">{errors.interest}</p>}
                </div>
                {/* Availability */}
                <div>
                  <label htmlFor="vol-avail" className="font-eyebrow block mb-2 text-white/50">
                    {t("volunteer.field.availability")}
                  </label>
                  <div className="relative">
                    <select
                      id="vol-avail"
                      value={form.availability}
                      onChange={set("availability")}
                      className={`w-full appearance-none px-4 py-3 pr-10 rounded-xl bg-white/5 border ${
                        errors.availability ? "border-[#ff0008]" : "border-white/10"
                      } text-white font-body text-[14px] focus:outline-none focus:border-[#3b82f6] focus:bg-white/8 transition cursor-pointer`}
                    >
                      <option value="" className="bg-[#0d162a]">{t("volunteer.field.availability")}</option>
                      {avails.map((o) => (
                        <option key={o.v} value={o.v} className="bg-[#0d162a]">{t(o.l)}</option>
                      ))}
                    </select>
                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                  {errors.availability && <p className="mt-1.5 text-[12px] text-[#ff0008]">{errors.availability}</p>}
                </div>
              </div>

              {/* Message */}
              <div className="mt-3 md:mt-4">
                <label htmlFor="vol-msg" className="font-eyebrow block mb-2 text-white/50">
                  {t("volunteer.field.message")}
                </label>
                <textarea
                  id="vol-msg"
                  rows={3}
                  value={form.message}
                  onChange={set("message")}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 font-body text-[14px] focus:outline-none focus:border-[#3b82f6] focus:bg-white/8 transition resize-none"
                  placeholder={t("volunteer.field.message")}
                />
              </div>

              {/* Submit */}
              <div className="mt-7 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-end gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-[15px] font-semibold tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0"
                >
                  {t("volunteer.submit")} →
                </button>
              </div>
              <p className="font-body mt-4 text-[11px] text-white/35 text-center">
                By signing up you agree to be contacted by GVK Foundation. This is a demo form — no data is sent.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}