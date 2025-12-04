export type Language = 'en' | 'fa' | 'ar';

export interface LocalizedString {
  en: string;
  fa: string;
  ar: string;
}

export interface Project {
  id: number;
  title: LocalizedString;
  category: 'Electrical' | 'Gas' | 'Piping' | 'Construction';
  image: string;
  location: LocalizedString;
  year: number;
  desc: LocalizedString;
}

export interface Certificate {
  id: number;
  title: LocalizedString;
  desc: LocalizedString;
  image: string;
}

export interface NewsItem {
  id: number;
  title: LocalizedString;
  date: string;
  summary: LocalizedString;
  image: string;
}

export interface JobOpening {
  id: number;
  title: LocalizedString;
  type: LocalizedString;
  location: LocalizedString;
  desc: LocalizedString;
}
