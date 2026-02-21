import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

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
    <section className="py-24 px-6 relative">
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
