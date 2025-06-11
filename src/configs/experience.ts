'use client';
import { siteConfig } from '@/src/configs/config';

export interface ExperienceEntry {
  title: string;
  description: { id: number; text: string }[];
  startDate: string;
  endDate: string;
  isActive?: boolean;
  companyUrl?: string;
}

export const experienceEntries: ExperienceEntry[] = [
  {
    title: 'Foodster',
    description: [
      {
        id: 1,
        text: 'Participated in the development of a functional, user-friendly, and intuitive admin panel for a food ordering service, providing users with quick and convenient access to all essential panel features. This allowed them to efficiently solve current tasks, positively impacting their productivity.'
      },
      {
        id: 2,
        text: "Also contributed to the creation of a progressive web application (PWA) for the food ordering service. Convenient and fast access to the main features of the application helped increase customer satisfaction, which, in turn, led to a rise in the number of orders and the company's revenue. A month after the PWA launch, orders through the service increased by 17%."
      },
      {
        id: 8,
        text: 'Key points:'
      },
      {
        id: 3,
        text: '1. Implemented account management systems for administrators, ensuring flexibility and security in data handling.'
      },
      {
        id: 4,
        text: "2. Developed functionality for restaurant management, including working with schedules, configuring time zones, and delivery zone coordinates. For delivery zone functionality, used react-yandex-maps, which improved logistics. Users could easily see which establishments were available for delivery in their area depending on time and location, increasing the likelihood of successful orders, reducing cancellations and misunderstandings, and positively impacting the service's reputation."
      },
      {
        id: 5,
        text: '3. Implemented dish and order management functionality, enabling administrators to easily confirm, cancel, and track orders, as well as keep restaurant menus up-to-date. This simplified the workflow for administrators, increased order processing speed, improved customer experience, and enhanced user loyalty.\n'
      },
      {
        id: 6,
        text: '4. Added functionality in the PWA for selecting customer addresses using Yandex.Maps and Geocoder. Integrated address selection with Geosuggest, allowing users to conveniently specify delivery addresses.'
      },
      {
        id: 7,
        text: 'Technologies: During development, used React and Next.js to create high-performance and responsive interfaces, as well as libraries like Ant Design, Tailwind CSS, and SCSS modules to ensure stylish and user-friendly design.'
      }
    ],
    startDate: 'May 2023',
    endDate: 'April 2025',
    isActive: false,
    companyUrl: siteConfig.previous_vork.foodster
  }
];
