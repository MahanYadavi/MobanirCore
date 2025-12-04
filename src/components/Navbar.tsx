import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, Moon, Sun, Globe, Zap } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { t, language, setLanguage, dir } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: t('home'), path: '/' },
    { name: t('projects'), path: '/projects' },
    { name: t('about'), path: '/about' },
    { name: t('careers'), path: '/careers' },
    { name: t('news'), path: '/news' },
    { name: t('contact'), path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-navy-950/95 backdrop-blur-md border-b border-gray-200 dark:border-navy-800 shadow-lg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-navy-900 dark:bg-gold-600 p-2 rounded-lg transition-colors duration-300 shadow-lg group-hover:scale-105 transform">
              <Zap className="h-6 w-6 text-gold-500 dark:text-navy-900" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-navy-900 dark:text-white leading-none tracking-tight">ELECTRO<span className="text-gold-600">GAS</span></span>
              <span className="text-[10px] text-gray-500 dark:text-gray-400 tracking-[0.2em] uppercase">Contracting</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-bold uppercase tracking-wide transition-colors hover:text-gold-600 dark:hover:text-gold-400 relative py-1",
                  location.pathname === link.path 
                    ? "text-gold-600 dark:text-gold-400" 
                    : "text-navy-800 dark:text-gray-300"
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div 
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-600 dark:bg-gold-400"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Controls */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors bg-gray-100 dark:bg-navy-800 px-3 py-1.5 rounded-full">
                <Globe className="h-4 w-4" />
                <span className="uppercase text-xs font-bold">{language}</span>
              </button>
              <div className={cn(
                "absolute top-full mt-2 w-32 bg-white dark:bg-navy-900 rounded-md shadow-xl py-1 border border-gray-100 dark:border-navy-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50",
                dir === 'rtl' ? 'left-0' : 'right-0'
              )}>
                <button onClick={() => setLanguage('en')} className="block w-full text-left rtl:text-right px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gold-50 dark:hover:bg-navy-800 hover:text-gold-600">English</button>
                <button onClick={() => setLanguage('fa')} className="block w-full text-left rtl:text-right px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gold-50 dark:hover:bg-navy-800 hover:text-gold-600">فارسی</button>
                <button onClick={() => setLanguage('ar')} className="block w-full text-left rtl:text-right px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gold-50 dark:hover:bg-navy-800 hover:text-gold-600">العربية</button>
              </div>
            </div>

            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-navy-800 hover:bg-gold-100 dark:hover:bg-navy-700 text-navy-900 dark:text-gold-400 transition-colors"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
             <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-navy-800 text-navy-900 dark:text-gold-400 transition-colors"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-navy-900 dark:text-white">
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white dark:bg-navy-950 border-b border-gray-200 dark:border-navy-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-bold text-navy-800 dark:text-gray-200 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-gray-50 dark:hover:bg-navy-900"
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t border-gray-200 dark:border-navy-800 my-2 pt-4">
                <div className="flex justify-center gap-4 p-2">
                  <button onClick={() => { setLanguage('en'); setIsOpen(false); }} className={cn("px-4 py-2 rounded-lg font-bold text-sm", language === 'en' ? "bg-gold-600 text-white" : "bg-gray-100 dark:bg-navy-800 text-gray-500")}>EN</button>
                  <button onClick={() => { setLanguage('fa'); setIsOpen(false); }} className={cn("px-4 py-2 rounded-lg font-bold text-sm", language === 'fa' ? "bg-gold-600 text-white" : "bg-gray-100 dark:bg-navy-800 text-gray-500")}>FA</button>
                  <button onClick={() => { setLanguage('ar'); setIsOpen(false); }} className={cn("px-4 py-2 rounded-lg font-bold text-sm", language === 'ar' ? "bg-gold-600 text-white" : "bg-gray-100 dark:bg-navy-800 text-gray-500")}>AR</button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
