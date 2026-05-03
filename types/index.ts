export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
}

export interface Skill {
  category: string;
  skills: string[];
}

export interface ContactLink {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  href: string;
  value: string;
}

export interface SocialLink {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  href: string;
  label: string;
}
