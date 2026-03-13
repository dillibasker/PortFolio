import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiMapPin, FiSend, FiCheck, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import PageTransition from '../components/ui/PageTransition';
import SectionHeader from '../components/ui/SectionHeader';
import Footer from '../components/ui/Footer';
import axios from 'axios';

const socials = [
  { icon: FiGithub, label: 'GitHub', href: 'https://github.com/dillibasker', color: '#ffffff' },
  { icon: FiLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/dilli-basker-8aaa262ba', color: '#0077b5' },
  { icon: FiTwitter, label: 'Twitter / X', href: 'https://x.com/DilliBasker', color: '#1da1f2' },
  { icon: FiMail, label: 'Email', href: 'mailto:dillibasker1@gmail.com', color: '#6366f1' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required';
    if (!form.message.trim() || form.message.length < 10) e.message = 'Message must be at least 10 characters';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus('loading');
    try {
      await axios.post('/api/contact', form);
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 4000);
  };

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(er => ({ ...er, [e.target.name]: '' }));
  };

  return (
    <PageTransition>
      <div className="pt-28 pb-0">
        <div className="section-container">
          <SectionHeader label="Contact" title={<>Let's <span className="gradient-text">Work Together</span></>} subtitle="Have a project in mind? Let's build something amazing together." />

          <div className="grid lg:grid-cols-5 gap-12 mb-16">
            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                className="glass-card p-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-display font-bold text-xl text-white mb-4">Get In Touch</h3>
                <p className="text-slate-400 font-body text-sm leading-relaxed mb-6">
                  I'm currently open to freelance projects, full-time roles, and exciting collaborations. 
                  Whether you have a question or just want to say hi — my inbox is always open!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-slate-400">
                    <div className="w-9 h-9 glass rounded-lg flex items-center justify-center flex-shrink-0">
                      <FiMail className="w-4 h-4 text-indigo-400" />
                    </div>
                    <span className="font-mono text-sm">hello@devportfolio.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400">
                    <div className="w-9 h-9 glass rounded-lg flex items-center justify-center flex-shrink-0">
                      <FiMapPin className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span className="font-mono text-sm">Chennai, India 🇮🇳</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="glass-card p-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="font-display font-semibold text-white mb-4">Connect</h3>
                <div className="space-y-3">
                  {socials.map(({ icon: Icon, label, href, color }) => (
                    <a key={label} href={href} target="_blank" rel="noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ background: `${color}15` }}>
                        <Icon className="w-4 h-4" style={{ color }} />
                      </div>
                      <span className="font-body text-sm text-slate-400 group-hover:text-white transition-colors">{label}</span>
                    </a>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="glass-card p-5 flex items-center gap-3"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <div>
                  <p className="text-emerald-400 font-mono text-sm font-medium">Available for Work</p>
                  <p className="text-slate-600 text-xs">Typically responds within 24 hrs</p>
                </div>
              </motion.div>
            </div>

            {/* Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  {[
                    { name: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                    { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                  ].map(field => (
                    <div key={field.name}>
                      <label className="block font-body text-sm text-slate-400 mb-2">{field.label}</label>
                      <input
                        name={field.name}
                        type={field.type}
                        value={form[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className={`w-full px-4 py-3 rounded-xl font-body text-sm text-white placeholder-slate-600 outline-none transition-all duration-200
                          bg-white/5 border ${errors[field.name] ? 'border-rose-500/50' : 'border-white/8 focus:border-indigo-500/50'}
                          focus:bg-white/8 focus:ring-1 focus:ring-indigo-500/25`}
                      />
                      {errors[field.name] && <p className="text-rose-400 text-xs mt-1">{errors[field.name]}</p>}
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block font-body text-sm text-slate-400 mb-2">Subject</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project collaboration, Job opportunity..."
                    className="w-full px-4 py-3 rounded-xl font-body text-sm text-white placeholder-slate-600 outline-none bg-white/5 border border-white/8 focus:border-indigo-500/50 focus:bg-white/8 focus:ring-1 focus:ring-indigo-500/25 transition-all"
                  />
                </div>

                <div>
                  <label className="block font-body text-sm text-slate-400 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project, timeline, and budget..."
                    className={`w-full px-4 py-3 rounded-xl font-body text-sm text-white placeholder-slate-600 outline-none resize-none bg-white/5 border transition-all
                      ${errors.message ? 'border-rose-500/50' : 'border-white/8 focus:border-indigo-500/50'}
                      focus:bg-white/8 focus:ring-1 focus:ring-indigo-500/25`}
                  />
                  {errors.message && <p className="text-rose-400 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className="btn-primary w-full flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  <AnimatePresence mode="wait">
                    {status === 'loading' && (
                      <motion.div key="loading" className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    )}
                    {status === 'success' && (
                      <motion.div key="success" initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2">
                        <FiCheck className="w-5 h-5" /> Message Sent!
                      </motion.div>
                    )}
                    {(status === 'idle' || status === 'error') && (
                      <motion.div key="idle" className="flex items-center gap-2">
                        <FiSend className="w-4 h-4" />
                        {status === 'error' ? 'Failed - Try Again' : 'Send Message'}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </PageTransition>
  );
}
