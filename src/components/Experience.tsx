import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section
      id="experience"
      className="py-20 relative overflow-hidden"
    >
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
        className="absolute top-1/4 -left-32 w-64 h-64 bg-cyan-500 rounded-full filter blur-[128px] opacity-20"
      />
      
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Title */}
          <h2 className="text-4xl font-bold gradient-text text-center mb-8">
            Work Experience
          </h2>

          {/* Experience Cards */}
          <motion.div
            className="glass bg-white p-8 rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
          >
            <h3 className="text-2xl font-semibold text-white-800">Assistant System Manager</h3>
            <p className="text-white-500">March 2024 - September 2024</p>
            <p className="text-white-600 mt-4">
              Worked at UKF Engineering College, assisting with system management, networking teaching, and PC assembling. Gained hands-on experience in managing IT systems and troubleshooting.
            </p>
          </motion.div>

          <motion.div
            className="glass bg-white p-8 rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
          >
            <h3 className="text-2xl font-semibold text-white-800">Junior Python Django Full Stack Developer Intern</h3>
            <p className="text-white-500">Duration: 4 months</p>
            <p className="text-white-600 mt-4">
              Worked on full-stack development projects using Python and Django, gaining practical experience in backend development, database management, and API integration.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
