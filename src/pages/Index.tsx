import { useState, useRef, useEffect, lazy, Suspense, useCallback } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { getGuestNameFromUrl } from "@/lib/guest";

/* ─── Eager loads: critical above-fold components ─── */
import SplashScreen from "@/components/wedding/SplashScreen";
import HeroSection from "@/components/wedding/HeroSection";
import ScrollProgress from "@/components/wedding/ScrollProgress";
import FloatingPetals from "@/components/wedding/FloatingPetals";
import AnimatedBackdrop from "@/components/wedding/AnimatedBackdrop";
import BottomNav from "@/components/wedding/BottomNav";
import { FloralDivider, FloatingDiamonds } from "@/components/wedding/FloralFrame";
import TwinklingStars from "@/components/wedding/TwinklingStars";
import BokehCircles from "@/components/wedding/BokehCircles";
import VineRoots from "@/components/wedding/VineRoots";
import FloatingLeaves from "@/components/wedding/FloatingLeaves";
import GoldDust from "@/components/wedding/GoldDust";

/* ─── Lazy loads: below-fold sections ─── */
const EventDetails = lazy(() => import("@/components/wedding/EventDetails"));
const CountdownTimer = lazy(() => import("@/components/wedding/CountdownTimer"));
const LoveStory = lazy(() => import("@/components/wedding/LoveStory"));
const Gallery = lazy(() => import("@/components/wedding/Gallery"));
const RSVPSection = lazy(() => import("@/components/wedding/RSVPSection"));
const DigitalEnvelope = lazy(() => import("@/components/wedding/DigitalEnvelope"));
const MapsSection = lazy(() => import("@/components/wedding/MapsSection"));
const ClosingSection = lazy(() => import("@/components/wedding/ClosingSection"));
const VideoSection = lazy(() => import("@/components/wedding/VideoSection"));
const Particles3D = lazy(() => import("@/components/wedding/Particles3D"));

import MUSIC_URL from "@/assets/wedding-music.mp3";

const Index = () => {
  const [splashOpen, setSplashOpen] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isMobile = useIsMobile();
  const guestName = getGuestNameFromUrl();

  const wasPlayingBeforeHideRef = useRef(false);
  const isPlayingRef = useRef(isPlaying);

  // Terus sinkronkan isPlaying ke ref
  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  // Efek mematikan lagu saat ganti tab (Page Visibility API)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!audioRef.current) return;

      if (document.hidden) {
        if (isPlayingRef.current) {
          audioRef.current.pause();
          setIsPlaying(false);
          wasPlayingBeforeHideRef.current = true;
        } else {
          wasPlayingBeforeHideRef.current = false;
        }
      } else {
        if (wasPlayingBeforeHideRef.current) {
          audioRef.current.play()
            .then(() => setIsPlaying(true))
            .catch(() => {});
          wasPlayingBeforeHideRef.current = false;
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const handleOpenInvitation = useCallback(() => {
    setSplashOpen(false);
    if (!audioRef.current) {
      const audio = new Audio(MUSIC_URL);
      audio.loop = true;
      audio.volume = 0.5;
      audioRef.current = audio;
    }
    audioRef.current
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {});

    setTimeout(() => {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }, 100);
  }, []);

  return (
    <div className={`bg-background ${splashOpen ? "h-screen overflow-hidden" : "min-h-screen"} lg:flex lg:items-start`}>
      
      {/* LEFT PANE: Desktop Only Fixed Video Cover */}
      <div className="hidden lg:flex lg:w-[60%] lg:sticky lg:top-0 lg:h-screen lg:flex-col lg:items-center lg:justify-center text-center overflow-hidden">
         <video autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 w-full h-full object-cover">
            <source src="/background.mp4" type="video/mp4" />
         </video>
         <div className="absolute inset-0 bg-black/20" />
         
         <div className="relative z-10 text-white mt-auto pb-32 flex flex-col items-center">
           <p className="font-script text-4xl mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">The Wedding of</p>
           <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-widest mb-4 uppercase drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] leading-tight">
             Ayu <br /> <span className="font-serif text-4xl md:text-5xl opacity-80 block my-1" style={{ WebkitTextFillColor: "initial" }}>{"&"}</span> Nurohim
           </h1>
           <p className="font-sans text-xl tracking-widest font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Rabu, 10 Juni 2026</p>
         </div>
      </div>

      {/* RIGHT PANE (Desktop) / FULL (Mobile) */}
      <div className="w-full lg:w-[40%] relative bg-background border-l border-primary/20 shadow-2xl">
        {/* Batik pattern background layer */}
        <div className="batik-pattern" />
      
      <SplashScreen isOpen={splashOpen} onOpen={handleOpenInvitation} guestName={guestName} />

      <div className="relative z-[2]">
            <ScrollProgress />
            <AnimatedBackdrop />
            <FloatingPetals />
            <FloatingDiamonds />
            {!isMobile && (
              <>
                <TwinklingStars />
                <BokehCircles />
                <VineRoots />
                <FloatingLeaves />
                <GoldDust />
                <Suspense fallback={null}>
                  <Particles3D count={120} speed={0.1} size={0.014} />
                </Suspense>
              </>
            )}
            <HeroSection guestName={guestName} />
            <FloralDivider />
            <Suspense fallback={null}>
              <EventDetails />
            </Suspense>
            <Suspense fallback={null}>
              <CountdownTimer />
            </Suspense>
            <FloralDivider />
            <Suspense fallback={null}>
              <LoveStory />
            </Suspense>
            <FloralDivider />
            <Suspense fallback={null}>
              <Gallery />
            </Suspense>
            <FloralDivider variant="simple" />
            <Suspense fallback={null}>
              <VideoSection />
            </Suspense>
            <FloralDivider />
            <Suspense fallback={null}>
              <RSVPSection guestName={guestName} />
            </Suspense>
            <Suspense fallback={null}>
              <DigitalEnvelope />
            </Suspense>
            <FloralDivider />
            <Suspense fallback={null}>
              <MapsSection />
            </Suspense>
            <Suspense fallback={null}>
              <ClosingSection audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
            </Suspense>
      </div>
      
      {/* Fixed UI Overlays */}
      <BottomNav splashOpen={splashOpen} />
      
      </div>
    </div>
  );
};

export default Index;