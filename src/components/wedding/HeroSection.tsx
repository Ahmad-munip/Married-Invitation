import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Hero background"
          className="h-full w-full object-cover scale-110"
          style={{ transform: "scale(1.1)" }}
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.p
          className="font-sans-elegant text-xs tracking-[0.4em] uppercase text-primary/80 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          We Are Getting Married
        </motion.p>

        <motion.h1
          className="font-script text-6xl md:text-8xl lg:text-9xl gradient-gold-text text-glow-gold mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Ahmad
        </motion.h1>

        <motion.div
          className="flex items-center justify-center gap-6 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="divider-gold w-20" />
          <span className="font-script text-3xl text-primary">&</span>
          <div className="divider-gold w-20" />
        </motion.div>

        <motion.h1
          className="font-script text-6xl md:text-8xl lg:text-9xl gradient-gold-text text-glow-gold mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Sarah
        </motion.h1>

        <motion.p
          className="font-serif text-lg md:text-xl text-foreground/70 tracking-wide"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
        >
          15 . 06 . 2026
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary/40 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-primary/60" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
