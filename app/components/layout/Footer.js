"use client";
import { useT } from "../../lib/i18n";

export function Footer() {
  const t = useT();
  const navItems = [
    { key: "nav.about", anchor: "#about" },
    { key: "nav.programs", anchor: "#programs" },
    { key: "nav.impact", anchor: "#impact" },
    { key: "nav.stories", anchor: "#stories" },
  ];
  const socials = [
    { l: "Facebook", letter: "F" },
    { l: "X", letter: "X" },
    { l: "LinkedIn", letter: "in" },
    { l: "Web", letter: "◎" },
  ];
  return (
    <footer className="bg-[#08101f] text-white" style={{ position: "relative", zIndex: 1 }}>
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10 px-5 md:px-12 py-14 md:py-16">
        <div className="sm:col-span-2 lg:col-span-5">
          <a href="/" className="inline-flex items-center" aria-label="GVK Foundation — Home">
            <img
              src="https://ik.imagekit.io/icuvd8hly/Foundation%20website%20images/GVK%20foundation%20FULL%20LOGO%20LATEST%20png%20(1).png"
              alt="GVK Foundation"
              className="h-10 md:h-12 w-auto"
            />
          </a>
          <p className="font-body mt-4 max-w-sm text-sm leading-7 text-white/55">{t("footer.tagline")}</p>
        </div>
        <div className="lg:col-span-3">
          <div className="text-xs font-bold tracking-[0.18em] uppercase text-white/35 mb-4">{t("footer.quickLinks")}</div>
          <ul className="space-y-3 text-sm">
            {navItems.map((it) => (
              <li key={it.key}>
                <a href={it.anchor} className="text-white/65 hover:text-[#ff0008] transition-colors">{t(it.key)}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-4">
          <div className="text-xs font-bold tracking-[0.18em] uppercase text-white/35 mb-4">{t("footer.contact")}</div>
          <ul className="space-y-3 text-sm text-white/65">
            <li>GVK Brothers Foundation</li>
            <li>{t("footer.address")}</li>
            <li>
              <a href="mailto:contact@gvkfoundation.org" className="hover:text-[#ff0008] transition-colors">{t("footer.emailLabel")}</a>
            </li>
          </ul>
          <div className="mt-6 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.l}
                href="#"
                aria-label={s.l}
                className="grid h-9 w-9 place-items-center rounded-full bg-white/8 text-sm hover:bg-[#ff0008] hover:scale-110 transition-all duration-300 cursor-pointer"
              >
                {s.letter}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/8">
        <div className="mx-auto max-w-[1440px] px-5 md:px-12 py-5 text-xs text-white/35 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} GVK Brothers Foundation. {t("footer.copyright")}</span>
          <span>{t("footer.builtWith")}</span>
        </div>
      </div>
    </footer>
  );
}