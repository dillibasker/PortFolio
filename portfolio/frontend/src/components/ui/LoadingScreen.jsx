import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return p + Math.random() * 15;
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
      style={{ background: '#0a0a0f' }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Orbs */}
      <div className="absolute w-96 h-96 rounded-full orb" style={{ background: '#6366f1', top: '20%', left: '30%' }} />
      <div className="absolute w-64 h-64 rounded-full orb" style={{ background: '#8b5cf6', bottom: '25%', right: '25%' }} />

      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo */}
        <div className="mb-8 relative">
          <motion.div
            className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          >
            <span className="font-mono font-bold text-white text-2xl">&lt;/&gt;</span>
          </motion.div>
          <motion.div
            className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl"
            style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', filter: 'blur(20px)', opacity: 0.4 }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        <motion.h1
          className="font-display font-bold text-4xl gradient-text mb-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Loading...
        </motion.h1>
        <p className="font-mono text-sm text-slate-500 mb-8">Initializing portfolio</p>

        {/* Progress bar */}
        <div className="w-64 h-0.5 bg-white/10 rounded-full overflow-hidden mx-auto">
          <motion.div
            className="h-full rounded-full"
            style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)' }}
            initial={{ width: '0%' }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <p className="font-mono text-xs text-slate-600 mt-3">{Math.min(Math.round(progress), 100)}%</p>
      </motion.div>

      {/* Corner decorations */}
      {['top-6 left-6', 'top-6 right-6', 'bottom-6 left-6', 'bottom-6 right-6'].map((pos, i) => (
        <motion.div
          key={i}
          className={`absolute ${pos} w-6 h-6 border border-indigo-500/20`}
          style={{ borderRadius: i < 2 ? '0 8px 0 0' : '0 0 8px 0' }}
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
        />
      ))}
    </motion.div>
  );
}
