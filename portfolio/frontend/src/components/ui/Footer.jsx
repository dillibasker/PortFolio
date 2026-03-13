import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const socials = [
  { icon: FiGithub, href: 'https://github.com/dillibasker', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/dilli-basker-8aaa262ba', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://x.com/DilliBasker', label: 'Twitter' },
  { icon: FiMail, href: 'mailto:dillibasker1@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="relative py-16 border-t border-white/5 mt-20">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}>
                <span className="font-mono text-white text-xs font-bold">&lt;/&gt;</span>
              </div>
              <span className="font-display font-bold gradient-text">DevPortfolio</span>
            </div>
            <p className="text-slate-500 text-sm font-body">Crafting digital experiences with passion.</p>
          </div>

          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-slate-600 text-sm font-body">
            © {new Date().getFullYear()} DevPortfolio. Built with React, Three.js & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
