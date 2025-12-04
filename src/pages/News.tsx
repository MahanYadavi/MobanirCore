import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { newsItems } from '../data/mockData';
import { Calendar, ArrowRight } from 'lucide-react';

const News = () => {
  const { t, dir } = useLanguage();

  return (
    <div className="bg-white dark:bg-navy-950 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-navy-900 dark:text-white mb-4">{t('news')}</h1>
          <div className="h-1 w-20 bg-gold-500 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
                <div key={item.id} className="bg-white dark:bg-navy-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 dark:border-navy-700 flex flex-col">
                    <div className="h-48 overflow-hidden">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                        <div className="flex items-center gap-2 text-sm text-gold-600 mb-3">
                            <Calendar className="w-4 h-4" />
                            <span>{item.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 flex-grow">
                            {item.summary}
                        </p>
                        <button className="text-navy-900 dark:text-gold-500 font-bold text-sm uppercase tracking-wide flex items-center gap-2 hover:gap-3 transition-all">
                            {t('readMore')} <ArrowRight className={dir === 'rtl' ? 'rotate-180 w-4 h-4' : 'w-4 h-4'} />
                        </button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default News;
