import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink, FiCalendar } from 'react-icons/fi';
import PageTransition from '../components/ui/PageTransition';
import SectionHeader from '../components/ui/SectionHeader';
import Footer from '../components/ui/Footer';
import axios from 'axios';

const sampleAchievements = [
  { _id: '1', title: 'AWS Certified Solutions Architect', description: 'Professional level certification demonstrating expertise in designing distributed systems on AWS.', issuer: 'Amazon Web Services', date: 'Nov 2024', category: 'Certification', link: '#' },
  { _id: '2', title: 'Google Cloud Professional Developer', description: 'Certified expertise in building scalable and reliable applications using Google Cloud Platform.', issuer: 'Google Cloud', date: 'Sep 2024', category: 'Certification', link: '#' },
  { _id: '3', title: 'Top 100 GitHub Developer India', description: 'Recognized among top 100 most active GitHub contributors in India based on open source contributions.', issuer: 'GitHub', date: 'Aug 2024', category: 'Award', link: '#' },
  { _id: '4', title: 'Best Innovation Award - TechFest IIT', description: 'Awarded for most innovative project at IIT Bombay\'s annual technology festival with 5000+ participants.', issuer: 'IIT Bombay', date: 'Mar 2024', category: 'Award', link: '#' },
  { _id: '5', title: 'Meta Open Source Contributor', description: 'Active contributor to React repository with merged pull requests fixing bugs and improving performance.', issuer: 'Meta / Facebook', date: 'Jan 2024', category: 'Recognition', link: '#' },
  { _id: '6', title: 'Coursera Deep Learning Specialization', description: 'Completed 5-course specialization covering neural networks, CNNs, sequence models, and NLP by Andrew Ng.', issuer: 'deeplearning.ai', date: 'Dec 2023', category: 'Certification', link: '#' },
];

const catColors = { Certification: '#6366f1', Award: '#f59e0b', Recognition: '#10b981' };
const catIcons = { Certification: '📜', Award: '🏆', Recognition: '⭐' };

export default function Achievements() {
  const [achievements, setAchievements] = useState(sampleAchievements);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    axios.get('/api/achievements').then(r => { if (r.data.length) setAchievements(r.data); }).catch(() => {});
  }, []);

  const categories = ['All', 'Certification', 'Award', 'Recognition'];
  const filtered = filter === 'All' ? achievements : achievements.filter(a => a.category === filter);

  return (
    <PageTransition>
      <div className="pt-28 pb-0">
        <div className="section-container">
          <SectionHeader label="Credentials" title={<>Awards & <span className="gradient-text">Achievements</span></>} subtitle="Recognition and certifications earned throughout my journey" />

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-xl font-body text-sm font-medium transition-all duration-200 ${
                  filter === cat
                    ? 'text-white border border-indigo-500/50 bg-indigo-500/15'
                    : 'text-slate-400 border border-white/5 hover:border-white/10 hover:text-white'
                }`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filtered.map((a, i) => {
              const color = catColors[a.category] || '#6366f1';
              return (
                <motion.div
                  key={a._id}
                  className="glass-card p-6 flex flex-col group relative overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  layout
                >
                  {/* Glow top edge */}
                  <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${color}60, transparent)` }} />

                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                      style={{ background: `${color}15`, border: `1px solid ${color}25` }}>
                      {catIcons[a.category] || '🎯'}
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full font-mono"
                      style={{ background: `${color}15`, color }}>
                      {a.category}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:gradient-text transition-all">{a.title}</h3>
                  <p className="text-indigo-400/70 text-sm font-mono mb-3">{a.issuer}</p>
                  <p className="text-slate-500 text-sm leading-relaxed flex-grow mb-4">{a.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs text-slate-600">
                      <FiCalendar className="w-3 h-3" />{a.date}
                    </span>
                    {a.link && (
                      <a href={a.link} target="_blank" rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 transition-colors">
                        Verify <FiExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  {/* Certificate image thumbnail */}
                  {a.image && (
                    <div className="mt-4 rounded-xl overflow-hidden h-32">
                      <img src={a.image} alt={a.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </PageTransition>
  );
}
