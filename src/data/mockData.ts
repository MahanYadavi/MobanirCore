import { Project, Certificate, NewsItem, JobOpening, Language } from '../types';

// --- HELPER FOR TRANSLATIONS ---
const getCategoryTranslation = (cat: string, lang: Language) => {
  const map: Record<string, Record<Language, string>> = {
    'Electrical': { en: 'Electrical', fa: 'برق', ar: 'كهرباء' },
    'Gas': { en: 'Gas', fa: 'گاز', ar: 'غاز' },
    'Piping': { en: 'Piping', fa: 'لوله کشی', ar: 'أنابيب' },
    'Construction': { en: 'Construction', fa: 'ساختمانی', ar: 'بناء' }
  };
  return map[cat]?.[lang] || cat;
};

// --- PROJECTS ---
export type Category = 'All' | 'Electrical' | 'Gas' | 'Piping' | 'Construction';

export const generateProjects = (count: number): Project[] => {
  const cats: Category[] = ['Electrical', 'Gas', 'Piping', 'Construction'];
  
  return Array.from({ length: count }).map((_, i) => {
    const cat = cats[i % 4];
    return {
      id: i,
      title: {
        en: `Project ${cat} #${i + 1}`,
        fa: `پروژه ${getCategoryTranslation(cat, 'fa')} شماره ${i + 1}`,
        ar: `مشروع ${getCategoryTranslation(cat, 'ar')} رقم ${i + 1}`
      },
      category: cat,
      // Using placeholder images. 
      // To use local images, put them in public/images/projects/ and change this to:
      // image: `/images/projects/${i + 1}.jpg`,
      image: `https://images.unsplash.com/photo-${1581091226825 + (i % 10)}?auto=format&fit=crop&q=80&w=600&h=400`, 
      location: {
        en: "Tehran, Iran",
        fa: "تهران، ایران",
        ar: "طهران، إيران"
      },
      year: 2020 + (i % 5),
      desc: {
        en: "A major infrastructure project completed with highest safety standards.",
        fa: "یک پروژه زیرساختی بزرگ که با بالاترین استانداردهای ایمنی تکمیل شده است.",
        ar: "مشروع بنية تحتية كبير تم إنجازه بأعلى معايير السلامة."
      }
    };
  });
};

// --- CERTIFICATES ---
export const certificates: Certificate[] = [
  { 
    id: 1,
    title: { en: "ISO 9001:2015", fa: "ایزو ۹۰۰۱:۲۰۱۵", ar: "آيزو 9001:2015" }, 
    desc: { en: "Quality Management System", fa: "سیستم مدیریت کیفیت", ar: "نظام إدارة الجودة" }, 
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=400&h=600" 
  },
  { 
    id: 2,
    title: { en: "HSE Certified", fa: "گواهینامه HSE", ar: "شهادة HSE" }, 
    desc: { en: "Health, Safety & Environment", fa: "بهداشت، ایمنی و محیط زیست", ar: "الصحة والسلامة والبيئة" }, 
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=400&h=600" 
  },
  { 
    id: 3,
    title: { en: "Grade A Electrical", fa: "رتبه ۱ نیرو", ar: "الدرجة الأولى كهرباء" }, 
    desc: { en: "National Engineering Org", fa: "سازمان نظام مهندسی", ar: "الهيئة الوطنية للهندسة" }, 
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400&h=600" 
  },
];

// --- NEWS ---
export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: { 
      en: "Expansion into Renewable Energy", 
      fa: "گسترش فعالیت‌ها به انرژی‌های تجدیدپذیر", 
      ar: "التوسع في الطاقة المتجددة" 
    },
    date: "2025-01-15",
    summary: {
      en: "ElectroGas announces new division focused on solar and wind farm contracting.",
      fa: "الکتروگاز بخش جدیدی را با تمرکز بر پیمانکاری مزارع خورشیدی و بادی افتتاح کرد.",
      ar: "تعلن إلكتروغاز عن قسم جديد يركز على مقاولات مزارع الطاقة الشمسية والرياح."
    },
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    title: {
      en: "Award for Safety Excellence",
      fa: "دریافت جایزه تعالی ایمنی",
      ar: "جائزة التميز في السلامة"
    },
    date: "2024-12-10",
    summary: {
      en: "We have been recognized by the National Safety Council for 5 years without lost-time injury.",
      fa: "ما توسط شورای ملی ایمنی برای ۵ سال فعالیت بدون حادثه منجر به فوت تقدیر شدیم.",
      ar: "لقد تم تكريمنا من قبل مجلس السلامة الوطني لمدة 5 سنوات دون إصابة مضيعة للوقت."
    },
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    title: {
      en: "Completion of South Gas Pipeline",
      fa: "تکمیل خط لوله گاز جنوب",
      ar: "إنجاز خط أنابيب غاز الجنوب"
    },
    date: "2024-11-05",
    summary: {
      en: "The 500km pipeline project has been successfully commissioned ahead of schedule.",
      fa: "پروژه خط لوله ۵۰۰ کیلومتری زودتر از موعد مقرر با موفقیت راه‌اندازی شد.",
      ar: "تم تشغيل مشروع خط الأنابيب بطول 500 كم بنجاح قبل الموعد المحدد."
    },
    image: "https://images.unsplash.com/photo-1516937941344-00b4ec0c460c?auto=format&fit=crop&q=80&w=600"
  }
];

// --- JOBS ---
export const jobOpenings: JobOpening[] = [
  {
    id: 1,
    title: { en: "Senior Electrical Engineer", fa: "مهندس ارشد برق", ar: "مهندس كهرباء أول" },
    type: { en: "Full-time", fa: "تمام وقت", ar: "دوام كامل" },
    location: { en: "Tehran", fa: "تهران", ar: "طهران" },
    desc: { 
      en: "10+ years experience in HV substations.", 
      fa: "بیش از ۱۰ سال تجربه در پست‌های فشار قوی.", 
      ar: "أكثر من 10 سنوات خبرة في محطات الجهد العالي." 
    }
  },
  {
    id: 2,
    title: { en: "Project Manager (Gas)", fa: "مدیر پروژه (گاز)", ar: "مدير مشروع (غاز)" },
    type: { en: "Contract", fa: "قراردادی", ar: "عقد" },
    location: { en: "Asaluyeh", fa: "عسلویه", ar: "عسلوية" },
    desc: { 
      en: "Experience in piping and refinery projects.", 
      fa: "تجربه در پروژه‌های پایپینگ و پالایشگاهی.", 
      ar: "خبرة في مشاريع الأنابيب والمصافي." 
    }
  },
  {
    id: 3,
    title: { en: "HSE Officer", fa: "کارشناس HSE", ar: "مسؤول HSE" },
    type: { en: "Full-time", fa: "تمام وقت", ar: "دوام كامل" },
    location: { en: "Various Sites", fa: "سایت‌های مختلف", ar: "مواقع مختلفة" },
    desc: { 
      en: "NEBOSH certification required.", 
      fa: "مدرک NEBOSH الزامی است.", 
      ar: "شهادة NEBOSH مطلوبة." 
    }
  }
];
