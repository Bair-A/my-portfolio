'use client';
import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';
import CurrentTimeLineExp from '../content/CurrentTimeLineExp';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import SectionContainer from '../utils/SectionContainer';
import Link from 'next/link';
import ContactMe from '@/src/components/content/ContactMe';
import SkillsSection from '@/src/components/sections/SkillsSection';

const AboutSection = () => {
  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer title="About Me" />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="text-base text-gray-600 dark:text-gray-400">
            Hey there! 👋 I'm <strong>{siteConfig.author}</strong>, and I am
            passionate about coding. I enjoy creating innovative solutions that
            help people and solve real-world problems. I am always open to
            learning new things and not afraid to face challenges—if I don’t
            know something, I will figure it out. If I do know, I am happy to
            help others. I strive to grow as a developer, constantly improving
            my skills and keeping up with modern technologies. I love working in
            a team, sharing experiences, and achieving common goals together.{' '}
            <Link
              href={`https://github.com/${siteConfig.social.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline transition-all ease"
            >
              GitHub profile
            </Link>{' '}
            ✌️.
          </p>
        </AnimationContainer>
        <AnimationContainer customClassName="w-full ">
          <CurrentTimeLineExp />
        </AnimationContainer>

        <AnimationContainer customClassName="w-full">
          <SkillsSection />
        </AnimationContainer>
        {/* Contact Section */}
        <AnimationContainer customClassName="w-full mt-16">
          <ContactMe />
        </AnimationContainer>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
