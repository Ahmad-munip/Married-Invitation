import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import FloralFrame from "./FloralFrame";
import { MandalaRing } from "./FloralFrame";
import { SectionVine, LocalGoldDust } from "./SectionDecorations";
import { useIsMobile } from "@/hooks/use-mobile";

const HERO_VIDEO_URL = "https://cdn.pixabay.com/video/2024/02/23/201643-916048197_large.mp4";

const WordReveal = ({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) => {
  const words = text.split("");
  return (
    <span className={className}>
      {words.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + i * 0.04, ease: "easeOut" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

interface HeroSectionProps {
  guestName?: string;
}

const HeroSection = ({ guestName }: HeroSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.3]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden z-10">
      <FloralFrame positions={["top-left", "top-right", "bottom-left", "bottom-right"]} size="lg" />
      <MandalaRing size={350} className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />
      
      <div className="ambient-glow" style={{ width: 400, height: 400, top: "20%", left: "-10%" }} />
      <div className="ambient-glow" style={{ width: 300, height: 300, bottom: "10%", right: "-5%" }} />
      
      <SectionVine side="left" />
      <SectionVine side="right" />
      <LocalGoldDust count={10} />

      {/* Floating orbs */}
      {[
        { left: "10%", top: "30%", size: 18, delay: 0 },
        { left: "85%", top: "25%", size: 12, delay: 1.5 },
        { left: "70%", top: "65%", size: 15, delay: 3 },
        { left: "20%", top: "70%", size: 10, delay: 2 },
        { left: "50%", top: "15%", size: 14, delay: 4 },
      ].map((orb, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: orb.left, top: orb.top, width: orb.size, height: orb.size,
            background: "radial-gradient(circle, hsl(40 80% 60% / 0.4), transparent)",
            boxShadow: "0 0 15px hsl(40 72% 52% / 0.3)",
          }}
          animate={{ y: [-10, 10, -10], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 5 + i, delay: orb.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Parallax Video/Image Background */}
      <motion.div className="absolute inset-0" style={{ y: bgY, scale: bgScale }}>
        {!isMobile && (
          <video
            autoPlay muted loop playsInline preload="metadata"
            poster={heroBg}
            className="h-full w-full object-cover"
            onError={(e) => { (e.target as HTMLVideoElement).style.display = "none"; }}
          >
            <source src={HERO_VIDEO_URL} type="video/mp4" />
          </video>
        )}
        <img src={heroBg} alt="Hero background" className="absolute inset-0 h-full w-full object-cover -z-10" />
        <div className="absolute inset-0 bg-background/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
      </motion.div>

      {/* Content with parallax */}
      <motion.div className="relative z-10 text-center px-6" style={{ y: contentY }}>
        <motion.p
          className="font-sans-elegant text-xs tracking-[0.4em] uppercase text-primary/80 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          We Are Getting Married
        </motion.p>

        <h1 className="font-script text-4xl sm:text-5xl md:text-8xl lg:text-9xl gradient-gold-text text-glow-gold mb-4 whitespace-nowrap">
          <WordReveal text="Ahmad Munip" delay={0.3} />
        </h1>

        <motion.div
          className="flex items-center justify-center gap-6 mb-4"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="divider-gold w-20" />
          <motion.span
            className="font-script text-3xl text-primary"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            &
          </motion.span>
          <div className="divider-gold w-20" />
        </motion.div>

        <h1 className="font-script text-4xl sm:text-5xl md:text-8xl lg:text-9xl gradient-gold-text text-glow-gold mb-8 whitespace-nowrap">
          <WordReveal text="Risma Mawlina" delay={0.6} />
        </h1>

        <motion.p
          className="font-serif text-lg md:text-xl text-foreground/70 tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
        >
          15 . 06 . 2026
        </motion.p>

        {guestName && (
          <motion.div
            className="mt-8 inline-flex flex-col items-center rounded-full border border-primary/25 bg-background/35 px-6 py-3 backdrop-blur-md"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.35 }}
          >
            <span className="font-sans-elegant text-[10px] uppercase tracking-[0.28em] text-primary/70">Kepada Yth.</span>
            <span className="font-serif text-lg text-foreground/90">{guestName}</span>
          </motion.div>
        )}

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary/40 flex justify-center pt-2">
            <motion.div
              className="w-1 h-2 rounded-full bg-primary/60"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
