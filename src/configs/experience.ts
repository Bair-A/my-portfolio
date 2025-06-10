'use client';
import { siteConfig } from '@/src/configs/config';

export interface ExperienceEntry {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  isActive?: boolean;
  companyUrl?: string;
}

export const experienceEntries: ExperienceEntry[] = [
  {
    title: 'Foodster',
    description: '',
    startDate: 'May 2023',
    endDate: 'April 2025',
    isActive: false,
    companyUrl: siteConfig.previous_vork.foodster
  }
];
