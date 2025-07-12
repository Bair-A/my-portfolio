'use client';

import Image from 'next/image';
import AnimationContainer from '@/src/components/utils/AnimationContainer';
import SectionHeader from '@/src/components/ui/SectionHeader';
import React from 'react';
import { useTranslation } from 'react-i18next';

const MySkills = () => {
  const { t } = useTranslation();
  return (
    <AnimationContainer customClassName="w-full mt-16">
      <div className="flex flex-col gap-5">
        <SectionHeader title={t('skills.title')} content="" />

        <div className="w-full flex flex-col gap-8">
          <div className="w-full flex justify-center items-center">
            <Image
              src="https://skillicons.dev/icons?i=js,html,css,figma,git,github,nextjs,react,sass,tailwind,materialui,ts,npm,redux&perline=15"
              alt="My Skills"
              className="relative w-full h-full max-w-3xl"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </AnimationContainer>
  );
};

export default MySkills;
