import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Focus } from 'lucide-react';

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Me</span>
            </motion.h2>
            <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></motion.div>
          </div>

          <motion.div variants={itemVariants} className="glass-card p-8 md:p-12 text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
            <p>
              Hi there! I'm Sumanth, a passionate Frontend Developer deeply interested in crafting immersive and interactive web experiences. 
              With a strong foundation in modern web technologies, I love translating complex problems into clean, efficient, and maintainable code.
            </p>
            <p>
              My journey in web development is driven by continuous learning and a desire to build products that not only look visually stunning but also provide an intuitive user experience. From architecting scalable React applications to fine-tuning animations for that perfect "feel", I sweat the small details.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200 dark:border-white/10">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/40 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-2 shadow-lg">
                  <Code size={28} />
                </div>
                <h3 className="font-semibold text-xl">Clean Code</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Writing maintainable, scalable, and modular architecture.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/40 dark:to-purple-800/40 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-2 shadow-lg">
                  <Focus size={28} />
                </div>
                <h3 className="font-semibold text-xl">Pixel Perfect</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Ensuring designs are accurately translated into the browser.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-900/40 dark:to-pink-800/40 flex items-center justify-center text-pink-600 dark:text-pink-400 mb-2 shadow-lg">
                  <Terminal size={28} />
                </div>
                <h3 className="font-semibold text-xl">Modern Stack</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Leveraging the latest tools like React, Tailwind, and Vite.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
