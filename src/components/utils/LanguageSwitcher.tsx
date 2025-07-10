import React from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const isActive = (lng: string) => i18n.language === lng;

  return (
    <div className="flex">
      <button
        onClick={() => changeLanguage('en')}
        className={clsx(
          'hidden lg:inline-block transition ease py-[2px] px-[10px] focus:outline-none focus-jump hover:jump',
          {
            'text-neutral-500 dark:text-neutral-400': !isActive('en'),
            'text-neutral-800 dark:text-white font-bold': isActive('en'),
            'hover:text-neutral-700 dark:hover:text-neutral-300':
              !isActive('en')
          }
        )}
      >
        EN
      </button>
      /
      <button
        onClick={() => changeLanguage('ru')}
        className={clsx(
          'hidden lg:inline-block transition ease py-[2px] px-[10px] focus:outline-none focus-jump hover:jump',
          {
            'text-neutral-500 dark:text-neutral-400': !isActive('ru'),
            'text-neutral-800 dark:text-white font-bold': isActive('ru'),
            'hover:text-neutral-700 dark:hover:text-neutral-300':
              !isActive('ru')
          }
        )}
      >
        RU
      </button>
    </div>
  );
};

export default LanguageSwitcher;
