// app/manifest.ts
import type { MetadataRoute } from 'next';
import { siteConfig } from '@/src/configs/config';

// The manifest function returns a metadata object conforming to the MetadataRoute.Manifest type
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.author, // Use author name from the config
    short_name: siteConfig.author_surname, // Short name for the app
    description: siteConfig.metadata.description, // Use description from siteConfig
    start_url: '/', // The starting URL of the app when launched
    display: 'standalone', // Display mode of the app
    background_color: '#ffffff', // Background color for the app
    theme_color: '#000000', // Theme color for the app
    icons: []
  };
}
