import { defineCollection } from '@content-collections/core';
import { compileMDX } from '@content-collections/mdx';

import { rehypePlugins, remarkPlugins } from '../mdx-plugins';
import { getBlurData } from '../mdx-plugins/remark/blur';
import { getContentImagePath } from './utils';

const certificates = defineCollection({
  name: 'Certificate',
  directory: 'content/certificates',
  include: '**/*.mdx',
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    issuer: z.string(),
    date: z.string().date(),
    image: z.string(),
    certificateUrl: z.string().optional(),
    skills: z.array(z.string()).default([]),
    published: z.boolean().default(true),
  }),
  transform: (doc, context) => {
    return context.cache(
      {
        type: 'certificates',
        doc,
      },
      async () => {
        const code = await compileMDX(
          {
            ...context,
            cache: async (input, fn) => fn(input),
          },
          doc,
          {
            cwd: process.cwd(),
            rehypePlugins,
            remarkPlugins,
          },
        );

        const image = getContentImagePath('certificates', doc.image);
        const imageMeta = await getBlurData(
          getContentImagePath('certificates', doc.image),
        );

        return {
          ...doc,
          _id: doc._meta.filePath,
          slug: doc._meta.path,
          code,
          image,
          imageMeta: JSON.stringify(imageMeta),
        };
      },
    );
  },
});

export default certificates;
