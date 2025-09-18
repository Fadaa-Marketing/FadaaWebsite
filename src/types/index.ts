interface BCategory {
  id: number;
  language_id: number;
  name: string;
  name_ar: string | null;
  slug: string;
  status: number;
}

export interface PortfolioItem {
  id: number;
  language_id: number;
  title: string;
  url: string | null;
  image: string;
  serial_number: number;
  created_at: string;
  updated_at: string;
  category_id: number;
  image_url: string;
}

export interface BlogPost {
  id: number;
  title: string;
  title_ar: string | null;
  slug: string;
  content: any;
  content_ar: any | null;
  main_image_url: string;
  bcategory: BCategory;
  bcategory_id: number;
  language_id: number;
  created_at: string;
  updated_at: string;
  meta_description: string | null;
  meta_keywords: string;
  serial_number: number;
  sidebar: number;
}
[];
export interface JobItem {
  id: string;
  title: string;
}

export interface JobsCategory {
  id: string;
  name: string;
}
export const portfolioItems = [
  {
    src: "/about/portfolio/1.svg",
    label: "Web Development",
  },
  {
    src: "/about/portfolio/2.svg",
    label: "Branding",
  },
  {
    src: "/about/portfolio/3.svg",
    label: "Social Media",
  },
];

export interface Job {
  id: number;
  title: string;
  employment_status: string; // comma-separated string from the API
  job_description: string;
  qualifications: string;
  responsibility: string;
  title_ar: string;
  employment_status_ar: string; // comma-separated string from the API
  job_description_ar: string;
  qualifications_ar: string;
  responsibility_ar: string;
  // Add other fields if needed (meta_keywords, meta_description, etc.)
}

export interface JobsData {
  positions: Job;
}

export interface Gif {
  id: number;
  title: string;
  description: string;
  title_ar: string;
  description_ar: string;
  image_url: string;
}
[];

export interface Trik {
  image_url: string;
}
[];
