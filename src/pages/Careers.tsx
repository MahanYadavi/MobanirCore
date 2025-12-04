import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Briefcase, Send } from 'lucide-react';
import { jobOpenings } from '../data/mockData';

const Careers = () => {
  const { t, language } = useLanguage();

  return (
    <div className="bg-gray-50 dark:bg-navy-900 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-navy-900 dark:text-white mb-4">{t('careers')}</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            {t('careersDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Job List */}
            <div className="lg:col-span-2 space-y-6">
                <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-6 flex items-center gap-2">
                    <Briefcase className="text-gold-600" />
                    {t('openPositions')}
                </h2>
                
                {jobOpenings.length > 0 ? (
                    jobOpenings.map((job) => (
                        <div key={job.id} className="bg-white dark:bg-navy-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-navy-700 hover:border-gold-500 transition-colors">
                            <div className="flex justify-between items-start flex-wrap gap-4">
                                <div>
                                    <h3 className="text-xl font-bold text-navy-900 dark:text-white">{job.title[language]}</h3>
                                    <div className="flex gap-3 mt-2 text-sm text-gray-500 dark:text-gray-400">
                                        <span className="bg-gray-100 dark:bg-navy-900 px-2 py-1 rounded">{job.type[language]}</span>
                                        <span className="bg-gray-100 dark:bg-navy-900 px-2 py-1 rounded">{job.location[language]}</span>
                                    </div>
                                    <p className="mt-4 text-gray-600 dark:text-gray-300">{job.desc[language]}</p>
                                </div>
                                <button className="bg-navy-900 dark:bg-gold-600 text-white dark:text-navy-900 px-6 py-2 rounded font-bold hover:opacity-90 transition-opacity">
                                    {t('applyNow')}
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 italic">{t('noPositions')}</p>
                )}
            </div>

            {/* General Application */}
            <div className="lg:col-span-1">
                <div className="bg-white dark:bg-navy-800 p-8 rounded-lg shadow-lg sticky top-24">
                    <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-4">{t('generalApp')}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                        {t('generalAppDesc')}
                    </p>
                    <form className="space-y-4">
                        <input type="text" placeholder={t('name')} className="w-full px-4 py-2 rounded border border-gray-300 dark:border-navy-600 bg-transparent dark:text-white" />
                        <input type="email" placeholder={t('email')} className="w-full px-4 py-2 rounded border border-gray-300 dark:border-navy-600 bg-transparent dark:text-white" />
                        <textarea placeholder={t('coverLetter')} rows={3} className="w-full px-4 py-2 rounded border border-gray-300 dark:border-navy-600 bg-transparent dark:text-white"></textarea>
                        <button type="submit" className="w-full bg-gold-600 text-white font-bold py-3 rounded hover:bg-gold-500 transition-colors flex items-center justify-center gap-2">
                            {t('send')} <Send className="w-4 h-4" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
