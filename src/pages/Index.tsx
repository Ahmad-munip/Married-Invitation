import { useState } from "react";
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

const Index = () => {
  const [splashOpen, setSplashOpen] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <SplashScreen isOpen={splashOpen} onOpen={() => setSplashOpen(false)} />

      <AnimatePresence>
        {!splashOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            <ScrollProgress />
            <FloatingPetals />
            <HeroSection />

            <div className="divider-gold w-40 mx-auto" />

            <EventDetails />
            <CountdownTimer />

            <div className="divider-gold w-40 mx-auto" />

            <LoveStory />

            <div className="divider-gold w-40 mx-auto" />

            <Gallery />

            <div className="divider-gold w-40 mx-auto" />

            <RSVPSection />
            <DigitalEnvelope />

            <div className="divider-gold w-40 mx-auto" />

            <WishesSection />
            <MapsSection />
            <ClosingSection />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
