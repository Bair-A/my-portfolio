export const siteConfig: {
  baseUrl: string;
  domain: string;
  author: string;
  author_surname: string;
  titlePrefix: string;
  profile_image: string;
  form_id: string;
  github_org_name: string;
  country: string;
  previous_vork: {
    foodster: string;
  };
  social: {
    telegram: string;
    kofi: string;
    sponsor: string;
    email: string;
    twitter: string;
    github: string;
    linkedin: string;
    blog: string;
    medium: string;
    dev: string;
    hashnode: string;
    discord: string;
    github_organisation: string;
    daily_dev: {
      username: string;
      card: string;
    };
    holopin: string;
  };
  other: {
    hacktoberfest: string;
    codsoft: string;
    github_snake: string;
  };
  chatbot: {
    rateLimit: number;
  };
  contact: {
    debug: boolean;
    rateLimit: number;
  };
  metadata: {
    description: string;
    keywords: string;
    type: string;
  };
} = {
  baseUrl: 'https://github.com/bair-a',
  domain: '',
  author: 'Bair Aveev',
  author_surname: 'Aveev',
  titlePrefix: 'Bair Aveev',
  github_org_name: '',
  country: 'Russia',
  profile_image:
    'https://avatars.githubusercontent.com/u/60327040?s=400&u=70da1ce184957b372fedfe57b4550a6651a0b906&v=4',
  form_id: 'https://formspree.io/f/myzynpbr',
  previous_vork: {
    foodster: 'https://foodster.pro/'
  },
  social: {
    telegram: 'https://t.me/aveev_bo',
    kofi: 'https://ko-fi.com/muhammadfiaz',
    sponsor: 'https://github.com/sponsors/muhammad-fiaz',
    email: 'aveevb123@gmail.com',
    twitter: '@muhammadfiaz_',
    github: 'https://github.com/bair-a',
    linkedin: '',
    blog: 'https://articles.muhammadfiaz.com',
    medium: 'https://muhammad-fiaz.medium.com',
    dev: 'https://dev.to/muhammadfiaz',
    hashnode: 'https://muhammadfiaz.hashnode.dev',
    discord: 'https://discord.gg/mXMhy2EX',
    github_organisation: 'https://github.com/FiazTechnologies',
    daily_dev: {
      username: 'muhammadfiaz',
      card: 'https://api.daily.dev/devcards/v2/JVyK3ICBzKPdM0rcDj1o4.png?type=wide&r=vde'
    },
    holopin: 'bairaveev'
  },
  metadata: {
    description: `Hi! I'm Muhammad Fiaz, a Full Stack developer passionate about building apps, exploring AI and ML, and collaborating on exciting projects. Let's connect!`,
    keywords:
      'Muhammad Fiaz, Full Stack Developer, Muhammad Fiaz portfolio, Muhammad Fiaz GitHub, Web Development, Mobile Applications, Machine Learning, Artificial Intelligence, Programming Languages, Open Source Developer, App Development',
    type: 'website'
  },
  chatbot: {
    rateLimit: 10
  },
  contact: {
    debug: true,
    rateLimit: 10
  },
  other: {
    hacktoberfest: 'https://hacktoberfest.com/',
    codsoft: 'https://www.codsoft.in/',
    github_snake:
      'https://raw.githubusercontent.com/muhammad-fiaz/muhammad-fiaz/output/github-contribution-grid-snake.svg'
  }
};

interface ProjectsConfig {
  category: string;
  des: string;
  id: string;
  link: string;
  repo?: string;
  title: string;
  topics: string[];
}

export const projectsConfig: ProjectsConfig[] = [
  {
    category: 'js',
    des: 'Real project. Food ordering service.',
    id: '1',
    link: 'https://foodster.pro/',
    title: 'foodster',
    topics: ['js', 'react', 'next.js', 'ts', 'tailwind']
  }
];
