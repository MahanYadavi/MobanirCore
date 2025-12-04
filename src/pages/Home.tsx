import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Award, CheckCircle2, Quote, ShieldCheck, Clock, Leaf, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { certificates } from '../data/mockData';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const Home = () => {
  const { t, dir, language } = useLanguage();

  // Partners Data
  const partners = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    name: `Partner ${i + 1}`,
    logo: `https://ui-avatars.com/api/?name=P+${i+1}&background=random&color=fff&size=128&font-size=0.5`
  }));

  const features = [
    { icon: ShieldCheck, title: t('safetyFirst'), desc: t('safetyDesc') },
    { icon: Clock, title: t('onTime'), desc: t('onTimeDesc') },
    { icon: Leaf, title: t('sustainable'), desc: t('sustainableDesc') },
    { icon: Award, title: t('certified'), desc: t('certifiedDesc') },
  ];

  // Slider Logic
  const [currentCertIndex, setCurrentCertIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerSlide(1);
      else setItemsPerSlide(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentCertIndex((prev) => (prev + 1) % Math.ceil(certificates.length / itemsPerSlide));
  };

  const prevSlide = () => {
    setCurrentCertIndex((prev) => (prev - 1 + Math.ceil(certificates.length / itemsPerSlide)) % Math.ceil(certificates.length / itemsPerSlide));
  };

  const visibleCertificates = certificates.slice(
    currentCertIndex * itemsPerSlide, 
    (currentCertIndex * itemsPerSlide) + itemsPerSlide
  );

  return (
    <div className="overflow-hidden bg-white dark:bg-dark-bg transition-colors duration-500 font-sans">
      
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80" 
            alt="Industrial Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-950/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center lg:text-start"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-gold-600/20 border border-gold-500/50 rounded-full px-4 py-1 mb-6 backdrop-blur-md mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
              <span className="text-gold-400 text-xs font-bold tracking-wider uppercase">Est. 2005</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              {t('heroTitle')}
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t('heroSubtitle')}
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                to="/projects" 
                className="bg-gold-600 hover:bg-gold-500 text-navy-950 font-bold py-3 px-8 rounded-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-gold-600/20 flex items-center justify-center gap-2"
              >
                {t('viewProjects')}
                <ArrowRight className={dir === 'rtl' ? 'rotate-180 w-5 h-5' : 'w-5 h-5'} />
              </Link>
              <Link 
                to="/contact" 
                className="bg-white/5 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-navy-950 font-bold py-3 px-8 rounded-lg transition-all"
              >
                {t('contactUs')}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-20 -mt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div 
             variants={staggerContainer}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
           >
              {features.map((f, i) => (
                <motion.div 
                  key={i}
                  variants={fadeInUp}
                  className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-xl border-t-4 border-gold-500 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="bg-navy-50 dark:bg-navy-900/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <f.icon className="h-6 w-6 text-gold-600" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 dark:text-white mb-2">{f.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
           </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col lg:flex-row gap-16 items-center">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="w-full lg:w-1/2 space-y-6"
              >
                <div className="space-y-2">
                  <h2 className="text-gold-600 font-bold tracking-widest uppercase text-xs">{t('aboutTitleSmall')}</h2>
                  <h3 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white leading-tight">
                    {t('aboutHeading')}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                  {t('aboutDesc')}
                </p>
                
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-gold-600 mt-1 shrink-0 w-5 h-5" />
                    <div>
                      <h4 className="font-bold text-navy-900 dark:text-white text-base">{t('expertEngineers')}</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{t('topTalent')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-gold-600 mt-1 shrink-0 w-5 h-5" />
                    <div>
                      <h4 className="font-bold text-navy-900 dark:text-white text-base">{t('modernTech')}</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{t('latestEquip')}</p>
                    </div>
                  </div>
                </div>
                
                <Link to="/about" className="inline-flex items-center gap-2 text-navy-900 dark:text-gold-500 font-bold text-base border-b-2 border-gold-500 pb-1 hover:text-gold-600 transition-colors mt-4">
                  {t('readMore')} <ArrowRight className={dir === 'rtl' ? 'rotate-180 w-4 h-4' : 'w-4 h-4'} />
                </Link>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 relative"
              >
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-gold-500/30 rounded-2xl z-0 hidden lg:block" />
                <img 
                  src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80" 
                  alt="Engineers working" 
                  className="w-full h-[400px] object-cover rounded-2xl shadow-xl relative z-10"
                />
              </motion.div>
           </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-navy-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            {[
              { val: "120+", label: t('projectCount') },
              { val: "50+", label: t('clientCount') },
              { val: "20+", label: t('yearCount') }
            ].map((stat, idx) => (
              <motion.div variants={scaleIn} key={idx} className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <h3 className="text-5xl font-bold text-gold-500 mb-2">{stat.val}</h3>
                <p className="text-gray-300 uppercase tracking-widest text-xs font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-20 bg-gray-50 dark:bg-dark-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Quote className="h-12 w-12 text-gold-500 mx-auto mb-6 opacity-50" />
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-8">{t('ceoMessage')}</h2>
            <p className="text-xl md:text-2xl italic text-gray-600 dark:text-gray-300 mb-10 leading-relaxed font-serif">
              "{t('ceoQuote')}"
            </p>
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="w-20 h-20 bg-gray-300 rounded-full overflow-hidden border-2 border-gold-500 shadow-md">
                 <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" alt="CEO" className="w-full h-full object-cover" />
              </div>
              <div className="text-center">
                <h4 className="text-lg font-bold text-navy-900 dark:text-white">{t('ceoName')}</h4>
                <p className="text-gold-600 text-sm font-medium">{t('ceoTitle')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certificates Slider */}
      <section className="py-20 bg-white dark:bg-dark-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-gold-600 font-bold tracking-widest uppercase text-xs mb-2">{t('certified')}</h2>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white">{t('certificates')}</h2>
            </div>
            
            <div className="flex gap-2">
              <button onClick={prevSlide} className="p-2 rounded-full border border-gray-200 dark:border-navy-700 hover:bg-gold-600 hover:border-gold-600 hover:text-white transition-all dark:text-white">
                <ChevronLeft className={dir === 'rtl' ? 'rotate-180 w-5 h-5' : 'w-5 h-5'} />
              </button>
              <button onClick={nextSlide} className="p-2 rounded-full border border-gray-200 dark:border-navy-700 hover:bg-gold-600 hover:border-gold-600 hover:text-white transition-all dark:text-white">
                <ChevronRight className={dir === 'rtl' ? 'rotate-180 w-5 h-5' : 'w-5 h-5'} />
              </button>
            </div>
          </div>

          <div className="relative w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AnimatePresence mode='popLayout'>
                {visibleCertificates.map((cert) => (
                  <motion.div 
                    key={cert.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="group bg-white dark:bg-dark-card rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-navy-800 h-full flex flex-col hover:shadow-xl transition-shadow"
                  >
                    <div className="h-56 overflow-hidden bg-gray-100 relative">
                      <img 
                        src={cert.image} 
                        alt={cert.title[language]} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-navy-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                         <Award className="text-gold-500 w-12 h-12 drop-shadow-lg" />
                      </div>
                    </div>
                    <div className="p-6 text-center flex-grow flex flex-col justify-center">
                      <h3 className="text-lg font-bold text-navy-900 dark:text-white mb-1">{cert.title[language]}</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-xs">{cert.desc[language]}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-gray-50 dark:bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-4">{t('partners')}</h2>
            <div className="h-1 w-16 bg-gold-500 mx-auto rounded-full" />
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
          >
            {partners.map((partner) => (
              <motion.div 
                variants={fadeInUp}
                key={partner.id} 
                className="bg-white dark:bg-dark-card p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group border border-transparent hover:border-gold-500/30 h-24"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-12 w-auto opacity-60 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0" 
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
