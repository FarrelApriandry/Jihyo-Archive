// src/components/react/BentoGallery.tsx

import { getOptimizedImage } from "../../lib/twiceApi";
import { motion } from "framer-motion";

interface Props {
  images: string[];
  caption: string[];
}

export default function BentoGallery({ images, caption }: Props){

  if (!images || images.length === 0) {
    return (
      <section className="py-24 bg-black px-6 text-center">
        <p className="text-white/20 tracking-[0.5em] uppercase text-[10px]">
          [ Accessing Archives... No Data Found ]
        </p>
      </section>
    );
  }

  const getImage = (index: number, width: number) => {
    return images[index] ? getOptimizedImage(images[index], width) : "https://placehold.co/600x400/0a0a0a/white?text=Awaiting+Data";
  };

  const getCaption = (index: number) => {
    return caption[index] ? caption[index] : "Untitled";
  }

  return (
    <section className="py-16 bg-black px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-right text-white/20 tracking-[0.5em] uppercase text-[10px] mb-4">
            <a href="https://youtube.com" className="inline-block transition-transform duration-700 delay-100 hover:text-[#FCC89B] hover:scale-110">See more...</a>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-300 md:h-200">
            
            {/* Card 1: Large Vertical */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-2 md:row-span-2 relative group overflow-hidden border border-white/5"
            >
                <img 
                src={getImage(5, 1200)}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
                />
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] tracking-[0.4em] uppercase bg-black/50 backdrop-blur-md px-3 py-1">{getCaption(5)}</span>
                </div>
            </motion.div>

            {/* Card 2: Square Top */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="md:col-span-1 md:row-span-1 relative group overflow-hidden border border-white/5"
            >
                <img 
                src={getImage(2, 600)}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
                />
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] tracking-[0.4em] uppercase bg-black/50 backdrop-blur-md px-3 py-1">{getCaption(2)}</span>
                </div>
            </motion.div>

            {/* Card 3: Square Right */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="md:col-span-1 md:row-span-1 relative group overflow-hidden border border-white/5"
            >
                <img 
                src={getImage(3, 600)}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
                />
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] tracking-[0.4em] uppercase bg-black/50 backdrop-blur-md px-3 py-1">{getCaption(3)}</span>
                </div>
            </motion.div>

            {/* Card 4: Horizontal Bottom */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="md:col-span-2 md:row-span-1 relative group overflow-hidden border border-white/5"
            >
                <img 
                src={getImage(4, 1000)}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
                />
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] tracking-[0.4em] uppercase bg-black/50 backdrop-blur-md px-3 py-1">{getCaption(4)}</span>
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
}