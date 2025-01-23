import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section
      id="education"
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
        className="absolute top-1/4 -right-32 w-64 h-64 bg-purple-500 rounded-full filter blur-[128px] opacity-20"
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
            Education
          </h2>

          {/* Education Cards */}
          <motion.div
            className="glass bg-white p-8 rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
          >
            <h3 className="text-2xl font-semibold text-white-800">MCA - Master of Computer Applications</h3>
            <p className="text-white-500">2023 - Present</p>
            <p className="text-white-600 mt-4">
              Currently pursuing MCA at LEAD College of Management, where I am enhancing my skills in modern technologies, full-stack development, and data management.
            </p>
          </motion.div>

          <motion.div
            className="glass bg-white p-8 rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
          >
            <h3 className="text-2xl font-semibold text-white-800">BCA - Bachelor of Computer Applications</h3>
            <p className="text-white-500">2019 - 2022</p>
            <p className="text-white-600 mt-4">
              Completed my BCA from Sreenarayana College of Technology with a strong focus on programming, web development, and database management.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
