'use client';

import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';
import SectionHeader from '@/src/components/ui/SectionHeader';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <SectionHeader
        id="aboutme"
        title="About Me"
        content={`Here is a little bit about me and my journey as a developer.`}
      />

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white">
        Hey there! 👋 I'm{' '}
        <strong className="text-foreground dark:text-white">
          {siteConfig.author}
        </strong>
        , and I am passionate about coding. I enjoy creating innovative
        solutions that help people and solve real-world problems. I am always
        open to learning new things and not afraid to face challenges—if I don’t
        know something, I will figure it out. If I do know, I am happy to help
        others. I strive to grow as a developer, constantly improving my skills
        and keeping up with modern technologies. I love working in a team,
        sharing experiences, and achieving common goals together.
      </p>
    </AnimationContainer>
  );
};

export default AboutMe;
