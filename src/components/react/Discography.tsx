// src/components/react/Discography.tsx
import { motion } from "framer-motion";

export default function Discography({ albums }: { albums: any[] }) {
  return (
    <section className="py-32 bg-black text-white px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xs tracking-[0.5em] uppercase opacity-30 mb-20 text-center">Discography Archive</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {albums.map((album, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-3/4 overflow-hidden bg-zinc-900 mb-8 border border-white/5">
                <img 
                  src={album.cover_url} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  alt={album.title}
                />
              </div>
              <p className="text-[10px] tracking-[0.2em] uppercase opacity-40 mb-2">{album.type} • {album.release_date}</p>
              <h3 className="text-xl font-serif italic group-hover:text-[#FCC89B] transition-colors">{album.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}