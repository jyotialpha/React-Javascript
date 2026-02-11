import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiSun, FiMoon, FiCode } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import Timer from './Timer';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

   useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const navItems = [
    { name: 'Home', href: '#home', isAnchor: true },
    { name: 'About', href: '#about', isAnchor: true },
    { name: 'Projects', href: '#projects', isAnchor: true },
    { name: 'Skills', href: '#skills', isAnchor: true },
    { name: 'Contact', href: '#contact', isAnchor: true },
    { 
      name: 'Java Practice', 
      href: '/java-practice', 
      isAnchor: false,
      icon: <FiCode className="inline mr-1" />
    },
  ];
  
  const location = useLocation();

  const handleNavClick = (e, item) => {
    if (item.isAnchor) {
      e.preventDefault();
      setIsOpen(false);
      
      if (location.pathname !== '/') {
        window.location.href = `/${item.href}`;
      } else {
        setTimeout(() => {
          const element = document.querySelector(item.href);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      setIsOpen(false);
    }
  };
  
  // Render navigation item
  const renderNavItem = (item, index, isMobile = false) => {
    const isActive = !item.isAnchor && location.pathname === item.href;
    const baseClasses = isMobile 
      ? 'flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors'
      : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 font-medium';
      
    const activeClasses = isActive ? 'text-primary-600 dark:text-primary-400' : '';
    
    return (
      <motion.div
        key={item.name}
        initial={{ opacity: 0, y: isMobile ? 0 : -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: isMobile ? 0 : index * 0.1 }}
      >
        {item.isAnchor ? (
          <a
            href={item.href}
            onClick={(e) => handleNavClick(e, item)}
            className={`${baseClasses} ${activeClasses}`}
          >
            {item.icon && <span className="mr-2">{item.icon}</span>}
            {item.name}
          </a>
        ) : (
          <Link
            to={item.href}
            className={`${baseClasses} ${activeClasses} flex items-center`}
            onClick={() => setIsOpen(false)}
          >
            {item.icon && <span className="mr-2">{item.icon}</span>}
            {item.name}
            {isActive && (
              <span className="ml-2 w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full"></span>
            )}
          </Link>
        )}
      </motion.div>
    );
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled || isOpen ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Timer */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Timer />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={item.name} className="flex items-center">
                {renderNavItem(item, index, false)}
              </div>
            ))}
            
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: navItems.length * 0.1 }}
            >
              {isDark ? <FiSun className="text-yellow-400" size={20} /> : <FiMoon className="text-gray-700" size={20} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
            >
              {isDark ? <FiSun className="text-yellow-400" size={20} /> : <FiMoon className="text-gray-700" size={20} />}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item, index) => (
                  <div key={item.name} className="px-2">
                    {renderNavItem(item, index, true)}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
