import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'fa' | 'ar';

type Translations = {
  [key in Language]: {
    [key: string]: string;
  };
};

const translations: Translations = {
  en: {
    // Nav
    home: "Home",
    about: "About Us",
    contact: "Contact Us",
    projects: "Projects",
    services: "Services",
    partners: "Valued Partners",
    certificates: "Certificates",
    careers: "Careers",
    news: "News & Media",
    
    // Hero & Home
    heroTitle: "Excellence in Electrical & Gas Contracting",
    heroSubtitle: "Delivering world-class engineering solutions for over 20 years. We power the future with sustainable, safe, and efficient infrastructure.",
    viewProjects: "View Projects",
    contactUs: "Contact Us",
    featuredProject: "Featured Project",
    allProjects: "All Projects",
    readMore: "Read More",
    latestNews: "Latest News",
    safetyFirst: "Safety First",
    safetyDesc: "Zero-accident policy with strict HSE adherence.",
    onTime: "On-Time Delivery",
    onTimeDesc: "Proven track record of meeting strict deadlines.",
    sustainable: "Sustainable",
    sustainableDesc: "Eco-friendly practices in every project.",
    certified: "Certified Quality",
    certifiedDesc: "ISO 9001 & National Standards compliant.",
    aboutTitleSmall: "About ElectroGas",
    aboutHeading: "Engineering the Infrastructure of Tomorrow",
    expertEngineers: "Expert Engineers",
    topTalent: "Top-tier talent",
    modernTech: "Modern Tech",
    latestEquip: "Latest equipment",
    ceoName: "Dr. Arash Alavi",
    ceoTitle: "CEO & Founder",
    
    // Services/Sectors
    electrical: "Electrical",
    gas: "Gas",
    piping: "Piping",
    construction: "Construction",
    
    // Footer & Common
    copyright: "© 2025 ElectroGas Co. All rights reserved.",
    address: "123 Industry Blvd, Tech City",
    phone: "+1 234 567 890",
    email: "info@electrogas.com",
    sendMessage: "Send Message",
    name: "Name",
    subject: "Subject",
    message: "Message",
    send: "Send",
    
    // About Page
    aboutTitle: "Building the Future with Integrity",
    aboutDesc: "ElectroGas is a premier contracting firm specializing in complex electrical and gas infrastructure. With a dedicated team of engineers and over 120 completed projects, we ensure safety, quality, and efficiency. Our journey began two decades ago with a simple mission: to power the nation's growth.",
    ourHistory: "Our History",
    historyDesc: "Founded in 2005, ElectroGas started as a small consultancy and grew into a nationwide leader in energy infrastructure.",
    ourVision: "Our Vision",
    visionDesc: "To be the most trusted partner in the Middle East for sustainable energy solutions.",
    ceoMessage: "CEO Message",
    ceoQuote: "We don't just build infrastructure; we build trust. Every project is a testament to our commitment to safety and excellence.",
    location: "Our Location",
    
    // Stats
    projectCount: "120+ Projects Completed",
    clientCount: "50+ Happy Clients",
    yearCount: "20+ Years Experience",
    
    // Careers
    joinTeam: "Join Our Team",
    careersDesc: "Build your future with us. We are always looking for talented engineers and technicians.",
    openPositions: "Open Positions",
    applyNow: "Apply Now",
    noPositions: "No current openings, but send us your CV!",
    generalApp: "General Application",
    generalAppDesc: "Don't see a fitting role? Send us your CV and we'll contact you when a position opens.",
    coverLetter: "Cover Letter",
    
    // Projects Page
    projectsPageDesc: "Explore our extensive portfolio of over 120 successful projects across various sectors.",
    
    // Misc
    darkMode: "Dark Mode",
    lightMode: "Light Mode",
    loadMore: "Load More",
    search: "Search...",
  },
  fa: {
    // Nav
    home: "خانه",
    about: "درباره ما",
    contact: "تماس با ما",
    projects: "پروژه‌ها",
    services: "خدمات",
    partners: "شرکای ارزشمند",
    certificates: "گواهینامه‌ها",
    careers: "فرصت‌های شغلی",
    news: "اخبار و مقالات",
    
    // Hero & Home
    heroTitle: "پیشرو در پیمانکاری برق و گاز",
    heroSubtitle: "ارائه راهکارهای مهندسی در سطح جهانی با بیش از ۲۰ سال تجربه. ما آینده را با زیرساخت‌های پایدار، ایمن و کارآمد می‌سازیم.",
    viewProjects: "مشاهده پروژه‌ها",
    contactUs: "تماس با ما",
    featuredProject: "پروژه شاخص",
    allProjects: "همه پروژه‌ها",
    readMore: "بیشتر بخوانید",
    latestNews: "آخرین اخبار",
    safetyFirst: "اول ایمنی",
    safetyDesc: "سیاست حادثه صفر با رعایت دقیق HSE.",
    onTime: "تحویل به موقع",
    onTimeDesc: "سابقه درخشان در رعایت زمان‌بندی‌های دقیق.",
    sustainable: "پایدار",
    sustainableDesc: "روش‌های دوستدار محیط زیست در هر پروژه.",
    certified: "کیفیت تضمین شده",
    certifiedDesc: "مطابق با استانداردهای ISO 9001 و ملی.",
    aboutTitleSmall: "درباره الکتروگاز",
    aboutHeading: "مهندسی زیرساخت‌های فردا",
    expertEngineers: "مهندسین خبره",
    topTalent: "استعدادهای برتر",
    modernTech: "تکنولوژی مدرن",
    latestEquip: "جدیدترین تجهیزات",
    ceoName: "دکتر آرش علوی",
    ceoTitle: "مدیرعامل و موسس",
    
    // Services/Sectors
    electrical: "برق",
    gas: "گاز",
    piping: "لوله کشی",
    construction: "ساختمانی",
    
    // Footer & Common
    copyright: "© ۲۰۲۵ شرکت الکتروگاز. تمامی حقوق محفوظ است.",
    address: "ایران، تهران، خیابان صنعت، پلاک ۱۲۳",
    phone: "+98 21 1234 5678",
    email: "info@electrogas.com",
    sendMessage: "ارسال پیام",
    name: "نام",
    subject: "موضوع",
    message: "پیام",
    send: "ارسال",
    
    // About Page
    aboutTitle: "ساختن آینده با تعهد و تخصص",
    aboutDesc: "ما یک شرکت پیمانکاری پیشرو و متخصص در زیرساخت‌های پیچیده برق و گاز هستیم. با تیمی متعهد از مهندسین و بیش از ۱۲۰ پروژه تکمیل شده، ایمنی، کیفیت و بهره‌وری را تضمین می‌کنیم. سفر ما دو دهه پیش با یک ماموریت ساده آغاز شد: نیروبخشی به رشد کشور.",
    ourHistory: "تاریخچه ما",
    historyDesc: "الکتروگاز در سال ۱۳۸۴ تاسیس شد و از یک مشاوره کوچک به یکی از رهبران زیرساخت انرژی در سطح کشور تبدیل گردید.",
    ourVision: "چشم‌انداز ما",
    visionDesc: "تبدیل شدن به قابل اعتمادترین شریک در خاورمیانه برای راهکارهای انرژی پایدار.",
    ceoMessage: "پیام مدیرعامل",
    ceoQuote: "ما فقط زیرساخت نمی‌سازیم؛ ما اعتماد می‌سازیم. هر پروژه گواهی بر تعهد ما به ایمنی و تعالی است.",
    location: "موقعیت مکانی ما",
    
    // Stats
    projectCount: "+۱۲۰ پروژه تکمیل شده",
    clientCount: "+۵۰ مشتری راضی",
    yearCount: "+۲۰ سال تجربه",
    
    // Careers
    joinTeam: "به تیم ما بپیوندید",
    careersDesc: "آینده خود را با ما بسازید. ما همیشه به دنبال مهندسين و تکنسین‌های با استعداد هستیم.",
    openPositions: "فرصت‌های شغلی موجود",
    applyNow: "ارسال رزومه",
    noPositions: "در حال حاضر موقعیت شغلی بازی وجود ندارد، اما رزومه خود را ارسال کنید!",
    generalApp: "درخواست عمومی",
    generalAppDesc: "موقعیت شغلی مناسب خود را پیدا نکردید؟ رزومه خود را ارسال کنید تا در صورت باز شدن موقعیت با شما تماس بگیریم.",
    coverLetter: "توضیحات / نامه پوششی",
    
    // Projects Page
    projectsPageDesc: "مجموعه گسترده ما از بیش از ۱۲۰ پروژه موفق در بخش‌های مختلف را کاوش کنید.",
    
    // Misc
    darkMode: "حالت تاریک",
    lightMode: "حالت روشن",
    loadMore: "نمایش بیشتر",
    search: "جستجو...",
  },
  ar: {
    // Nav
    home: "الرئيسية",
    about: "من نحن",
    contact: "اتصل بنا",
    projects: "المشاريع",
    services: "الخدمات",
    partners: "شركاؤنا الكرام",
    certificates: "الشهادات",
    careers: "وظائف",
    news: "الأخبار",
    
    // Hero & Home
    heroTitle: "التميز في مقاولات الكهرباء والغاز",
    heroSubtitle: "تقديم حلول هندسية عالمية المستوى لأكثر من 20 عامًا. نحن نبني المستقبل ببنية تحتية مستدامة وآمنة وفعالة.",
    viewProjects: "عرض المشاريع",
    contactUs: "اتصل بنا",
    featuredProject: "مشروع مميز",
    allProjects: "جميع المشاريع",
    readMore: "اقرأ المزيد",
    latestNews: "آخر الأخبار",
    safetyFirst: "السلامة أولاً",
    safetyDesc: "سياسة خالية من الحوادث مع الامتثال الصارم لـ HSE.",
    onTime: "التسليم في الوقت المحدد",
    onTimeDesc: "سجل حافل في الوفاء بالمواعيد النهائية الصارمة.",
    sustainable: "مستدام",
    sustainableDesc: "ممارسات صديقة للبيئة في كل مشروع.",
    certified: "جودة معتمدة",
    certifiedDesc: "متوافق مع معايير ISO 9001 والمعايير الوطنية.",
    aboutTitleSmall: "عن إلكتروغاز",
    aboutHeading: "هندسة البنية التحتية للغد",
    expertEngineers: "مهندسون خبراء",
    topTalent: "أفضل المواهب",
    modernTech: "تكنولوجيا حديثة",
    latestEquip: "أحدث المعدات",
    ceoName: "د. آرش علوي",
    ceoTitle: "الرئيس التنفيذي والمؤسس",
    
    // Services/Sectors
    electrical: "كهرباء",
    gas: "غاز",
    piping: "أنابيب",
    construction: "بناء",
    
    // Footer & Common
    copyright: "© 2025 شركة إلكتروغاز. جميع الحقوق محفوظة.",
    address: "شارع الصناعة، مدينة التكنولوجيا",
    phone: "+971 50 123 4567",
    email: "info@electrogas.com",
    sendMessage: "إرسال رسالة",
    name: "الاسم",
    subject: "الموضوع",
    message: "الرسالة",
    send: "إرسال",
    
    // About Page
    aboutTitle: "بناء المستقبل بنزاهة",
    aboutDesc: "نحن شركة مقاولات رائدة متخصصة في البنية التحتية المعقدة للكهرباء والغاز. مع فريق متخصص من المهندسين وأكثر من 120 مشروعًا مكتملًا، نضمن السلامة والجودة والكفاءة.",
    ourHistory: "تاريخنا",
    historyDesc: "تأسست إلكتروغاز في عام 2005، وبدأت كشركة استشارية صغيرة ونمت لتصبح رائدة على مستوى البلاد في البنية التحتية للطاقة.",
    ourVision: "رؤيتنا",
    visionDesc: "أن نكون الشريك الأكثر موثوقية في الشرق الأوسط لحلول الطاقة المستدامة.",
    ceoMessage: "رسالة الرئيس التنفيذي",
    ceoQuote: "نحن لا نبني البنية التحتية فحسب؛ بل نبني الثقة. كل مشروع هو شهادة على التزامنا بالسلامة والتميز.",
    location: "موقعنا",
    
    // Stats
    projectCount: "+120 مشروع مكتمل",
    clientCount: "+50 عميل سعيد",
    yearCount: "+20 سنة خبرة",
    
    // Careers
    joinTeam: "انضم لفريقنا",
    careersDesc: "ابنِ مستقبلك معنا. نحن نبحث دائمًا عن مهندسين وفنيين موهوبين.",
    openPositions: "الوظائف المتاحة",
    applyNow: "قدم الآن",
    noPositions: "لا توجد وظائف شاغرة حاليًا، ولكن أرسل سيرتك الذاتية!",
    generalApp: "طلب عام",
    generalAppDesc: "لا تجد وظيفة مناسبة؟ أرسل سيرتك الذاتية وسنتصل بك عند توفر منصب.",
    coverLetter: "رسالة تغطية",
    
    // Projects Page
    projectsPageDesc: "استكشف محفظتنا الواسعة التي تضم أكثر من 120 مشروعًا ناجحًا في مختلف القطاعات.",
    
    // Misc
    darkMode: "الوضع المظلم",
    lightMode: "الوضع الفاتح",
    loadMore: "تحميل المزيد",
    search: "بحث...",
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const dir = language === 'en' ? 'ltr' : 'rtl';

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [dir, language]);

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
