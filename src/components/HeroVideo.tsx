"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { images } from "@/lib/images";

// Free stock video from Pexels (Pexels License — free for all uses)
// "Drone Footage of a Dense Forest" by James Cheney — misty forest at sunrise
// https://www.pexels.com/video/drone-footage-of-a-dense-forest-3177845/
const VIDEO_URL =
  "https://videos.pexels.com/video-files/3177845/3177845-hd_1920_1080_24fps.mp4";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);

    if (mobile) return;

    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => setLoaded(true);
    video.addEventListener("canplay", handleCanPlay);

    return () => video.removeEventListener("canplay", handleCanPlay);
  }, []);

  return (
    <div className="absolute inset-0">
      {/* Fallback dark background */}
      <div className="absolute inset-0 bg-[#1a1f16]" />

      {/* Mobile: static image / Desktop: video */}
      {isMobile ? (
        <Image
          src={images.hero}
          alt="Mischwald"
          fill
          className="object-cover opacity-40"
          priority
        />
      ) : (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1500 ${loaded ? "opacity-50" : "opacity-0"}`}
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
      )}

      {/* Dark neutral overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1f16]/80 via-[#1a1f16]/50 to-[#1a1f16]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f16]/60 via-transparent to-[#1a1f16]/20" />
    </div>
  );
}
