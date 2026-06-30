"use client";
export function PillButton({ children, variant = "dark", className = "", onClick, type = "button", as = "button", href }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 md:px-7 md:py-3.5 text-[14px] md:text-[15px] font-medium tracking-wide transition-all duration-300 cursor-pointer select-none";
  const s =
    variant === "red"
      ? "bg-[#ff0008] text-white hover:bg-[#dd0007] hover:shadow-lg hover:shadow-red-500/30 hover:-translate-y-0.5 active:translate-y-0"
      : variant === "outline"
      ? "border border-white/40 text-white hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0"
      : variant === "blue"
      ? "bg-[#2563eb] text-white hover:bg-[#1d4ed8] hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0"
      : "bg-[#0d162a] text-white hover:bg-[#1a2440] hover:-translate-y-0.5 active:translate-y-0";
  const cls = `${base} ${s} ${className}`;
  if (as === "a") {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}