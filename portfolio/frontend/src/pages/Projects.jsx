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
    tech: ['Python', 'TensorFlow', 'Flask', 'React', 'MongoDB' ,'Node.js'],
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
  },
    {
    _id: '3',
    title: 'Scheme Welfare Recommendation System',
    description: 'Gen AI powered platform that helps citizens discover government welfare schemes based on their eligibility. Uses AI to analyze user data and recommend relevant schemes.',
    tech: ['React', 'Node.js', 'Gen AI', 'MongoDB', 'API Integration'],
    github: 'https://github.com/dillibasker/Scheme_welfare',
    live: '#',
    category: ['MERN Stack', 'Gen AI'],
    year: 2025,
    featured: true
  },
  {
    _id: '4',
    title: 'Online Delivery Web Application',
    description: 'Full-stack online delivery platform that allows users to browse products, place orders, and track deliveries with a modern responsive interface.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: 'https://github.com/dillibasker/Delivery_Web',
    live: '#',
    category: ['MERN Stack'],
    year: 2024
  },
  {
  _id: '5',
  title: 'AI Assist for College Students',
  description: 'AI-powered assistant designed for college students to help with academic queries, study resources, project ideas, and exam preparation using generative AI and intelligent recommendations.',
  tech: ['React', 'Node.js', 'Gen AI', 'MongoDB', 'API Integration'],
  github: 'https://github.com/dillibasker/AI_assist_student',
  live: '#',
  category: ['MERN Stack', 'Gen AI'],
  year: 2025,
  featured: true
},
{
  _id: '6',
  title: 'Auto Drivers Auto Payment System',
  description: 'Digital payment platform designed for auto drivers to receive ride payments seamlessly. The system enables passengers to pay online, track ride history, and manage transactions securely.',
  tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Payment Gateway'],
  github: 'https://github.com/dillibasker/Auto-project',
  live: '#',
  category: ['MERN Stack'],
  year: 2024,
  featured: false
},
{
  _id: '7',
  title: 'AI Model Marketplace',
  description: 'Decentralized marketplace for sharing and discovering AI models. Models are uploaded to IPFS and registered on blockchain, allowing developers to explore, download, and contribute models securely.',
  tech: ['React', 'Node.js', 'Solidity', 'IPFS', 'Polygon'],
  github: 'https://github.com/dillibasker/AI-Marketplace',
  live: '#',
  category: ['Blockchain', 'Gen AI'],
  year: 2025,
  featured: true
},
{
  _id: '8',
  title: 'Ajith AI Chatbot',
  description: 'Generative AI chatbot capable of answering user queries, providing smart responses, and assisting with tasks using advanced natural language processing models.',
  tech: ['React', 'Node.js', 'Gen AI', 'NLP', 'API Integration'],
  github: '#',
  live: 'https://github.com/dillibasker/Ajith-AI-ChatBot',
  category: ['Gen AI'],
  year: 2025,
  featured: true
},
{
  _id: '9',
  title: 'Smart Traffic Flow Optimization',
  description: 'AI-powered system that analyzes traffic data to optimize signal timing and reduce congestion using predictive machine learning algorithms.',
  tech: ['Python', 'Machine Learning', 'TensorFlow', 'Data Analytics'],
  github: 'https://github.com/dillibasker/Smart-Traffic-Flow-Optimization',
  live: '#',
  category: ['ML'],
  year: 2024
},
{
  _id: '10',
  title: 'AI Model Grade Prediction',
  description: 'Machine learning system that predicts student academic performance based on historical academic data, attendance, and study patterns.',
  tech: ['Python', 'Scikit-learn', 'Pandas', 'Machine Learning'],
  github: 'https://github.com/dillibasker/AI-model-Grade_predict',
  live: '#',
  category: ['ML'],
  year: 2024
},
{
  _id: '11',
  title: 'Medicine Delivery Web Application',
  description: 'Full-stack web platform for ordering medicines online with secure authentication, product management, and delivery tracking.',
  tech: ['MongoDB', 'Express', 'React', 'Node.js'],
  github: 'https://github.com/dillibasker/Medicine-delivery-App',
  live: '#',
  category: ['MERN Stack'],
  year: 2024
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
