
import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'sr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.bookCall': 'Book a Call',
    
    // Hero
    'hero.title': 'Unlock Your English Potential, One Lesson at a Time',
    'hero.subtitle': "Welcome! I'm Miss Milica, an English teacher dedicated to helping you achieve fluency and confidence through personalized online lessons.",
    'hero.exploreClasses': 'Explore Classes',
    'hero.bookTrial': 'Book a Free Trial',
    
    // Affordable Classes
    'affordable.title': 'Classes are very affordable, fun and entertaining',
    'affordable.subtitle': 'We offer online English classes tailored just for you:',
    'affordable.business': 'Business English for professionals',
    'affordable.kids': 'Fun classes for children',
    'affordable.everyday': 'Everyday English for immigrants',
    'affordable.interview': 'Interview preparation and CV help',
    'affordable.travel': 'English for travel and adventures',
    
    // Services
    'services.title': 'Find the Perfect Class for You',
    'services.subtitle': "Whether you're a beginner or an advanced learner, I have a class that fits your needs.",
    'services.beginner.title': "Beginner's Welcome",
    'services.beginner.desc': 'Just starting? Our beginner classes provide a solid foundation in English, focusing on basic vocabulary and simple conversations.',
    'services.oneOnOne.title': 'One-on-One Lessons',
    'services.oneOnOne.desc': 'Get fully personalized lessons tailored to your specific goals, learning style, and pace. The fastest way to see improvement.',
    'services.group.title': 'Group Conversation Classes',
    'services.group.desc': 'Practice your speaking and listening skills in a fun, interactive, and low-pressure group setting with students at your level.',
    
    // Contact
    'contact.title': 'Ready to Start Learning?',
    'contact.subtitle': "Let's talk about your English learning goals. Book a free, no-obligation 20-minute consultation call. I'd love to hear from you!",
    'contact.bookConsultation': 'Book a Free Consultation',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy'
  },
  sr: {
    // Header
    'nav.about': 'O nama',
    'nav.services': 'Usluge',
    'nav.contact': 'Kontakt',
    'nav.bookCall': 'Zakaži poziv',
    
    // Hero
    'hero.title': 'Otključajte svoj potencijal engleskog, lekciju po lekciju',
    'hero.subtitle': 'Zovem se Milica i kao nastavnica engleskog jezika posvećena sam tome da vam pomognem da razvijete tečnost i samopouzdanje kroz online časove prilagođene upravo vama.',
    'hero.exploreClasses': 'Istražite časove',
    'hero.bookTrial': 'Rezervišite besplatan probni čas',
    
    // Affordable Classes
    'affordable.title': 'Časovi su vrlo pristupačni, zabavni i zanimljivi',
    'affordable.subtitle': 'Nudimo online časove engleskog jezika prilagođene baš vama:',
    'affordable.business': 'Poslovni engleski za profesionalce',
    'affordable.kids': 'Zanimljivi časovi za decu',
    'affordable.everyday': 'Svakodnevni engleski za doseljenike',
    'affordable.interview': 'Priprema za intervju i pomoć oko CV-a',
    'affordable.travel': 'Engleski za putovanja i avanture',
    
    // Services
    'services.title': 'Pronađite savršen čas za sebe',
    'services.subtitle': 'Bilo da ste početnik ili napredni učenik, imam čas koji odgovara vašim potrebama.',
    'services.beginner.title': 'Dobrodošlica za početnike',
    'services.beginner.desc': 'Tek počinjete? Naši časovi za početnike pružaju solidnu osnovu u engleskom, fokusirajući se na osnovni vokabular i jednostavne razgovore.',
    'services.oneOnOne.title': 'Individualni časovi',
    'services.oneOnOne.desc': 'Dobijte potpuno personalizovane časove prilagođene vašim specifičnim ciljevima, stilu učenja i tempu. Najbrži način da vidite napredak.',
    'services.group.title': 'Grupni konverzacioni časovi',
    'services.group.desc': 'Vežbajte svoje govorne i slušne veštine u zabavnom, interaktivnom okruženju sa učenicima na vašem nivou.',
    
    // Contact
    'contact.title': 'Spremni ste da počnete da učite?',
    'contact.subtitle': 'Razgovarajmo o vašim ciljevima učenja engleskog. Rezervišite besplatan, nezobavezujući 20-minutni konsultacioni poziv. Volela bih da čujem od vas!',
    'contact.bookConsultation': 'Rezervišite besplatnu konsultaciju',
    
    // Footer
    'footer.rights': 'Sva prava zadržana.',
    'footer.privacy': 'Politika privatnosti'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
