import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, Loader2 } from 'lucide-react';

export default function VaultGate() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'error' | 'decrypting' | 'success'>('idle');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY
      const threshold = document.documentElement.scrollHeight - 50

      if (isOpened === false) {
        if (scrollPosition >= threshold && !isVisible) {
          setIsVisible(true)
          setIsOpened(true)
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible, isOpened]);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Password: 010297 (Jihyo Birthday)
    if (password === '010297') {
      setStatus('decrypting');
      setIsOpened(true);

      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += Math.random() * 15;
        
        if (currentProgress >= 100) {
          clearInterval(interval);
          setProgress(100);
          setStatus('success');

          setTimeout(() => {
            window.location.href = '/vault-dashboard';
          }, 1000);
        } else {
          setProgress(currentProgress);
        }
      }, 150);
    } else {
      setStatus('error');
      setTimeout(() => {
        setStatus('idle');
        setPassword('');
      }, 2000);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-200 flex items-center justify-center px-6">
          {/* Backdrop Blur */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
          />

          {/* Card Modal */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-md bg-zinc-950 border border-white/10 p-8 shadow-2xl overflow-hidden"
          >
            {/* Scanning Line Animation */}
            <motion.div 
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-px bg-[#FCC89B]/20 z-10"
            />

            <div className="flex flex-col items-center text-center space-y-6 relative z-20">
              {/* Icon Logic */}
              <div className="p-4 rounded-full bg-zinc-900 border border-white/5">
                {status === 'decrypting' ? (
                  <Loader2 className="w-8 h-8 text-[#FCC89B] animate-spin" />
                ) : status === 'success' ? (
                  <Unlock className="w-8 h-8 text-green-500" />
                ) : (
                  <Lock className={`w-8 h-8 ${status === 'error' ? 'text-red-500' : 'text-[#FCC89B]'}`} />
                )}
              </div>

              {/* Conditional UI: Input vs Decrypting */}
              {status === 'decrypting' || status === 'success' ? (
                <div className="w-full space-y-6">
                  <div className="space-y-2">
                    <p className="text-[10px] tracking-[0.5em] uppercase text-[#FCC89B]">
                      {status === 'success' ? 'Access Granted' : 'Decrypting Data'}
                    </p>
                    <p className="font-mono text-[9px] text-white/20">
                      FILE: JIHYO_PRIVATE_ARCHIVE_{Math.floor(progress)}.SYS
                    </p>
                  </div>
                  <div className="w-full h-px bg-white/10 relative">
                    <motion.div 
                      className="absolute top-0 left-0 h-full bg-[#FCC89B]"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="font-mono text-2xl text-white">{Math.floor(progress)}%</p>
                </div>
              ) : (
                <>
                  <div className="space-y-2">
                    <h2 className="text-[12px] tracking-[0.6em] uppercase text-white/40">Restricted Access</h2>
                    <p className="text-xl font-serif italic text-white">The Park Ji-soo Vault</p>
                  </div>

                  <p className="text-[10px] text-zinc-500 leading-relaxed tracking-wider uppercase">
                    {status === 'error' ? '[ ACCESS_DENIED ]' : '[ REQUIRES_KEY_TO_PROCEED | JIHYO BIRTHDAY ]'}
                  </p>

                  <form onSubmit={handleVerify} className="w-full space-y-6">
                    <input 
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="ENTER_KEY"
                      className="w-full bg-transparent border-b border-white/10 py-3 text-center font-mono text-sm tracking-[0.8em] focus:outline-none focus:border-[#FCC89B] transition-colors text-white"
                      autoFocus
                    />
                    <button 
                      type="submit"
                      className="w-full py-3 text-[10px] tracking-[0.4em] uppercase bg-white text-black hover:bg-[#FCC89B] transition-colors duration-500 font-bold"
                    >
                      [ Initialize Bypass ]
                    </button>
                  </form>
                </>
              )}

              <button 
                onClick={handleClose}
                className="text-[9px] tracking-[0.2em] uppercase opacity-30 hover:opacity-100 transition-opacity"
              >
                Return to Archive
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}