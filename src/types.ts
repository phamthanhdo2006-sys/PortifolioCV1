export interface PersonalProfile {
  name: string;
  englishName?: string;
  role: string;
  dateOfBirth?: string;
  hometown?: string;
  tagline: string;
  avatarUrl: string;
  secondaryAvatarUrl?: string;
  location: string;
  englishLocation?: string;
  locationMapsUrl?: string;
  email: string;
  universityEmail?: string;
  phone?: string;
  university: string;
  englishUniversity?: string;
  universityMapsUrl?: string;
  studentId: string;
  major: string;
  bio: string[];
  socials: {
    github: string;
    linkedin: string;
    facebook?: string;
    instagram?: string;
  };
}

export interface BentoCardData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  badge: string;
  subBadge?: string;
  statusBadge?: string;
  githubUrl?: string;
  githubLabel?: string;
  iconName: string;
  colSpan?: string; // e.g., 'md:col-span-2' or 'lg:col-span-8'
  tags?: string[];
  accentColor?: string;
  links?: { label: string; url: string; external?: boolean }[];
}

export interface SkillCategory {
  categoryTitle: string;
  categoryDesc: string;
  skills: {
    name: string;
    icon: string;
    level: string;
    experience: string;
    featured?: boolean;
  }[];
}

export interface HobbyCardData {
  id: string;
  title: string;
  subtitle: string;
  story: string;
  tags: string[];
  iconName: string;
  accentColor: string;
  bgGradient: string;
  image?: string;
  secondaryImage?: string;
  quote?: string;
  stats?: { label: string; value: string }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  date: string;
  image: string;
  aspect?: 'portrait' | 'landscape' | 'wide' | 'square';
  tag: string;
  story: string;
  categoryKey?: string;
}

/* Legacy types for backward compatibility */
export interface StudentProfile {
  fullName: string;
  studentId: string;
  courseName: string;
  courseCode: string;
  classGroup: string;
  university: string;
  major: string;
  academicYear: string;
  instructor: string;
  submissionDate: string;
  email: string;
  universityEmail: string;
  phone: string;
  location: string;
  githubUrl: string;
  linkedinUrl: string;
}
