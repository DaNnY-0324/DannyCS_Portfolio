'use client';

import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative p-2 rounded-full overflow-hidden ${
        isDark ? 'bg-gray-900' : 'bg-gray-100'
      }`}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      initial={false}
      animate={{ 
        backgroundColor: isDark ? 'rgb(26, 26, 26)' : 'rgb(245, 245, 245)'
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative z-10">
        {isDark ? (
          <motion.div
            initial={{ rotate: -45, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 45, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <FiMoon className="text-red-600 w-5 h-5" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ rotate: 45, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -45, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <FiSun className="text-red-600 w-5 h-5" />
          </motion.div>
        )}
      </div>
      
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 rounded-full"
        initial={false}
        animate={{
          background: isDark 
            ? 'radial-gradient(circle, rgba(26,26,26,1) 0%, rgba(0,0,0,1) 100%)' 
            : 'radial-gradient(circle, rgba(245,245,245,1) 0%, rgba(229,229,229,1) 100%)'
        }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Stars or sun rays */}
      {isDark && (
        <>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-red-400 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                x: Math.random() * 30 - 15,
                y: Math.random() * 30 - 15,
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.3,
                repeatType: 'reverse'
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </>
      )}
      
      {!isDark && (
        <>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-red-500"
              style={{
                width: '2px',
                height: '10px',
                left: '50%',
                top: '50%',
                transformOrigin: '0 0',
                transform: `rotate(${i * 45}deg) translateY(-20px)`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            />
          ))}
        </>
      )}
    </motion.button>
  );
}
