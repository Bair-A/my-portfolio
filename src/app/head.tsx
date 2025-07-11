'use client';

import { usePathname } from 'next/navigation';
import { generateMetadata } from '@/src/components/utils/generateMetadata';
import { siteConfig } from '@/src/configs/config';
import Script from 'next/script';

const Head = () => {
  const pathname = usePathname() || '/';
  const meta = generateMetadata({
    title: pathname === '/' ? '' : pathname.slice(1).replace(/-/g, ' '),
    path: pathname
  });

  // Generate JSON-LD structured data
  const generateJsonLd = () => {
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': meta.url,
      url: meta.url,
      name: meta.title,
      description: meta.description,
      publisher: {
        '@type': 'Person',
        name: siteConfig.author,
        logo: siteConfig.profile_image
      },
      image: meta.openGraph.image,
      datePublished: new Date().toISOString(),
      dateModified: new Date().toISOString()
    };

    return JSON.stringify(jsonLd);
  };

  return (
    <>
      <title>{meta.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="follow, index" />
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <link rel="canonical" href={meta.url} />

      {/* Add JSON-LD Schema */}
      <Script
        id="json-ld-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateJsonLd()
        }}
      />
    </>
  );
};

export default Head;
