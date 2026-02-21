import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const ClosingSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element - users can replace the src with their own music
    audioRef.current = new Audio();
    audioRef.current.loop = true;
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="font-sans-elegant text-xs tracking-[0.3em] uppercase text-primary/70 mb-6">
              Thank You
            </p>

            <h2 className="font-script text-4xl md:text-5xl gradient-gold-text mb-8 leading-relaxed">
              "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu merasa tenteram kepadanya."
            </h2>

            <p className="font-serif text-sm text-muted-foreground mb-2">— QS. Ar-Rum: 21</p>

            <div className="divider-gold w-20 mx-auto my-10" />

            <motion.p
              className="font-serif text-lg text-foreground/70"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
            </motion.p>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <p className="font-serif text-muted-foreground mb-2">Kami yang berbahagia,</p>
              <p className="font-script text-3xl gradient-gold-text">Ahmad & Sarah</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center border-t border-border/30">
        <p className="font-sans-elegant text-[10px] tracking-widest uppercase text-muted-foreground">
          Made with love • Ahmad & Sarah Wedding 2026
        </p>
      </footer>

      {/* Music Control - Fixed */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full glass-strong flex items-center justify-center glow-gold cursor-pointer transition-transform hover:scale-110"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 text-primary" />
        ) : (
          <VolumeX className="w-5 h-5 text-primary/60" />
        )}
      </button>
    </>
  );
};

export default ClosingSection;
