// src/components/react/VaultGate.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, ShieldAlert, Terminal } from 'lucide-react';

export default function VaultGate() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle');

  // Logic: Pop up gate spawn when user scrolls to bottom 100px
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.documentElement.scrollHeight - 20;

      if (isOpened === false) {
        if (scrollPosition >= threshold && !isVisible) {
          setIsVisible(true);
          setIsOpened(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    // Hint: Tanggal Lahir Pacar-nya Jihyo (Password: 090406)
    if (password === '090406') {
      setStatus('success');
      // Logic redirect | fetch data premium
      setTimeout(() => window.location.href = '/vault-dashboard', 1500);
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 2000);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    window.location.href = "#home";
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-200 flex items-center justify-center px-6">
          {/* Backdrop with Heavy Blur */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            onClick={() => setIsVisible(false)}
          />

          {/* The Card */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="relative w-full max-w-md bg-zinc-950 border border-white/10 p-8 shadow-2xl"
          >
            {/* Scanning Line Animation */}
            <motion.div 
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-px bg-orange-500/20 z-10"
            />

            <div className="flex flex-col items-center text-center space-y-6">
              <div className="p-4 rounded-full bg-zinc-900 border border-white/5">
                <Lock className={`w-6 h-6 ${status === 'error' ? 'text-red-500' : 'text-[#FCC89B]'}`} />
              </div>

              <div className="space-y-2">
                <h2 className="text-xs tracking-[0.6em] uppercase text-white/40">Restricted Access</h2>
                <p className="text-xl font-serif italic text-zinc-200">The Vault is Locked</p>
              </div>

              <p className="text-[10px] text-zinc-500 leading-relaxed tracking-wider uppercase">
                {status === 'error' ? '[ ACCESS_DENIED: INVALID_KEY ]' : '[ REQUIRES_KEY_TO_PROCEED | JIHYO BOYFRIEND BIRTHDAY ]'}
              </p>

              <form onSubmit={handleVerify} className="w-full space-y-4">
                <input 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="ENTER_KEY"
                  className="w-full bg-transparent border-b border-white/10 py-3 text-center font-mono text-sm tracking-[1em] focus:outline-none focus:border-[#FCC89B] transition-colors"
                  autoFocus
                />
                
                <button 
                  type="submit"
                  className="w-full py-3 text-[10px] tracking-[0.4em] uppercase bg-white text-black hover:bg-[#FCC89B] transition-colors duration-500 font-bold"
                >
                  Authorize Access
                </button>
              </form>

              <button 
                onClick={() => handleClose()}
                className="text-[9px] tracking-[0.2em] uppercase opacity-30 hover:opacity-100 transition-opacity"
              >
                Return to Archive
              </button>
            </div>

            {/* Terminal Corner */}
            <div className="absolute bottom-2 right-4 text-[8px] font-mono text-white/5 uppercase">
              Auth_Ver: 2.0.26
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}