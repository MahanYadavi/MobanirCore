import { Zap, Flame, Hammer, Filter } from 'lucide-react';

// --- PROJECTS ---
// Instructions: To add your own images, place them in the public/images/projects folder 
// and update the 'image' path below (e.g., '/images/projects/project1.jpg').

export type Category = 'All' | 'Electrical' | 'Gas' | 'Piping' | 'Construction';

export const generateProjects = (count: number) => {
  const cats: Category[] = ['Electrical', 'Gas', 'Piping', 'Construction'];
  return Array.from({ length: count }).map((_, i) => {
    const cat = cats[i % 4];
    return {
      id: i,
      title: `Project ${cat} #${i + 1}`,
      category: cat,
      // Placeholder images - Replace these with your local paths in a real scenario
      image: `https://images.unsplash.com/photo-${1581091226825 + i}?auto=format&fit=crop&q=80&w=600&h=400`, 
      location: "Tehran, Iran",
      year: 2020 + (i % 5),
      desc: "A major infrastructure project completed with highest safety standards."
    };
  });
};

// --- CERTIFICATES ---
// Replace 'image' with your actual certificate scan paths (e.g., '/images/certs/iso9001.jpg')

export const certificates = [
  { 
    id: 1,
    title: "ISO 9001:2015", 
    desc: "Quality Management System", 
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=400&h=600" 
  },
  { 
    id: 2,
    title: "HSE Certified", 
    desc: "Health, Safety & Environment", 
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=400&h=600" 
  },
  { 
    id: 3,
    title: "Grade A Electrical", 
    desc: "National Engineering Org", 
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400&h=600" 
  },
];

// --- NEWS ---

export const newsItems = [
  {
    id: 1,
    title: "Expansion into Renewable Energy",
    date: "2025-01-15",
    summary: "ElectroGas announces new division focused on solar and wind farm contracting.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    title: "Award for Safety Excellence",
    date: "2024-12-10",
    summary: "We have been recognized by the National Safety Council for 5 years without lost-time injury.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    title: "Completion of South Gas Pipeline",
    date: "2024-11-05",
    summary: "The 500km pipeline project has been successfully commissioned ahead of schedule.",
    image: "https://images.unsplash.com/photo-1516937941344-00b4ec0c460c?auto=format&fit=crop&q=80&w=600"
  }
];

// --- JOBS ---

export const jobOpenings = [
  {
    id: 1,
    title: "Senior Electrical Engineer",
    type: "Full-time",
    location: "Tehran",
    desc: "10+ years experience in HV substations."
  },
  {
    id: 2,
    title: "Project Manager (Gas)",
    type: "Contract",
    location: "Asaluyeh",
    desc: "Experience in piping and refinery projects."
  },
  {
    id: 3,
    title: "HSE Officer",
    type: "Full-time",
    location: "Various Sites",
    desc: "NEBOSH certification required."
  }
];
