"use client";
export function PhotoPlaceholder({ className = "", tone = "navy", ratio, src, alt }) {
  const T = {
    navy: "from-[#0d162a] to-[#1f3057]",
    cream: "from-[#f3eadb] to-[#e8dcc4]",
    olive: "from-[#3b4a2f] to-[#5b6b48]",
    rust: "from-[#7a3528] to-[#a15442]",
    slate: "from-[#2c3344] to-[#4d566c]",
    sand: "from-[#d8c9a7] to-[#bfa97c]",
  };
  const placeholderClass = `relative w-full bg-gradient-to-br ${T[tone] || T.navy} ${className} overflow-hidden`;
  const imageClass = `w-full h-full ${className} overflow-hidden bg-[#0d162a]`;
  if (src) {
    return (
      <div className={imageClass} style={ratio ? { aspectRatio: ratio } : undefined}>
        <img
          src={src}
          alt={alt || ""}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>
    );
  }
  return <div className={placeholderClass} style={ratio ? { aspectRatio: ratio } : undefined} />;
}