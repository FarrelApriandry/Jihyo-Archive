import { motion, useScroll, useTransform } from "framer-motion";
import { Github } from "lucide-react";

// Kita buat interface Props supaya flexible
interface NavbarProps {
  navItems?: { name: string; href: string; isAnchor?: boolean }[];
}

export default function Navbar({ 
  navItems = [
    { name: "Persona", href: "#persona", isAnchor: true },
    { name: "Gallery", href: "#gallery", isAnchor: true },
    { name: "Discography", href: "#discography", isAnchor: true }
  ] 
}: NavbarProps) {
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10, 10, 10, 0)", "rgba(10, 10, 10, 0.9)"]
  );
  
  const borderBottom = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.1)"]
  );

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetId = id.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      window.history.pushState(null, '', `#${targetId}`);
    } else {
      window.location.href = `/${id}`;
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
            href="/" 
            className="text-[10px] tracking-[0.4em] border border-white/20 px-4 py-1.5 rounded-full font-light uppercase transition-all duration-500 hover:text-[#FCC89B] hover:border-[#FCC89B]/50 hover:bg-[#FCC89B]/5"
          >
            Jihyo Archive
          </a>
        </div>

        {/* Dynamic Center Navigation using Map */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              onClick={(e) => item.isAnchor ? scrollToSection(e, item.href) : null}
              className="text-[9px] uppercase tracking-[0.3em] text-white/50 hover:text-white transition-all hover:tracking-[0.5em]"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="text-[9px] tracking-[0.3em] text-white/20 uppercase hidden sm:block">
          <a href="https://github.com/FarrelApriandry" target="_blank" className="flex items-center gap-2 transition-colors duration-500 hover:text-[#FCC89B]" rel="noopener noreferrer">
            <Github size={14} strokeWidth={1.5} />
            <span>{new Date().getFullYear()} — REL</span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
}