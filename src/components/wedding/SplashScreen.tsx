import { motion } from "framer-motion";
import { useMemo } from "react";
import { WEDDING_CONFIG } from "@/config/wedding";
import couplePhoto from "@/assets/gallery-1.jpg";

interface SplashScreenProps {
  isOpen: boolean;
  onOpen: () => void;
  guestName?: string;
}

const generateSparkles = (count: number) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 3 + 1.5,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 2,
  }));

const generateSplashPetals = (count: number) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 6,
    duration: Math.random() * 6 + 10,
    size: Math.random() * 8 + 6,
    opacity: Math.random() * 0.25 + 0.15,
  }));

const SplashScreen = ({ isOpen, onOpen, guestName = "Bapak/Ibu/Saudara/i" }: SplashScreenProps) => {
  const sparkles = useMemo(() => generateSparkles(12), []);
  const petals = useMemo(() => generateSplashPetals(5), []);

  return (
    <div className="relative h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden bg-[#FAF6EE] select-none">
      
      {/* Premium Background Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/bg.jpeg" 
          alt="Background Pernikahan" 
          className="absolute inset-0 h-full w-full object-cover select-none pointer-events-none" 
        />
        {/* Soft elegant warm tone overlay, very transparent to keep the background crisp */}
        <div className="absolute inset-0 bg-[#FFFDF9]/10 mix-blend-overlay pointer-events-none" />

        {/* 
          Radial mist/fog overlay positioned exactly below the Javanese wooden house.
          This provides the perfect light, foggy background for the guest information 
          and maroon button to ensure 100% readability while looking like a natural mist 
          rising from the garden path.
        */}
        <div 
          className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-full max-w-[500px] h-[38%] pointer-events-none select-none rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,251,240,0.95) 0%, rgba(255,251,240,0.78) 45%, rgba(255,251,240,0.35) 75%, transparent 100%)",
            filter: "blur(6px)",
            mixBlendMode: "normal",
          }}
        />
      </div>

      {/* Floating Sparkles (Subtle, golden, premium) */}
      {sparkles.map((s) => (
        <motion.div 
          key={`sparkle-${s.id}`} 
          className="absolute rounded-full pointer-events-none z-10"
          style={{ 
            left: `${s.left}%`, 
            top: `${s.top}%`, 
            width: s.size, 
            height: s.size, 
            background: `radial-gradient(circle, hsl(38, 85%, 62%) 0%, transparent 100%)` 
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 0.4, 0], scale: [0, 1.2, 0] }}
          transition={{ duration: s.duration, delay: s.delay, repeat: Infinity, ease: "easeInOut" }} 
        />
      ))}

      {/* Falling Petals (Slow, gentle, low opacity) */}
      {petals.map((p) => (
        <div 
          key={`petal-${p.id}`} 
          className="absolute animate-petal pointer-events-none z-10"
          style={{ 
            left: `${p.left}%`, 
            top: "-5%", 
            width: p.size, 
            height: p.size, 
            borderRadius: "50% 0 50% 0", 
            background: `hsl(15, 60%, 45% / ${p.opacity})`, 
            animationDuration: `${p.duration}s`, 
            animationDelay: `${p.delay}s` 
          }} 
        />
      ))}

      {/* Main Single Column Content Layout - Centered vertically for absolute consistency */}
      <div className="relative z-10 w-full max-w-[480px] h-full flex flex-col justify-center items-center px-6 py-8 text-center my-auto">
        
        {/* TOP SECTION: Elegant Cursive Names (Stacked) */}
        <motion.div
          className="flex flex-col items-center mb-6 sm:mb-8"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <p 
            className="font-sans-elegant text-[9px] sm:text-[10px] md:text-xs tracking-[0.35em] uppercase text-[#7A3E2D]/75 font-semibold mb-4 sm:mb-5"
            style={{
              textShadow: "0 1px 2px rgba(255, 255, 255, 0.9)"
            }}
          >
            The Wedding of
          </p>
          
          <h1 
            className="font-script text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-[#6B2D1C] filter"
            style={{
              textShadow: "0 2px 8px rgba(255, 251, 240, 0.95), 0 1px 3px rgba(255, 251, 240, 0.9)"
            }}
          >
            {WEDDING_CONFIG.bride.shortName}
          </h1>
          
          <span 
            className="font-script text-3xl sm:text-4xl my-1 text-[#7A3E2D]/85 block italic"
            style={{
              textShadow: "0 2px 6px rgba(255, 251, 240, 0.95)"
            }}
          >
            &
          </span>
          
          <h1 
            className="font-script text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-[#6B2D1C] filter"
            style={{
              textShadow: "0 2px 8px rgba(255, 251, 240, 0.95), 0 1px 3px rgba(255, 251, 240, 0.9)"
            }}
          >
            {WEDDING_CONFIG.groom.shortName}
          </h1>
        </motion.div>

        {/* MIDDLE SECTION: Circular Photo Frame with Ornate Gold Border (Perfect Centering) */}
        <motion.div
          className="flex items-center justify-center my-4 relative z-20 min-h-0"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 flex items-center justify-center">
            
            {/* Elegant Golden Ornate SVG Frame - Centered to the Pixel */}
            <svg 
              className="absolute w-[calc(100%+28px)] h-[calc(100%+28px)] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none drop-shadow-[0_3px_8px_rgba(92,33,20,0.25)] z-20" 
              viewBox="0 0 200 200" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer delicate circular gold chain/dots */}
              <circle 
                cx="100" 
                cy="100" 
                r="88" 
                stroke="hsl(38, 70%, 50%)" 
                strokeWidth="1" 
                strokeDasharray="4 4" 
                opacity="0.8"
              />
              {/* Main solid gold ring */}
              <circle 
                cx="100" 
                cy="100" 
                r="83" 
                stroke="url(#goldGradient)" 
                strokeWidth="1.5" 
                opacity="0.9"
              />
              {/* Inner accent ring */}
              <circle 
                cx="100" 
                cy="100" 
                r="78" 
                stroke="hsl(38, 70%, 50%)" 
                strokeWidth="0.75" 
                strokeDasharray="20 4" 
                opacity="0.6"
              />

              {/* Gold Gradient Definition */}
              <defs>
                <linearGradient id="goldGradient" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#D4AF37" />
                  <stop offset="30%" stopColor="#FFDF73" />
                  <stop offset="70%" stopColor="#AA7C11" />
                  <stop offset="100%" stopColor="#FFDF73" />
                </linearGradient>
              </defs>

              {/* Decorative Gold Leaf Flourishes wrapping the circle */}
              {/* Top Right Leaf Cluster */}
              <g transform="translate(160, 40) rotate(45) scale(0.7)">
                <path d="M0,0 Q15,-15 30,-10 Q15,15 0,0" fill="url(#goldGradient)" />
                <path d="M0,0 Q30,0 45,15 Q15,30 0,0" fill="url(#goldGradient)" />
                <path d="M-10,10 Q5,-25 15,-30 Q10,-5 -10,10" fill="url(#goldGradient)" opacity="0.8" />
                <path d="M0,0 Q-15,-15 -30,-10 Q-15,15 0,0" fill="url(#goldGradient)" opacity="0.6" />
                <circle cx="15" cy="-5" r="3" fill="#FFF" />
              </g>

              {/* Bottom Left Leaf Cluster */}
              <g transform="translate(40, 160) rotate(225) scale(0.7)">
                <path d="M0,0 Q15,-15 30,-10 Q15,15 0,0" fill="url(#goldGradient)" />
                <path d="M0,0 Q30,0 45,15 Q15,30 0,0" fill="url(#goldGradient)" />
                <path d="M-10,10 Q5,-25 15,-30 Q10,-5 -10,10" fill="url(#goldGradient)" opacity="0.8" />
                <circle cx="15" cy="-5" r="3" fill="#FFF" />
              </g>

              {/* Top Left Vine Curl */}
              <path d="M35,65 C25,50 30,30 45,35 C55,40 50,55 40,50" stroke="url(#goldGradient)" strokeWidth="1.5" fill="none" />
              <circle cx="45" cy="35" r="2.5" fill="url(#goldGradient)" />

              {/* Bottom Right Vine Curl */}
              <path d="M165,135 C175,150 170,170 155,165 C145,160 150,145 160,150" stroke="url(#goldGradient)" strokeWidth="1.5" fill="none" />
              <circle cx="155" cy="165" r="2.5" fill="url(#goldGradient)" />
            </svg>

            {/* Circular Photo */}
            <div className="w-full h-full rounded-full overflow-hidden shadow-[0_6px_16px_rgba(92,33,20,0.2)] relative z-10">
              <img 
                src={couplePhoto} 
                alt="Foto Ayu & Nurohim" 
                className="w-full h-full object-cover scale-[1.03] hover:scale-[1.08] transition-transform duration-700 ease-out" 
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(92,33,20,0.1)_100%)] mix-blend-multiply" />
              {/* iOS Safari Bounded Overlay White Frame (Guarantees border visibility under dynamic scale transforms) */}
              <div className="absolute inset-0 rounded-full border-[4px] sm:border-[5px] md:border-[6px] border-white pointer-events-none z-20" />
            </div>
            
            {/* Elegant rotating gold stars/glow around the frame - Math Centered */}
            <div className="absolute w-[calc(100%+20px)] h-[calc(100%+20px)] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full border border-[hsl(38,72%,52%)]/15 animate-rotate-slow z-0" style={{ animationDuration: "25s" }} />
            <div className="absolute w-[calc(100%+32px)] h-[calc(100%+32px)] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full border border-dashed border-[hsl(38,72%,52%)]/10 animate-rotate-slow z-0" style={{ animationDuration: "40s", animationDirection: "reverse" }} />
          </div>
        </motion.div>

        {/* BOTTOM SECTION: Guest Info & Maroon Button (Centered in the Mist zone) */}
        <motion.div
          className="flex flex-col items-center mt-6 sm:mt-8 w-full"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        >
          {/* Guest Invitation Info */}
          <div className="mb-5 sm:mb-6 pointer-events-none">
            <p className="font-sans-elegant text-[9px] sm:text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#7A3E2D]/80 font-bold mb-1.5 sm:mb-2">
              Kepada Yth.
            </p>
            <h2 
              className="font-serif text-xl sm:text-2xl font-bold text-[#5C2114] tracking-wide max-w-[280px] sm:max-w-[340px] mx-auto leading-snug"
              style={{
                textShadow: "0 1px 3px rgba(255, 251, 240, 0.95)"
              }}
            >
              {guestName}
            </h2>
          </div>

          {/* Solid Maroon Buka Undangan Button */}
          <motion.button
            onClick={onOpen}
            className="relative bg-[#7C2D12] text-white font-sans-elegant text-[10px] sm:text-xs md:text-sm tracking-[0.2em] uppercase px-10 py-3 sm:py-3.5 rounded-full font-bold shadow-lg shadow-orange-950/20 cursor-pointer overflow-hidden border border-orange-900/30"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#8C3417",
              boxShadow: "0 10px 25px rgba(124, 45, 18, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Subtle light sweep shine animation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-full">
              <motion.div 
                className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", repeatDelay: 2 }}
                style={{ skewX: -20 }}
              />
            </div>
            <span className="relative z-10">Buka Undangan</span>
          </motion.button>
        </motion.div>

      </div>
    </div>
  );
};

export default SplashScreen;
