import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { MandalaRing } from "./FloralFrame";
import { SectionVine, LocalGoldDust } from "./SectionDecorations";

const stories = [
  { year: "2020", title: "Pertama Bertemu", desc: "Kami pertama kali bertemu di sebuah acara komunitas. Senyuman pertamamu yang membuatku jatuh hati." },
  { year: "2021", title: "Mulai Dekat", desc: "Dari teman menjadi sahabat, dari sahabat menjadi lebih. Setiap hari terasa istimewa bersamamu." },
  { year: "2023", title: "Lamaran", desc: "Dengan penuh keyakinan dan doa, aku memutuskan untuk melamarmu di bawah langit senja." },
  { year: "2026", title: "Pernikahan", desc: "Hari yang kita nantikan. Bersatu dalam ikatan suci, memulai perjalanan baru bersama." },
];

const LoveStory = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden z-10">
      {/* Ambient glow */}
      <div className="ambient-glow" style={{ width: 350, height: 350, top: "10%", right: "-10%" }} />
      <div className="ambient-glow" style={{ width: 250, height: 250, bottom: "15%", left: "-8%" }} />
      <SectionVine side="left" />
      <SectionVine side="right" />
      <LocalGoldDust count={8} />

      {/* Bokeh circles */}
      {[
        { left: "5%", top: "20%", size: 90, opacity: 0.04 },
        { left: "80%", top: "50%", size: 120, opacity: 0.03 },
        { left: "40%", top: "80%", size: 80, opacity: 0.05 },
      ].map((b, i) => (
        <div
          key={`bokeh-${i}`}
          className="absolute rounded-full animate-bokeh pointer-events-none"
          style={{
            left: b.left,
            top: b.top,
            width: b.size,
            height: b.size,
            background: `radial-gradient(circle, hsl(40 60% 55% / ${b.opacity}), transparent 70%)`,
            filter: "blur(18px)",
            animationDuration: `${12 + i * 3}s`,
          }}
        />
      ))}

      <div className="max-w-3xl mx-auto relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-sans-elegant text-xs tracking-[0.3em] uppercase text-primary/70 mb-3">Our Journey</p>
          <h2 className="font-script text-5xl md:text-6xl gradient-gold-text mb-4">Love Story</h2>
          <div className="divider-gold w-32 mx-auto" />
        </motion.div>

        {/* Mandala behind timeline */}
        <MandalaRing size={180} className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent -translate-x-1/2" />

          {stories.map((story, i) => (
            <motion.div
              key={story.year}
              className={`relative flex items-center mb-16 last:mb-0 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={`w-5/12 ${i % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                <span className="font-sans-elegant text-xs tracking-widest text-primary">{story.year}</span>
                <h3 className="font-serif text-xl font-semibold text-foreground mt-1 mb-2">{story.title}</h3>
                <p className="font-serif text-sm text-muted-foreground leading-relaxed">{story.desc}</p>
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full glass-strong flex items-center justify-center glow-gold">
                <Heart className="w-4 h-4 text-primary" fill="currentColor" />
              </div>

              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveStory;