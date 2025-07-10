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
  form_id: '',
  previous_vork: {
    foodster: 'https://foodster.pro/'
  },
  social: {
    telegram: 'https://t.me/aveev_bo',
    kofi: '',
    sponsor: '',
    email: 'aveevb123@gmail.com',
    twitter: '',
    github: 'https://github.com/bair-a',
    linkedin: '',
    blog: '',
    medium: '',
    dev: '',
    hashnode: '',
    discord: '',
    github_organisation: '',
    daily_dev: {
      username: 'bairaveev',
      card: ''
    },
    holopin: 'bairaveev'
  },
  metadata: {
    description: `Hi! I'm Bair Aveev, a Frontend developer passionate about building apps. Let's connect!`,
    keywords: '',
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
    hacktoberfest: '',
    codsoft: '',
    github_snake: ''
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
    des: 'Food ordering service.',
    id: '1',
    link: 'https://foodster.pro/',
    title: 'foodster',
    topics: [
      'JS',
      'TS',
      'React',
      'Next.js',
      'Refine dev',
      'Tailwind',
      'Ant Design',
      'FSD'
    ]
  }
];
