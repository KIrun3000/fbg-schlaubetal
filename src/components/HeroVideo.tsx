"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { images } from "@/lib/images";

// Free stock video from Pexels (Pexels License — free for all uses)
// "Drone Footage of a Dense Forest" by James Cheney — misty forest at sunrise
// https://www.pexels.com/video/drone-footage-of-a-dense-forest-3177845/
const VIDEO_URL =
  "https://videos.pexels.com/video-files/3177845/3177845-hd_1920_1080_24fps.mp4";

const POSTER_MIN_MS = 5000;

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mountTimeRef = useRef<number | null>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    mountTimeRef.current = Date.now();
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);

    if (mobile) return;

    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => setVideoReady(true);
    video.addEventListener("canplay", handleCanPlay);

    return () => video.removeEventListener("canplay", handleCanPlay);
  }, []);

  useEffect(() => {
    if (isMobile || !videoReady) return;

    const elapsed = Date.now() - (mountTimeRef.current ?? Date.now());
    const remaining = Math.max(0, POSTER_MIN_MS - elapsed);

    const timeoutId = window.setTimeout(() => {
      setShowVideo(true);
    }, remaining);

    return () => window.clearTimeout(timeoutId);
  }, [isMobile, videoReady]);

  return (
    <div className="absolute inset-0">
      {/* Fallback dark background */}
      <div className="absolute inset-0 bg-[#1a1f16]" />

      {/* Poster image — always visible on mobile; crossfades out on desktop */}
      <Image
        src={images.hero}
        alt="Panorama-Luftbild eines lebendigen Mischwalds mit blühenden Bäumen im Schlaubetal"
        fill
        className={`object-cover transition-opacity duration-1500 ${
          isMobile || !showVideo ? "opacity-55" : "opacity-0"
        }`}
        priority
        sizes="100vw"
      />

      {/* Desktop: video fades in after poster minimum display time */}
      {!isMobile && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1500 ${
            showVideo ? "opacity-65" : "opacity-0"
          }`}
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
      )}

      {/* Overlay for text contrast — stronger on the left where copy sits */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1f16]/75 via-[#1a1f16]/35 to-[#1a1f16]/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f16]/55 via-[#1a1f16]/10 to-transparent" />
    </div>
  );
}
