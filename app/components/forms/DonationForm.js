"use client";
import { useState } from "react";
import { useT } from "../../lib/i18n";
import { causeLabel } from "../../lib/causeLabel";
import { Reveal } from "../primitives/Reveal";
import { SectionLabel } from "../primitives/SectionLabel";
import { PillButton } from "../primitives/PillButton";

export function DonationForm() {
  const t = useT();
  const [amount, setAmount] = useState(500);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState("one-time");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [method, setMethod] = useState("card");
  const [cause, setCause] = useState("general");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const presets = [250, 500, 1000, 2500, 5000];
  const finalAmount = customAmount ? Number(customAmount) : amount;

  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = t("donate.error.name");
    if (!email.trim()) e.email = t("donate.error.email");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = t("donate.error.emailInvalid");
    if (phone && !/^[+\d\s()-]{7,}$/.test(phone)) e.phone = t("donate.error.phone");
    if (!finalAmount || finalAmount < 50) e.amount = t("donate.error.amount");
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const reset = () => {
    setSubmitted(false);
    setAmount(500);
    setCustomAmount("");
    setFrequency("one-time");
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setMethod("card");
    setCause("general");
    setErrors({});
  };

  if (submitted) {
    return (
      <section
        id="donate"
        className="relative py-20 md:py-28 text-white"
        style={{
          background: "rgba(13,22,42,0.78)",
          backdropFilter: "blur(12px)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{ background: "radial-gradient(circle at 50% 30%, #ff0008 0%, transparent 55%)" }}
        />
        <Reveal className="relative mx-auto max-w-2xl px-5 md:px-12 text-center">
          <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[#ff0008]/15 border border-[#ff0008]/30">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ff0008" strokeWidth="2.5">
              <path d="M5 12l5 5 9-11" />
            </svg>
          </div>
          <h2 className="font-display text-[32px] sm:text-[40px] md:text-[46px] leading-tight mt-6">
            {t("donate.thankHeading").replace("{name}", name.split(" ")[0])}
          </h2>
          <p className="font-display-italic text-[20px] md:text-[24px] text-[#ff0008] mt-2">
            {t("donate.thankSub")}
          </p>
          <p className="font-body mt-5 text-[15px] leading-7 text-white/75 max-w-xl mx-auto">
            {t("donate.thankBody")
              .replace("{amount}", `₹${finalAmount.toLocaleString("en-IN")}`)
              .replace("{cause}", causeLabel(cause))
              .replace("{email}", email)}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PillButton variant="red" onClick={reset}>{t("donate.thankAnother")}</PillButton>
            <PillButton variant="outline" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{t("donate.thankBack")}</PillButton>
          </div>
        </Reveal>
      </section>
    );
  }

  const clearErr = (k) => (e) => {
    if (k === "name") setName(e.target.value);
    else if (k === "email") setEmail(e.target.value);
    else if (k === "phone") setPhone(e.target.value);
    else if (k === "message") setMessage(e.target.value);
    if (errors[k]) setErrors({ ...errors, [k]: undefined });
  };

  return (
    <section
      id="donate"
      className="relative py-20 md:py-28 text-white"
      style={{
        background: "rgba(13,22,42,0.78)",
        backdropFilter: "blur(12px)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, #ff0008 0%, transparent 45%), radial-gradient(circle at 10% 80%, #2c3e7a 0%, transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-[1200px] px-5 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start">
          <div className="lg:col-span-5">
            <Reveal direction="left">
              <SectionLabel color="#ff0008">{t("donate.eyebrow")}</SectionLabel>
              <h2 className="font-display text-[32px] sm:text-[40px] md:text-[46px] leading-[1.05]">
                {t("donate.heading")}{" "}
                <span className="font-display-italic text-[#ff0008]">{t("donate.headingEm")}</span>
              </h2>
              <p className="font-body mt-5 text-[15px] leading-7 text-white/75 max-w-md">{t("donate.body")}</p>
              <div className="mt-7 space-y-3 max-w-md">
                {[
                  ["donate.bullet.transparent.title", "donate.bullet.transparent.body"],
                  ["donate.bullet.secure.title", "donate.bullet.secure.body"],
                  ["donate.bullet.tax.title", "donate.bullet.tax.body"],
                ].map(([tk, sk]) => (
                  <div key={tk} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-[#ff0008]/15 text-[#ff0008]">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 12l5 5 9-11" />
                      </svg>
                    </span>
                    <div>
                      <div className="text-[14px] font-semibold text-white">{t(tk)}</div>
                      <div className="font-body text-[13px] text-white/60 mt-0.5">{t(sk)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-7" direction="right" delay={100}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl p-6 md:p-8 border border-white/12 shadow-2xl"
              style={{ background: "rgba(255,255,255,0.04)" }}
              noValidate
            >
              {/* Frequency toggle */}
              <div className="flex items-center gap-1 p-1 rounded-full bg-white/5 border border-white/10 max-w-sm mx-auto mb-7">
                {["one-time", "monthly"].map((f) => (
                  <button
                    type="button"
                    key={f}
                    onClick={() => setFrequency(f)}
                    aria-pressed={frequency === f}
                    className={`flex-1 px-4 py-2 rounded-full text-[13px] font-semibold capitalize transition-all duration-300 ${
                      frequency === f
                        ? "bg-[#ff0008] text-white shadow-lg shadow-red-500/20"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {f === "one-time" ? t("donate.freq.oneTime") : t("donate.freq.monthly")}
                  </button>
                ))}
              </div>

              {/* Preset amounts */}
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 md:gap-3">
                {presets.map((p) => (
                  <button
                    type="button"
                    key={p}
                    onClick={() => { setAmount(p); setCustomAmount(""); }}
                    aria-pressed={!customAmount && amount === p}
                    className={`font-stat py-3 md:py-3.5 rounded-xl border text-[15px] transition-all duration-300 ${
                      !customAmount && amount === p
                        ? "bg-[#ff0008] border-[#ff0008] text-white shadow-lg shadow-red-500/20"
                        : "bg-white/5 border-white/10 text-white/80 hover:border-white/30 hover:bg-white/10"
                    }`}
                  >
                    ₹{p.toLocaleString("en-IN")}
                  </button>
                ))}
              </div>

              {/* Custom amount */}
              <div className="mt-3 relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 font-stat text-[15px]">₹</span>
                <input
                  type="number"
                  id="donate-amount"
                  min="50"
                  placeholder={t("donate.field.customAmount")}
                  value={customAmount}
                  onChange={(e) => { setCustomAmount(e.target.value); if (errors.amount) setErrors({ ...errors, amount: undefined }); }}
                  className={`w-full pl-9 pr-4 py-3.5 rounded-xl bg-white/5 border ${
                    errors.amount ? "border-[#ff0008]" : "border-white/10"
                  } text-white placeholder-white/35 font-stat text-[15px] focus:outline-none focus:border-[#ff0008] focus:bg-white/8 transition`}
                />
              </div>
              {errors.amount && <p className="mt-1.5 text-[12px] text-[#ff0008]">{errors.amount}</p>}

              {/* Cause */}
              <div className="mt-6">
                <label htmlFor="donate-cause" className="font-eyebrow block mb-2.5 text-white/55">{t("donate.causeLabel")}</label>
                <div className="relative">
                  <select
                    id="donate-cause"
                    value={cause}
                    onChange={(e) => setCause(e.target.value)}
                    className="w-full appearance-none px-4 py-3 pr-10 rounded-xl bg-white/5 border border-white/10 text-white font-body text-[14px] focus:outline-none focus:border-[#ff0008] focus:bg-white/8 transition cursor-pointer"
                  >
                    <option value="general" className="bg-[#0d162a]">{t("donate.cause.general")}</option>
                    <option value="education" className="bg-[#0d162a]">{t("donate.cause.education")}</option>
                    <option value="health" className="bg-[#0d162a]">{t("donate.cause.health")}</option>
                    <option value="empowerment" className="bg-[#0d162a]">{t("donate.cause.empowerment")}</option>
                    <option value="community" className="bg-[#0d162a]">{t("donate.cause.community")}</option>
                    <option value="opportunity" className="bg-[#0d162a]">{t("donate.cause.opportunity")}</option>
                    <option value="dignity" className="bg-[#0d162a]">{t("donate.cause.dignity")}</option>
                    <option value="food" className="bg-[#0d162a]">{t("donate.cause.food")}</option>
                    <option value="sports" className="bg-[#0d162a]">{t("donate.cause.sports")}</option>
                  </select>
                  <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </div>

              {/* Name + Email */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label htmlFor="donate-name" className="font-eyebrow block mb-2 text-white/55">{t("donate.field.name")}</label>
                  <input
                    id="donate-name"
                    type="text"
                    value={name}
                    onChange={clearErr("name")}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.name ? "border-[#ff0008]" : "border-white/10"} text-white placeholder-white/35 font-body text-[14px] focus:outline-none focus:border-[#ff0008] focus:bg-white/8 transition`}
                    placeholder={t("donate.field.name")}
                  />
                  {errors.name && <p className="mt-1.5 text-[12px] text-[#ff0008]">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="donate-email" className="font-eyebrow block mb-2 text-white/55">{t("donate.field.email")}</label>
                  <input
                    id="donate-email"
                    type="email"
                    value={email}
                    onChange={clearErr("email")}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.email ? "border-[#ff0008]" : "border-white/10"} text-white placeholder-white/35 font-body text-[14px] focus:outline-none focus:border-[#ff0008] focus:bg-white/8 transition`}
                    placeholder={t("donate.field.email")}
                  />
                  {errors.email && <p className="mt-1.5 text-[12px] text-[#ff0008]">{errors.email}</p>}
                </div>
              </div>

              {/* Phone */}
              <div className="mt-3 md:mt-4">
                <label htmlFor="donate-phone" className="font-eyebrow block mb-2 text-white/55">{t("donate.field.phone")}</label>
                <input
                  id="donate-phone"
                  type="tel"
                  value={phone}
                  onChange={clearErr("phone")}
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.phone ? "border-[#ff0008]" : "border-white/10"} text-white placeholder-white/35 font-body text-[14px] focus:outline-none focus:border-[#ff0008] focus:bg-white/8 transition`}
                  placeholder={t("donate.field.phone")}
                />
                {errors.phone && <p className="mt-1.5 text-[12px] text-[#ff0008]">{errors.phone}</p>}
              </div>

              {/* Message */}
              <div className="mt-3 md:mt-4">
                <label htmlFor="donate-msg" className="font-eyebrow block mb-2 text-white/55">{t("donate.field.message")}</label>
                <textarea
                  id="donate-msg"
                  value={message}
                  onChange={clearErr("message")}
                  rows={2}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/35 font-body text-[14px] focus:outline-none focus:border-[#ff0008] focus:bg-white/8 transition resize-none"
                  placeholder={t("donate.field.messagePh")}
                />
              </div>

              {/* Payment method */}
              <div className="mt-6">
                <label className="font-eyebrow block mb-2.5 text-white/55">{t("donate.paymentLabel")}</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    ["card", t("donate.payment.card"), <svg key="c" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>],
                    ["upi", t("donate.payment.upi"), <svg key="u" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19"/></svg>],
                    ["netbanking", t("donate.payment.netbanking"), <svg key="n" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 10l9-6 9 6M5 10v9h14v-9M9 19v-5h6v5"/></svg>],
                    ["wallet", t("donate.payment.wallet"), <svg key="w" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 7H4a2 2 0 00-2 2v8a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 14a1 1 0 100-2 1 1 0 000 2z"/></svg>],
                  ].map(([k, l, icon]) => (
                    <button
                      type="button"
                      key={k}
                      onClick={() => setMethod(k)}
                      aria-pressed={method === k}
                      className={`flex flex-col items-center gap-1.5 py-3 rounded-xl border transition-all duration-300 ${
                        method === k
                          ? "bg-[#ff0008]/12 border-[#ff0008] text-white shadow-lg shadow-red-500/15"
                          : "bg-white/5 border-white/10 text-white/60 hover:border-white/30 hover:text-white"
                      }`}
                    >
                      {icon}
                      <span className="text-[11px] font-semibold tracking-wide">{l}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Summary + submit */}
              <div className="mt-7 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="font-eyebrow text-white/45">{t("donate.summary")}</div>
                  <div className="font-stat text-[28px] md:text-[32px] text-white">
                    ₹{finalAmount ? finalAmount.toLocaleString("en-IN") : "0"}
                    <span className="font-body text-[14px] text-white/45 font-normal ml-1">
                      {frequency === "monthly" ? t("donate.summarySuffixMonthly") : ""}
                    </span>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 bg-[#ff0008] hover:bg-[#dd0007] text-white text-[15px] font-semibold tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-red-500/30 hover:-translate-y-0.5 active:translate-y-0"
                >
                  {t("donate.submit")} {`₹${finalAmount ? finalAmount.toLocaleString("en-IN") : "0"}`} →
                </button>
              </div>
              <p className="font-body mt-4 text-[11px] text-white/40 text-center">{t("donate.agree")}</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}