import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Users, Target, History, Eye, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white dark:bg-navy-950 min-h-screen">
      {/* Header */}
      <div className="bg-navy-900 py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1503428593586-e225b476b849?auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10">
            <h1 className="text-5xl font-bold text-white mb-4">{t('about')}</h1>
            <p className="text-gold-500 text-xl font-light">{t('aboutTitle')}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-16 mb-24">
            <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-6 relative inline-block">
                    Who We Are
                    <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gold-500"></span>
                </h2>
                <div className="prose dark:prose-invert max-w-none text-lg text-gray-600 dark:text-gray-300 space-y-6">
                    <p>{t('aboutDesc')}</p>
                    <p>
                        Since our inception, we have been driven by a passion for engineering excellence. We handle everything from initial feasibility studies to final commissioning, ensuring seamless project delivery.
                    </p>
                </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 dark:bg-navy-800 rounded-xl border-l-4 border-gold-500">
                    <History className="w-8 h-8 text-gold-600 mb-4" />
                    <h3 className="font-bold text-lg mb-2 dark:text-white">{t('ourHistory')}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t('historyDesc')}</p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-navy-800 rounded-xl border-l-4 border-navy-500">
                    <Eye className="w-8 h-8 text-navy-600 dark:text-white mb-4" />
                    <h3 className="font-bold text-lg mb-2 dark:text-white">{t('ourVision')}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t('visionDesc')}</p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-navy-800 rounded-xl border-l-4 border-gold-500">
                    <ShieldCheck className="w-8 h-8 text-gold-600 mb-4" />
                    <h3 className="font-bold text-lg mb-2 dark:text-white">Safety</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">ISO 45001 Certified operations.</p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-navy-800 rounded-xl border-l-4 border-navy-500">
                    <Users className="w-8 h-8 text-navy-600 dark:text-white mb-4" />
                    <h3 className="font-bold text-lg mb-2 dark:text-white">Team</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Over 200 dedicated professionals.</p>
                </div>
            </div>
        </div>

        {/* Map Section */}
        <div className="mb-16">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-navy-900 dark:text-white flex items-center justify-center gap-2">
                    <MapPin className="text-gold-600" />
                    {t('location')}
                </h2>
            </div>
            <div className="w-full h-[400px] bg-gray-200 rounded-xl overflow-hidden shadow-lg border border-gray-300 dark:border-navy-700">
                {/* Google Map Iframe */}
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207371.9779492671!2d51.20973317053622!3d35.69701178661708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3dcd9%3A0xf0b3697c567024bc!2sTehran%2C%20Tehran%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1709220000000!5m2!1sen!2s" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                ></iframe>
            </div>
        </div>

      </div>
    </div>
  );
};

export default About;
