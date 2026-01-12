// src/components/react/HeroVisual.tsx
import { motion } from "framer-motion";

interface Props {
  image: string;
  signature: string;
  name: string;
  color: string;
}

export default function HeroVisual({ image, signature, name, color }: any) {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden">
      {/* 1. Background Text (The Soul) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
            <h1 className="text-[25vw] font-serif font-black tracking-tighter italic">PARK</h1>
        </div>

      {/* Container Wrapper Utama */}
        <div className="relative z-10 h-[75vh] aspect-2/3">
        
        {/* 2. Main Image Section */}
        <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            className="relative w-full h-full overflow-hidden rounded-sm border border-white/5"
        >
            <img 
            src={image} 
            className="w-full h-full object-cover" 
            alt={name} 
            referrerPolicy="no-referrer"
            />
            
            {/* Shadow Overlay biar mewah */}
            <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
        </motion.div>

        {/* 3. Signature (Ditaruh di dalam wrapper agar posisinya relatif terhadap foto) */}
        <motion.img 
            src={signature}
            referrerPolicy="no-referrer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }} 
            className="absolute -bottom-6 -right-12 w-64 grayscale mix-blend-screenopacity-80 z-20 pointer-events-none"
        />
        </div>
      
      {/* 4. Scroll Indicator ala Premium Site */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[10px] uppercase tracking-[0.5em]">Scroll</span>
        <div className="w-px h-12 bg-white" />
      </div>
    </div>
  );
}