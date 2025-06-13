'use client';
import { Button } from '@heroui/react';
import ExternalLink from '../ui/ExternalLink';
import AnimationContainer from '../utils/AnimationContainer';
import { CardProjectProps } from '@/src/types';
import { useEffect, useState } from 'react';

const CardProject = ({ title, des, repo, link, topics }: CardProjectProps) => {
  const [showAllTopics, setShowAllTopics] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const maxTopicsToShowMobile = 3; // Limit for keywords on mobile
  const maxDescriptionLength = 100; // Character limit for description on mobile

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ExternalLink
      href={link}
      customClassName="text-white inline-flex items-center rounded-lg bg-black p-2 hover:bg-gray-900 transition-all ease-in-out duration-300 transform hover:scale-110"
    >
      <AnimationContainer customClassName="w-full flex flex-col justify-center items-center rounded-xl border border-black/20 hover:border-white bg-[#080809] shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-4 transition-all ease-in-out duration-300 transform hover:scale-105 text-black bg-white dark:bg-black dark:text-white">
        <div className="w-full flex flex-col justify-center items-start rounded gap-5">
          {/* Title */}
          <h3 className="text-2xl lg:text-2xl font-medium transition-all ease-in-out duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-base transition-all ease-in-out duration-300">
            {!isMobile ||
            showFullDescription ||
            des.length <= maxDescriptionLength
              ? des
              : `${des.slice(0, maxDescriptionLength)}...`}
            {isMobile && des.length > maxDescriptionLength && (
              <Button
                onPress={() => setShowFullDescription(!showFullDescription)}
                className="ml-2 text-sm text-blue-500 hover:underline bg-transparent"
              >
                {showFullDescription ? 'Show Less' : 'Show More'}
              </Button>
            )}
          </p>

          {/* Topics (Tags) Section */}
          <div className="flex flex-wrap gap-2 mt-2">
            {topics &&
              topics.length > 0 &&
              topics
                .slice(
                  0,
                  isMobile && !showAllTopics
                    ? maxTopicsToShowMobile
                    : topics.length
                )
                .map((topic, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 rounded-md shadow-md whitespace-nowrap bg-gray-400 dark:bg-gray-700"
                  >
                    {topic}
                  </span>
                ))}
            {isMobile &&
              topics &&
              topics.length > maxTopicsToShowMobile &&
              !showAllTopics && (
                <Button
                  onPress={() => setShowAllTopics(true)}
                  className="text-xs px-2 py-1 rounded-md shadow-md bg-gray-300 dark:bg-gray-600 bg-transparent"
                >
                  ...
                </Button>
              )}
            {isMobile && showAllTopics && (
              <Button
                onPress={() => setShowAllTopics(false)}
                className="text-xs px-2 py-1 rounded-md shadow-md text-blue-500 bg-transparent"
              >
                Show Less
              </Button>
            )}
          </div>

          {/* Action Links */}
          <div className="w-full flex justify-between items-start flex-wrap flex-col lg:flex-row gap-5">
            <div className="flex justify-center items-end gap-3">
              {repo && (
                <ExternalLink
                  href={repo}
                  customClassName="text-white inline-flex items-center rounded-lg bg-black p-2 hover:bg-gray-900 transition-all ease-in-out duration-300 transform hover:scale-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    color="currentColor"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                </ExternalLink>
              )}
            </div>
          </div>
        </div>
      </AnimationContainer>
    </ExternalLink>
  );
};

export default CardProject;
