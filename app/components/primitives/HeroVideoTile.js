"use client";
import { useRef, useState } from "react";

// Still image with hover-reveal muted video. The still gently scales up
// while fading out, and the video fades in over the top, so the swap
// reads as a single smooth transition rather than a hard cut. On
// un-hover, the video pauses and resets; the still scales back down.
export function HeroVideoTile({ src, alt, videoSrc, tone, className = "" }) {
  const videoRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const onEnter = () => {
    setHovered(true);
    const v = videoRef.current;
    if (v) {
      v.currentTime = 0;
      v.play().catch(() => {});
    }
  };

  const onLeave = () => {
    setHovered(false);
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };

  return (
    <div
      className={className}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{ position: "absolute", inset: 0, overflow: "hidden" }}
    >
      <style>{`
        .hvt-still,
        .hvt-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          will-change: transform, opacity;
          backface-visibility: hidden;
        }
        .hvt-still {
          opacity: 1;
          transform: scale(1);
          transition: opacity 600ms ease, transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .hvt-video {
          opacity: 0;
          transform: scale(1.06);
          transition: opacity 600ms ease, transform 1200ms cubic-bezier(0.22, 1, 0.36, 1);
          background: #0d162a;
        }
        @media (hover: hover) {
          .hvt-wrap:hover .hvt-still {
            opacity: 0;
            transform: scale(1.06);
          }
          .hvt-wrap:hover .hvt-video {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
      <div className="hvt-wrap" style={{ position: "absolute", inset: 0 }}>
        <img
          src={src}
          alt={alt || ""}
          loading="lazy"
          decoding="async"
          className="hvt-still"
        />
        {videoSrc ? (
          <video
            ref={videoRef}
            src={videoSrc}
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="hvt-video"
          />
        ) : null}
      </div>
    </div>
  );
}
