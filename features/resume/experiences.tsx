import {
  JavaScript,
  Jest,
  Kotlin,
  Laravel,
  NextJS,
  NuxtJS,
  PHP,
  RabbitMQ,
  ReactJS,
  Redis,
  Spring,
  TailwindCSS,
  TypeScript,
  VueJS,
} from '@/components/icons';

import type { Experience } from './types';

export const EXPERIENCES: Experience[] = [
  {
    company: {
      name: 'Mekari',
      logo: '/media/resume/mekari.png',
      url: 'https://mekarisign.com',
      location: 'Jakarta',
      workingArrangement: 'Hybrid',
      jobType: 'Full-time',
    },
    role: 'Front-end Engineer',
    startDate: '2024-03',
    endDate: null,
    stacks: [
      {
        name: 'TypeScript',
        icon: <TypeScript className="size-5 fill-[#3178C6]" />,
      },
      {
        name: 'Nuxt.js',
        icon: <NuxtJS className="size-5 fill-[#00DC82]" />,
      },
      {
        name: 'Jest',
        icon: <Jest className="size-5 fill-[#C21325]" />,
      },
    ],
    accomplishments: [
      'Enhanced digital signing UI/UX to support document signing, approvals, and interactions, with a responsive design ensuring seamless accessibility across devices.',
      'Reduced document load times and improved performance by implementing efficient rendering techniques for large PDFs.',
      'Maintained and refined the in-house Design System Language to ensure consistent UI/UX across features.',
      'Developed reusable, high-quality UI components for document management and collaboration.',
      'Built real-time collaboration with pinned comments, including optimized event handling and state management.',
      'Integrated OneDrive for seamless document uploads.',
      'Implemented unit tests achieving over 75% test coverage.',
    ],
  },

  {
    company: {
      name: 'Yummy Bros',
      logo: '/media/resume/yummybros.png',
      url: 'https://yummybros.com',
      location: 'Singapore',
      workingArrangement: 'Remote',
      jobType: 'Freelance',
    },
    role: 'Full-stack Engineer',
    startDate: '2023-12',
    endDate: null,
    stacks: [
      {
        name: 'Next.js',
        icon: <NextJS className="size-5 fill-black dark:fill-white" />,
      },
      {
        name: 'React.js',
        icon: <ReactJS className="size-5 fill-[#61DAFB]" />,
      },
      {
        name: 'TypeScript',
        icon: <TypeScript className="size-5 fill-[#3178C6]" />,
      },
      {
        name: 'JavaScript',
        icon: <JavaScript className="size-5 fill-[#F7DF1E]" />,
      },
      {
        name: 'Tailwind CSS',
        icon: <TailwindCSS className="size-5 fill-[#06B6D4]" />,
      },
      {
        name: 'Laravel',
        icon: <Laravel className="size-5 fill-[#FF2D20]" />,
      },
      {
        name: 'PHP',
        icon: <PHP className="size-5 fill-[#777BB4]" />,
      },
    ],
    accomplishments: [
      'Expanded application capabilities with new business-driven features.',
      'Implemented SSR with Next.js for improved performance.',
      'Developed a user-friendly CMS dashboard using React.js.',
      'Built APIs connecting storefront and CMS.',
      'Migrating from JavaScript to TypeScript for cleaner maintainable code.',
      'Migrating styling from Bootstrap to Tailwind CSS.',
      'Built reusable UI components.',
    ],
  },

  {
    company: {
      name: 'Investree',
      logo: '/media/resume/investree.png',
      url: 'https://investree.id',
      location: 'Jakarta',
      workingArrangement: 'Hybrid',
      jobType: 'Full-time',
    },
    role: 'Full-stack Engineer',
    startDate: '2020-11',
    endDate: '2024-03',
    stacks: [
      {
        name: 'Spring',
        icon: <Spring className="size-5 fill-[#6DB33F]" />,
      },
      {
        name: 'Kotlin',
        icon: <Kotlin className="size-5 fill-[#7F52FF]" />,
      },
      {
        name: 'Vue.js',
        icon: <VueJS className="size-5 fill-[#4FC08D]" />,
      },
      {
        name: 'JavaScript',
        icon: <JavaScript className="size-5 fill-[#F7DF1E]" />,
      },
      {
        name: 'Jest',
        icon: <Jest className="size-5 fill-[#C21325]" />,
      },
      {
        name: 'Laravel',
        icon: <Laravel className="size-5 fill-[#FF2D20]" />,
      },
      {
        name: 'PHP',
        icon: <PHP className="size-5 fill-[#777BB4]" />,
      },
      {
        name: 'Redis',
        icon: <Redis className="size-5 fill-[#DC382D]" />,
      },
      {
        name: 'RabbitMQ',
        icon: <RabbitMQ className="size-5 fill-[#FF6600]" />,
      },
    ],
    accomplishments: [
      'Designed and developed scalable backend services using Kotlin (Spring).',
      'Maintained legacy systems using PHP (Laravel) and Vue.',
      'Developed a flexible loan automation system.',
      'Built widely-used partner APIs.',
      'Contributed to internal standards and design patterns.',
      'Built partner dashboards.',
      'Performed code reviews upholding best practices.',
      'Implemented unit tests for all new features.',
      'Resolved technical issues efficiently.',
      'Delivered performant front-end UI.',
      'Built reusable UI components.',
      'Followed Agile development practices.',
      'Integrated signature, document, and payment APIs.',
      'Maintained technical documentation.',
    ],
  },

  {
    company: {
      name: 'Varnion',
      logo: '/media/resume/varnion.png',
      url: 'https://varnion.com',
      location: 'Jakarta',
      workingArrangement: 'On-Site',
      jobType: 'Full-time',
    },
    role: 'Full-stack Engineer',
    startDate: '2018-06',
    endDate: '2020-08',
    stacks: [
      {
        name: 'Laravel',
        icon: <Laravel className="size-5 fill-[#FF2D20]" />,
      },
      {
        name: 'PHP',
        icon: <PHP className="size-5 fill-[#777BB4]" />,
      },
      {
        name: 'Vue.js',
        icon: <VueJS className="size-5 fill-[#4FC08D]" />,
      },
      {
        name: 'React.js',
        icon: <ReactJS className="size-5 fill-[#61DAFB]" />,
      },
      {
        name: 'JavaScript',
        icon: <JavaScript className="size-5 fill-[#F7DF1E]" />,
      },
    ],
    accomplishments: [
      'Refactored legacy code to modern standards.',
      'Optimized database performance and scalability.',
      'Integrated Elasticsearch for advanced monitoring.',
      'Designed new product features.',
      'Mentored junior developers.',
      'Kept up with emerging technologies.',
      'Developed internal data management tools.',
    ],
  },
];
