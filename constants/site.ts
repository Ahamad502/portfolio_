import env from '@/env';

interface Author {
  name: string;
  url: string;
  avatar: string;
  email: string;
  linkedIn: string;
  github: {
    username: string;
    url: string;
  };
  twitter?: string;
}

interface Site {
  url: string;
  name: string;
  title: string;
  description: string;
  author: Author;
  keywords?: string[];
}

export const BASE_URL = env.NEXT_PUBLIC_APP_URL;

export const SITE: Site = {
  url: BASE_URL,
  name: "Abdul Naasir Ahamad's portfolio",
  title: 'Abdul Naasir Ahamad',
  description:
    'Software Engineer passionate about building innovative digital solutions.',
  author: {
    name: 'Abdul Naasir Ahamad',
    url: BASE_URL,
    email: 'ahamadabdul433@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/abdul-naasir-ahamad-170777266/',
    github: {
      username: 'Ahamad502',
      url: 'https://github.com/Ahamad502',
    },
    avatar: '/media/avatar.jpg',
    twitter: '',
  },
  keywords: [
    'Abdul Naasir Ahamad',
    'developer',
    'portfolio',
    'software engineer',
    'full-stack developer',
  ],
};
