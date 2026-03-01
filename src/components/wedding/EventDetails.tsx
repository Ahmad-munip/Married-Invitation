import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Heart, Star } from "lucide-react";
import FloralFrame from "./FloralFrame";
import { SectionVine, LocalGoldDust } from "./SectionDecorations";

const events = [
  {
    title: "Akad Nikah",
    date: "Senin, 15 Juni 2026",
    time: "08:00 - 10:00 WIB",
    venue: "Masjid Al-Ikhlas",
    address: "Jl. Kebahagiaan No. 1, Jakarta",
    icon: Star,
    patternType: "geometric" as const,
  },
  {
    title: "Resepsi",
    date: "Senin, 15 Juni 2026",
    time: "11:00 - 14:00 WIB",
    venue: "The Grand Ballroom",
    address: "Jl. Cinta Abadi No. 88, Jakarta",
    icon: Heart,
    patternType: "floral" as const,
  },
];

const geometricPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23c9a84c' stroke-width='0.4' opacity='0.3'%3E%3Cpolygon points='30,5 55,17.5 55,42.5 30,55 5,42.5 5,17.5'/%3E%3Cpolygon points='30,15 45,22.5 45,37.5 30,45 15,37.5 15,22.5'/%3E%3Cline x1='30' y1='5' x2='30' y2='15'/%3E%3Cline x1='55' y1='17.5' x2='45' y2='22.5'/%3E%3Cline x1='55' y1='42.5' x2='45' y2='37.5'/%3E%3Cline x1='30' y1='55' x2='30' y2='45'/%3E%3Cline x1='5' y1='42.5' x2='15' y2='37.5'/%3E%3Cline x1='5' y1='17.5' x2='15' y2='22.5'/%3E%3C/g%3E%3C/svg%3E")`;

const floralPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23c9a84c' stroke-width='0.4' opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='8'/%3E%3Cellipse cx='30' cy='18' rx='4' ry='7'/%3E%3Cellipse cx='30' cy='42' rx='4' ry='7'/%3E%3Cellipse cx='18' cy='30' rx='7' ry='4'/%3E%3Cellipse cx='42' cy='30' rx='7' ry='4'/%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3C/g%3E%3C/svg%3E")`;

const CornerOrnament = ({ position }: { position: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) => {
  const transforms: Record<string, string> = {
    "top-left": "",
    "top-right": "scaleX(-1)",
    "bottom-left": "scaleY(-1)",
    "bottom-right": "scale(-1,-1)",
  };
  const positions: Record<string, string> = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  };

  return (
    <svg
      className={`absolute ${positions[position]} w-12 h-12 pointer-events-none card-corner-ornament`}
      viewBox="0 0 50 50"
      style={{ transform: transforms[position] }}
    >
      <path d="M0,0 Q0,20 10,25 Q0,20 0,0Z" fill="hsl(40 72% 52% / 0.25)" />
      <path d="M0,0 C5,8 8,15 10,25" stroke="hsl(40 72% 52% / 0.4)" strokeWidth="0.8" fill="none" />
      <path d="M0,0 C8,5 15,8 25,10" stroke="hsl(40 72% 52% / 0.4)" strokeWidth="0.8" fill="none" />
      <circle cx="12" cy="12" r="1.5" fill="hsl(40 72% 52% / 0.3)" />
      <path d="M3,3 Q8,3 10,8" stroke="hsl(40 72% 52% / 0.2)" strokeWidth="0.5" fill="none" />
    </svg>
  );
};

const FloralDividerSmall = () => (
  <div className="flex items-center justify-center gap-2 my-4 pointer-events-none">
    <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary/30" />
    <svg width="20" height="12" viewBox="0 0 20 12" className="text-primary/40">
      <path d="M10,1 Q7,6 2,6 Q7,6 10,11 Q13,6 18,6 Q13,6 10,1Z" fill="currentColor" />
      <circle cx="10" cy="6" r="1.5" fill="hsl(40 72% 52% / 0.5)" />
    </svg>
    <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary/30" />
  </div>
);

const IconWithRing = ({ icon: Icon }: { icon: typeof Calendar }) => (
  <div className="relative inline-flex items-center justify-center">
    <div className="absolute w-8 h-8 rounded-full border border-primary/20 icon-pulse-ring" />
    <div className="absolute w-10 h-10 rounded-full border border-primary/10 icon-pulse-ring" style={{ animationDelay: "0.5s" }} />
    <Icon className="w-4 h-4 text-primary relative z-10" />
  </div>
);

const EventCard = ({ event, index }: { event: typeof events[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, shineX: 50, shineY: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({
      x: (y - 0.5) * -12,
      y: (x - 0.5) * 12,
      shineX: x * 100,
      shineY: y * 100,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0, shineX: 50, shineY: 50 });
    setIsHovered(false);
  }, []);

  const RibbonIcon = event.icon;
  const pattern = event.patternType === "geometric" ? geometricPattern : floralPattern;

  const parallaxOffset = { x: tilt.y * 0.3, y: tilt.x * 0.3 };

  return (
    <motion.div
      ref={cardRef}
      className="relative group cursor-default"
      custom={index}
      initial={{ opacity: 0, scale: 0.85, rotateY: -8 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.25, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className="glass-strong rounded-2xl p-8 text-center relative overflow-hidden transition-shadow duration-300"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: isHovered ? "transform 0.1s ease-out" : "transform 0.4s ease-out",
          boxShadow: isHovered
            ? `${-tilt.y * 1.5}px ${tilt.x * 1.5}px 40px hsl(40 72% 52% / 0.15), 0 0 30px hsl(40 72% 52% / 0.08)`
            : "0 4px 20px hsl(0 0% 0% / 0.2)",
          borderImage: isHovered
            ? "linear-gradient(135deg, hsl(40 90% 65% / 0.5), hsl(40 72% 52% / 0.2), hsl(40 90% 65% / 0.5)) 1"
            : undefined,
          border: isHovered ? "1px solid transparent" : undefined,
        }}
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{ backgroundImage: pattern, backgroundSize: "60px 60px" }}
        />

        {/* Shine sweep following mouse */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${tilt.shineX}% ${tilt.shineY}%, hsl(40 90% 65% / 0.12), transparent 60%)`,
          }}
        />

        {/* Corner ornaments */}
        <CornerOrnament position="top-left" />
        <CornerOrnament position="top-right" />
        <CornerOrnament position="bottom-left" />
        <CornerOrnament position="bottom-right" />

        {/* Ribbon icon */}
        <div
          className="flex justify-center mb-3 pointer-events-none"
          style={{
            transform: `translate(${-parallaxOffset.x}px, ${-parallaxOffset.y}px)`,
          }}
        >
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/5">
            <RibbonIcon className="w-3 h-3 text-primary/60" />
            <span className="font-sans-elegant text-[10px] tracking-[0.2em] uppercase text-primary/60">
              {event.patternType === "geometric" ? "Holy Ceremony" : "Celebration"}
            </span>
            <RibbonIcon className="w-3 h-3 text-primary/60" />
          </div>
        </div>

        {/* Title with parallax */}
        <h3
          className="font-script text-3xl text-primary mb-5"
          style={{
            transform: `translate(${-parallaxOffset.x * 1.5}px, ${-parallaxOffset.y * 1.5}px)`,
          }}
        >
          {event.title}
        </h3>

        <motion.div
          className="space-y-3 text-foreground/80"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1, delayChildren: index * 0.25 + 0.3 } },
          }}
        >
          <motion.div
            className="flex items-center justify-center gap-3"
            variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
            style={{ transform: `translate(${parallaxOffset.x * 0.5}px, ${parallaxOffset.y * 0.5}px)` }}
          >
            <IconWithRing icon={Calendar} />
            <span className="font-serif text-lg">{event.date}</span>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-3"
            variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
            style={{ transform: `translate(${parallaxOffset.x * 0.5}px, ${parallaxOffset.y * 0.5}px)` }}
          >
            <IconWithRing icon={Clock} />
            <span className="font-serif text-lg">{event.time}</span>
          </motion.div>

          <FloralDividerSmall />

          <motion.div
            className="flex items-center justify-center gap-3"
            variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
            style={{ transform: `translate(${parallaxOffset.x * 0.5}px, ${parallaxOffset.y * 0.5}px)` }}
          >
            <IconWithRing icon={MapPin} />
            <span className="font-serif text-lg font-semibold">{event.venue}</span>
          </motion.div>

          <motion.p
            className="font-sans-elegant text-sm text-muted-foreground"
            variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
          >
            {event.address}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const EventDetails = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden z-10">
      <FloralFrame positions={["top-left", "top-right"]} size="sm" />
      <FloralFrame positions={["bottom-left", "bottom-right"]} size="sm" />
      <SectionVine side="left" />
      <SectionVine side="right" />
      <LocalGoldDust count={8} />

      {Array.from({ length: 12 }).map((_, i) => (
        <div key={`star-${i}`} className="absolute rounded-full pointer-events-none"
          style={{ left: `${10 + Math.random() * 80}%`, top: `${10 + Math.random() * 80}%`, width: 2, height: 2, background: "hsl(40 80% 70%)", animation: `twinkle ${2 + Math.random() * 3}s ${Math.random() * 4}s ease-in-out infinite` }} />
      ))}

      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-sans-elegant text-xs tracking-[0.3em] uppercase text-primary/70 mb-3">Save The Date</p>
          <h2 className="font-script text-5xl md:text-6xl gradient-gold-text mb-4">Waktu & Tempat</h2>
          <div className="divider-gold w-32 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, i) => (
            <EventCard key={event.title} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
