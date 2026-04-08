import { motion } from "framer-motion";

function Card() {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="w-48 h-48 flex items-center justify-center bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-slate-700 cursor-pointer text-gray-900 dark:text-white font-bold text-xl transition-colors duration-300"
    >
      Hover Me
    </motion.div>
  );
}

export default Card;
