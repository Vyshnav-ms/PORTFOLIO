import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';  // Make sure Education is imported
import Experience from './components/Experience';  // Make sure Experience is imported
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education /> {/* Education comes first */}
          <Experience /> {/* Experience comes second */}
          <Projects />
          <Contact />
        </main>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
