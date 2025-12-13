'use client';

import Image from 'next/image';
import Link from 'next/link';
import { cloneElement, useMemo } from 'react';

import type { Project } from '@/.content-collections/generated';
import { ExternalLink, GitHub } from '@/components/icons';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { ROUTES } from '@/constants/routes';
import { STACKS } from '@/constants/stacks';
import { cn } from '@/lib/utils';

const ProjectCard = ({ project }: { project: Project }) => {
  const {
    title,
    description,
    slug,
    image,
    imageMeta,
    url,
    repositoryUrl,
    playStoreUrl,
    stacks,
  } = project;

  const parsedImageMeta: {
    width: number;
    height: number;
    placeholder?: 'blur' | 'empty';
    blurDataURL?: string;
  } = imageMeta ? JSON.parse(imageMeta) : {};

  const extraImageProps = useMemo(() => {
    if (image && parsedImageMeta?.blurDataURL) {
      return {
        placeholder: 'blur',
        blurDataURL: parsedImageMeta.blurDataURL,
      } as {
        placeholder: 'blur' | 'empty';
        blurDataURL?: string;
      };
    }

    return {};
  }, [image, parsedImageMeta?.blurDataURL]);

  let projectUrl = url ?? `${ROUTES.projects}/${slug}`;
  if (playStoreUrl) projectUrl = playStoreUrl;

  return (
    <div className="group bg-card overflow-hidden rounded-lg">
      <Link href={projectUrl} className="block">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-cover bg-no-repeat">
          <div className="absolute size-full" />
          {image ? (
            <Image
              src={image as string}
              alt={title}
              fill
              className="rounded-t-lg object-cover transition-transform group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              {...extraImageProps}
            />
          ) : (
            <div className="from-primary/10 to-primary/5 flex h-full w-full items-center justify-center bg-gradient-to-br">
              <p className="text-muted-foreground text-sm">Image coming soon</p>
            </div>
          )}
        </div>
        <div className="flex flex-col space-y-2 p-4">
          <h2 className="font-cal text-card-foreground text-lg md:text-xl">
            {title}
          </h2>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </Link>
      {stacks && stacks.length > 0 && (
        <div className="mx-4 mb-4 flex flex-wrap items-end gap-2">
          {stacks
            .filter((stack) => STACKS[stack])
            .map((stack) => (
              <Tooltip key={stack}>
                <TooltipTrigger asChild>
                  <span>
                    {cloneElement(STACKS[stack], {
                      className: cn(
                        `${STACKS[stack].props.className ?? ''} size-6`,
                      ),
                    })}
                  </span>
                </TooltipTrigger>
                <TooltipContent>{stack}</TooltipContent>
              </Tooltip>
            ))}
        </div>
      )}
      <div className="flex gap-3 px-4 pb-4">
        {repositoryUrl && (
          <a
            href={repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="bg-primary/10 hover:bg-primary/20 text-primary flex flex-1 items-center justify-center gap-2 rounded-md px-3 py-2 transition-colors"
          >
            <GitHub className="size-4" />
            <span className="text-sm font-medium">GitHub</span>
          </a>
        )}
        {(url || playStoreUrl) && (
          <a
            href={projectUrl}
            target={playStoreUrl ? '_blank' : undefined}
            rel={playStoreUrl ? 'noopener noreferrer' : undefined}
            onClick={(e) => e.stopPropagation()}
            className="bg-primary/10 hover:bg-primary/20 text-primary flex flex-1 items-center justify-center gap-2 rounded-md px-3 py-2 transition-colors"
          >
            <ExternalLink className="size-4" />
            <span className="text-sm font-medium">
              {playStoreUrl ? 'App Store' : 'Live Demo'}
            </span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
