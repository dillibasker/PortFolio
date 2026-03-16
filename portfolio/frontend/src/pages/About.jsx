import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PageTransition from '../components/ui/PageTransition';
import SectionHeader from '../components/ui/SectionHeader';
import Footer from '../components/ui/Footer';

const skills = [
  { name: 'React / Next.js', level: 95, color: '#61dafb' },
  { name: 'Node.js / Express', level: 90, color: '#68a063' },
  { name: 'Python / Django', level: 85, color: '#3776ab' },
  { name: 'MongoDB / PostgreSQL', level: 88, color: '#47a248' },
  { name: 'TypeScript', level: 82, color: '#3178c6' },
  { name: 'Three.js / WebGL', level: 75, color: '#6366f1' },
  { name: 'Docker / Kubernetes', level: 70, color: '#2496ed' },
  { name: 'AWS / Cloud', level: 72, color: '#ff9900' },
];

const techIcons = [
  { name: 'React', color: '#61dafb', bg: '#61dafb15' },
  { name: 'Node.js', color: '#68a063', bg: '#68a06315' },
  { name: 'Python', color: '#3776ab', bg: '#3776ab15' },
  { name: 'TypeScript', color: '#3178c6', bg: '#3178c615' },
  { name: 'MongoDB', color: '#47a248', bg: '#47a24815' },
  { name: 'Docker', color: '#2496ed', bg: '#2496ed15' },
  { name: 'Three.js', color: '#8b5cf6', bg: '#8b5cf615' },
  { name: 'AWS', color: '#ff9900', bg: '#ff990015' },
  { name: 'GraphQL', color: '#e10098', bg: '#e1009815' },
  { name: 'Redis', color: '#dc382d', bg: '#dc382d15' },
  { name: 'Tailwind', color: '#06b6d4', bg: '#06b6d415' },
  { name: 'Framer', color: '#0055ff', bg: '#0055ff15' },
];

function SkillBar({ name, level, color, index }) {
  const [ref, inView] = useInView({ triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      className="mb-5"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex justify-between mb-2">
        <span className="font-body text-sm font-medium text-slate-300">{name}</span>
        <span className="font-mono text-xs text-slate-500">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}80, ${color})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay: index * 0.1 + 0.3, ease: [0.76, 0, 0.24, 1] }}
        />
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <PageTransition>
      <div className="pt-28 pb-0">
        <div className="section-container">
          <SectionHeader label="About Me" title={<>The Developer <span className="gradient-text">Behind</span> the Code</>} subtitle="Passionate about creating digital experiences that matter" />

          {/* Bio + Photo */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-display font-bold text-3xl text-white mb-6">
                Hey, I'm <span className="gradient-text">Dilli Basker</span> 👋
              </h3>
              <div className="space-y-4 text-slate-400 font-body leading-relaxed">
                <p>I'm a full-stack developer and Genrative AI engineer with a passion for building beautiful, functional, and performant web applications. I specialize in crafting end-to-end solutions from 3D visualizations to robust backend APIs.</p>
                <p>With 3+ years of experience, I've worked on everything from AI-powered platforms to real-time collaboration tools. I love pushing the boundaries of what's possible on the web.</p>
                <p>When I'm not coding, you'll find me participating in hackathons, contributing to open-source, or exploring the latest in AI/ML research.</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/resume.pdf" target="_blank" className="btn-primary text-sm py-3 px-6 inline-flex items-center gap-2">
                  Download Resume
                </a>
                <a href="mailto:dillibasker1@gmail.com" className="btn-outline text-sm py-3 px-6 inline-flex">
                  Say Hello 👋
                </a>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Avatar placeholder */}
              <div className="relative w-72 h-72 mx-auto">
                <div className="absolute inset-0 rounded-3xl glow-primary animate-pulse-slow"
                  style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }} />
                  <div className="absolute inset-1 rounded-3xl bg-dark-200 overflow-hidden">
                    <img
                      src="/images/dilli.jpg"
                      alt="Dilli Basker"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                {/* Floating badges */}
                <motion.div
                  className="absolute -top-4 -right-4 glass rounded-xl px-4 py-2"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="font-mono text-xs text-emerald-400">3+ yrs exp</span>
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-2"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                >
                  <span className="font-mono text-xs text-cyan-400">50+ projects</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Skills */}
          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h3 className="font-display font-bold text-2xl text-white mb-8">Technical Skills</h3>
              {skills.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} index={i} />
              ))}
            </div>

            <div>
              <h3 className="font-display font-bold text-2xl text-white mb-8">Tech Stack</h3>
              <div className="grid grid-cols-3 gap-3">
                {techIcons.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    className="glass-card p-4 text-center group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-8 h-8 rounded-lg mx-auto mb-2 flex items-center justify-center"
                      style={{ background: tech.bg, border: `1px solid ${tech.color}30` }}>
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: tech.color }} />
                    </div>
                    <span className="font-body text-xs text-slate-400 group-hover:text-white transition-colors">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-24">
            <h3 className="font-display font-bold text-2xl text-white mb-10 text-center">My Journey</h3>
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5" />
              {[
                { year: '2024', title: 'Senior Full Stack Dev', org: 'Tech Startup Inc.', desc: 'Lead development of AI-powered SaaS platform' },
                { year: '2023', title: 'Full Stack Developer', org: 'Digital Agency', desc: 'Built 15+ client websites and web applications' },
                { year: '2022', title: 'Computer Science Degree', org: 'University of Technology', desc: 'Graduated with First Class Honours' },
                { year: '2021', title: 'First Hackathon Win', org: 'HackMIT', desc: 'Won Best AI Project with team of 3' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className={`relative flex items-start gap-8 mb-10 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className={`flex-1 glass-card p-5 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <span className="tag text-xs">{item.year}</span>
                    <h4 className="font-display font-bold text-white mt-2 mb-1">{item.title}</h4>
                    <p className="text-indigo-400 text-sm font-body">{item.org}</p>
                    <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-indigo-500 border-2 border-dark-100 z-10 mt-5" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </PageTransition>
  );
}