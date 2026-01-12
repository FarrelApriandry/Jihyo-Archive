import { motion, useScroll, useTransform } from "framer-motion";

export default function Navbar() {
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10, 10, 10, 0)", "rgba(10, 10, 10, 0.8)"]
  );
  
  const borderBottom = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.1)"]
  );

  return (
    <motion.nav 
      style={{ backgroundColor, borderBottom }}
      className="fixed top-0 left-0 w-full z-100 backdrop-blur-sm transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Title */}
        <div className="flex items-center gap-2">
          <span className="text-xs tracking-[0.4em] font-light uppercase">The Jihyo Archive</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          {["Eras", "Gallery", "Facts", "Vault"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[10px] uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mini Status / Date (Vibes Data Engineer) */}
        <div className="text-[10px] tracking-widest text-white/30 uppercase hidden sm:block">
          {new Date().getFullYear()} — Ver. 1.0
        </div>
      </div>
    </motion.nav>
  );
}