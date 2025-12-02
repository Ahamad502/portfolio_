'use client';

import Image from 'next/image';
import { useMemo } from 'react';

import type { Certificate } from '@/.content-collections/generated';
import { ExternalLink } from '@/components/icons';

const CertificateCard = ({ certificate }: { certificate: Certificate }) => {
  const {
    title,
    description,
    issuer,
    image,
    imageMeta,
    certificateUrl,
    skills,
  } = certificate;

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

  return (
    <div className="group bg-card border-border hover:border-primary/50 overflow-hidden rounded-lg border transition-colors">
      <div className="relative aspect-video w-full overflow-hidden rounded-t-lg bg-cover bg-no-repeat">
        {image ? (
          <Image
            src={image as string}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            {...extraImageProps}
          />
        ) : (
          <div className="from-primary/10 to-primary/5 flex h-full w-full items-center justify-center bg-gradient-to-br">
            <p className="text-muted-foreground text-sm">Certificate preview</p>
          </div>
        )}
      </div>

      <div className="flex flex-col space-y-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <h3 className="font-cal text-card-foreground text-lg md:text-xl">
              {title}
            </h3>
            <p className="text-primary text-sm font-medium">{issuer}</p>
          </div>
        </div>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>

      {skills && skills.length > 0 && (
        <div className="mx-4 mb-3 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-primary/10 text-primary inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      {certificateUrl && (
        <div className="px-4 pb-4">
          <a
            href={certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary/10 hover:bg-primary/20 text-primary inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-2 transition-colors"
          >
            <ExternalLink className="size-4" />
            <span className="text-sm font-medium">View Certificate</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default CertificateCard;
