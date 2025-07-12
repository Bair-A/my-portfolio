'use client';
import AnimationContainer from '../utils/AnimationContainer';
import CurrentTimeLineExp from '../content/CurrentTimeLineExp';
import SectionContainer from '../utils/SectionContainer';
import SkillsSection from '@/src/components/sections/SkillsSection';
import AboutMe from '@/src/components/content/AboutMe';

const AboutSection = () => {
  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <AboutMe />
        <AnimationContainer customClassName="w-full ">
          <CurrentTimeLineExp />
        </AnimationContainer>

        <AnimationContainer customClassName="w-full">
          <SkillsSection />
        </AnimationContainer>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
