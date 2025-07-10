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
            'text-neutral-500 dark:text-neutral-400': !isActive('en'), // Неактивные кнопки
            'text-neutral-800 dark:text-white font-bold': isActive('en'), // Активные кнопки
            'hover:text-neutral-700 dark:hover:text-neutral-300':
              !isActive('en') // Цвет при наведении
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
            'text-neutral-500 dark:text-neutral-400': !isActive('ru'), // Неактивные кнопки
            'text-neutral-800 dark:text-white font-bold': isActive('ru'), // Активные кнопки
            'hover:text-neutral-700 dark:hover:text-neutral-300':
              !isActive('ru') // Цвет при наведении
          }
        )}
      >
        RU
      </button>
    </div>
  );
};

export default LanguageSwitcher;
