import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { Calendar as CalendarIcon, Clock, MapPin, Heart, Star, Sparkles, CalendarPlus } from "lucide-react";
import FloralFrame from "./FloralFrame";
import MagneticButton from "./MagneticButton";
import { SectionVine, LocalGoldDust } from "./SectionDecorations";
import { WEDDING_CONFIG } from "@/config/wedding";

const events = [
  {
    title: "Akad Nikah",
    date: WEDDING_CONFIG.dates.dayDate,
    time: WEDDING_CONFIG.venues.akad.time,
    venue: WEDDING_CONFIG.venues.akad.place,
    address: WEDDING_CONFIG.venues.akad.address,
    label: "Holy Ceremony",
    icon: Star,
    calendarData: {
      text: `Akad Nikah ${WEDDING_CONFIG.bride.shortName} & ${WEDDING_CONFIG.groom.shortName}`,
      dates: WEDDING_CONFIG.dates.googleCalendarAkad,
      details: `Acara Akad Nikah ${WEDDING_CONFIG.bride.shortName} & ${WEDDING_CONFIG.groom.shortName}`,
      location: WEDDING_CONFIG.venues.akad.address,
    }
  },
  {
    title: "Resepsi",
    date: WEDDING_CONFIG.dates.dayDate,
    time: WEDDING_CONFIG.venues.resepsi.time,
    venue: WEDDING_CONFIG.venues.resepsi.place,
    address: WEDDING_CONFIG.venues.resepsi.address,
    label: "Celebration",
    icon: Heart,
    calendarData: {
      text: `Resepsi Pernikahan ${WEDDING_CONFIG.bride.shortName} & ${WEDDING_CONFIG.groom.shortName}`,
      dates: WEDDING_CONFIG.dates.googleCalendarResepsi,
      details: `Acara Resepsi Pernikahan ${WEDDING_CONFIG.bride.shortName} & ${WEDDING_CONFIG.groom.shortName}`,
      location: WEDDING_CONFIG.venues.resepsi.address,
    }
  },
];

const hexPattern = `url("data:image/svg+xml,%3Csvg width='56' height='100' viewBox='0 0 56 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M28 66L0 50L0 16L28 0L56 16L56 50L28 66' fill='none' stroke='%23b89a5a' stroke-width='0.4' opacity='0.12'/%3E%3Cpath d='M28 100L0 84L0 50L28 34L56 50L56 84L28 100' fill='none' stroke='%23b89a5a' stroke-width='0.4' opacity='0.12'/%3E%3C/svg%3E")`;

/* ─── Ornate corner with flourish curves + leaf + dots ─── */
const OrnateCorner = ({ position }: { position: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) => {
  const t: Record<string, string> = {
    "top-left": "", "top-right": "scaleX(-1)",
    "bottom-left": "scaleY(-1)", "bottom-right": "scale(-1,-1)",
  };
  const p: Record<string, string> = {
    "top-left": "top-2 left-2", "top-right": "top-2 right-2",
    "bottom-left": "bottom-2 left-2", "bottom-right": "bottom-2 right-2",
  };
  return (
    <svg className={`absolute ${p[position]} w-16 h-16 pointer-events-none`} viewBox="0 0 64 64" style={{ transform: t[position] }}>
      {/* L-bracket */}
      <path d="M3,3 L3,26" stroke="hsl(38 55% 52%)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M3,3 L26,3" stroke="hsl(38 55% 52%)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Inner parallel */}
      <path d="M7,7 L7,20" stroke="hsl(38 55% 52% / 0.35)" strokeWidth="0.6" fill="none" />
      <path d="M7,7 L20,7" stroke="hsl(38 55% 52% / 0.35)" strokeWidth="0.6" fill="none" />
      {/* Flourish curl from corner */}
      <path d="M3,26 C3,32 8,38 16,36 C10,36 6,32 6,26" stroke="hsl(38 55% 52% / 0.5)" strokeWidth="0.8" fill="hsl(38 55% 52% / 0.06)" />
      <path d="M26,3 C32,3 38,8 36,16 C36,10 32,6 26,6" stroke="hsl(38 55% 52% / 0.5)" strokeWidth="0.8" fill="hsl(38 55% 52% / 0.06)" />
      {/* Leaf shapes */}
      <ellipse cx="22" cy="10" rx="6" ry="2.5" fill="hsl(38 55% 52% / 0.08)" stroke="hsl(38 55% 52% / 0.2)" strokeWidth="0.4" transform="rotate(30 22 10)" />
      <ellipse cx="10" cy="22" rx="2.5" ry="6" fill="hsl(38 55% 52% / 0.08)" stroke="hsl(38 55% 52% / 0.2)" strokeWidth="0.4" transform="rotate(-30 10 22)" />
      {/* Decorative dots */}
      <circle cx="3" cy="3" r="2" fill="hsl(38 55% 52% / 0.6)" />
      <circle cx="26" cy="3" r="1" fill="hsl(38 55% 52% / 0.35)" />
      <circle cx="3" cy="26" r="1" fill="hsl(38 55% 52% / 0.35)" />
      <circle cx="14" cy="14" r="1.2" fill="hsl(38 55% 52% / 0.2)" />
      <circle cx="30" cy="6" r="0.6" fill="hsl(38 55% 52% / 0.18)" />
      <circle cx="6" cy="30" r="0.6" fill="hsl(38 55% 52% / 0.18)" />
      {/* Tiny sparkle cross */}
      <g transform="translate(18,18)" opacity="0.25">
        <line x1="-2" y1="0" x2="2" y2="0" stroke="hsl(38 55% 52%)" strokeWidth="0.5" />
        <line x1="0" y1="-2" x2="0" y2="2" stroke="hsl(38 55% 52%)" strokeWidth="0.5" />
      </g>
    </svg>
  );
};

/* ─── Rosette medallion ─── */
const Rosette = () => (
  <div className="flex justify-center mb-3 pointer-events-none">
    <svg width="50" height="50" viewBox="0 0 50 50">
      <circle cx="25" cy="25" r="22" fill="none" stroke="hsl(38 55% 52% / 0.12)" strokeWidth="0.5" />
      <circle cx="25" cy="25" r="17" fill="none" stroke="hsl(38 55% 52% / 0.1)" strokeWidth="0.4" strokeDasharray="2 3" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <line key={a} x1="25" y1="25"
          x2={25 + 15 * Math.cos((a * Math.PI) / 180)}
          y2={25 + 15 * Math.sin((a * Math.PI) / 180)}
          stroke="hsl(38 55% 52% / 0.08)" strokeWidth="0.4" />
      ))}
      <circle cx="25" cy="25" r="5" fill="hsl(38 55% 52% / 0.06)" stroke="hsl(38 55% 52% / 0.15)" strokeWidth="0.5" />
      <circle cx="25" cy="25" r="2" fill="hsl(38 55% 52% / 0.2)" />
      {/* Petal shapes */}
      {[0, 90, 180, 270].map((a) => (
        <ellipse key={`p${a}`} cx={25 + 10 * Math.cos((a * Math.PI) / 180)} cy={25 + 10 * Math.sin((a * Math.PI) / 180)}
          rx="3" ry="1.5" fill="hsl(38 55% 52% / 0.06)" stroke="hsl(38 55% 52% / 0.1)" strokeWidth="0.3"
          transform={`rotate(${a} ${25 + 10 * Math.cos((a * Math.PI) / 180)} ${25 + 10 * Math.sin((a * Math.PI) / 180)})`} />
      ))}
    </svg>
  </div>
);

/* ─── Dotted arc decorations ─── */
const DottedArcs = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <svg className="absolute w-full h-full" viewBox="0 0 300 500" preserveAspectRatio="none">
      <path d="M-20,80 Q150,20 320,80" fill="none" stroke="hsl(38 55% 52% / 0.08)" strokeWidth="1" strokeDasharray="3 6" />
      <path d="M-20,420 Q150,480 320,420" fill="none" stroke="hsl(38 55% 52% / 0.08)" strokeWidth="1" strokeDasharray="3 6" />
      <path d="M40,-10 Q5,250 40,510" fill="none" stroke="hsl(38 55% 52% / 0.05)" strokeWidth="0.8" strokeDasharray="2 8" />
      <path d="M260,-10 Q295,250 260,510" fill="none" stroke="hsl(38 55% 52% / 0.05)" strokeWidth="0.8" strokeDasharray="2 8" />
      {/* Extra diagonal arcs */}
      <path d="M-10,200 Q80,160 150,200" fill="none" stroke="hsl(38 55% 52% / 0.04)" strokeWidth="0.6" strokeDasharray="2 5" />
      <path d="M150,300 Q220,340 310,300" fill="none" stroke="hsl(38 55% 52% / 0.04)" strokeWidth="0.6" strokeDasharray="2 5" />
    </svg>
  </div>
);

/* ─── Floating mini hearts & sparkles ─── */
const FloatingOrnaments = () => {
  const items = [
    { left: "8%", top: "12%", size: 9, delay: 0, type: "heart" },
    { left: "88%", top: "18%", size: 7, delay: 1.2, type: "sparkle" },
    { left: "15%", top: "78%", size: 8, delay: 2.4, type: "heart" },
    { left: "82%", top: "82%", size: 6, delay: 0.8, type: "sparkle" },
    { left: "50%", top: "8%", size: 7, delay: 1.8, type: "heart" },
    { left: "92%", top: "50%", size: 8, delay: 3.2, type: "sparkle" },
    { left: "6%", top: "45%", size: 6, delay: 2, type: "diamond" },
    { left: "45%", top: "90%", size: 7, delay: 1, type: "diamond" },
  ];
  return (
    <>
      {items.map((item, i) => (
        <div key={i} className="absolute pointer-events-none animate-mini-float"
          style={{ left: item.left, top: item.top, animationDelay: `${item.delay}s` }}>
          {item.type === "heart" ? (
            <Heart className="text-[hsl(38_55%_52%)] opacity-15" style={{ width: item.size, height: item.size }} fill="currentColor" />
          ) : item.type === "sparkle" ? (
            <Sparkles className="text-[hsl(38_55%_52%)] opacity-15" style={{ width: item.size, height: item.size }} />
          ) : (
            <div style={{ width: item.size, height: item.size, background: "hsl(38 55% 52% / 0.12)", transform: "rotate(45deg)" }} />
          )}
        </div>
      ))}
    </>
  );
};

/* ─── Floating diamonds around the card ─── */
const FloatingDiamonds = () => (
  <>
    {[
      { left: "5%", top: "25%", size: 6, dur: 6, delay: 0 },
      { left: "90%", top: "35%", size: 5, dur: 7, delay: 1 },
      { left: "8%", top: "70%", size: 5, dur: 5, delay: 2 },
      { left: "85%", top: "75%", size: 7, dur: 8, delay: 0.5 },
      { left: "50%", top: "5%", size: 4, dur: 6, delay: 3 },
      { left: "50%", top: "95%", size: 4, dur: 5, delay: 1.5 },
    ].map((d, i) => (
      <div key={`dia-${i}`} className="absolute animate-float-diamond pointer-events-none"
        style={{ left: d.left, top: d.top, width: d.size, height: d.size, background: "hsl(38 55% 52% / 0.25)", animationDuration: `${d.dur}s`, animationDelay: `${d.delay}s` }} />
    ))}
  </>
);

/* ─── Swag garland at bottom ─── */
const SwagGarland = () => (
  <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
    <svg width="100%" height="30" viewBox="0 0 300 30" preserveAspectRatio="none">
      <path d="M0,5 Q37.5,22 75,5 Q112.5,22 150,5 Q187.5,22 225,5 Q262.5,22 300,5" fill="none" stroke="hsl(38 55% 52% / 0.15)" strokeWidth="0.8" />
      <path d="M0,8 Q37.5,25 75,8 Q112.5,25 150,8 Q187.5,25 225,8 Q262.5,25 300,8" fill="none" stroke="hsl(38 55% 52% / 0.08)" strokeWidth="0.5" />
      {[37.5, 112.5, 187.5, 262.5].map((x) => (
        <g key={x}>
          <line x1={x} y1="22" x2={x} y2="28" stroke="hsl(38 55% 52% / 0.12)" strokeWidth="0.5" />
          <circle cx={x} cy="28" r="1.5" fill="hsl(38 55% 52% / 0.15)" />
        </g>
      ))}
    </svg>
  </div>
);

/* ─── Delicate Icon ─── */
const EventIcon = ({ icon: Icon }: { icon: typeof CalendarIcon }) => (
  <div className="relative inline-flex items-center justify-center flex-shrink-0">
    <div className="w-10 h-10 rounded-full flex items-center justify-center border border-[hsl(38_55%_52%_/_0.3)] shadow-[inset_0_0_10px_hsl(38_55%_52%_/_0.1)]" style={{ background: "hsl(38 50% 85% / 0.4)" }}>
      <Icon className="w-4 h-4 text-[hsl(30_40%_35%)]" />
    </div>
  </div>
);

/* ─── Filigree divider ─── */
const FiligreeDivider = () => (
  <div className="flex items-center justify-center gap-2 my-5 pointer-events-none">
    <div className="h-px w-14 bg-gradient-to-r from-transparent to-[hsl(38_55%_52%_/_0.4)]" />
    <svg width="28" height="14" viewBox="0 0 28 14">
      <path d="M14,1 Q10,7 3,7 Q10,7 14,13 Q18,7 25,7 Q18,7 14,1Z" fill="hsl(38 55% 52% / 0.15)" stroke="hsl(38 55% 52% / 0.3)" strokeWidth="0.5" />
      <circle cx="14" cy="7" r="1.8" fill="hsl(38 55% 52% / 0.3)" />
      <circle cx="6" cy="7" r="0.6" fill="hsl(38 55% 52% / 0.2)" />
      <circle cx="22" cy="7" r="0.6" fill="hsl(38 55% 52% / 0.2)" />
    </svg>
    <div className="h-px w-14 bg-gradient-to-l from-transparent to-[hsl(38_55%_52%_/_0.4)]" />
  </div>
);

/* ─── Top filigree line ─── */
const TopFiligree = () => (
  <div className="flex items-center justify-center gap-2 mb-2 pointer-events-none">
    <div className="h-px w-16 bg-gradient-to-r from-transparent to-[hsl(38_55%_52%_/_0.3)]" />
    <svg width="30" height="10" viewBox="0 0 30 10">
      <path d="M0,5 Q7.5,0 15,5 Q22.5,10 30,5" stroke="hsl(38 55% 52% / 0.3)" strokeWidth="0.7" fill="none" />
      <circle cx="15" cy="5" r="1.2" fill="hsl(38 55% 52% / 0.25)" />
    </svg>
    <div className="h-px w-16 bg-gradient-to-l from-transparent to-[hsl(38_55%_52%_/_0.3)]" />
  </div>
);

/* ─── Wax Seal Ornament ─── */
const WaxSeal = () => (
  <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none drop-shadow-md">
    <div className="relative w-14 h-14 flex items-center justify-center">
      {/* Irregular wax shape */}
      <svg className="absolute inset-0 w-full h-full text-[hsl(30_70%_35%)] drop-shadow-sm" viewBox="0 0 100 100">
        <path fill="currentColor" d="M45.5 5.5C58 4.5 71 10 79 20C87.5 30.5 91.5 45.5 89 58.5C86.5 71 78.5 81.5 67 87.5C55 93.5 40 94.5 28.5 89C16.5 83.5 7.5 72 4 59C0.5 45.5 3 31 11 20C18.5 9.5 32.5 6.5 45.5 5.5Z" />
        <path fill="url(#wax-gradient)" d="M46.5 7.5C58 6.5 70 12 77.5 21.5C85.5 31.5 89.5 45.5 87 58C84.5 70 76.5 80 65.5 85.5C54.5 91 40 92 29.5 87C18 81.5 9.5 70.5 6 58C2.5 45.5 5 31.5 12.5 21C19.5 11 33 8.5 46.5 7.5Z" />
        <defs>
          <radialGradient id="wax-gradient" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
            <stop offset="0%" stopColor="hsl(30 80% 45%)" />
            <stop offset="70%" stopColor="hsl(30 70% 35%)" />
            <stop offset="100%" stopColor="hsl(30 60% 25%)" />
          </radialGradient>
        </defs>
      </svg>
      {/* Inner ring */}
      <div className="absolute w-10 h-10 rounded-full border border-[hsl(35_80%_60%_/_0.4)]" />
      {/* Initial */}
      <span className="font-script text-xl text-[hsl(35_80%_75%)] relative z-10" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)", paddingTop: "2px" }}>
        {WEDDING_CONFIG.bride.shortName[0] + "&" + WEDDING_CONFIG.groom.shortName[0]}
      </span>
    </div>
  </div>
);

/* ─── Mandala Watermark ─── */
const MandalaWatermark = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] overflow-hidden mix-blend-multiply">
    <svg width="300" height="300" viewBox="0 0 100 100" className="animate-spin-slow">
      {[...Array(12)].map((_, i) => (
        <ellipse key={i} cx="50" cy="50" rx="40" ry="15" fill="none" stroke="hsl(30 60% 20%)" strokeWidth="0.5" transform={`rotate(${i * 30} 50 50)`} />
      ))}
      <circle cx="50" cy="50" r="20" fill="none" stroke="hsl(30 60% 20%)" strokeWidth="0.5" />
      <circle cx="50" cy="50" r="10" fill="none" stroke="hsl(30 60% 20%)" strokeWidth="0.5" />
    </svg>
  </div>
);

/* ─── Event Card ─── */
const EventCard = ({ event, index }: { event: typeof events[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleCalendar = () => {
    const { text, dates, details, location } = event.calendarData;
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(text)}&dates=${dates}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
    window.open(url, "_blank");
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mb-12"
      style={{ perspective: "1000px" }}
      initial={{ opacity: 0, y: 150, rotateX: 20 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", bounce: 0.4, duration: 1.5, delay: index * 0.2 }}
    >
      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}>
        
        {/* Wax Seal at top of card */}
        <WaxSeal />

      {/* Outer gradient border */}
      <div className="rounded-3xl p-1 relative overflow-hidden"
        style={{
          background: "linear-gradient(145deg, hsl(38 50% 82%), hsl(35 40% 76%))",
          boxShadow: "0 20px 50px hsl(30 30% 25% / 0.15), 0 5px 15px hsl(30 30% 25% / 0.08)",
        }}>
      {/* Inner card */}
      <div className="rounded-[20px] relative overflow-hidden"
        style={{ background: "linear-gradient(170deg, hsl(38 45% 90%) 0%, hsl(35 40% 86%) 50%, hsl(33 38% 83%) 100%)" }}>

        {/* Hex pattern */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: hexPattern, backgroundSize: "56px 100px" }} />

          {/* Radial glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 30%, hsl(40 60% 85% / 0.5), transparent 70%)" }} />
          
          {/* Mandala Watermark */}
          <MandalaWatermark />
          
          {/* 3D Glare effect */}
          <motion.div className="absolute inset-0 pointer-events-none z-30"
            style={{
              background: "radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)",
              opacity: 0.6,
              x: glareX,
              y: glareY,
              scale: 2,
            }}
          />

        {/* Double border frame */}
        <div className="absolute inset-4 rounded-2xl border border-[hsl(38_55%_52%_/_0.18)] pointer-events-none" />
        <div className="absolute inset-6 rounded-xl border border-dashed border-[hsl(38_55%_52%_/_0.08)] pointer-events-none" />

        {/* Dotted arcs */}
        <DottedArcs />

        {/* Floating ornaments */}
        <FloatingOrnaments />
        <FloatingDiamonds />

        {/* Ornate corners */}
        <OrnateCorner position="top-left" />
        <OrnateCorner position="top-right" />
        <OrnateCorner position="bottom-left" />
        <OrnateCorner position="bottom-right" />

        {/* Swag garland */}
        <SwagGarland />

        {/* Card content */}
        <div className="relative z-10 px-8 py-10 text-center">
          {/* Rosette */}
          <Rosette />

          {/* Badge label */}
          <motion.div className="flex justify-center mb-4"
            initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: index * 0.25 + 0.3 }}>
            <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full"
              style={{ border: "1px solid hsl(38 55% 52% / 0.3)", background: "hsl(38 50% 85% / 0.6)" }}>
              <span className="text-[hsl(38_55%_52%)] text-xs">✧</span>
              <span className="font-sans-elegant text-[10px] tracking-[0.25em] uppercase text-[hsl(30_40%_30%)]">{event.label}</span>
              <span className="text-[hsl(38_55%_52%)] text-xs">✧</span>
            </div>
          </motion.div>

          {/* Top filigree */}
          <TopFiligree />

          {/* Title */}
          <motion.h3 className="font-script text-4xl md:text-5xl mb-2" style={{ color: "hsl(30 40% 22%)" }}
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: index * 0.25 + 0.4 }}>
            {event.title}
          </motion.h3>

          {/* Bottom filigree under title */}
          <TopFiligree />

          <div className="mt-6" />

          <div className="mt-8 mb-4" />

          {/* Details layout: Date & Time in a neat left-aligned column */}
          <div className="flex flex-col gap-4 max-w-[220px] mx-auto text-left">
            <motion.div className="flex items-center gap-4"
              initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: index * 0.25 + 0.5 }}>
              <EventIcon icon={CalendarIcon} />
              <span className="font-serif text-lg text-[hsl(30_40%_22%)] tracking-wide">{event.date}</span>
            </motion.div>

            <motion.div className="flex items-center gap-4"
              initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: index * 0.25 + 0.6 }}>
              <EventIcon icon={Clock} />
              <span className="font-serif text-lg text-[hsl(30_40%_22%)] tracking-wide">{event.time}</span>
            </motion.div>
          </div>

          <FiligreeDivider />

          {/* Venue & Address centered nicely */}
          <div className="flex flex-col items-center gap-3">
            <motion.div
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: index * 0.25 + 0.7 }}
            >
              <EventIcon icon={MapPin} />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: index * 0.25 + 0.75 }}
            >
              <span className="font-serif text-[22px] font-semibold text-[hsl(30_40%_22%)] block mb-1">{event.venue}</span>
            </motion.div>

            <motion.p className="font-sans-elegant text-sm text-[hsl(30_35%_38%)] leading-relaxed max-w-[260px] mx-auto opacity-90"
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: index * 0.25 + 0.8 }}>
              {event.address}
            </motion.p>
          </div>

            <div className="mt-8 mb-6 flex justify-center pointer-events-none">
              <svg width="160" height="20" viewBox="0 0 160 20">
                <path d="M0,10 Q20,2 40,10 Q60,18 80,10 Q100,2 120,10 Q140,18 160,10" stroke="hsl(38 55% 52% / 0.25)" strokeWidth="0.7" fill="none" />
                <path d="M10,10 Q30,4 50,10 Q70,16 90,10 Q110,4 130,10 Q150,16 160,10" stroke="hsl(38 55% 52% / 0.1)" strokeWidth="0.4" fill="none" />
                <circle cx="80" cy="10" r="2.5" fill="hsl(38 55% 52% / 0.2)" stroke="hsl(38 55% 52% / 0.3)" strokeWidth="0.4" />
                <circle cx="40" cy="10" r="1" fill="hsl(38 55% 52% / 0.15)" />
                <circle cx="120" cy="10" r="1" fill="hsl(38 55% 52% / 0.15)" />
                <circle cx="20" cy="6" r="0.6" fill="hsl(38 55% 52% / 0.12)" />
                <circle cx="140" cy="14" r="0.6" fill="hsl(38 55% 52% / 0.12)" />
              </svg>
            </div>
            
            {/* Add to Calendar Button */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.25 + 0.9 }}
              className="mt-4 flex justify-center"
            >
              <MagneticButton 
                onClick={handleCalendar}
                className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(40_90%_65%)] via-[hsl(40_72%_52%)] to-[hsl(35_65%_38%)] opacity-90 group-hover:opacity-100 transition-opacity" />
                <CalendarPlus className="w-4 h-4 text-primary-foreground relative z-10" />
                <span className="font-sans-elegant text-xs tracking-widest uppercase text-primary-foreground relative z-10">
                  Simpan ke Kalender
                </span>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </div>
      </motion.div>
    </motion.div>
  );
};

const EventDetails = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const yVines = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const yStars = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);
  const yDust = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
  <section ref={containerRef} className="py-24 px-6 relative overflow-hidden z-10">
    <motion.div className="absolute inset-0 z-[-2]" style={{ y: yBg }}>
      <img src="/bg.jpeg" alt="Background" className="w-full h-full object-cover opacity-80" />
    </motion.div>
    <div className="absolute inset-0 bg-background/60 z-[-1]" />
    
    <FloralFrame positions={["top-left", "top-right"]} size="sm" />
    <FloralFrame positions={["bottom-left", "bottom-right"]} size="sm" />
    
    <motion.div className="absolute inset-0 pointer-events-none" style={{ y: yVines }}>
      <SectionVine side="left" />
      <SectionVine side="right" />
    </motion.div>
    
    <motion.div className="absolute inset-0 pointer-events-none" style={{ y: yDust }}>
      <LocalGoldDust count={8} />
    </motion.div>

    <motion.div className="absolute inset-0 pointer-events-none" style={{ y: yStars }}>
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={`star-${i}`} className="absolute rounded-full pointer-events-none"
          style={{ left: `${10 + Math.random() * 80}%`, top: `${10 + Math.random() * 80}%`, width: 2, height: 2, background: "hsl(40 80% 70%)", animation: `twinkle ${2 + Math.random() * 3}s ${Math.random() * 4}s ease-in-out infinite` }} />
      ))}
    </motion.div>

    <div className="max-w-lg mx-auto relative z-10">
      <motion.div className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <p className="font-sans-elegant text-xs tracking-[0.3em] uppercase text-primary/70 mb-3">Save The Date</p>
        <h2 className="font-script text-5xl md:text-6xl gradient-gold-text mb-4">Waktu & Tempat</h2>
        <div className="divider-gold w-32 mx-auto" />
      </motion.div>

      <div className="flex flex-col gap-8">
        {events.map((event, i) => (
          <EventCard key={event.title} event={event} index={i} />
        ))}
      </div>
    </div>
  </section>
  );
};

export default EventDetails;
