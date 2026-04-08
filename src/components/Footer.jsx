import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-8 text-center text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-white/10 mt-auto bg-white/50 dark:bg-slate-900/50 backdrop-blur-md z-40 relative">
      <p className="font-medium">&copy; {new Date().getFullYear()} Sumanth Bhat. All rights reserved.</p>
    </footer>
  );
}
