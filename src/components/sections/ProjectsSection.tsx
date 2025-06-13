'use client';
import React from 'react';
import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';
import { CardProjectProps } from '@/src/types';
import SectionContainer from '../utils/SectionContainer';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import CardProject from '@/src/components/content/CardProject';
import Link from 'next/link';
import { projectsConfig } from '@/src/configs/config';
import Script from 'next/script';

const ProjectsSection = () => {
  // Generate JSON-LD structured data for each individual project
  const generateJsonLdForProject = (project: CardProjectProps) => {
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: project.title,
      description: project.des,
      url: project.repo,
      image: project.link,
      keywords: project.topics.join(', '),
      author: {
        '@type': 'Person',
        name: siteConfig.author
      },
      datePublished: project.date
    };

    return JSON.stringify(jsonLd);
  };

  return (
    <>
      <SectionContainer>
        <div className="w-full flex flex-col gap-6">
          <TitleSectionPageContainer title="Projects" />

          <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
            <p className="w-full text-base text-black dark:text-white">
              These are the projects I have worked on since I started
              programming. Some of them are personal projects, while others were
              created for work or different purposes. If you would like to see
              all of my projects, feel free to visit my{' '}
              <Link
                href={`https://github.com/${siteConfig.social.github}`}
                target="_blank"
                className="underline transition-all ease"
              >
                github page
              </Link>
              .
            </p>
          </AnimationContainer>

          {/* Display Projects or error message */}
          <article className="w-full flex justify-center items-center content-center flex-wrap gap-6 mx-auto">
            {projectsConfig.map(
              ({ id, title, des, category, repo, link, topics }) => (
                <React.Fragment key={id}>
                  {/* Add JSON-LD for each individual project */}
                  <Script
                    key={`json-ld-project-${id}`}
                    id={`json-ld-project-${id}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                      __html: generateJsonLdForProject({
                        id,
                        title,
                        des,
                        category,
                        repo,
                        link,
                        topics
                      })
                    }}
                  />
                  <CardProject
                    key={id}
                    title={title}
                    des={des}
                    category={category}
                    repo={repo}
                    link={link}
                    topics={topics}
                  />
                </React.Fragment>
              )
            )}
          </article>
        </div>
      </SectionContainer>
    </>
  );
};

export default ProjectsSection;
