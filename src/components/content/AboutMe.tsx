'use client';

import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';
import SectionHeader from '@/src/components/ui/SectionHeader';
import { useTranslation, Trans } from 'react-i18next';
import Link from 'next/link';

const AboutMe = () => {
  const { t, i18n } = useTranslation();

  return (
    <AnimationContainer customClassName="w-full mb-16">
      <SectionHeader
        id="aboutme"
        title={t('aboutMe.title')}
        content={t('aboutMe.content')}
      />
      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white">
        <Trans
          i18nKey="aboutMe.description"
          values={{
            author:
              i18n.language === 'en'
                ? siteConfig.author
                : siteConfig.translated_author
          }}
          components={{
            strong: <strong className="text-foreground dark:text-white" />
          }}
        />{' '}
        <Link
          href={`https://github.com/${siteConfig.social.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white hover:underline transition-all ease"
        >
          GitHub
        </Link>{' '}
        ✌️.
      </p>
    </AnimationContainer>
  );
};

export default AboutMe;
