import { FileTextIcon } from 'lucide-react';

import { Email, GitHub, LinkedIn } from '@/components/icons';
import Link from '@/components/link';
import { Button } from '@/components/ui/button';
import { SITE } from '@/constants/site';

import TechStacks from './tech-stacks';

const Biography = () => {
  return (
    <>
      <p>Hi there! Thanks for visiting my digital home on the internet.</p>
      <p>
        I'm Abdul Naasir Ahamad, a B.Tech CSE student passionate about
        full-stack and web development, always exploring new technologies and
        building clean, creative solutions. I enjoy problem-solving,
        experimenting with ideas, and writing code that is simple and efficient.
      </p>
      <p>
        I've participated in a major hackathon at VR Siddhartha Engineering
        College and reached the second round. I practice daily coding and DSA to
        strengthen my fundamentals. My goal is to grow into a strong full-stack
        developer and build a meaningful career in tech.
      </p>
      <p>
        I approach development with a focus on clean, simple, and efficient
        code. My core principles are clarity, consistency, and continuous
        learning—building projects step by step, improving through feedback, and
        always aiming for better performance and user experience.
      </p>
      <p>
        If you'd like to learn more about my professional background and
        qualifications, feel free to explore my resume.{' '}
      </p>
      <a href="/share/resume.pdf" target="_blank" rel="noopener noreferrer">
        <Button variant="shadow" className="gap-x-1">
          <FileTextIcon /> My Resume
        </Button>
      </a>

      <h2 className="font-cal">Tech Stack</h2>
      <TechStacks />

      <h2 className="font-cal">Let's Connect</h2>
      <p>
        Questions or collaborations? Reach out to me at{' '}
        <Link
          href={`mailto:${SITE.author.email}?subject=Hi Abdul!`}
          className="underline"
        >
          {SITE.author.email}
        </Link>{' '}
        or connect through social media. Let's build something amazing together!
      </p>
      <div className="my-2 flex items-center gap-4">
        <Link
          href={SITE.author.github.url}
          className="text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          <GitHub className="size-5" />
        </Link>
        <Link
          href={SITE.author.linkedIn}
          className="text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          <LinkedIn className="size-5" />
        </Link>
        <Link
          href={`mailto:${SITE.author.email}?subject=Hi Abdul!`}
          className="text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          <Email className="size-5" />
        </Link>
      </div>
    </>
  );
};

export default Biography;
