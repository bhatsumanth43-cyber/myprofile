import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

const roles = ["Developer", "Designer", "Learner"];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 150;
    const currentRole = roles[roleIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting && currentText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setCurrentText(currentRole.substring(0, currentText.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block glass px-4 py-2 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/50"
          >
            Welcome to my portfolio
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Sumanth Bhat</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 h-10">
            Frontend Developer | React Enthusiast
          </h2>
          
          <div className="text-xl text-gray-600 dark:text-gray-400 h-8 font-medium">
            I am a <span className="text-blue-500 font-bold">{currentText}</span><span className="animate-pulse text-blue-500">|</span>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
            I build fast, modern, and user-focused web applications with a passion for clean code and beautiful design. Let's create something amazing together.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center gap-2 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></span>
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full glass hover:bg-gray-100/50 dark:hover:bg-white/10 font-medium transition-all flex items-center gap-2">
              Contact Me <Mail size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center mt-12 md:mt-0"
        >
          {/* Avatar / Image Placeholder with animated border */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 shadow-2xl">
            <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center overflow-hidden border-4 border-transparent">
               <img src="https://ui-avatars.com/api/?name=Sumanth+Bhat&size=512&background=0D8ABC&color=fff&rounded=true&bold=true" alt="Sumanth Bhat" className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-500" />
            </div>
            {/* Orbiting elements */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-white/20 dark:border-white/10"
            >
              <div className="absolute -top-2 left-1/2 w-4 h-4 bg-blue-400 rounded-full shadow-[0_0_15px_rgba(96,165,250,0.8)]"></div>
            </motion.div>
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full border border-white/10 dark:border-white/5"
            >
              <div className="absolute top-1/4 -right-2 w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_15px_rgba(192,132,252,0.8)]"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
