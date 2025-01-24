import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

// Import the image from the 'src/images' folder
import lumosScreenshot from '/images/lumoslearning.png'; // Replace with your actual image path

const projects = [
  {
    title: 'Lumos Learning App',
    description: 'Lumos Learning App is an interactive tool for intellectually gifted students to learn the English alphabet. It features animated letter writing, phonetic voiceovers, and an interactive drawing canvas. Built with React.js, TypeScript, HTML5 Canvas, and styled with Tailwind CSS, the app is optimized for all devices and hosted on Vercel, offering a fun and engaging learning experience.',
    image: lumosScreenshot, // Use the imported image
    github: 'https://github.com/Vyshnav-ms/Lumos-learning-app.git',
    live: 'https://lumos-learning-app.vercel.app/'
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const projectVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  const handleRedirect = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [360, 180, 0],
          x: [-100, 100, -100]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/4 -left-32 w-96 h-96 bg-cyan-500 rounded-full filter blur-[128px] opacity-20 mix-blend-screen"
      />
      
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center gradient-text mb-12"
        >
          Featured Projects
        </motion.h2>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={projectVariants}
              className="glass rounded-2xl overflow-hidden group transform-gpu hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="relative">
                <img
                  src={project.image} // Use the imported image here
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center backdrop-blur-sm"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="space-x-4"
                  >
                    <a href={project.github} className="text-white hover:text-cyan-200 inline-block">
                      <Github className="w-6 h-6" />
                    </a>
                    <a href={project.live} className="text-white hover:text-cyan-200 inline-block">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </motion.div>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
                {/* Add a button to redirect to the live project */}
                <button
                  onClick={() => handleRedirect(project.live)}
                  className="mt-4 px-6 py-2 bg-cyan-500 text-white font-semibold rounded-md hover:bg-cyan-600 transition-all"
                >
                  View Project
                </button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
