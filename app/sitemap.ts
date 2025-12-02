import type { MetadataRoute } from 'next';

import {
  allCertificates,
  allProjects,
  allSnippets,
} from '@/.content-collections/generated';
import { ROUTES } from '@/constants/routes';
import { BASE_URL } from '@/constants/site';

const sitemap = (): MetadataRoute.Sitemap => {
  const certificates = allCertificates
    .filter((cert) => cert.published)
    .map((cert) => ({
      url: `${BASE_URL}${ROUTES.certificates}/${cert.slug}`,
      lastModified: cert.date.split('T')[0],
    }));

  const snippets = allSnippets
    .filter((snippet) => snippet.published)
    .map((snippet) => ({
      url: `${BASE_URL}${ROUTES.snippets}/${snippet.slug}`,
      lastModified: snippet.date.split('T')[0],
    }));

  const routes = [
    '',
    ROUTES.certificates,
    ROUTES.projects,
    ROUTES.snippets,
    ROUTES.tags,
    ROUTES.endorsements,
    ROUTES.guestbook,
    ROUTES.about,
    ROUTES.dashboard,
    ROUTES.resume,
    ROUTES.uses,
    ...allProjects
      .filter((project) => project.published)
      .map((project) => `${ROUTES.projects}/${project.slug}`),
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...certificates, ...snippets];
};

export default sitemap;
