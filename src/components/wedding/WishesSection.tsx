import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionVine } from "./SectionDecorations";
import { FiligreeLine, CornerOrnament } from "./CardDecorations";
import { WEDDING_CONFIG } from "@/config/wedding";

interface Wish {
  name: string;
  phone?: string;
  message: string;
  time: string;
}

const initialWishes: Wish[] = [
  { name: "Budi Santoso", message: "Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Aamiin 🤍", time: "2 jam lalu" },
  { name: "Rina Wati", message: "Bahagia selalu ya untuk kalian berdua! Semoga cinta kalian abadi selamanya 💛", time: "5 jam lalu" },
  { name: "Dani Pratama", message: "Happy wedding! Semoga dilancarkan acaranya dan diberkahi pernikahannya!", time: "1 hari lalu" },
];

const SCRIPT_URL = WEDDING_CONFIG.endpoints.googleSheets;

const WishesSection = () => {
  const [wishes, setWishes] = useState<Wish[]>(initialWishes);

  // Ambil data ucapan dari Google Sheets saat halaman dimuat
  useEffect(() => {
    if (!SCRIPT_URL) return;
    fetch(SCRIPT_URL)
      .then(res => res.json())
      .then(data => {
        if (data && Array.isArray(data) && data.length > 0) {
          setWishes(data);
        }
      })
      .catch(err => console.error("Error fetching wishes:", err));
  }, []);

  return (
    <section className="py-24 px-6 relative overflow-hidden z-10">
      <div className="absolute inset-0 z-[-2]">
        <img src="/bg.jpeg" alt="Background" className="w-full h-full object-cover opacity-80" />
      </div>
      <div className="absolute inset-0 bg-background/60 z-[-1]" />
      <div className="ambient-glow" style={{ width: 280, height: 280, top: "10%", left: "-7%" }} />
      <div className="ambient-glow-warm" style={{ width: 220, height: 220, bottom: "15%", right: "-5%" }} />
      <SectionVine side="left" />
      <SectionVine side="right" />
      <div className="batik-pattern-local" />
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-sans-elegant text-xs tracking-[0.3em] uppercase text-primary/70 mb-3">Wishes</p>
          <h2 className="font-script text-5xl gradient-gold-text mb-4">Ucapan & Doa</h2>
          <div className="divider-gold w-32 mx-auto" />
        </motion.div>

        <FiligreeLine />

        {/* Wishes list - Marquee style */}
        <div className="relative h-[400px] overflow-hidden mt-8 fade-edges mask-image-vertical">
          {/* Top/Bottom gradient fade masks to blend into background */}
          <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-background to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
          
          <div className="animate-marquee-vertical flex flex-col gap-4 pt-4 hover-trigger">
            {/* Double the wishes array to create seamless infinite loop */}
            {[...wishes, ...wishes].map((wish, i) => (
              <div
                key={`${wish.name}-${i}`}
                className="relative rounded-xl p-5 overflow-hidden mx-2 flex-shrink-0"
                style={{
                  background: "linear-gradient(145deg, hsl(35 40% 90%), hsl(35 35% 85%))",
                  boxShadow: "0 2px 10px hsl(30 20% 30% / 0.08)",
                }}
              >
                <CornerOrnament position="top-right" />
                <CornerOrnament position="bottom-left" />
                <div className="relative z-10">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-serif font-semibold text-[hsl(30_50%_20%)] break-words max-w-[70%]">{wish.name}</span>
                    <span className="font-sans-elegant text-[10px] text-[hsl(30_40%_35%_/_0.6)] shrink-0">{wish.time}</span>
                  </div>
                  <p className="font-serif text-sm text-[hsl(30_40%_35%)] leading-relaxed">{wish.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WishesSection;
