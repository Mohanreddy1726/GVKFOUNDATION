"use client";
export function PillCard({ label }) {
  return (
    <div className="flex items-center gap-3 rounded-full bg-white px-4 py-2.5 shadow-md border border-black/5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
      <span className="grid h-6 w-6 place-items-center rounded-full bg-[#ff0008]/10 text-[#ff0008]">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4Z" />
        </svg>
      </span>
      <span className="text-sm font-medium text-[#0d162a]">{label}</span>
    </div>
  );
}