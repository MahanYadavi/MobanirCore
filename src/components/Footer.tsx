import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Zap, MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-gold-600 p-1.5 rounded-lg">
                <Zap className="h-5 w-5 text-navy-900" />
              </div>
              <span className="font-bold text-xl">ELECTRO<span className="text-gold-500">GAS</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t('aboutDesc')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold text-gold-500 mb-6">{t('services')}</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer transition-colors">{t('electrical')}</li>
              <li className="hover:text-white cursor-pointer transition-colors">{t('gas')}</li>
              <li className="hover:text-white cursor-pointer transition-colors">{t('piping')}</li>
              <li className="hover:text-white cursor-pointer transition-colors">{t('construction')}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gold-500 mb-6">{t('contactUs')}</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold-600 shrink-0" />
                <span>{t('address')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold-600 shrink-0" />
                <span>{t('phone')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold-600 shrink-0" />
                <span>{t('email')}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter/Map Placeholder */}
          <div>
            <h3 className="text-lg font-semibold text-gold-500 mb-6">{t('latestNews')}</h3>
            <div className="bg-navy-800 rounded-lg p-4 h-40 flex items-center justify-center text-gray-500 text-xs border border-navy-700">
              Map / Newsletter Widget
            </div>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-8 text-center text-sm text-gray-500">
          <p>{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
