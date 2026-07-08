export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: string; // lucide icon name
}

export interface Metric {
  value: string;
  label: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FeedPreset {
  id: string;
  name: string;
  tagline: string;
  colors: string[];
  posts: {
    title: string;
    category: string;
    aspectRatio: string;
    views: string;
  }[];
}
