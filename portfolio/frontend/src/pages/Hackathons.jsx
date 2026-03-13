import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiMapPin, FiCalendar, FiUsers } from 'react-icons/fi';
import PageTransition from '../components/ui/PageTransition';
import SectionHeader from '../components/ui/SectionHeader';
import Footer from '../components/ui/Footer';
import axios from 'axios';

const sampleHackathons = [
  { _id: '1', name: 'HackMIT 2024', description: 'Built an AI-powered accessibility tool that helps visually impaired users navigate websites using voice commands and ML.', position: '🥇 1st Place', date: 'Oct 2024', location: 'MIT, Cambridge MA', team: ['Alex', 'Sarah', 'Mike'], prize: '$5,000', photo: null, certificate: null },
  { _id: '2', name: 'ETHGlobal 2024', description: 'Developed a decentralized identity verification system using ZK proofs and blockchain technology.', position: '🥈 2nd Place', date: 'Aug 2024', location: 'San Francisco, CA', team: ['Alex', 'Jordan'], prize: '$3,000', photo: null, certificate: null },
  { _id: '3', name: 'Google DevFest Hackathon', description: 'Created a real-time collaborative code editor with AI pair programming capabilities.', position: '🏆 Best AI Project', date: 'Jun 2024', location: 'New York, NY', team: ['Alex', 'Priya', 'Kai', 'Sam'], prize: 'Cloud Credits + Swag', photo: null, certificate: null },
  { _id: '4', name: 'MLH Global Hack Week', description: 'Built a smart home IoT dashboard with predictive energy management using sensor data.', position: '🎖️ Finalist', date: 'Mar 2024', location: 'Remote', team: ['Alex', 'Chen'], prize: 'Finalist Prize', photo: null, certificate: null },
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
