import { defineConfig } from '@content-collections/core';

import certificates from './config/content-collections/certificates';
import pages from './config/content-collections/pages';
import posts from './config/content-collections/posts';
import projects from './config/content-collections/projects';
import snippets from './config/content-collections/snippets';

export default defineConfig({
  collections: [posts, projects, pages, snippets, certificates],
});
