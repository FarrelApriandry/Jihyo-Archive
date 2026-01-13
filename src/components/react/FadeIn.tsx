// src/components/react/FadeIn.tsx
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none"; // Tambah "none"
  delay?: number;
  duration?: number; // Tambahin ini biar lo bisa atur speed per elemen
}

export default function FadeIn({ 
  children, 
  direction = "up", 
  delay = 0,
  duration = 1.2 
}: Props) {
  
  // Logic mapping buat nentuin initial position
  const getInitialPosition = () => {
    switch (direction) {
      case "up": return { y: 40, x: 0 };
      case "down": return { y: -40, x: 0 };
      case "left": return { x: 40, y: 0 };
      case "right": return { x: -40, y: 0 };
      case "none": return { y: 0, x: 0 }; // Pure Opacity
      default: return { y: 40, x: 0 };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...getInitialPosition() }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: duration, 
        delay: delay, 
        ease: [0.22, 1, 0.36, 1] 
      }}
    >
      {children}
    </motion.div>
  );
}