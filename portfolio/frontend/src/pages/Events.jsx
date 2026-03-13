import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiCalendar, FiMic } from 'react-icons/fi';
import PageTransition from '../components/ui/PageTransition';
import SectionHeader from '../components/ui/SectionHeader';
import Footer from '../components/ui/Footer';
import axios from 'axios';

const sampleEvents = [
  { _id: '1', name: 'React Conf 2024', description: 'Attended the premier React conference with 3000+ developers. Learned about React 19 features and concurrent rendering patterns.', role: 'Attendee', date: 'May 2024', location: 'Las Vegas, NV', type: 'Conference' },
  { _id: '2', name: 'Local Tech Meetup Speaker', description: 'Delivered a talk on "Building Performant 3D Web Experiences with Three.js" to an audience of 200+ developers.', role: 'Speaker', date: 'Apr 2024', location: 'Chennai, India', type: 'Meetup' },
  { _id: '3', name: 'Google I/O 2024', description: 'Participated in Google\'s annual developer conference, hands-on with Gemini API, Flutter, and Android 15.', role: 'Attendee', date: 'May 2024', location: 'Mountain View, CA', type: 'Conference' },
  { _id: '4', name: 'Open Source Contributor Summit', description: 'Contributed to open-source projects and networked with maintainers of major frameworks like React, Vue, and Svelte.', role: 'Contributor', date: 'Mar 2024', location: 'Seattle, WA', type: 'Workshop' },
  { _id: '5', name: 'AI/ML Workshop Host', description: 'Organized and hosted a 2-day workshop on Machine Learning fundamentals for 50 college students.', role: 'Organizer', date: 'Feb 2024', location: 'Chennai, India', type: 'Workshop' },
  { _id: '6', name: 'GitHub Universe 2023', description: 'Attended GitHub\'s flagship conference, exploring GitHub Copilot, Codespaces, and new DevOps features.', role: 'Attendee', date: 'Nov 2023', location: 'San Francisco, CA', type: 'Conference' },
];

const roleColors = { Speaker: '#6366f1', Organizer: '#f59e0b', Attendee: '#06b6d4', Contributor: '#10b981' };
const typeIcons = { Conference: '🎪', Meetup: '🤝', Workshop: '🛠️' };

export default function Events() {
  const [events, setEvents] = useState(sampleEvents);

  useEffect(() => {
    axios.get('/api/events').then(r => { if (r.data.length) setEvents(r.data); }).catch(() => {});
  }, []);

  return (
    <PageTransition>
      <div className="pt-28 pb-0">
        <div className="section-container">
          <SectionHeader label="Community" title={<>Events & <span className="gradient-text">Speaking</span></>} subtitle="Connecting with the developer community globally" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {events.map((event, i) => {
              const roleColor = roleColors[event.role] || '#6366f1';
              return (
                <motion.div
                  key={event._id}
                  className="glass-card p-6 group flex flex-col"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  {/* Photo */}
                  <div className="w-full h-40 rounded-xl mb-5 flex items-center justify-center overflow-hidden"
                    style={{ background: `${roleColor}10`, border: `1px solid ${roleColor}20` }}>
                    {event.photo ? (
                      <img src={event.photo} alt={event.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-5xl">{typeIcons[event.type] || '🎯'}</div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="tag text-xs">{event.type}</span>
                    <span className="ml-auto text-xs px-2 py-1 rounded-full font-mono font-medium"
                      style={{ background: `${roleColor}15`, color: roleColor }}>
                      {event.role}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:gradient-text transition-all">{event.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-grow mb-4">{event.description}</p>

                  <div className="flex flex-col gap-1.5 text-xs text-slate-600">
                    <span className="flex items-center gap-1.5"><FiCalendar className="w-3 h-3" />{event.date}</span>
                    <span className="flex items-center gap-1.5"><FiMapPin className="w-3 h-3" />{event.location}</span>
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
