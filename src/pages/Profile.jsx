import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { 
  Github, Linkedin, Mail, Code2, 
  Terminal, Database, Palette, Video, PenTool, Layout, Box, Focus, CheckCircle2,
  ExternalLink, PlayCircle, ArrowRight
} from 'lucide-react';

export default function Profile() {
  const skills = [
    {
      category: "Frontend Development",
      icon: <Layout className="w-5 h-5 text-blue-500" />,
      items: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion", "Next.js"]
    },
    {
      category: "Tools & Software",
      icon: <Terminal className="w-5 h-5 text-indigo-500" />,
      items: ["Git & GitHub", "VS Code", "Vite", "Figma", "TradingView"]
    },
    {
      category: "Creative Skills",
      icon: <Palette className="w-5 h-5 text-purple-500" />,
      items: ["Video Editing", "UI/UX Design", "Copywriting", "Day Trading"]
    }
  ];

  const featuredWork = [
    {
      title: "Trading Analytics Dashboard",
      description: "A comprehensive trading journal and analytics platform providing real-time performance insights and risk management metrics.",
      tags: ["React", "Tailwind", "Recharts", "Node.js"],
      link: "#",
      type: "Web App"
    },
    {
      title: "Typing Speed Game",
      description: "Interactive typing race application to test speed and accuracy with real-time WPM calculation and sleek UI.",
      tags: ["React", "Framer Motion", "JavaScript"],
      link: "#",
      type: "Interactive"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* 1. HERO SECTION */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24 min-h-[90vh] flex items-center justify-center">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-12 w-full">
          {/* Left Side: Text and Buttons */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 text-center lg:text-left space-y-8 z-10"
          >
            <div className="space-y-5">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.1]">
                Hi, I'm <br className="hidden lg:block"/>
                <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent drop-shadow-sm">
                  Sumanth Bhat
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200 tracking-wide font-inter">
                Frontend Developer <span className="text-gray-400 font-light px-2">|</span> Trader <span className="text-gray-400 font-light px-2">|</span> Video Editor
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Bridging the gap between code, markets, and media. I build high-performance web applications with a relentless focus on minimal, premium user experiences and robust architecture.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-4">
              <NavLink to="/explore">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.25)] transition-shadow flex items-center gap-2"
                >
                  View Work
                </motion.button>
              </NavLink>
              <a href="mailto:sumanth@example.com">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3.5 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-medium rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-colors flex items-center gap-2"
                >
                  Contact
                </motion.button>
              </a>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-5 pt-4">
              <SocialIcon href="https://github.com/sumanth" icon={<Github size={20} />} />
              <SocialIcon href="https://linkedin.com/in/sumanth" icon={<Linkedin size={20} />} />
              <SocialIcon href="mailto:sumanth@example.com" icon={<Mail size={20} />} />
            </div>
          </motion.div>

          {/* Right Side: Premium Avatar Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="flex-1 flex justify-center lg:justify-end z-10"
          >
            <motion.div 
              animate={{ y: [-15, 15, -15] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="relative group"
            >
              {/* Soft background glow backdrop */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 via-indigo-500/20 to-purple-500/20 blur-[80px] group-hover:blur-[100px] transition-all duration-700" />
              
              {/* Avatar Container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full glass p-2 overflow-hidden flex items-center justify-center z-10 transition-transform duration-700 group-hover:scale-[1.02]">
                <div className="w-full h-full rounded-full overflow-hidden border border-white/20 dark:border-white/10 bg-gray-100 dark:bg-gray-900">
                  <img 
                    src="https://ui-avatars.com/api/?name=Sumanth+Bhat&size=512&background=0a0a0a&color=fff&bold=true" 
                    alt="Sumanth Bhat" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90" 
                  />
                </div>
              </div>
              
              {/* Deco floating element */}
              <motion.div 
                animate={{ rotate: 360, y: [-5, 5, -5] }}
                transition={{ rotate: { repeat: Infinity, duration: 30, ease: "linear" }, y: { repeat: Infinity, duration: 5, ease: "easeInOut" } }}
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-16 h-16 glass rounded-2xl flex items-center justify-center z-20 border border-white/40 dark:border-white/10 shadow-xl"
              >
                <Code2 size={24} className="text-gray-800 dark:text-gray-200" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. SKILLS SECTION */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-10 py-24 border-t border-gray-200/50 dark:border-gray-800/50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">Core Competencies</h2>
          <p className="text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto">
            A curated stack of tools and skills optimized for building high-end digital experiences.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="glass-card p-8 flex flex-col items-start group"
            >
              <div className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm border border-gray-200/50 dark:border-white/10">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight relative">
                {skill.category}
                <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-gray-300 dark:bg-gray-700 group-hover:w-full group-hover:bg-blue-500 transition-all duration-500" />
              </h3>
              <ul className="space-y-4 w-full">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600 dark:text-gray-400 font-light text-sm">
                    <CheckCircle2 size={16} className="text-gray-400 dark:text-gray-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. FEATURED WORK SECTION */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-10 py-24 border-t border-gray-200/50 dark:border-gray-800/50 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">Selected Work</h2>
            <p className="text-gray-600 dark:text-gray-400 font-light max-w-xl">
              Showcasing recent projects that embody minimal design and premium performance.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <NavLink to="/explore" className="group flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2">
              View All Projects 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </NavLink>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredWork.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ y: -8 }}
              className="glass-card p-8 md:p-10 group relative overflow-hidden flex flex-col justify-between min-h-[320px]"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 to-transparent dark:from-white/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <span className="px-4 py-1.5 text-xs font-medium rounded-full border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-black/20 text-gray-600 dark:text-gray-400 tracking-wide uppercase">
                    {project.type}
                  </span>
                  <a href={project.link} className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-400 transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light mb-8 max-w-xl">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 relative z-10 mt-auto pt-6 border-t border-gray-200/50 dark:border-white/10">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium text-gray-500 dark:text-gray-500 px-2 py-1 bg-gray-100 dark:bg-white/5 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

function SocialIcon({ href, icon }) {
  return (
    <motion.a 
      whileHover={{ y: -4, scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-white/30 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.02)] dark:shadow-none"
    >
      {icon}
    </motion.a>
  );
}
