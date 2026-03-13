# 🚀 Premium Developer Portfolio

An award-winning, Awwwards-level developer portfolio with 3D animations, glassmorphism design, and full-stack capabilities.

## ✨ Features

- **3D Hero Section** — Three.js animated sphere with particle field
- **Custom Animated Cursor** — Smooth magnetic cursor with hover states
- **Glassmorphism UI** — Premium frosted glass cards and components
- **Framer Motion** — Page transitions, scroll animations, micro-interactions
- **Dark / Light Mode** — Persistent theme toggle
- **Fully Responsive** — Mobile, tablet, and desktop optimized
- **Backend API** — Express.js REST API with MongoDB
- **7 Pages** — Home, About, Projects, Hackathons, Events, Achievements, Contact
- **Contact Form** — Connected to MongoDB storage
- **Admin API** — Manage all content via REST endpoints

## 🛠 Tech Stack

| Frontend | Backend |
|---------|---------|
| React 18 + Vite | Node.js + Express |
| Three.js + @react-three/fiber | MongoDB + Mongoose |
| Framer Motion + GSAP | JWT Auth (ready) |
| Tailwind CSS | RESTful API |
| React Router v6 | Nodemailer (optional) |

## 📁 Project Structure

```
portfolio/
├── frontend/          # Vite + React app
│   ├── src/
│   │   ├── components/
│   │   │   ├── 3d/       # Three.js scenes
│   │   │   └── ui/       # Reusable UI components
│   │   ├── context/      # React contexts
│   │   ├── pages/        # Page components
│   │   └── styles/       # Global CSS
│   └── package.json
└── backend/           # Node.js + Express API
    ├── models/        # Mongoose schemas
    ├── routes/        # API routes
    └── server.js
```

## 🚀 Quick Start

### Backend
```bash
cd backend
cp .env.example .env
# Edit .env with your MongoDB URI
npm install
npm run dev
# API running at http://localhost:5000
```

### Frontend
```bash
cd frontend
npm install
npm run dev
# App running at http://localhost:5173
```

## 🔌 API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET/POST | `/api/projects` | Projects CRUD |
| GET/POST | `/api/hackathons` | Hackathons CRUD |
| GET/POST | `/api/events` | Events CRUD |
| GET/POST | `/api/achievements` | Achievements CRUD |
| POST | `/api/contact` | Submit contact form |
| GET | `/api/admin/stats` | Dashboard stats |
| GET | `/api/admin/messages` | View messages |

## 🎨 Design System

- **Fonts**: Clash Display (headings) + Satoshi (body) + JetBrains Mono (code)
- **Colors**: Indigo/Violet gradient primary + Cyan accent
- **Effects**: Glassmorphism, gradient orbs, noise texture, custom scrollbar
- **Animations**: Framer Motion page transitions + Three.js 3D + CSS micro-interactions

## 📝 Customization

1. Edit `frontend/src/pages/Home.jsx` — Update your name, bio, social links
2. Edit `frontend/src/pages/About.jsx` — Update skills and timeline
3. Add projects via `POST /api/projects` or edit the `sampleProjects` array
4. Replace the avatar in `About.jsx` with your actual photo
5. Update `backend/.env` with your MongoDB URI

## 🌐 Deployment

- **Frontend**: Vercel / Netlify (`npm run build`)
- **Backend**: Railway / Render / Heroku
- **Database**: MongoDB Atlas (free tier)

---

Built with ❤️ using React, Three.js, Framer Motion & Node.js
