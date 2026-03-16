import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiMapPin, FiCalendar, FiUsers } from 'react-icons/fi';
import PageTransition from '../components/ui/PageTransition';
import SectionHeader from '../components/ui/SectionHeader';
import Footer from '../components/ui/Footer';
import axios from 'axios';

const sampleHackathons = [
  {
    _id: '1',
    name: 'DeFy Hackathon',
    description: 'Developed a blockchain-based application demonstrating decentralized system capabilities and smart contract integration.',
    position: 'Participant',
    date: '2025',
    location: 'VIT University',
    team: ['Team Members'],
    photo: '/hackathons/vit-defy.jpg',
    prize: '_',
    certificate: '/certificates/defy-c.jpg'
  },
  {
    _id: '2',
    name: 'HackVerse',
    description: 'Built a decentralized certificate verification system using EduChain blockchain technology to ensure tamper-proof academic credential validation.',
    position: 'Participant',
    date: '2025',
    location: 'SRM University',
    team: ['Team Members'],
    photo: '/hackathons/hackverse.jpg',
    prize: '_',
    certificate: '/certificates/hackverse-c.jpg'
  },
  {
    _id: '3',
    name: 'RMK Engineering College Hackathon',
    description: 'Developed an E-Waste Management system to track and manage electronic waste recycling and disposal efficiently.',
    position: 'Participant',
    date: '2025',
    location: 'RMK Engineering College',
    team: ['Team Members'],
    prize: '_',
    photo: null,
    certificate: '/certificates/rmk-c.jpg'
  },
  {
    _id: '4',
    name: 'Codeathon 3.0',
    description: 'Created a fast and secure medicine delivery web application to improve medical accessibility and online pharmacy services.',
    position: 'Participant',
    date: '2025',
    location: 'Prathyusha Engineering College',
    team: ['Team Members'],
    photo: '/hackathons/codeathon.jpg',
    prize: '_',
    certificate: '/certificates/Prathyusha-c.jpg'
  },
  {
    _id: '5',
    name: 'Cephus Hackathon',
    description: 'Built an AI Model Marketplace platform where developers can upload, share, and explore AI models.',
    position: 'Participant',
    date: '2025',
    location: 'Aatria Institute, Bangalore',
    team: ['Team Members'],
    photo: '/hackathons/cephus.jpg',
    prize: '_',
    certificate: '/certificates/cephus-c.jpg'
  },
  {
    _id: '6',
    name: 'Vel Tech Innovation Hackathon',
    description: 'Developed an AI-integrated E-Commerce platform that predicts product demand and enhances customer shopping experience.',
    position: 'Participant',
    date: '2025',
    location: 'Vel Tech University',
    team: ['Team Members'],
    photo: '/hackathons/veltech.jpg',
    prize: '_',
    certificate: null
  },
  {
    _id: '7',
    name: 'Avalanche Team 1 Hackathon',
    description: 'Built GitChain, a blockchain-based version control concept integrating decentralized storage and commit verification.',
    position: 'Participant',
    date: '2025',
    location: 'Madras Christian College (MCC)',
    team: ['Team Members'],
    photo: '/hackathons/hackverse.jpg',
    prize: '_',
    certificate: null
  }
];

const badgeColors = { '🥇 1st Place': '#f59e0b', '🥈 2nd Place': '#94a3b8', '🏆 Best AI Project': '#6366f1', '🎖️ Finalist': '#10b981' };

export default function Hackathons() {
  const [hackathons, setHackathons] = useState(sampleHackathons);

  useEffect(() => {
    axios.get('/api/hackathons').then(r => { if (r.data.length) setHackathons(r.data); }).catch(() => {});
  }, []);

  return (
    <PageTransition>
      <div className="pt-28 pb-0">
        <div className="section-container">
          <SectionHeader label="Competitions" title={<>Hackathon <span className="gradient-text">Journey</span></>} subtitle="Building solutions under pressure — 48 hours at a time" />

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { value: hackathons.length + '+', label: 'Hackathons' },
              { value: '3', label: 'First Places' },
              { value: '$20k+', label: 'Prize Money' },
              { value: '15+', label: 'Team Members' },
            ].map((s, i) => (
              <motion.div
                key={i}
                className="glass-card p-5 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="font-display font-bold text-2xl gradient-text mb-1">{s.value}</div>
                <div className="font-body text-sm text-slate-500">{s.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Hackathon cards */}
          <div className="space-y-6 mb-16">
            {hackathons.map((h, i) => {
              const badgeColor = badgeColors[h.position] || '#6366f1';
              return (
                <motion.div
                  key={h._id}
                  className="glass-card p-8 group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Photo placeholder */}
                    <div className="w-full md:w-48 h-36 rounded-xl flex-shrink-0 flex items-center justify-center relative overflow-hidden"
                      style={{ background: `${badgeColor}10`, border: `1px solid ${badgeColor}20` }}>
                      {h.photo ? (
                        <img src={h.photo} alt={h.name} className="w-full h-full object-cover" />
                      ) : (
                        <FiAward className="w-12 h-12 opacity-30" style={{ color: badgeColor }} />
                      )}
                    </div>

                    <div className="flex-grow">
                      <div className="flex flex-wrap items-start gap-3 mb-3">
                        <h3 className="font-display font-bold text-2xl text-white">{h.name}</h3>
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold"
                          style={{ background: `${badgeColor}20`, color: badgeColor, border: `1px solid ${badgeColor}30` }}>
                          {h.position}
                        </span>
                      </div>

                      <p className="text-slate-400 font-body mb-4 leading-relaxed">{h.description}</p>

                      <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                        <span className="flex items-center gap-1.5"><FiCalendar className="w-4 h-4" />{h.date}</span>
                        <span className="flex items-center gap-1.5"><FiMapPin className="w-4 h-4" />{h.location}</span>
                        {h.team?.length > 0 && (
                          <span className="flex items-center gap-1.5"><FiUsers className="w-4 h-4" />Team: {h.team.join(', ')}</span>
                        )}
                        {h.prize && <span className="text-amber-400 font-mono">Prize: {h.prize}</span>}
                      </div>

                      {h.certificate && (
                        <a href={h.certificate} target="_blank" rel="noreferrer"
                          className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-body transition-colors">
                          <FiAward className="w-4 h-4" /> View Certificate →
                        </a>
                      )}
                    </div>
                  </div>
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
