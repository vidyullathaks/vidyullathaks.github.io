import { readable } from 'svelte/store';
import type { Readable } from 'svelte/store';
import portfolioData from '$lib/data/portfolio.json';

// Type definitions for portfolio data
export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  location: string;
  photo: string;
}

export interface About {
  intro: string;
  background: string;
  professionalBackground: string;
  careerObjectives: string;
  interests: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  coursework: string[];
  skills: string[];
}

export interface Experience {
  position: string;
  company: string;
  location: string;
  period: string;
  logo: string;
  responsibilities: string[];
  achievements: string[];
}

export interface Skill {
  name: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface Skills {
  technical: Skill[];
  management: Skill[];
  soft: Skill[];
}

export interface Project {
  title: string;
  type: string;
  description: string;
  skills: string[];
  date: string;
}

export interface Contact {
  intro: string;
  availability: string;
  availabilityOptions: string[];
  responseTime: string;
}

export interface Social {
  email: string;
  linkedin: string;
  github: string;
  instagram: string;
}

export interface Footer {
  copyright: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  about: About;
  education: Education[];
  professionalDevelopment: string[];
  experience: Experience[];
  skills: Skills;
  projects: Project[];
  contact: Contact;
  social: Social;
  footer: Footer;
}

// Create a readable store with the portfolio data
export const portfolio: Readable<PortfolioData> = readable(portfolioData as PortfolioData);

// Helper functions to access specific sections of the portfolio data
export const getPersonalInfo = (): PersonalInfo => portfolioData.personalInfo;
export const getAbout = (): About => portfolioData.about;
export const getEducation = (): Education[] => portfolioData.education;
export const getProfessionalDevelopment = (): string[] => portfolioData.professionalDevelopment;
export const getExperience = (): Experience[] => portfolioData.experience;
export const getSkills = (): Skills => portfolioData.skills;
export const getProjects = (): Project[] => portfolioData.projects;
export const getContact = (): Contact => portfolioData.contact;
export const getSocial = (): Social => portfolioData.social;
export const getFooter = (): Footer => portfolioData.footer;
