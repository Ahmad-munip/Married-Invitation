import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import FloralFrame from "./FloralFrame";
import { SectionVine, LocalGoldDust } from "./SectionDecorations";

const events = [
  {
    title: "Akad Nikah",
    date: "Senin, 15 Juni 2026",
    time: "08:00 - 10:00 WIB",
    venue: "Masjid Al-Ikhlas",
    address: "Jl. Kebahagiaan No. 1, Jakarta",
  },
  {
    title: "Resepsi",
    date: "Senin, 15 Juni 2026",
    time: "11:00 - 14:00 WIB",
    venue: "The Grand Ballroom",
    address: "Jl. Cinta Abadi No. 88, Jakarta",
  },
];

const EventDetails = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <FloralFrame positions={["top-left", "top-right"]} size="sm" />
      <FloralFrame positions={["bottom-left", "bottom-right"]} size="sm" />
      <SectionVine side="left" />
      <SectionVine side="right" />
      <LocalGoldDust count={8} />
      
      {/* Local twinkling stars */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            width: 2,
            height: 2,
            background: "hsl(40 80% 70%)",
            animation: `twinkle ${2 + Math.random() * 3}s ${Math.random() * 4}s ease-in-out infinite`,
          }}
        />
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
            <motion.div
              key={event.title}
              className="glass-strong rounded-2xl p-8 text-center relative overflow-hidden shine-effect"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              {/* Corner dot ornaments */}
              <div className="absolute top-3 left-3 w-1.5 h-1.5 rounded-full bg-primary/20" />
              <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-primary/20" />
              <div className="absolute bottom-3 left-3 w-1.5 h-1.5 rounded-full bg-primary/20" />
              <div className="absolute bottom-3 right-3 w-1.5 h-1.5 rounded-full bg-primary/20" />

              <h3 className="font-script text-3xl text-primary mb-6">{event.title}</h3>

              <div className="space-y-4 text-foreground/80">
                <div className="flex items-center justify-center gap-3">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="font-serif text-lg">{event.date}</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="font-serif text-lg">{event.time}</span>
                </div>
                <div className="divider-gold w-20 mx-auto my-4" />
                <div className="flex items-center justify-center gap-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="font-serif text-lg font-semibold">{event.venue}</span>
                </div>
                <p className="font-sans-elegant text-sm text-muted-foreground">{event.address}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;