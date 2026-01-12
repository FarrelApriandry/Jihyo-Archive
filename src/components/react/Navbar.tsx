import { motion, useScroll, useTransform } from "framer-motion";
import { Github } from "lucide-react";

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

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetId = id.toLowerCase() === 'home' ? 'home' : id.toLowerCase();
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <motion.nav 
      style={{ backgroundColor, borderBottom }}
      className="fixed top-0 left-0 w-full z-100 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, 'home')}
            className="text-xs tracking-[0.4em] border border-white/30 px-3 py-1 rounded-lg font-light uppercase transition-colors delay-50 hover:text-[#FCC89B] hover:border-[#FCC89B]/30"
          >
            Jihyo Archive
          </a>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {["Persona", "Gallery", "Discography"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => scrollToSection(e, item)}
              className="text-[10px] uppercase tracking-[0.3em] text-white/60 hover:text-white transition-all hover:tracking-[0.4em]"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="text-[10px] tracking-widest text-white/20 uppercase sm:block">
          <a href="https://github.com/FarrelApriandry" target="_blank" className="hidden md:flex items-center gap-2 transition-colors duration-300 hover:text-white/40" rel="noopener noreferrer">
            <Github size={16} />
            <p>
              {new Date().getFullYear()} — REL
            </p>
          </a>
        </div>
      </div>
    </motion.nav>
  );
}