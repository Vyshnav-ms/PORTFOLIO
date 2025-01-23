import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, X, Instagram, MessageCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';  // Import WhatsApp from react-icons
import { Link } from 'react-scroll';

export default function Hero() {
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    })
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Vyshnav-ms', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/vyshnav-m-s/', label: 'LinkedIn' },
    { icon: X, href: 'https://x.com/ms_vyshnav', label: 'X' },
    { icon: Instagram, href: 'https://www.instagram.com/vyshnav.ms.26', label: 'Instagram' },
    { icon: FaWhatsapp, href: 'https://wa.me/8547776976', label: 'WhatsApp' }  // Use FaWhatsapp here
  ];

  const name = "Vyshnav M S".split("");

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative overflow-hidden grid-background"
    >
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [-100, 100, -100],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-500 rounded-full filter blur-[128px] opacity-30 mix-blend-screen"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [100, -100, 100],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500 rounded-full filter blur-[128px] opacity-30 mix-blend-screen"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [180, 360, 180],
            y: [-50, 50, -50],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full filter blur-[128px] opacity-20 mix-blend-screen"
        />
      </div>

      <div className="relative flex items-center justify-center">
        <div className="text-center space-y-8 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block glass rounded-2xl p-2 px-4 text-sm text-cyan-300"
          >
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Welcome to my portfolio
            </motion.span>
          </motion.div>
          
          <div className="overflow-hidden">
            <motion.h1 className="text-6xl md:text-8xl font-bold">
              {name.map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block gradient-text"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.h1>
          </div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-2xl md:text-3xl text-gray-400"
          >
            Full-Stack Developer
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex justify-center gap-6"
          >
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 1.8 + index * 0.1,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
                whileHover={{ y: -5 }}
              >
                <div className="glass p-3 rounded-full group-hover:border-cyan-400/50 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-cyan-300 group-hover:text-cyan-200 transition-colors" />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-sm text-cyan-300"
                >
                  {label}
                </motion.div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="flex justify-center gap-4 pt-4"
          >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="glass px-8 py-3 rounded-full text-cyan-300 hover:text-cyan-200 hover:border-cyan-200 transition-all cursor-pointer inline-block group relative overflow-hidden"
            >
              <motion.span
                className="relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                View My Work
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div 
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <Link to="about" smooth={true} duration={500} className="cursor-pointer">
          <ChevronDown className="w-8 h-8 text-cyan-300" />
        </Link>
      </motion.div>

      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noise)" opacity="0.08"/%3E%3C/svg%3E")',
          opacity: 0.08
        }}
      />
    </motion.section>
  );
}
