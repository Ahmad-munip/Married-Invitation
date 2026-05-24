import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import FloralFrame from "./FloralFrame";
import { SectionVine, LocalGoldDust } from "./SectionDecorations";

const stories = [
  {
    year: "2022",
    title: "Langkah Dipertemukan",
    desc: "Di tempat yang paling kami cintai—rumah Allah—langkah kami dipertemukan. Dalam hangatnya kegiatan masjid, barisan doa, dan perjuangan kecil sebagai sesama aktivis dakwah, Allah menumbuhkan rasa dengan cara yang paling sederhana: tanpa hiruk pikuk, tanpa banyak kata, namun penuh ketenangan.",
    icon: "🕌"
  },
  {
    year: "2022 - 2025",
    title: "Doa dalam Diam",
    desc: "Kala itu, kami hanya dua insan yang sama-sama belajar memperbaiki diri. Tidak ada janji yang diikat, tidak pula harapan yang diumbar. Namun diam-diam, nama satu sama lain mulai hadir dalam doa-doa yang dipanjatkan selepas sujud.",
    icon: "🤲"
  },
  {
    year: "2 Mar 2026",
    title: "Keseriusan Hati",
    desc: "Sebuah keseriusan disampaikan. Bukan sekadar tentang cinta, tetapi tentang niat untuk menjaga dalam halal, membersamai dalam taat, dan berjalan bersama menuju ridha-Nya.",
    icon: "💍"
  },
  {
    year: "23 Mar 2026",
    title: "Pertemuan Keluarga",
    desc: "Dua keluarga dipertemukan dalam suasana penuh haru dan syukur. Pertemuan yang bukan hanya menyatukan dua insan, tetapi juga menjadi awal dari terjalinnya dua keluarga dalam ikatan yang insyaAllah diberkahi.",
    icon: "🤝"
  },
  {
    year: "10 Jun 2026",
    title: "Akad Pernikahan",
    desc: "InsyaAllah menjadi hari dimulainya ibadah terpanjang kami. Hari ketika 'aku' dan 'kamu' melebur menjadi 'kita', dalam sebuah akad suci yang disaksikan bumi dan diijabah langit.",
    icon: "🕊️"
  }
];

const hexPattern = `url("data:image/svg+xml,%3Csvg width='56' height='100' viewBox='0 0 56 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M28 66L0 50L0 16L28 0L56 16L56 50L28 66' fill='none' stroke='%23b89a5a' stroke-width='0.4' opacity='0.1'/%3E%3Cpath d='M28 100L0 84L0 50L28 34L56 50L56 84L28 100' fill='none' stroke='%23b89a5a' stroke-width='0.4' opacity='0.1'/%3E%3C/svg%3E")`;

/* ─── Gold corner bracket ─── */
const GoldCorner = ({ position }: { position: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) => {
  const t: Record<string, string> = {
    "top-left": "", "top-right": "scaleX(-1)",
    "bottom-left": "scaleY(-1)", "bottom-right": "scale(-1,-1)",
  };
  const p: Record<string, string> = {
    "top-left": "top-2 left-2", "top-right": "top-2 right-2",
    "bottom-left": "bottom-2 left-2", "bottom-right": "bottom-2 right-2",
  };
  return (
    <svg className={`absolute ${p[position]} w-8 h-8 pointer-events-none`} viewBox="0 0 32 32" style={{ transform: t[position] }}>
      <path d="M2,2 L2,14" stroke="hsl(38 55% 52%)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M2,2 L14,2" stroke="hsl(38 55% 52%)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M5,5 L5,10" stroke="hsl(38 55% 52% / 0.3)" strokeWidth="0.5" fill="none" />
      <path d="M5,5 L10,5" stroke="hsl(38 55% 52% / 0.3)" strokeWidth="0.5" fill="none" />
      <path d="M2,14 C2,18 5,21 10,20" stroke="hsl(38 55% 52% / 0.35)" strokeWidth="0.6" fill="none" />
      <path d="M14,2 C18,2 21,5 20,10" stroke="hsl(38 55% 52% / 0.35)" strokeWidth="0.6" fill="none" />
      <circle cx="2" cy="2" r="1.5" fill="hsl(38 55% 52% / 0.5)" />
      <circle cx="14" cy="2" r="0.6" fill="hsl(38 55% 52% / 0.25)" />
      <circle cx="2" cy="14" r="0.6" fill="hsl(38 55% 52% / 0.25)" />
    </svg>
  );
};

/* ─── Story Card ─── */
const StoryCard = ({ story, index }: { story: typeof stories[0]; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="relative mb-12 last:mb-0"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: 0.1 }}
    >
      {/* Timeline node — beige circle with heart */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 z-20"
        style={{ top: "20px" }}
        whileInView={{ scale: [0, 1.2, 1] }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center relative"
          style={{
            background: "linear-gradient(145deg, hsl(38 50% 82%), hsl(35 40% 76%))",
            boxShadow: "0 0 16px hsl(38 55% 52% / 0.25), 0 3px 8px hsl(30 30% 25% / 0.15)",
          }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: "linear-gradient(170deg, hsl(38 45% 90%), hsl(35 40% 86%))" }}
          >
            <Heart className="w-4 h-4" style={{ color: "hsl(38 55% 45%)" }} fill="currentColor" />
          </div>
          {/* Sparkle ring */}
          <div className="absolute -top-1 -right-0.5 w-1.5 h-1.5 rounded-full bg-[hsl(38_55%_52%_/_0.5)] animate-sparkle-pop" />
          <div className="absolute -bottom-0.5 -left-0.5 w-1 h-1 rounded-full bg-[hsl(38_55%_52%_/_0.35)] animate-sparkle-pop" style={{ animationDelay: "0.5s" }} />
        </div>
      </motion.div>

      {/* Card positioned left or right */}
      <div className={`flex ${isEven ? "justify-start pr-[55%]" : "justify-end pl-[55%]"}`}>
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: isEven ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Ornate card wrapper */}
          <div
            className="rounded-2xl p-[3px] relative"
            style={{
              background: "linear-gradient(145deg, hsl(38 50% 80%), hsl(35 40% 74%))",
              boxShadow: "0 6px 24px hsl(30 30% 25% / 0.1), 0 2px 6px hsl(30 30% 25% / 0.06)",
            }}
          >
            <div
              className="rounded-[13px] relative overflow-hidden"
              style={{ background: "linear-gradient(170deg, hsl(38 45% 90%) 0%, hsl(35 40% 86%) 50%, hsl(33 38% 83%) 100%)" }}
            >
              {/* Hex pattern */}
              <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: hexPattern, backgroundSize: "40px 72px" }} />

              {/* Radial glow */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 50% 20%, hsl(40 60% 85% / 0.4), transparent 70%)" }} />

              {/* Inner border */}
              <div className="absolute inset-2 rounded-lg border border-[hsl(38_55%_52%_/_0.14)] pointer-events-none" />

              {/* Corners */}
              <GoldCorner position="top-left" />
              <GoldCorner position="top-right" />
              <GoldCorner position="bottom-left" />
              <GoldCorner position="bottom-right" />

              {/* Floating ornaments */}
              <div className="absolute top-2 right-4 pointer-events-none animate-mini-float opacity-15" style={{ animationDelay: `${index * 0.5}s` }}>
                <Sparkles className="w-3 h-3 text-[hsl(38_55%_52%)]" />
              </div>
              <div className="absolute bottom-3 left-4 pointer-events-none animate-mini-float opacity-10" style={{ animationDelay: `${index * 0.3 + 1}s` }}>
                <Heart className="w-2.5 h-2.5 text-[hsl(38_55%_52%)]" fill="currentColor" />
              </div>

              {/* Content */}
              <div className="relative z-10 px-5 py-5">
                {/* Year badge */}
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full"
                    style={{ border: "1px solid hsl(38 55% 52% / 0.3)", background: "hsl(38 50% 85% / 0.5)" }}
                  >
                    <span className="text-xs">✧</span>
                    <span className="font-sans-elegant text-[10px] tracking-[0.2em] uppercase" style={{ color: "hsl(30 40% 30%)" }}>{story.year}</span>
                    <span className="text-xs">✧</span>
                  </div>
                  <span className="text-base">{story.icon}</span>
                </div>

                {/* Title */}
                <h3 className="font-script text-2xl mb-2 gradient-gold-text">
                  {story.title}
                </h3>

                {/* Divider */}
                <div className="flex items-center gap-1.5 mb-2 pointer-events-none">
                  <div className="h-px flex-1 bg-gradient-to-r from-[hsl(38_55%_52%_/_0.25)] to-transparent" />
                  <svg width="12" height="6" viewBox="0 0 12 6">
                    <path d="M6,0 Q4,3 0,3 Q4,3 6,6 Q8,3 12,3 Q8,3 6,0Z" fill="hsl(38 55% 52% / 0.2)" />
                  </svg>
                  <div className="h-px flex-1 bg-gradient-to-l from-[hsl(38_55%_52%_/_0.25)] to-transparent" />
                </div>

                {/* Description */}
                <p className="font-serif text-sm leading-relaxed" style={{ color: "hsl(30 35% 38%)" }}>
                  {story.desc}
                </p>
              </div>

              {/* Bottom wave */}
              <div className="flex justify-center pb-2 pointer-events-none">
                <svg width="80" height="8" viewBox="0 0 80 8">
                  <path d="M0,4 Q20,0 40,4 Q60,8 80,4" stroke="hsl(38 55% 52% / 0.18)" strokeWidth="0.5" fill="none" />
                  <circle cx="40" cy="4" r="1" fill="hsl(38 55% 52% / 0.15)" />
                </svg>
              </div>
            </div>
          </div>

          {/* Connector line from card to timeline */}
          <div
            className={`absolute top-[30px] ${isEven ? "right-[44%]" : "left-[44%]"} h-px`}
            style={{
              width: "10%",
              background: `linear-gradient(${isEven ? "to right" : "to left"}, hsl(38 55% 52% / 0.3), hsl(38 55% 52% / 0.08))`,
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const LoveStory = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 20%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="cerita" className="py-24 px-6 relative overflow-hidden z-10">
      <div className="absolute inset-0 z-[-2]">
        <img src="/bg.jpeg" alt="Background" className="w-full h-full object-cover opacity-80" />
      </div>
      <div className="absolute inset-0 bg-background/60 z-[-1]" />
      <FloralFrame positions={["top-left", "top-right"]} size="sm" />
      <FloralFrame positions={["bottom-left", "bottom-right"]} size="sm" />
      <SectionVine side="left" />
      <SectionVine side="right" />
      <LocalGoldDust count={8} />

      {/* Bokeh */}
      {[
        { left: "5%", top: "20%", size: 90, opacity: 0.04 },
        { left: "80%", top: "50%", size: 120, opacity: 0.03 },
        { left: "40%", top: "80%", size: 80, opacity: 0.05 },
      ].map((b, i) => (
        <div key={`bokeh-${i}`} className="absolute rounded-full animate-bokeh pointer-events-none"
          style={{ left: b.left, top: b.top, width: b.size, height: b.size, background: `radial-gradient(circle, hsl(40 60% 55% / ${b.opacity}), transparent 70%)`, filter: "blur(18px)", animationDuration: `${12 + i * 3}s` }} />
      ))}

      {/* Floating diamonds */}
      {[
        { left: "3%", top: "30%", size: 5, dur: 7 },
        { left: "92%", top: "45%", size: 4, dur: 6 },
        { left: "6%", top: "65%", size: 6, dur: 8 },
        { left: "88%", top: "70%", size: 5, dur: 5 },
      ].map((d, i) => (
        <div key={`dia-${i}`} className="absolute animate-float-diamond pointer-events-none"
          style={{ left: d.left, top: d.top, width: d.size, height: d.size, background: "hsl(38 55% 52% / 0.2)", animationDuration: `${d.dur}s`, animationDelay: `${i * 0.8}s` }} />
      ))}

      <div className="max-w-xl mx-auto relative">
        {/* Section header */}
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          {/* Rosette */}
          <div className="flex justify-center mb-3 pointer-events-none">
            <svg width="44" height="44" viewBox="0 0 44 44">
              <circle cx="22" cy="22" r="19" fill="none" stroke="hsl(38 55% 52% / 0.1)" strokeWidth="0.5" />
              <circle cx="22" cy="22" r="14" fill="none" stroke="hsl(38 55% 52% / 0.08)" strokeWidth="0.4" strokeDasharray="2 3" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
                <line key={a} x1="22" y1="22"
                  x2={22 + 13 * Math.cos((a * Math.PI) / 180)}
                  y2={22 + 13 * Math.sin((a * Math.PI) / 180)}
                  stroke="hsl(38 55% 52% / 0.06)" strokeWidth="0.4" />
              ))}
              <circle cx="22" cy="22" r="4" fill="hsl(38 55% 52% / 0.05)" stroke="hsl(38 55% 52% / 0.12)" strokeWidth="0.4" />
              <circle cx="22" cy="22" r="1.5" fill="hsl(38 55% 52% / 0.18)" />
            </svg>
          </div>

          <p className="font-sans-elegant text-xs tracking-[0.3em] uppercase text-primary/70 mb-3">Our Journey</p>
          <h2 className="font-script text-5xl md:text-6xl gradient-gold-text mb-4">
            Love Story
          </h2>
          <div className="divider-gold w-32 mx-auto" />
        </motion.div>

        {/* Intro text */}
        <motion.div
          className="text-center mb-16 px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-serif italic text-sm md:text-base leading-relaxed" style={{ color: "hsl(30 35% 35%)" }}>
            "Tidak ada pertemuan yang benar-benar kebetulan. Allah telah menuliskan setiap takdir dengan begitu indah, bahkan jauh sebelum kami saling mengenal."
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative" ref={timelineRef}>
          {/* Static dotted background line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: "repeating-linear-gradient(to bottom, hsl(38 55% 52% / 0.12) 0px, hsl(38 55% 52% / 0.12) 4px, transparent 4px, transparent 10px)" }} />

          {/* Animated gold line */}
          <motion.div
            className="absolute left-1/2 top-0 w-[2px] -translate-x-1/2 origin-top rounded-full"
            style={{
              height: lineHeight,
              background: "linear-gradient(to bottom, hsl(38 55% 52% / 0.6), hsl(38 60% 55% / 0.3))",
              boxShadow: "0 0 10px hsl(38 55% 52% / 0.3), 0 0 4px hsl(38 55% 52% / 0.2)",
            }}
          />

          {/* Start ornament */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-3 pointer-events-none">
            <svg width="12" height="12" viewBox="0 0 12 12">
              <rect x="3" y="3" width="6" height="6" fill="hsl(38 55% 52% / 0.25)" stroke="hsl(38 55% 52% / 0.4)" strokeWidth="0.5" transform="rotate(45 6 6)" />
            </svg>
          </div>

          {/* Story cards */}
          {stories.map((story, i) => (
            <StoryCard key={story.year} story={story} index={i} />
          ))}

          {/* End ornament */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-3 pointer-events-none">
            <svg width="12" height="12" viewBox="0 0 12 12">
              <rect x="3" y="3" width="6" height="6" fill="hsl(38 55% 52% / 0.25)" stroke="hsl(38 55% 52% / 0.4)" strokeWidth="0.5" transform="rotate(45 6 6)" />
            </svg>
          </div>
        </div>

        {/* Outro text */}
        <motion.div
          className="text-center mt-16 px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="divider-gold w-24 mx-auto mb-6 opacity-60" />
          <p className="font-serif italic text-sm md:text-base leading-relaxed mb-6" style={{ color: "hsl(30 35% 35%)" }}>
            "Kami percaya, cinta terbaik bukanlah tentang siapa yang paling sempurna, tetapi tentang dua insan yang saling menggenggam untuk bersama-sama menuju surga-Nya."
          </p>
          <p className="font-serif text-sm md:text-base leading-relaxed mb-4" style={{ color: "hsl(30 30% 40%)" }}>
            Semoga Allah senantiasa menautkan hati ini dalam kebaikan, menguatkan langkah kami dalam setiap ujian, dan menjadikan rumah tangga yang akan dibangun dipenuhi sakinah, mawaddah, wa rahmah.
          </p>
          <p className="font-script text-3xl gradient-gold-text mt-4">
            Aamiin ya Rabbal ‘alamin.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveStory;
