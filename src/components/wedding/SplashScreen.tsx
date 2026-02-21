import { motion, AnimatePresence } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

interface SplashScreenProps {
  isOpen: boolean;
  onOpen: () => void;
  guestName?: string;
}

const SplashScreen = ({ isOpen, onOpen, guestName = "Bapak/Ibu/Saudara/i" }: SplashScreenProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src={heroBg}
              alt="Wedding background"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-background/70" />
          </div>

          {/* Content */}
          <motion.div
            className="relative z-10 text-center px-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.p
              className="font-sans-elegant text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              The Wedding of
            </motion.p>

            <motion.h1
              className="font-script text-5xl md:text-7xl gradient-gold-text text-glow-gold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Ahmad & Sarah
            </motion.h1>

            <div className="divider-gold w-40 mx-auto mb-8" />

            <motion.p
              className="font-serif text-lg text-foreground/80 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              Kepada Yth.
            </motion.p>
            <motion.p
              className="font-serif text-xl text-foreground mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              {guestName}
            </motion.p>

            <motion.button
              onClick={onOpen}
              className="relative gradient-gold font-sans-elegant text-sm tracking-widest uppercase px-10 py-4 rounded-full text-primary-foreground animate-pulse-glow cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Buka Undangan
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
