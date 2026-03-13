import mongoose from 'mongoose';

export const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  longDescription: String,
  tech: [String],
  image: String,
  github: String,
  live: String,
  featured: { type: Boolean, default: false },
  category: { type: String, default: 'Web' },
  year: { type: Number, default: new Date().getFullYear() },
  createdAt: { type: Date, default: Date.now }
});

export const HackathonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  position: String,
  photo: String,
  certificate: String,
  date: String,
  location: String,
  team: [String],
  prize: String,
  createdAt: { type: Date, default: Date.now }
});

export const EventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  role: String,
  photo: String,
  date: String,
  location: String,
  type: { type: String, default: 'Conference' },
  createdAt: { type: Date, default: Date.now }
});

export const AchievementSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  issuer: String,
  date: String,
  image: String,
  category: { type: String, default: 'Award' },
  link: String,
  createdAt: { type: Date, default: Date.now }
});

export const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: String,
  message: { type: String, required: true },
  read: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

export const Project = mongoose.model('Project', ProjectSchema);
export const Hackathon = mongoose.model('Hackathon', HackathonSchema);
export const Event = mongoose.model('Event', EventSchema);
export const Achievement = mongoose.model('Achievement', AchievementSchema);
export const Contact = mongoose.model('Contact', ContactSchema);
