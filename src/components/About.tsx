import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  'React', 'TypeScript', 'Node.js', 'Python', 'Django', 'Tailwind CSS'
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
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
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-4xl font-bold gradient-text">About Me</h2>
            <p className="text-gray-400 leading-relaxed">
              I'm a passionate Full-Stack Developer currently pursuing an MCA at LEAD College of Management.
              I have experience building responsive, user-friendly web interfaces and working with modern technologies like Python, React, and Django. With a strong foundation in both frontend and backend development, I bring a creative and solution-oriented approach to every project.
              I'm eager to learn, grow, and contribute to creating exceptional digital experiences.
            </p>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="glass px-4 py-2 rounded-full text-cyan-300 hover:text-cyan-200 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Hire Me Button */}
            <div className="mt-8">
              <a
                href="/public/resume/Vyshnav_MS_Resume_2024.pdf" // Replace with the path to your CV file
                download
                className="inline-block px-6 py-3 text-white bg-cyan-500 hover:bg-cyan-400 rounded-lg transition-colors"
              >
                Hire Me
              </a>
            </div>
          </div>

          <div className="relative group">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <img
                src="/public/images/vysh3.png"
                alt="Profile"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 opacity-20 group-hover:opacity-30 transition-opacity"></div>
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity -z-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
