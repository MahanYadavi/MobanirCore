import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-gray-50 dark:bg-navy-900 min-h-screen pb-12">
      {/* Header */}
      <div className="bg-navy-900 pt-24 pb-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">{t('contact')}</h1>
          <div className="h-1 w-20 bg-gold-500 mx-auto" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Info Box */}
            <div className="bg-white dark:bg-navy-800 p-8 rounded-lg shadow-lg border-t-4 border-gold-500">
              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-6">{t('contactUs')}</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-navy-50 dark:bg-navy-700 p-3 rounded-lg shrink-0">
                    <MapPin className="h-6 w-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 dark:text-white mb-1">Headquarters</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{t('address')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-navy-50 dark:bg-navy-700 p-3 rounded-lg shrink-0">
                    <Phone className="h-6 w-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 dark:text-white mb-1">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm dir-ltr">{t('phone')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-navy-50 dark:bg-navy-700 p-3 rounded-lg shrink-0">
                    <Mail className="h-6 w-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 dark:text-white mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{t('email')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-navy-50 dark:bg-navy-700 p-3 rounded-lg shrink-0">
                    <Clock className="h-6 w-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 dark:text-white mb-1">Working Hours</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Sat - Wed: 8:00 - 17:00</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Thu: 8:00 - 13:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-navy-800 p-8 rounded-lg shadow-lg h-full">
              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-8">{t('sendMessage')}</h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('name')}</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-navy-600 bg-gray-50 dark:bg-navy-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('email')}</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-navy-600 bg-gray-50 dark:bg-navy-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('subject')}</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-navy-600 bg-gray-50 dark:bg-navy-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('message')}</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-navy-600 bg-gray-50 dark:bg-navy-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button 
                    type="submit" 
                    className="w-full md:w-auto bg-gold-600 hover:bg-gold-500 text-navy-950 font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-gold-600/20"
                  >
                    {t('send')}
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
           <div className="bg-white dark:bg-navy-800 p-2 rounded-xl shadow-lg border border-gray-200 dark:border-navy-700">
              <div className="w-full h-[450px] rounded-lg overflow-hidden relative bg-gray-200">
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207371.9779492671!2d51.20973317053622!3d35.69701178661708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3dcd9%3A0xf0b3697c567024bc!2sTehran%2C%20Tehran%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1709220000000!5m2!1sen!2s" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location Map"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
