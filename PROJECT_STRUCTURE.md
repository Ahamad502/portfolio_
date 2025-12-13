# 📁 Project Structure Guide

This is a **Next.js 15** portfolio website built with TypeScript, Tailwind CSS, and Prisma. Here's how everything is organized so you can customize it to make it yours!

## 🎯 Quick Overview

This is a modern portfolio website with:
- **Blog posts** (MDX format)
- **Projects showcase**
- **Code snippets**
- **Guestbook** (visitor comments)
- **Endorsements** (skill endorsements)
- **Dashboard** (analytics & stats)
- **Resume/About pages**
- **Spotify Now Playing** integration

---

## 📂 Root Directory Structure

```
3d-portfolio_website/
├── app/                    # Next.js App Router pages
├── assets/                 # Fonts and static assets
├── components/             # Reusable UI components
├── config/                 # Configuration files
├── constants/              # Site constants & routes
├── content/                # MDX content (blog, projects, snippets)
├── features/               # Feature-specific components & logic
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions & helpers
├── prisma/                 # Database schema
├── public/                 # Static files (images, favicons)
├── types/                  # TypeScript type definitions
└── [config files]          # Next.js, Tailwind, ESLint, etc.
```

---

## 🔍 Detailed Breakdown

### 1. `/app` - Next.js Pages (App Router)

This is where all your **pages/routes** live. Each folder becomes a URL route.

```
app/
├── page.tsx              # Homepage (/)
├── layout.tsx            # Root layout (wraps all pages)
├── about/page.tsx        # About page (/about)
├── blog/                 # Blog section
│   ├── page.tsx          # Blog listing (/blog)
│   └── [slug]/           # Dynamic blog post pages
├── projects/page.tsx     # Projects page (/projects)
├── snippets/             # Code snippets
├── guestbook/page.tsx    # Guestbook page
├── endorsements/         # Skills endorsements
├── dashboard/page.tsx    # Analytics dashboard
├── resume/page.tsx       # Resume page
├── uses/page.tsx         # "Uses" page (tools/tech)
└── api/                  # API routes
    ├── auth/             # Authentication endpoints
    ├── guestbook/        # Guestbook API
    ├── spotify/          # Spotify integration
    └── views/            # Page view tracking
```

**Key Files to Customize:**
- `app/page.tsx` - Your homepage
- `app/about/page.tsx` - About you page
- `app/layout.tsx` - Global layout (header, footer, fonts)

---

### 2. `/components` - Reusable UI Components

Shared components used across the site.

```
components/
├── header.tsx            # Site header/navigation
├── footer.tsx            # Site footer
├── theme-switch.tsx      # Dark/light mode toggle
├── command-palette.tsx   # Command menu (Cmd+K)
├── blur-image.tsx        # Image with blur effect
├── analytics.tsx         # Analytics tracking
└── ui/                   # shadcn/ui components
    ├── button.tsx
    ├── dialog.tsx
    ├── toast.tsx
    └── ...
```

**Customize:**
- `header.tsx` - Navigation menu
- `footer.tsx` - Footer content
- Add your own components here

---

### 3. `/features` - Feature Modules

Organized by feature. Each feature has its own components, hooks, and server logic.

```
features/
├── home/                 # Homepage features
│   └── components/
│       ├── hero.tsx      # Hero section
│       └── get-in-touch.tsx
├── posts/                # Blog post features
│   └── components/
│       ├── post-card.tsx
│       └── latest-posts.tsx
├── projects/             # Project showcase
├── guestbook/            # Guestbook feature
│   ├── components/       # UI components
│   ├── hooks/            # Custom hooks
│   └── server/           # Server actions
├── endorsements/         # Skill endorsements
├── dashboard/            # Analytics dashboard
├── now-playing/          # Spotify integration
└── resume/               # Resume components
```

**Why this structure?**
- Keeps related code together
- Easy to find and modify features
- Each feature is self-contained

---

### 4. `/content` - Your Content (MDX Files)

This is where you write your **blog posts, projects, and snippets** in MDX format.

```
content/
├── posts/                # Blog posts
│   ├── my-first-post.mdx
│   └── another-post.mdx
├── projects/             # Project descriptions
│   ├── my-project.mdx
│   └── another-project.mdx
├── snippets/             # Code snippets
│   └── my-snippet.mdx
└── pages/                # Static pages
    └── uses.mdx          # "Uses" page content
```

**How to add content:**
1. Create a new `.mdx` file in the appropriate folder
2. Add frontmatter (metadata) at the top
3. Write your content in Markdown/MDX

**Example MDX file:**
```mdx
---
title: "My First Blog Post"
description: "This is my first post"
publishedAt: "2024-01-01"
---

# My First Post

Content goes here...
```

---

### 5. `/constants` - Site Configuration

**Most important folder to customize!**

```
constants/
├── site.ts               # ⭐ YOUR SITE INFO (name, bio, links)
├── routes.ts             # Route definitions
├── links.tsx             # Social media links
└── stacks.tsx            # Tech stack icons
```

**`constants/site.ts` - Update this first!**
```typescript
export const SITE: Site = {
  name: "Your Name's Portfolio",
  title: 'Your Name',
  description: 'Your bio/description',
  author: {
    name: 'Your Name',
    email: 'your@email.com',
    github: { username: 'yourusername' },
    // ... update all your info
  },
};
```

---

### 6. `/lib` - Utilities & Helpers

Utility functions and server-side helpers.

```
lib/
├── utils.ts              # General utilities (cn, etc.)
├── db.ts                 # Prisma database client
├── auth.ts               # Authentication helpers
├── fetcher.ts            # API fetching utilities
└── meta/                 # SEO metadata helpers
```

---

### 7. `/prisma` - Database Schema

Your database structure (PostgreSQL).

```
prisma/
├── schema.prisma         # Database schema
└── migrations/           # Database migrations
```

**Models:**
- `User` - User accounts (NextAuth)
- `Guestbook` - Guestbook entries
- `Endorsement` - Skill endorsements
- `ContentMeta` - Blog post metadata (views, shares, reactions)
- `View`, `Share`, `Reaction` - Engagement tracking

**To modify:**
- Edit `schema.prisma` to change database structure
- Run `npx prisma migrate dev` after changes

---

### 8. `/public` - Static Assets

Files served directly (images, favicons, etc.).

```
public/
├── media/                # Your images
│   └── [your-images]
├── emojis/               # Emoji images
├── favicon.ico           # Site favicon
└── share/
    └── resume.pdf        # Your resume PDF
```

**Add your assets here:**
- Profile pictures
- Project screenshots
- Favicons
- Resume PDF

---

### 9. `/hooks` - Custom React Hooks

Reusable React hooks.

```
hooks/
├── use-mounted.ts        # Check if component mounted
├── use-media-query.ts    # Responsive breakpoints
├── use-toast.ts          # Toast notifications
└── use-copy-button.ts    # Copy to clipboard
```

---

### 10. `/config` - Configuration Files

```
config/
├── content-collections/  # MDX content config
│   ├── posts.ts          # Blog post schema
│   ├── projects.ts       # Project schema
│   └── snippets.ts       # Snippet schema
├── mdx-plugins/          # MDX processing plugins
└── next/                 # Next.js configs
    ├── headers.js        # HTTP headers
    └── redirects.js      # URL redirects
```

---

## 🎨 Key Configuration Files

### `next.config.ts`
- Next.js configuration
- Image domains
- Webpack config
- Sentry integration

### `tailwind.config.ts`
- Tailwind CSS configuration
- Custom colors, fonts, breakpoints

### `package.json`
- Dependencies
- Scripts (`npm run dev`, `npm run build`, etc.)

### `tsconfig.json`
- TypeScript configuration
- Path aliases (`@/` = root directory)

---

## 🚀 How to Customize This Project

### Step 1: Update Site Info
1. Edit `constants/site.ts` - Change name, bio, links
2. Update `package.json` - Change name, author

### Step 2: Replace Content
1. Delete existing files in `content/posts/`, `content/projects/`
2. Add your own MDX files
3. Update `content/pages/uses.mdx` with your tools

### Step 3: Update Images
1. Replace images in `public/media/`
2. Update avatar path in `constants/site.ts`
3. Replace favicons in `public/`

### Step 4: Customize Pages
1. `app/about/page.tsx` - Your about page
2. `app/page.tsx` - Homepage layout
3. `features/resume/experiences.tsx` - Your work experience

### Step 5: Update Styling
1. `app/global.css` - Global styles
2. `tailwind.config.ts` - Colors, fonts
3. `components/header.tsx` - Navigation styling

### Step 6: Remove/Add Features
- **Remove guestbook?** Delete `app/guestbook/` and `features/guestbook/`
- **Remove endorsements?** Delete `app/endorsements/` and `features/endorsements/`
- **Add new page?** Create `app/your-page/page.tsx`

---

## 📝 Content Collections (MDX)

The project uses **Content Collections** to manage MDX files.

**How it works:**
1. Write `.mdx` files in `content/` folders
2. Frontmatter defines metadata
3. Content Collections processes them
4. Access via `getCollection()` in your pages

**Example:**
```typescript
import { getCollection } from '@content-collections/next';
import { posts } from '@/config/content-collections/posts';

const allPosts = await getCollection(posts);
```

---

## 🗄️ Database Setup

1. **Set up database:**
   - Create PostgreSQL database (or use PlanetScale)
   - Add `DATABASE_URL` to `.env`

2. **Run migrations:**
   ```bash
   npx prisma migrate dev
   ```

3. **Generate Prisma client:**
   ```bash
   npx prisma generate
   ```

---

## 🔐 Environment Variables

Create `.env` file with:
- `DATABASE_URL` - Database connection
- `NEXTAUTH_SECRET` - Auth secret
- `GOOGLE_ID`, `GOOGLE_SECRET` - Google OAuth (optional)
- `GITHUB_ID`, `GITHUB_SECRET` - GitHub OAuth
- `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET` - Spotify (optional)
- `NEXT_PUBLIC_APP_URL` - Your site URL

---

## 🎯 Quick Customization Checklist

- [ ] Update `constants/site.ts` with your info
- [ ] Replace images in `public/media/`
- [ ] Update `app/about/page.tsx`
- [ ] Add your blog posts to `content/posts/`
- [ ] Add your projects to `content/projects/`
- [ ] Update `features/resume/experiences.tsx`
- [ ] Replace `public/share/resume.pdf`
- [ ] Update `package.json` name/author
- [ ] Customize colors in `tailwind.config.ts`
- [ ] Update favicons in `public/`

---

## 📚 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** PostgreSQL + Prisma
- **Auth:** NextAuth.js
- **Content:** MDX + Content Collections
- **UI Components:** Radix UI + shadcn/ui
- **Animations:** Framer Motion
- **Deployment:** Vercel (recommended)

---

## 🆘 Need Help?

- Check the original README.md
- Look at existing MDX files for examples
- Check Next.js docs: https://nextjs.org/docs
- Check Content Collections docs: https://www.content-collections.dev/

---

**Happy customizing! 🎉**

