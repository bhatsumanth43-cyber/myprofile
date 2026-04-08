import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Code, Zap, Compass, Award, ExternalLink } from 'lucide-react';

export default function Education() {
  const educationData = [
    {
      id: 1,
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Your College Name, India',
      duration: '2022 – 2025',
      score: '8.5 CGPA',
      focus: [
        'Data Structures & Algorithms',
        'Web Development (React, Node.js)',
        'Database Management Systems'
      ],
      icon: <GraduationCap className="w-6 h-6 text-gray-900 dark:text-white" />
    },
    {
      id: 2,
      degree: 'Higher Secondary Education',
      institution: 'Your High School Name, India',
      duration: '2020 – 2022',
      score: '90%',
      focus: [
        'Physics, Chemistry, Mathematics',
        'Computer Science Fundamentals'
      ],
      icon: <BookOpen className="w-6 h-6 text-gray-900 dark:text-white" />
    }
  ];

  const certifications = [
    { title: 'React Development', issuer: 'Udemy', icon: <Code size={18} /> },
    { title: 'JavaScript Essentials', issuer: 'FreeCodeCamp', icon: <Zap size={18} /> },
    { title: 'Frontend Development', issuer: 'Coursera', icon: <Compass size={18} /> }
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
    <div className="w-full flex flex-col items-center py-24 px-6 lg:px-10">
        <main className="w-full max-w-4xl mx-auto space-y-24">
            
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-10"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
                Education
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 font-light max-w-2xl">
                My academic background, active learning paths, and certifications.
              </p>
            </motion.div>

            {/* Timeline Section */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-6 md:left-8 top-10 bottom-10 w-[1px] bg-gray-200 dark:bg-gray-800" />

              <div className="space-y-12">
                {educationData.map((item, index) => (
                  <TimelineItem key={item.id} item={item} delay={index * 0.1} />
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                <Award className="text-blue-500" /> Certifications & Courses
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {certifications.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                    className="glass-card p-6 flex flex-col gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 border border-gray-200/50 dark:border-white/10 group-hover:scale-110 group-hover:text-blue-500 transition-all duration-300 shrink-0">
                      {cert.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-base mb-1">{cert.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-light">{cert.issuer}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
        </main>
    </div>
  );
}

function TimelineItem({ item, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className="relative flex items-start gap-8 group"
    >
      {/* Timeline Node */}
      <div className="relative z-10 flex items-center justify-center w-12 h-12 shrink-0 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-black group-hover:border-blue-500 transition-colors duration-300 ml-0 md:ml-2">
        {item.icon}
      </div>

      {/* Content Card */}
      <div className="flex-1 mt-1">
        <div className="glass-card p-8 group overflow-hidden">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">{item.degree}</h3>
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wide text-gray-600 dark:text-gray-300 uppercase rounded-full bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10">
              {item.duration}
            </span>
          </div>
          
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-base font-medium text-gray-700 dark:text-gray-300">{item.institution}</span>
            <span className="text-gray-400 dark:text-gray-600 px-2">•</span>
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Score: {item.score}
            </span>
          </div>
          
          <div>
            <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-3">Key Focus Areas</h4>
            <div className="flex flex-wrap gap-2">
              {item.focus.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-300 text-sm font-light rounded-md border border-gray-200/50 dark:border-white/5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
