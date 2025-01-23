import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 -right-32 w-64 h-64 bg-purple-500 rounded-full filter blur-[128px] opacity-20"
      />
      
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold gradient-text mb-8">Get In Touch</h2>
          <p className="text-gray-400 mb-12">
            I'm always open to new opportunities and interesting projects.
            Feel free to reach out!
          </p>
          
          <div className="glass rounded-2xl p-8 mb-12">
            <form action="https://docs.google.com/forms/u/0/d/e/YOUR_FORM_ID/formResponse" method="POST" className="space-y-6">
              <div>
                <input
                  type="text"
                  name="entry.1234567890"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white placeholder-gray-400 outline-none transition-all"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="entry.0987654321"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white placeholder-gray-400 outline-none transition-all"
                  required
                />
              </div>
              <div>
                <textarea
                  name="entry.1111111111"
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white placeholder-gray-400 outline-none transition-all"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: 'https://github.com/Vyshnav-ms' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/vyshnav-m-s' },
              { icon: Twitter, href: 'https://x.com/ms_vyshnav' },
              { icon: Mail, href: 'mailto:vyshnams1@gmail.com' }
            ].map(({ icon: Icon, href }, index) => (
              <motion.a
                key={href}
                href={href}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -3 }}
                className="glass p-3 rounded-full text-cyan-300 hover:text-cyan-200 transition-colors"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}