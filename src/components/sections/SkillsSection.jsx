import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Palette, Blocks, Code2, GitMerge, AppWindow, LineChart, Video, Terminal } from 'lucide-react';

export default function SkillsSection() {
  const customVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const categories = [
    {
      title: "Frontend",
      icon: <Blocks className="text-blue-500 mb-4" size={32} />,
      skills: [
        { name: "React", icon: <Code2 size={16} /> },
        { name: "HTML5", icon: <Layout size={16} /> },
        { name: "CSS3 / Tailwind", icon: <Palette size={16} /> },
        { name: "JavaScript", icon: <Terminal size={16} /> }
      ]
    },
    {
      title: "Tools",
      icon: <AppWindow className="text-purple-500 mb-4" size={32} />,
      skills: [
        { name: "Git & GitHub", icon: <GitMerge size={16} /> },
        { name: "VS Code", icon: <Code2 size={16} /> },
        { name: "CapCut", icon: <Video size={16} /> }
      ]
    },
    {
      title: "Other",
      icon: <LineChart className="text-emerald-500 mb-4" size={32} />,
      skills: [
        { name: "Trading", icon: <LineChart size={16} /> },
        { name: "Video Editing", icon: <Video size={16} /> }
      ]
    }
  ];

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="w-full py-20 border-t border-gray-200 dark:border-slate-800"
    >
      <motion.div variants={customVariants} className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent inline-block mb-4">
          Technical Arsenal
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A blend of development skills, creative tools, and unique interests that help me build well-rounded digital experiences.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {categories.map((category, idx) => (
          <motion.div
            key={idx}
            variants={customVariants}
            whileHover={{ y: -5 }}
            className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-gray-200 dark:border-slate-800 p-8 rounded-2xl shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-lg dark:hover:shadow-[0_4px_20px_rgba(34,211,238,0.1)] hover:border-blue-200 dark:hover:border-cyan-900 transition-all duration-300 group"
          >
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap justify-center gap-3 w-full">
                {category.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-cyan-900/40 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full cursor-default transition-colors border border-transparent hover:border-blue-200 dark:hover:border-cyan-800"
                  >
                    <span className="text-blue-500 opacity-80">{skill.icon}</span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
