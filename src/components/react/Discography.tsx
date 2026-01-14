// src/components/react/Discography.tsx
import { motion } from "framer-motion";

interface Album {
  id: string;
  title: string;
  type: string;
  release_date: string;
  cover_url: string;
  detail: string;
}

export default function Discography({ albums, isHomePage = false }: { albums: Album[], isHomePage? : boolean }) {
  // Helper buat bikin tanggal jadi format editorial (e.g., AUG 2023)
  const formatDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric',
      }).toUpperCase();
    } catch {
      return dateStr;
    }
  };

  return (
    <section className="py-32 bg-black text-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-24">
          <span className="text-[10px] tracking-[0.8em] uppercase opacity-40 mb-4">Official Records</span>
          <h2 className="text-4xl font-serif italic text-center">Discography Archive</h2>
          <div className="h-px w-20 bg-[#FCC89B]/30 mt-8"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-24">
          {/* Button See More - Muncul cuma di Homepage */}
          {albums.map((album, i) => (
            <motion.div 
              key={album.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.6, ease: [0.16, 0.84, 0.3, 1] }}
              className="group"
            >
              {/* Cover Image */}
              <div className="aspect-3/4 overflow-hidden bg-zinc-900 mb-8 border border-white/5 relative">
                <img 
                  src={album.cover_url} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" 
                  alt={album.title}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
              </div>

              {/* Info Section */}
              <div className="space-y-4">
                <div className="flex justify-between items-baseline border-b border-white/10 pb-2">
                  <p className="text-[10px] tracking-[0.2em] uppercase opacity-40">
                    {album.type}
                  </p>
                  <p className="text-[9px] tracking-widest opacity-30">
                    {formatDate(album.release_date)}
                  </p>
                </div>
                
                <h3 className="text-2xl font-serif italic group-hover:text-[#FCC89B] transition-colors duration-500">
                  {album.title}
                </h3>

                <p className="text-sm font-light leading-relaxed text-zinc-400 opacity-20 group-hover:opacity-100 transition-opacity duration-700 line-clamp-3">
                  {album.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        {isHomePage && (
          <div className="mt-8 flex justify-center">
            <a 
              href="/discography" 
              className="group flex flex-col items-center gap-4 text-[10px] tracking-[0.5em] uppercase text-zinc-500 hover:text-[#FCC89B] transition-all"
            >
              <span>View Full Discography</span>
              <div className="h-px w-12 bg-white/10 group-hover:w-24 group-hover:bg-[#FCC89B] transition-all duration-700"></div>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}