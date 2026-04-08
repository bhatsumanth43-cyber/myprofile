import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Keyboard, Monitor, LayoutTemplate, Zap, Blocks } from 'lucide-react';

export default function Explore() {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Web Apps', 'Mini Projects', 'UI Components'];

  const projects = [
    {
      id: 1,
      title: 'Typing Speed Game',
      category: 'Mini Projects',
      tag: 'Interactive',
      description: 'Test your typing speed and accuracy with a real-time typing race application.',
      tech: ['React', 'JavaScript', 'Tailwind CSS'],
      github: '#',
      live: 'https://your-typing-game.com'
    },
    {
      id: 2,
      title: 'Social Dashboard',
      category: 'Web Apps',
      tag: 'Full-Stack',
      description: 'A modern analytics dashboard with real-time data visualization and a premium UI.',
      tech: ['React', 'Node.js', 'Recharts'],
      github: '#',
      live: '#'
    },
    {
      id: 3,
      title: 'E-Commerce Platform',
      category: 'Web Apps',
      tag: 'E-Commerce',
      description: 'Full-stack shopping application featuring secure authentication and cart functionality.',
      tech: ['React', 'MongoDB', 'Stripe'],
      github: '#',
      live: '#'
    },
    {
      id: 4,
      title: 'Glassmorphism Buttons',
      category: 'UI Components',
      tag: 'Design System',
      description: 'A collection of modern, fully responsive glassmorphism buttons with Framer Motion hover effects.',
      tech: ['Framer Motion', 'Tailwind CSS'],
      github: '#',
      live: '#'
    },
    {
      id: 5,
      title: 'Weather App',
      category: 'Mini Projects',
      tag: 'API',
      description: 'Dynamic weather application fetching real-time data with beautiful animated weather icons.',
      tech: ['JavaScript', 'API', 'React'],
      github: '#',
      live: '#'
    }
  ];

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } }
  };

  return (
    <div className="w-full flex flex-col items-center py-24 px-6 lg:px-10">
      <main className="w-full max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            Explore
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-light max-w-2xl">
            A complete archive of projects, UI experiments, and web applications.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border flex items-center gap-2 ${
                activeTab === tab 
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-transparent shadow-md' 
                  : 'bg-white/50 dark:bg-white/5 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {tab === 'All' && <Blocks size={16} />}
              {tab === 'Web Apps' && <Monitor size={16} />}
              {tab === 'Mini Projects' && <Zap size={16} />}
              {tab === 'UI Components' && <LayoutTemplate size={16} />}
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ y: -6 }}
                className="glass-card p-8 group flex flex-col justify-between"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full border bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-400 border-gray-200 uppercase tracking-wide dark:border-white/10">
                    {project.tag}
                  </span>
                  <a href={project.live} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 font-light leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex justify-between items-end mt-auto pt-6 border-t border-gray-200/50 dark:border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors p-1">
                    <Github size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>
    </div>
  );
}
