'use client';

import Link from 'next/link';
import AnimationContainer from '../utils/AnimationContainer';
import ExternalLink from './ExternalLink';
import { siteConfig } from '@/src/configs/config';
import Credits from '@/src/components/ui/Credits';

const Footer = () => {
  return (
    <footer className="w-full lg:max-w-screen-md flex flex-col justify-center items-center mx-auto dark:text-white/70 text-black/70">
      <AnimationContainer customClassName="w-full">
        <hr className="w-full border-1 border-black/50 dark:border-white/50 mb-8" />
      </AnimationContainer>
      <AnimationContainer customClassName="w-full grid place-items-center grid-cols-3 gap-1 lg:gap-4 pb-8 sm:grid-cols-3 mx-3">
        <div className="flex flex-col space-y-4">
          <Link
            href="/home"
            className="flex items-center gap-2  hover:text-gray-600 transition ease"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                clipRule="evenodd"
              />
            </svg>
            Home
          </Link>

          <Link
            href="/about"
            className="flex items-center gap-2  hover:text-gray-600 transition ease"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
            </svg>
            About
          </Link>

          <Link
            href="/projects"
            className="flex items-center gap-2  hover:text-gray-600 transition ease"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M3.25 3A2.25 2.25 0 001 5.25v9.5A2.25 2.25 0 003.25 17h13.5A2.25 2.25 0 0019 14.75v-9.5A2.25 2.25 0 0016.75 3H3.25zM2.5 9v5.75c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75V9h-15zM4 5.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H4zM6.25 6A.75.75 0 017 5.25h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H7a.75.75 0 01-.75-.75V6zM10 5.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H10z"
                clipRule="evenodd"
              />
            </svg>
            Projects
          </Link>
        </div>

        <div className="flex flex-col space-y-4 ">
          <ExternalLink href={siteConfig.social.github}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387c.602.11.82-.258.82-.578c0-.286-.011-1.04-.015-2.04c-3.34.723-4.043-1.609-4.043-1.609c-.547-1.387-1.332-1.758-1.332-1.758c-1.09-.742.082-.726.082-.726c1.203.086 1.836 1.234 1.836 1.234c1.07 1.836 2.808 1.305 3.492 1c.11-.777.422-1.305.762-1.605c-2.664-.301-5.465-1.332-5.465-5.93c0-1.313.469-2.383 1.234-3.223c-.121-.3-.535-1.523.117-3.175c0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0 1 16 9.805c1.02.004 2.047.136 3.004.402c2.293-1.55 3.297-1.23 3.297-1.23c.656 1.652.246 2.875.12 3.175c.77.84 1.231 1.91 1.231 3.223c0 4.61-2.804 5.621-5.476 5.922c.43.367.812 1.101.812 2.219c0 1.605-.011 2.898-.011 3.293c0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z"
              />
            </svg>
            GitHub
          </ExternalLink>
        </div>

        <div className="flex flex-col space-y-4">
          <Link
            href="/projects"
            className="flex items-center gap-2  hover:text-gray-600 transition ease"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M3 6v8h5.635L12 19.908V27h8v-8h-6.217l-2.845-5H11v-3h10v3h8V6h-8v3H11V6H3zm2 2h4v4H5V8zm18 0h4v4h-4V8zm-8.582 13H18v4h-4v-3.762l.418-.238z"
              />
            </svg>
            Projects
          </Link>

          <Link
            href=""
            className="flex items-center gap-2  hover:text-gray-600 transition ease"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M1 11.27c0-.246.033-.492.099-.73l1.523-5.521A2.75 2.75 0 015.273 3h9.454a2.75 2.75 0 012.651 2.019l1.523 5.52c.066.239.099.485.099.732V15a2 2 0 01-2 2H3a2 2 0 01-2-2v-3.73zm3.068-5.852A1.25 1.25 0 015.273 4.5h9.454a1.25 1.25 0 011.205.918l1.523 5.52c.006.02.01.041.015.062H14a1 1 0 00-.86.49l-.606 1.02a1 1 0 01-.86.49H8.236a1 1 0 01-.894-.553l-.448-.894A1 1 0 006 11H2.53l.015-.062 1.523-5.52z"
                clipRule="evenodd"
              />
            </svg>
            Contact
          </Link>
        </div>
      </AnimationContainer>

      <Credits />
    </footer>
  );
};

export default Footer;
