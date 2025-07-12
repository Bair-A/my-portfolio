'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { NavItemHeaderAnimation } from '@/src/types';
import { useTranslation } from 'react-i18next';

export const navItemsEn: { [key: string]: NavItemHeaderAnimation } = {
  '/': {
    name: 'home'
  },
  '/about': {
    name: 'about'
  },
  '/projects': {
    name: 'projects'
  }
};

export const navItemsRu: { [key: string]: NavItemHeaderAnimation } = {
  '/': {
    name: 'на главную'
  },
  '/about': {
    name: 'обо мне'
  },
  '/projects': {
    name: 'проекты'
  }
};

const LinksNav = () => {
  const { i18n } = useTranslation();
  let pathname = usePathname() as string;
  const navItems = i18n.language === 'ru' ? navItemsRu : navItemsEn;

  return (
    <>
      {Object.entries(navItems).map(([path, { name }]) => {
        const isActive = path === pathname;

        return (
          <Link
            key={path}
            href={path}
            className={clsx(
              'hidden lg:inline-block transition ease py-[2px] px-[10px] focus:outline-none focus-jump hover:jump',
              {
                'text-neutral-500 dark:text-neutral-400': !isActive,
                'text-neutral-800 dark:text-white font-bold': isActive,
                'hover:text-neutral-700 dark:hover:text-neutral-300': !isActive
              }
            )}
          >
            {name}
          </Link>
        );
      })}
    </>
  );
};

export default LinksNav;
