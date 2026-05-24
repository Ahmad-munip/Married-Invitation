import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import FloralFrame from "./FloralFrame";
import { SectionVine, LocalGoldDust } from "./SectionDecorations";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

/* ─── Gold L-bracket corner for gallery frames ─── */
const FrameCorner = ({ position }: { position: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) => {
  const transforms: Record<string, string> = {
    "top-left": "",
    "top-right": "scaleX(-1)",
    "bottom-left": "scaleY(-1)",
    "bottom-right": "scale(-1,-1)",
  };
  const positions: Record<string, string> = {
    "top-left": "-top-[1px] -left-[1px]",
    "top-right": "-top-[1px] -right-[1px]",
    "bottom-left": "-bottom-[1px] -left-[1px]",
    "bottom-right": "-bottom-[1px] -right-[1px]",
  };

  return (
    <svg
      className={`absolute ${positions[position]} w-7 h-7 pointer-events-none z-10 transition-all duration-500`}
      viewBox="0 0 28 28"
      style={{ transform: transforms[position] }}
    >
      <path d="M1,1 L1,12" stroke="hsl(38 55% 52%)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M1,1 L12,1" stroke="hsl(38 55% 52%)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <circle cx="1" cy="1" r="1.2" fill="hsl(38 55% 52% / 0.7)" />
    </svg>
  );
};

const Gallery = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="galeri" className="py-24 px-6 relative overflow-hidden z-10">
      <FloralFrame positions={["top-left", "top-right", "bottom-left", "bottom-right"]} size="sm" />
      <SectionVine side="left" />
      <SectionVine side="right" />
      <LocalGoldDust count={8} />

      <div className="ambient-glow" style={{ width: 300, height: 300, top: "5%", left: "-5%" }} />
      <div className="ambient-glow" style={{ width: 250, height: 250, bottom: "10%", right: "-5%" }} />

      {[
        { left: "5%", top: "40%", size: 14 },
        { left: "90%", top: "30%", size: 10 },
        { left: "50%", top: "85%", size: 12 },
      ].map((orb, i) => (
        <motion.div key={`orb-${i}`} className="absolute rounded-full pointer-events-none"
          style={{ left: orb.left, top: orb.top, width: orb.size, height: orb.size, background: "radial-gradient(circle, hsl(40 80% 60% / 0.35), transparent)", boxShadow: "0 0 12px hsl(40 72% 52% / 0.2)" }}
          animate={{ y: [-8, 8, -8], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6 + i * 2, repeat: Infinity, ease: "easeInOut" }} />
      ))}

      <div className="max-w-5xl mx-auto relative">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="font-sans-elegant text-xs tracking-[0.3em] uppercase text-[#7A3E2D]/85 font-semibold mb-3">Moments</p>
          <h2 className="font-script text-5xl md:text-6xl gradient-gold-text mb-4">Gallery</h2>
          <div className="divider-gold w-32 mx-auto" />
        </motion.div>

        <div className="columns-2 md:columns-3 gap-5 space-y-5">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="break-inside-avoid cursor-pointer relative group mb-5"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
              onClick={() => setSelected(img)}
            >
              {/* Outer frame card */}
              <div
                className="relative p-[6px] rounded-2xl overflow-hidden transition-all duration-500"
                style={{
                  background: "linear-gradient(145deg, hsl(38 50% 82%), hsl(35 40% 76%))",
                  boxShadow: "0 6px 24px hsl(30 30% 25% / 0.12), 0 2px 6px hsl(30 30% 25% / 0.06)",
                }}
              >
                {/* Inner frame with ornaments */}
                <div
                  className="relative rounded-xl overflow-hidden"
                  style={{
                    background: "linear-gradient(170deg, hsl(38 45% 90%), hsl(35 40% 86%))",
                  }}
                >
                  {/* Inner border */}
                  <div className="absolute inset-2 rounded-lg border border-[hsl(38_55%_52%_/_0.15)] pointer-events-none z-10" />

                  {/* Corner ornaments */}
                  <div className="absolute inset-2 pointer-events-none z-10">
                    <FrameCorner position="top-left" />
                    <FrameCorner position="top-right" />
                    <FrameCorner position="bottom-left" />
                    <FrameCorner position="bottom-right" />
                  </div>

                  {/* Image with padding */}
                  <div className="p-3">
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={img}
                        alt={`Gallery ${i + 1}`}
                        className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(30_30%_15%_/_0.5)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 bg-[hsl(38_55%_52%_/_0.08)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Zoom icon */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-6 group-hover:translate-y-0 scale-75 group-hover:scale-100"
                          style={{
                            background: "hsl(38 45% 90% / 0.92)",
                            boxShadow: "0 0 20px hsl(38 55% 52% / 0.3)",
                          }}
                        >
                          <ZoomIn className="w-5 h-5 text-[hsl(30_40%_25%)]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom decorative accent */}
                  <div className="flex justify-center pb-3 pointer-events-none">
                    <svg width="60" height="8" viewBox="0 0 60 8">
                      <path d="M0,4 Q15,0 30,4 Q45,8 60,4" stroke="hsl(38 55% 52% / 0.25)" strokeWidth="0.6" fill="none" />
                      <circle cx="30" cy="4" r="1.2" fill="hsl(38 55% 52% / 0.2)" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
            <button className="absolute top-6 right-6 text-foreground/60 hover:text-foreground transition-colors bg-white/50 hover:bg-white rounded-full p-2 backdrop-blur-md" onClick={() => setSelected(null)}>
              <X className="w-6 h-6" />
            </button>
            {/* Lightbox with matching frame style */}
            <motion.div
              className="relative p-2 rounded-3xl max-w-full max-h-[88vh]"
              style={{
                background: "linear-gradient(145deg, hsl(38 50% 82%), hsl(35 40% 76%))",
                boxShadow: "0 16px 60px hsl(30 30% 15% / 0.4), 0 4px 16px hsl(30 30% 15% / 0.2)",
              }}
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="relative rounded-2xl overflow-hidden p-3"
                style={{ background: "linear-gradient(170deg, hsl(38 45% 90%), hsl(35 40% 86%))" }}
              >
                <img
                  src={selected}
                  alt="Gallery preview"
                  className="max-w-full max-h-[80vh] rounded-xl object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
