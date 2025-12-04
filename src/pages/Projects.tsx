import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Flame, Hammer, Filter } from 'lucide-react';
import { generateProjects, Category } from '../data/mockData';

const Projects = () => {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState<Category>('All');
  const [visibleCount, setVisibleCount] = useState(12);

  // Use centralized data generator
  const projects = useMemo(() => generateProjects(120), []);

  const filteredProjects = projects.filter(p => filter === 'All' || p.category === filter);
  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const categories: Category[] = ['All', 'Electrical', 'Gas', 'Piping', 'Construction'];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy-900 dark:text-white mb-4">{t('allProjects')}</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('projectsPageDesc')}
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setFilter(cat); setVisibleCount(12); }}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === cat 
                  ? 'bg-gold-600 text-white shadow-lg scale-105' 
                  : 'bg-white dark:bg-navy-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-navy-700'
              }`}
            >
              {cat === 'All' ? t('allProjects') : t(cat.toLowerCase())}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode='popLayout'>
            {visibleProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-navy-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title[language]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-2 right-2 bg-navy-900/80 text-gold-500 text-xs px-2 py-1 rounded backdrop-blur-sm">
                    {project.year}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    {project.category === 'Electrical' && <Zap className="w-4 h-4 text-gold-600" />}
                    {project.category === 'Gas' && <Flame className="w-4 h-4 text-gold-600" />}
                    {project.category === 'Piping' && <Filter className="w-4 h-4 text-gold-600" />}
                    {project.category === 'Construction' && <Hammer className="w-4 h-4 text-gold-600" />}
                    <span className="text-xs font-semibold text-gold-600 uppercase tracking-wider">{t(project.category.toLowerCase())}</span>
                  </div>
                  <h3 className="font-bold text-navy-900 dark:text-white text-lg mb-1">{project.title[language]}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{project.location[language]}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More */}
        {visibleCount < filteredProjects.length && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setVisibleCount(prev => prev + 12)}
              className="bg-navy-900 dark:bg-gold-600 text-white dark:text-navy-900 font-bold py-3 px-8 rounded-sm hover:opacity-90 transition-opacity"
            >
              {t('loadMore')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
