import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/ui/Navbar';
import CustomCursor from './components/ui/CustomCursor';
import LoadingScreen from './components/ui/LoadingScreen';
import ScrollProgress from './components/ui/ScrollProgress';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Hackathons from './pages/Hackathons';
import Events from './pages/Events';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';
import { useState, useEffect } from 'react';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hackathons" element={<Hackathons />} />
        <Route path="/events" element={<Events />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => { setTimeout(() => setLoading(false), 2400); }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="noise">
          <CustomCursor />
          <ScrollProgress />
          {loading ? (
            <LoadingScreen />
          ) : (
            <>
              <Navbar />
              <AnimatedRoutes />
            </>
          )}
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
