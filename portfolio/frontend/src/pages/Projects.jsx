import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFilter } from 'react-icons/fi';
import PageTransition from '../components/ui/PageTransition';
import SectionHeader from '../components/ui/SectionHeader';
import Footer from '../components/ui/Footer';
import axios from 'axios';

const sampleProjects = [
  {
    _id: '1',
    title: 'E-Commerce Future Prediction System',
    description: 'AI-powered system that analyzes historical e-commerce data to predict future sales trends, customer demand, and product performance using machine learning models.',
    tech: ['Python', 'TensorFlow', 'Flask', 'React', 'MongoDB'],
    github: 'https://github.com/dillibasker/E-Commerce',
    live: '#',
    category: ['MERN Stack', 'ML', 'Gen AI'],
    year: 2025,
    featured: true
  },
  {
    _id: '2',
    title: 'Secure Real-Time Chat with End-to-End Encryption',
    description: 'Real-time messaging application with end-to-end encryption ensuring that only the sender and receiver can read messages. Built with secure key exchange and encrypted communication.',
    tech: ['React', 'Node.js', 'Socket.io', 'Encryption', 'MongoDB'],
    github: 'https://github.com/dillibasker/ChatApp',
    live: '#',
    category: 'MERN Stack',
    year: 2025,
    featured: true
  }
];

const categories = ['All', 'MERN Stack', 'ML', 'Gen AI', 'Blockchain'];
const gradients = ['#6366f1', '#8b5cf6', '#06b6d4', '#f43f5e', '#10b981', '#f59e0b'];

function ProjectCard({ project, index }) {
  const color = gradients[index % gradients.length];
  return (
    <motion.div
      className="glass-card p-6 flex flex-col h-full group"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.07 }}
      layout
    >
      {project.featured && (
        <span className="text-xs font-mono text-amber-400 mb-3 flex items-center gap-1.5">
          <span>★</span> Featured
        </span>
      )}
      <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center transition-transform group-hover:scale-110 duration-300"
        style={{ background: `${color}20`, border: `1px solid ${color}30` }}>
        <div className="w-3 h-3 rounded-full" style={{ background: color }} />
      </div>

      <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:gradient-text transition-all">{project.title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed flex-grow mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech?.map(t => <span key={t} className="tag text-xs">{t}</span>)}
      </div>

      <div className="flex gap-3 mt-auto">
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-body">
            <FiGithub className="w-4 h-4" /> Code
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer"
            className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-body ml-auto">
            Live Demo <FiExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState(sampleProjects);
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get('/api/projects')
      .then(res => { if (res.data.length) setProjects(res.data); })
      .catch(() => {});
  }, []);

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <PageTransition>
      <div className="pt-28 pb-0">
        <div className="section-container">
          <SectionHeader label="Portfolio" title={<>My <span className="gradient-text">Projects</span></>} subtitle="A collection of things I've built with passion and purpose" />

          {/* Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-xl font-body text-sm font-medium transition-all duration-200 ${
                  filter === cat
                    ? 'text-white border border-indigo-500/50 bg-indigo-500/15'
                    : 'text-slate-400 border border-white/5 hover:border-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" layout>
            <AnimatePresence>
              {filtered.map((p, i) => <ProjectCard key={p._id} project={p} index={i} />)}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      <Footer />
    </PageTransition>
  );
}
