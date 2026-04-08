import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-10 md:p-14 text-center relative overflow-hidden"
        >
          {/* Decorative blur */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"></div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">
            Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Together</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto relative z-10">
            I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12 relative z-10">
            <a href="mailto:hello@example.com" className="flex items-center gap-3 px-6 py-3 rounded-full glass hover:-translate-y-1 transition-transform font-medium">
              <Mail className="text-blue-500" size={20} />
              hello@example.com
            </a>
            <a href="#" className="flex items-center gap-3 px-6 py-3 rounded-full glass hover:-translate-y-1 transition-transform font-medium">
              <Linkedin className="text-blue-600" size={20} />
              LinkedIn
            </a>
            <a href="#" className="flex items-center gap-3 px-6 py-3 rounded-full glass hover:-translate-y-1 transition-transform font-medium">
              <Github className="text-gray-800 dark:text-gray-200" size={20} />
              GitHub
            </a>
          </div>

          <form className="max-w-md mx-auto space-y-4 relative z-10 text-left">
            <div>
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-slate-900/50 border border-gray-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-500 dark:placeholder-gray-400" />
            </div>
            <div>
              <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-slate-900/50 border border-gray-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-500 dark:placeholder-gray-400" />
            </div>
            <div>
              <textarea rows="4" placeholder="Your Message" className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-slate-900/50 border border-gray-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-500 dark:placeholder-gray-400 resize-none"></textarea>
            </div>
            <button type="button" className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold flex items-center justify-center gap-2 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
