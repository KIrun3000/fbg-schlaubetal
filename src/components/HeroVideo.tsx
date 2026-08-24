"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { images } from "@/lib/images";

// "Drone Footage of a Dense Forest" von James Cheney — Nebelwald bei Sonnenaufgang
// Pexels License (frei für jede Nutzung, keine Namensnennung erforderlich)
// https://www.pexels.com/video/drone-footage-of-a-dense-forest-3177845/
//
// Bewusst lokal abgelegt statt von videos.pexels.com geladen: Ein externer
// Abruf würde die IP-Adresse jedes Besuchers an Pexels übermitteln und der
// Zusicherung in der Datenschutzerklärung widersprechen. Die Datei ist dafür
// auf 720p reduziert (rund 1 MB statt 11 MB) — mehr braucht es nicht, weil das
// Video hinter einem Overlay mit 65 % Deckkraft läuft.
const VIDEO_URL = "/videos/hero-wald-luftaufnahme.mp4";

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
      <div className="absolute inset-0 bg-[#18342a]" />

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

      {/* Desktop: video fades in after poster minimum display time.
          preload="metadata": Das Standbild bleibt ohnehin mindestens fünf
          Sekunden stehen — das Video muss deshalb nicht schon beim Seitenaufbau
          vollständig geladen sein und den Rest der Seite ausbremsen. */}
      {!isMobile && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1500 ${
            showVideo ? "opacity-65" : "opacity-0"
          }`}
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
      )}

      {/* Overlay for text contrast — stronger on the left where copy sits */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#18342a]/75 via-[#18342a]/35 to-[#18342a]/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#18342a]/55 via-[#18342a]/10 to-transparent" />
    </div>
  );
}
