import { motion } from 'framer-motion';
import { Suspense, lazy } from 'react';
import { FiGithub, FiLinkedin, FiArrowDown, FiTwitter } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import PageTransition from '../components/ui/PageTransition';
import Footer from '../components/ui/Footer';

const HeroScene = lazy(() => import('../components/3d/HeroScene'));

const techStack = ['React', 'Node.js', 'Python', 'MongoDB', 'TypeScript', 'Three.js', 'Docker', 'AWS'];

const stats = [
  { value: '50+', label: 'Projects Built' },
  { value: '15+', label: 'Hackathons' },
  { value: '3+', label: 'Years Experience' },
  { value: '∞', label: 'Lines of Code' },
];

export default function Home() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background orbs */}
        <div className="orb w-[600px] h-[600px]" style={{ background: '#6366f1', top: '-10%', right: '-10%' }} />
        <div className="orb w-[400px] h-[400px]" style={{ background: '#8b5cf6', bottom: '10%', left: '-5%' }} />
        <div className="orb w-[300px] h-[300px]" style={{ background: '#06b6d4', top: '40%', left: '40%' }} />

        <div className="section-container relative z-10 grid lg:grid-cols-2 gap-12 items-center pt-24">
          {/* Text side */}
          <div>
            <motion.div
              className="tag inline-flex items-center gap-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for opportunities
            </motion.div>

            <motion.h1
              className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
            <span className="text-white">Full Stack</span>{' '}
            <span className="gradient-text">Developer</span>
            <br />
            <span className="text-white">& Generative AI</span>{' '}
            <span className="gradient-text-rose">Engineer</span>
            </motion.h1>

            <motion.p
              className="section-subtitle max-w-xl mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
             I build intelligent digital products using Machine Learning, Generative AI, Full-Stack development, and Blockchain. From AI-powered platforms to scalable web applications and decentralized systems,
              I turn complex ideas into real-world solutions.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Link to="/projects" className="btn-primary flex items-center gap-2">
                <span>View Projects</span>
              </Link>
              <Link to="/contact" className="btn-outline">
                Get In Touch
              </Link>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { icon: FiGithub, href: 'https://github.com/dillibasker/dillibasker' },
                { icon: FiLinkedin, href: 'https://www.linkedin.com/in/dilli-basker-8aaa262ba' },
                { icon: FiTwitter, href: 'https://x.com/DilliBasker' },
              ].map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}j
              <span className="text-slate-600 text-sm font-mono">dillibasker1@gmail.com</span>
            </motion.div>
          </div>

          {/* 3D Scene */}
          <motion.div
            className="relative h-[500px] lg:h-[600px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border border-indigo-500/20 animate-spin-slow" />
              </div>
            }>
              <HeroScene />
            </Suspense>

            {/* Floating badge */}
            <motion.div
              className="absolute bottom-10 right-0 glass rounded-2xl px-5 py-4"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <p className="font-mono text-xs text-slate-500 mb-1">Currently working on</p>
              <p className="font-display font-semibold text-white text-sm">AI-powered projects ✨</p>
            </motion.div>

            <motion.div
              className="absolute top-10 left-0 glass rounded-2xl px-5 py-4"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
            >
              <p className="font-mono text-xs text-slate-500 mb-1">Tech stack</p>
              <p className="font-display font-semibold gradient-text text-sm">React · Node · Python</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="font-mono text-xs text-slate-600">Scroll</span>
          <FiArrowDown className="text-slate-600 w-4 h-4" />
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-white/5">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="font-display font-bold text-4xl gradient-text mb-1">{stat.value}</div>
                <div className="font-body text-sm text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech marquee */}
      <section className="py-12 overflow-hidden">
        <div className="flex gap-8 animate-[slide_20s_linear_infinite]">
          {[...techStack, ...techStack].map((tech, i) => (
            <span key={i} className="flex items-center gap-3 text-slate-600 font-display font-semibold text-lg whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/50" />
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Featured projects teaser */}
      <section className="py-24">
        <div className="section-container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="tag inline-block mb-4">Featured Work</span>
            <h2 className="section-title mb-4">Things I've <span className="gradient-text">Built</span></h2>
            <p className="section-subtitle">A selection of my recent projects and experiments</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { title: 'AI Chat Platform', desc: 'Real-time AI conversations with custom models', tech: ['React', 'Node.js', 'OpenAI'], color: '#6366f1' },
              { title: '3D Portfolio Engine', desc: 'Interactive 3D visualization framework', tech: ['Three.js', 'WebGL', 'GLSL'], color: '#8b5cf6' },
              { title: 'DevOps Dashboard', desc: 'Kubernetes cluster monitoring & analytics', tech: ['React', 'Prometheus', 'Docker'], color: '#06b6d4' },
            ].map((p, i) => (
              <motion.div
                key={i}
                className="glass-card p-6 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center"
                  style={{ background: `${p.color}20`, border: `1px solid ${p.color}30` }}>
                  <div className="w-3 h-3 rounded-full" style={{ background: p.color }} />
                </div>
                <h3 className="font-display font-bold text-white text-xl mb-2 group-hover:gradient-text transition-all">{p.title}</h3>
                <p className="text-slate-500 text-sm mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map(t => <span key={t} className="tag text-xs">{t}</span>)}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/projects" className="btn-outline inline-flex">View All Projects →</Link>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </PageTransition>
  );
}
