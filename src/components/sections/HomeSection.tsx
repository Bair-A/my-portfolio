'use client';

import Hero from '../content/Hero';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import { useTranslation } from 'react-i18next';

const HomeSection = () => {
  const { t } = useTranslation();

  return (
    <SectionContainer>
      <div className="w-full h-[calc(100vh-11rem)] flex items-center justify-center">
        <AnimationContainer>
          <div className="absolute top-1/4 md:top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-100 text-green-800 text-xs sm:text-sm font-medium px-4 py-2 rounded-full shadow-md">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-blink-circle"></span>
              {t('home.opportunities')} 😁
            </span>
          </div>
        </AnimationContainer>
        <Hero />
      </div>

      {/*<AnimationContainer customClassName="w-full mt-16">*/}
      {/*  <AboutMe />*/}
      {/*</AnimationContainer>*/}

      {/*<AnimationContainer customClassName="w-full mt-16">*/}
      {/*  <CurrentTimeLineExp />*/}
      {/*</AnimationContainer>*/}

      {/*<AnimationContainer customClassName="w-full mt-16">*/}
      {/*  <SkillsSection />*/}
      {/*</AnimationContainer>*/}
    </SectionContainer>
  );
};

export default HomeSection;
