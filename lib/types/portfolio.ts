export type SocialLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  headline: string;
  roles: string[];
  location: string;
  email: string;
  photo?: string;
  socials: SocialLink[];
};

export type ProjectMedia =
  | { type: "image"; src: string; alt: string }
  | {
      type: "video";
      src: string;
      poster?: string;
      loop?: boolean;
      autoplay?: boolean;
    };

export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  overview: string;
  role: string;
  stack: string[];
  tags: string[];
  highlights: string[];
  coverImage: string;
  heroVideo?: string;
  posterImage?: string;
  gallery: ProjectMedia[];
  links?: {
    live?: string;
    repo?: string;
    caseStudy?: string;
  };
  featured: boolean;
  year: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
};
