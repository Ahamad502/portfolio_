import Image from 'next/image';
import type { JSX } from 'react';

import { Git, JavaScript } from '@/components/icons';

// PNG logo component helper
const PngLogo = ({ src, alt }: { src: string; alt: string }) => (
  <Image
    src={src}
    alt={alt}
    width={20}
    height={20}
    className="size-5 object-contain"
  />
);

export const STACKS: { [key: string]: JSX.Element } = {
  // SVG Icons
  JavaScript: <JavaScript className="size-5 fill-[#F7DF1E]" />,
  Git: <Git className="size-5 fill-[#F05032]" />,
  // PNG Logos
  Python: <PngLogo src="/logos/python.png" alt="Python" />,
  Java: <PngLogo src="/logos/java.png" alt="Java" />,
  C: <PngLogo src="/logos/c.png" alt="C" />,
  MongoDB: <PngLogo src="/logos/mangobd.png" alt="MongoDB" />,
  'Google Cloud': <PngLogo src="/logos/gcp.png" alt="Google Cloud" />,
  GitHub: <PngLogo src="/logos/github1.png" alt="GitHub" />,
  'VS Code': <PngLogo src="/logos/vscode.png" alt="VS Code" />,
  Cursor: <PngLogo src="/logos/cursor.png" alt="Cursor" />,
  ChatGPT: <PngLogo src="/logos/chatgt.png" alt="ChatGPT" />,
};

export const CORE_STACKS: {
  name: string;
  icon: JSX.Element;
  link: string;
}[] = [
  {
    name: 'Python',
    icon: <PngLogo src="/logos/python.png" alt="Python" />,
    link: 'https://python.org',
  },
  {
    name: 'Java',
    icon: <PngLogo src="/logos/java.png" alt="Java" />,
    link: 'https://java.com',
  },
  {
    name: 'C',
    icon: <PngLogo src="/logos/c.png" alt="C" />,
    link: 'https://en.wikipedia.org/wiki/C_(programming_language)',
  },
  {
    name: 'JavaScript',
    icon: <JavaScript className="size-5 fill-[#F7DF1E]" />,
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'MongoDB',
    icon: <PngLogo src="/logos/mangobd.png" alt="MongoDB" />,
    link: 'https://mongodb.com',
  },
  {
    name: 'Git',
    icon: <Git className="size-5 fill-[#F05032]" />,
    link: 'https://git-scm.com',
  },
  {
    name: 'GitHub',
    icon: <PngLogo src="/logos/github1.png" alt="GitHub" />,
    link: 'https://github.com',
  },
  {
    name: 'Google Cloud',
    icon: <PngLogo src="/logos/gcp.png" alt="Google Cloud" />,
    link: 'https://cloud.google.com',
  },
  {
    name: 'VS Code',
    icon: <PngLogo src="/logos/vscode.png" alt="VS Code" />,
    link: 'https://code.visualstudio.com',
  },
  {
    name: 'Cursor',
    icon: <PngLogo src="/logos/cursor.png" alt="Cursor" />,
    link: 'https://cursor.sh',
  },
  {
    name: 'ChatGPT',
    icon: <PngLogo src="/logos/chatgt.png" alt="ChatGPT" />,
    link: 'https://chat.openai.com',
  },
];
