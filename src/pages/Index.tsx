import { useState, useRef, lazy, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SplashScreen from "@/components/wedding/SplashScreen";
import HeroSection from "@/components/wedding/HeroSection";
import FloatingPetals from "@/components/wedding/FloatingPetals";
import ScrollProgress from "@/components/wedding/ScrollProgress";
import EventDetails from "@/components/wedding/EventDetails";
import CountdownTimer from "@/components/wedding/CountdownTimer";
import LoveStory from "@/components/wedding/LoveStory";
import Gallery from "@/components/wedding/Gallery";
import RSVPSection from "@/components/wedding/RSVPSection";
import DigitalEnvelope from "@/components/wedding/DigitalEnvelope";
import WishesSection from "@/components/wedding/WishesSection";
import MapsSection from "@/components/wedding/MapsSection";
import ClosingSection from "@/components/wedding/ClosingSection";
import { FloralDivider, FloatingDiamonds } from "@/components/wedding/FloralFrame";
import TwinklingStars from "@/components/wedding/TwinklingStars";
import BokehCircles from "@/components/wedding/BokehCircles";
import VineRoots from "@/components/wedding/VineRoots";
import FloatingLeaves from "@/components/wedding/FloatingLeaves";
import GoldDust from "@/components/wedding/GoldDust";

const Particles3D = lazy(() => import("@/components/wedding/Particles3D"));

const MUSIC_URL = "https://cdn.pixabay.com/audio/2024/11/29/audio_f0c53efea1.mp3";

const Index = () => {
  const [splashOpen, setSplashOpen] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleOpenInvitation = () => {
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
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Batik pattern background layer */}
      <div className="batik-pattern" />
      
      <SplashScreen isOpen={splashOpen} onOpen={handleOpenInvitation} />

      <AnimatePresence>
        {!splashOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.3 }} className="relative z-[2]">
            <ScrollProgress />
            <FloatingPetals />
            <FloatingDiamonds />
            <TwinklingStars />
            <BokehCircles />
            <VineRoots />
            <FloatingLeaves />
            <GoldDust />
            <Suspense fallback={null}>
              <Particles3D count={250} speed={0.12} size={0.015} />
            </Suspense>
            <HeroSection />
            <FloralDivider />
            <EventDetails />
            <CountdownTimer />
            <FloralDivider />
            <LoveStory />
            <FloralDivider />
            <Gallery />
            <FloralDivider />
            <RSVPSection />
            <DigitalEnvelope />
            <FloralDivider />
            <WishesSection />
            <MapsSection />
            <ClosingSection audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;