'use client';
import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/src/configs/config';
import AnimationContainer from '@/src/components/utils/AnimationContainer';

const Credits = () => {
  return (
    <AnimationContainer customClassName="text-center py-4 dark:text-white/50 text-black/50 text-sm  ">
      <p>
        Built by {''}
        <Link
          href={siteConfig.baseUrl}
          className="text-blue-500 hover:underline"
        >
          {siteConfig.author}
        </Link>
        . All rights reserved © {new Date().getFullYear()}.
      </p>
    </AnimationContainer>
  );
};

export default Credits;
