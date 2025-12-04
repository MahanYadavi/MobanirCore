import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Zap, Building2, Users, CheckCircle2, Quote, ShieldCheck, Clock, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { certificates } from '../data/mockData';

const Home = () => {
  const { t, dir } = useLanguage();

  const partners = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png"
  ];

  const features = [
    { icon: ShieldCheck, title: "Safety First", desc: "Zero-accident policy with strict HSE adherence." },
    { icon: Clock, title: "On-Time Delivery", desc: "Proven track record of meeting strict deadlines." },
    { icon: Leaf, title: "Sustainable", desc: "Eco-friendly practices in every project." },
    { icon: Award, title: "Certified Quality", desc: "ISO 9001 & National Standards compliant." },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80" 
            alt="Industrial Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-950/85 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="inline-block bg-gold-600/20 border border-gold-500/50 rounded-full px-4 py-1 mb-6 backdrop-blur-sm">
              <span className="text-gold-400 text-sm font-bold tracking-wider uppercase">Est. 2005</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {t('heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl border-l-4 border-gold-500 pl-6">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/projects" 
                className="bg-gold-600 hover:bg-gold-500 text-navy-950 font-bold py-4 px-10 rounded-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-gold-600/20 flex items-center gap-2"
              >
                {t('viewProjects')}
                <ArrowRight className={dir === 'rtl' ? 'rotate-180' : ''} />
              </Link>
              <Link 
                to="/contact" 
                className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-navy-950 font-bold py-4 px-10 rounded-lg transition-all"
              >
                {t('contactUs')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us (Features) */}
      <section className="py-20 bg-white dark:bg-navy-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 -mt-32 relative z-20">
              {features.map((f, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white dark:bg-navy-800 p-8 rounded-xl shadow-xl border-b-4 border-gold-500"
                >
                  <div className="bg-navy-50 dark:bg-navy-700 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <f.icon className="h-7 w-7 text-gold-600" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-2">{f.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{f.desc}</p>
                </motion.div>
              ))}
           </div>

           <div className="mt-24 flex flex-col md:flex-row gap-16 items-center">
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-gold-600 font-bold tracking-wider uppercase text-sm">About ElectroGas</h2>
                <h3 className="text-4xl font-bold text-navy-900 dark:text-white leading-tight">
                  Engineering the Infrastructure of Tomorrow
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  {t('aboutDesc')}
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-gold-600 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold text-navy-900 dark:text-white">Expert Engineers</h4>
                      <p className="text-sm text-gray-500">Top-tier talent</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-gold-600 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold text-navy-900 dark:text-white">Modern Tech</h4>
                      <p className="text-sm text-gray-500">Latest equipment</p>
                    </div>
                  </div>
                </div>
                <Link to="/about" className="inline-block mt-4 text-navy-900 dark:text-white font-bold border-b-2 border-gold-500 pb-1 hover:text-gold-600 transition-colors">
                  {t('readMore')}
                </Link>
              </div>
              <div className="w-full md:w-1/2 relative">
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-gold-500 rounded-2xl z-0" />
                <img 
                  src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80" 
                  alt="Engineers working" 
                  className="w-full h-[400px] object-cover rounded-2xl shadow-2xl relative z-10"
                />
              </div>
           </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute right-0 top-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
           <div className="absolute left-0 bottom-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-navy-700">
            <div className="p-6">
              <h3 className="text-5xl font-bold text-gold-500 mb-2">120+</h3>
              <p className="text-gray-300 uppercase tracking-widest text-sm">{t('projectCount')}</p>
            </div>
            <div className="p-6">
              <h3 className="text-5xl font-bold text-gold-500 mb-2">50+</h3>
              <p className="text-gray-300 uppercase tracking-widest text-sm">{t('clientCount')}</p>
            </div>
            <div className="p-6">
              <h3 className="text-5xl font-bold text-gold-500 mb-2">20+</h3>
              <p className="text-gray-300 uppercase tracking-widest text-sm">{t('yearCount')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-20 bg-gray-50 dark:bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="h-12 w-12 text-gold-500 mx-auto mb-6 opacity-50" />
          <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-8">{t('ceoMessage')}</h2>
          <p className="text-2xl italic text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-serif">
            "{t('ceoQuote')}"
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden">
               <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" alt="CEO" className="w-full h-full object-cover" />
            </div>
            <div className="text-left rtl:text-right">
              <h4 className="font-bold text-navy-900 dark:text-white">Dr. Arash Alavi</h4>
              <p className="text-sm text-gold-600">CEO & Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates with Images */}
      <section className="py-20 bg-white dark:bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-4">{t('certificates')}</h2>
            <div className="h-1 w-20 bg-gold-500 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certificates.map((cert) => (
              <motion.div 
                key={cert.id}
                whileHover={{ y: -10 }}
                className="group bg-white dark:bg-navy-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-navy-700"
              >
                <div className="h-64 overflow-hidden bg-gray-100 relative">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/40 transition-colors duration-300 flex items-center justify-center">
                     <Award className="text-white opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300 w-12 h-12" />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-2">{cert.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{cert.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-gray-50 dark:bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-gray-500 dark:text-gray-400 uppercase tracking-widest text-sm font-bold">{t('partners')}</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {partners.map((logo, idx) => (
              <img key={idx} src={logo} alt="Partner" className="h-10 md:h-14 object-contain" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
