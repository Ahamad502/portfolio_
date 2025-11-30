# 🚀 Portfolio Website - Complete Setup & Customization Guide

A modern, feature-rich portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Prisma.

![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat-square&logo=tailwind-css)

---

## 📋 Table of Contents

- [Quick Start](#-quick-start)
- [Detailed Setup Guide](#-detailed-setup-guide)
- [Making Modifications](#-making-modifications)
- [Project Structure](#-project-structure)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Troubleshooting](#-troubleshooting)
- [Deployment](#-deployment)

---

## ⚡ Quick Start

### Prerequisites

Before you begin, make sure you have installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** (comes with Node.js)
- **Git** - [Download](https://git-scm.com/)

### Step 1: Navigate to Project

```bash
cd portfolio_
```

### Step 2: Install Dependencies

```bash
yarn install
# or
npm install
```

### Step 3: Create Environment File

Create a `.env` file in the `portfolio_` folder with the following variables:

```env
# Required - Minimal Setup
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_AVAILABLE_FOR_HIRE=true

# Generate secret: https://generate-secret.vercel.app/32
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-random-32-character-secret-here

# Database (see Database Setup below)
DATABASE_URL=postgresql://username:password@localhost:5432/portfolio_db
DIRECT_URL=postgresql://username:password@localhost:5432/portfolio_db

# Placeholders (required by env validation)
GOOGLE_ID=placeholder
GOOGLE_SECRET=placeholder
GITHUB_ID=placeholder
GITHUB_SECRET=placeholder
GITHUB_READ_USER_TOKEN_PERSONAL=placeholder
SPOTIFY_CLIENT_ID=placeholder
SPOTIFY_CLIENT_SECRET=placeholder
SPOTIFY_CLIENT_REFRESH_TOKEN=placeholder
WAKATIME_API_KEY=placeholder
```

### Step 4: Set Up Database

**Option 1: Use Neon (Recommended - Free Cloud Database)**

1. Go to [Neon.tech](https://neon.tech/)
2. Sign up and create a new project
3. Copy the connection string
4. Paste it in your `.env` file:
   ```env
   DATABASE_URL=your-neon-connection-string
   DIRECT_URL=your-neon-connection-string
   ```

**Option 2: Local PostgreSQL**

1. Install PostgreSQL
2. Create a database:
   ```sql
   CREATE DATABASE portfolio_db;
   ```
3. Update `.env` with your local connection string

### Step 5: Initialize Database

  ```bash
  # Generate Prisma Client
  yarn prisma:generate

  # Run database migrations
  npx prisma migrate dev --name init
```

### Step 6: Run the Project

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser! 🎉

---

## 📚 Detailed Setup Guide

For a complete, step-by-step guide with all details, troubleshooting tips, and explanations, see:

👉 **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** 👈

This comprehensive guide includes:
- Detailed prerequisites
- Complete environment variable setup
- Database setup options
- Step-by-step customization instructions
- Common issues and solutions
- Deployment guide

---

## ✏️ Making Modifications

### 1️⃣ Update Your Personal Information

#### **File: `constants/site.ts`**

Update your name, bio, links, and social media:

```typescript
export const SITE: Site = {
  name: "Your Name's Portfolio",
  title: 'Your Name',
  description: 'Your bio description here',
  author: {
    name: 'Your Full Name',
    email: 'your.email@example.com',
    github: {
      username: 'yourgithub',
      url: 'https://www.github.com/yourgithub',
    },
    linkedIn: 'https://www.linkedin.com/in/yourprofile',
    avatar: '/media/yourname/your-photo.jpg',
  },
};
```

#### **File: `package.json`**

```json
{
  "name": "your-portfolio",
  "author": "Your Name",
  "description": "Your portfolio website"
}
```

### 2️⃣ Replace Content

#### Blog Posts: `content/posts/`
- Delete existing files
- Create new `.mdx` files for your posts

Example:
```mdx
---
title: "My First Post"
description: "What this post is about"
publishedAt: "2024-01-15"
---

# My First Post

Your content here...
```

#### Projects: `content/projects/`
- Delete existing project files
- Add your own projects with descriptions and screenshots

#### Code Snippets: `content/snippets/`
- Replace with your own code examples

### 3️⃣ Update Pages

- **Homepage:** `app/page.tsx`
- **About Page:** `app/about/page.tsx`
- **Resume:** `features/resume/experiences.tsx` or `app/resume/page.tsx`

### 4️⃣ Replace Assets

- **Profile Photo:** Add to `public/media/` and update path in `constants/site.ts`
- **Resume PDF:** Replace `public/share/resume.pdf`
- **Favicons:** Replace files in `public/` folder
- **Logos:** Replace `assets/images/logo-dark.svg` and `logo-light.svg`

### 5️⃣ Customize Styling

- **Colors:** Edit `tailwind.config.ts`
- **Global Styles:** Edit `app/global.css`
- **Fonts:** Add to `assets/fonts/` and update CSS

### 6️⃣ Update Navigation

- **Header:** `components/header.tsx`
- **Footer:** `components/footer.tsx`

### 📖 For More Details

See the **"Making Modifications"** section in [SETUP_GUIDE.md](./SETUP_GUIDE.md) for detailed instructions on:
- Customizing each component
- Adding/removing features
- Creating new pages
- Advanced customization

---

## 📁 Project Structure

```
portfolio_/
├── app/                    # Next.js pages (routes)
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── blog/              # Blog posts
│   ├── projects/          # Projects showcase
│   └── api/               # API routes
├── components/            # Reusable UI components
│   ├── header.tsx
│   ├── footer.tsx
│   └── ui/                # shadcn/ui components
├── constants/             # Site configuration
│   └── site.ts           # ⭐ Update this first!
├── content/              # MDX content files
│   ├── posts/            # Blog posts
│   ├── projects/         # Projects
│   └── snippets/         # Code snippets
├── features/             # Feature modules
│   ├── home/
│   ├── posts/
│   ├── guestbook/
│   └── dashboard/
├── public/               # Static assets
│   ├── media/           # Images
│   └── share/           # Resume PDF
├── prisma/              # Database schema
│   └── schema.prisma
└── .env                 # Environment variables (create this!)
```

📖 **For detailed structure explanation, see:** [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)

---

## ✨ Features

- 🔥 **Next.js 15** with App Router
- ⚛️ **React 19** with TypeScript
- 💅 **Tailwind CSS 4** for styling
- 📝 **MDX** for content (blog posts, projects, snippets)
- 🗄️ **PostgreSQL** database with Prisma ORM
- 🔐 **NextAuth.js** for authentication
- 📊 **Analytics Dashboard** (views, shares, reactions)
- 💬 **Guestbook** (visitor comments)
- 👍 **Endorsements** (skill endorsements)
- 🎵 **Spotify Now Playing** integration
- 🌓 **Dark/Light Mode**
- 📱 **Fully Responsive**
- ⚡ **Fast & Optimized**
- 🔍 **SEO Optimized**

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Database:** [PostgreSQL](https://www.postgresql.org/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Authentication:** [NextAuth.js](https://next-auth.js.org/)
- **Content:** [MDX](https://mdxjs.com/) + [Content Collections](https://www.content-collections.dev/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Deployment:** [Vercel](https://vercel.com) (recommended)

---

## 🔧 Available Scripts

```bash
# Development
yarn dev              # Start development server
yarn build            # Build for production
yarn start            # Start production server

# Database
yarn prisma:generate  # Generate Prisma Client
yarn prisma:studio    # Open database GUI

# Code Quality
yarn lint             # Run ESLint
yarn check-types      # Check TypeScript types
yarn clean            # Clean build files
```

---

## 🐛 Troubleshooting

### Common Issues

**1. Module not found errors**
```bash
rm -rf node_modules
yarn install
```

**2. Database connection errors**
- Check `DATABASE_URL` in `.env`
- Make sure database is running
- Test connection string

**3. Prisma client not generated**
```bash
yarn prisma:generate
```

**4. Port 3000 already in use**
```bash
# Use a different port
PORT=3001 yarn dev
```

**5. Environment variables errors**
- Ensure `.env` file exists in `portfolio_/` folder
- Check for typos in variable names
- Restart dev server after changing `.env`

📖 **For more troubleshooting help, see:** [SETUP_GUIDE.md](./SETUP_GUIDE.md) - Common Issues section

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com/)
3. Click "New Project"
4. Import your repository
5. Add all environment variables from your `.env` file
6. Click "Deploy"

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [app.netlify.com](https://app.netlify.com/)
3. Click "Add new site" > "Import an existing project"
4. Connect GitHub and select your repository
5. Add environment variables
6. Click "Deploy site"

### Environment Variables for Production

Make sure to add all environment variables in your hosting platform:
- All variables from your `.env` file
- Update `NEXT_PUBLIC_APP_URL` to your production URL
- Update `NEXTAUTH_URL` to your production URL
- Use production database connection string

---

## 📝 Customization Checklist

Before deploying, make sure you've customized:

- [ ] Updated `constants/site.ts` with your information
- [ ] Replaced images in `public/media/`
- [ ] Updated `app/about/page.tsx`
- [ ] Added your blog posts to `content/posts/`
- [ ] Added your projects to `content/projects/`
- [ ] Updated resume/experience in `features/resume/`
- [ ] Replaced `public/share/resume.pdf`
- [ ] Updated favicons in `public/`
- [ ] Updated `package.json` name and author
- [ ] Customized colors in `tailwind.config.ts`
- [ ] Updated navigation in `components/header.tsx`
- [ ] Updated footer in `components/footer.tsx`

---

## 📖 Additional Documentation

- **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - Complete step-by-step setup guide
- **[PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)** - Detailed project structure explanation

---

## 🤝 Need Help?

1. Check [SETUP_GUIDE.md](./SETUP_GUIDE.md) for detailed instructions
2. Review [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) to understand the codebase
3. Check the [Troubleshooting](#-troubleshooting) section above
4. Review Next.js documentation: https://nextjs.org/docs

---

## 📄 License

This project is licensed under the MIT License.

---

## 🎉 You're All Set!

Follow the steps above to get your portfolio website up and running. Start with the Quick Start section, then move on to making modifications to personalize it for yourself!

**Happy coding! 🚀**

---

## Quick Reference

| Task | Command |
|------|---------|
| Install dependencies | `yarn install` |
| Run development server | `yarn dev` |
| Build for production | `yarn build` |
| Generate Prisma Client | `yarn prisma:generate` |
| Run database migrations | `npx prisma migrate dev` |
| Open database GUI | `yarn prisma:studio` |
| Check TypeScript errors | `yarn check-types` |
| Run linter | `yarn lint` |
