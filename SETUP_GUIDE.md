# 🚀 Complete Setup Guide - Portfolio Website

This is a comprehensive step-by-step guide to set up, run, and customize your portfolio website.

---

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Initial Setup](#initial-setup)
3. [Environment Variables](#environment-variables)
4. [Database Setup](#database-setup)
5. [Running the Project](#running-the-project)
6. [Making Modifications](#making-modifications)
7. [Common Issues & Solutions](#common-issues--solutions)

---

## 📋 Prerequisites

Before you start, make sure you have the following installed on your computer:

### Required Software:

1. **Node.js** (Version 18.x or higher)
   - Download: https://nodejs.org/
   - Check version: `node --version`

2. **npm** or **yarn** (Package manager)
   - npm comes with Node.js
   - Check version: `node --version`
   - For yarn: `npm install -g yarn` then `yarn --version`

3. **Git** (Version control)
   - Download: https://git-scm.com/downloads
   - Check version: `git --version`

4. **Code Editor** (Recommended: VS Code)
   - Download: https://code.visualstudio.com/

### Optional but Recommended:

5. **PostgreSQL Database** (For production)
   - Option 1: Local PostgreSQL - https://www.postgresql.org/download/
   - Option 2: Cloud database (Free options):
     - **Neon** (Recommended): https://neon.tech/
     - **Supabase**: https://supabase.com/
     - **PlanetScale**: https://planetscale.com/

6. **GitHub Account** (For authentication and GitHub integration)

---

## 🔧 Initial Setup

### Step 1: Navigate to Project Directory

```bash
cd portfolio_
```

### Step 2: Install Dependencies

The project uses **yarn** as the package manager. Install all dependencies:

```bash
yarn install
```

> **Note:** If you prefer npm, you can use `npm install` instead, but yarn is recommended as specified in the package.json.

**What this does:** Downloads all the required libraries and frameworks your project needs to run.

**Time:** This may take 2-5 minutes depending on your internet speed.

### Step 3: Verify Installation

Check if everything is installed correctly:

```bash
yarn --version
node --version
```

---

## 🔐 Environment Variables

The project needs environment variables to work properly. These are sensitive configuration values.

### Step 1: Create `.env` File

In the `portfolio_` folder, create a file named `.env` (note the dot at the beginning).

**Windows Users:**
- Create a new file in the folder
- Name it exactly: `.env` (you might need to enable "Show hidden files" in File Explorer)

**Mac/Linux Users:**
```bash
touch .env
```

### Step 2: Add Required Environment Variables

Open the `.env` file and add the following variables. Replace the placeholder values with your own:

```env
# ============================================
# CLIENT-SIDE VARIABLES (Public)
# ============================================

# Your website URL (use http://localhost:3000 for development)
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Google Analytics ID (optional - leave empty if you don't use it)
NEXT_PUBLIC_GOOGLE_ANALYTICS=

# Sentry DSN for error tracking (optional - leave empty if you don't use it)
NEXT_PUBLIC_SENTRY_DSN=

# Set to "true" if you're available for hire
NEXT_PUBLIC_AVAILABLE_FOR_HIRE=true


# ============================================
# SERVER-SIDE VARIABLES (Private)
# ============================================

# Database Connection URLs
# For local PostgreSQL: postgresql://username:password@localhost:5432/database_name
# For Neon/Supabase: Check your database dashboard for connection string
DATABASE_URL=postgresql://username:password@localhost:5432/portfolio_db
DIRECT_URL=postgresql://username:password@localhost:5432/portfolio_db

# NextAuth Configuration
# Generate a secret: openssl rand -base64 32
# Or use: https://generate-secret.vercel.app/32
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-super-secret-key-here-generate-a-random-string


# ============================================
# OPTIONAL INTEGRATIONS
# ============================================

# Sentry (Error Tracking - Optional)
SENTRY_DSN=
SENTRY_AUTH_TOKEN=

# Google OAuth (For Guestbook Authentication - Optional)
# Create at: https://console.cloud.google.com/apis/credentials
GOOGLE_ID=
GOOGLE_SECRET=

# GitHub OAuth (For Guestbook Authentication - Recommended)
# Create at: https://github.com/settings/developers
GITHUB_ID=
GITHUB_SECRET=
# Personal Access Token: https://github.com/settings/tokens (generate with "read:user" scope)
GITHUB_READ_USER_TOKEN_PERSONAL=

# Spotify Integration (Now Playing Widget - Optional)
# Create at: https://developer.spotify.com/dashboard
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
SPOTIFY_CLIENT_REFRESH_TOKEN=

# WakaTime Integration (Coding Stats - Optional)
# Get API key from: https://wakatime.com/settings/api-key
WAKATIME_API_KEY=
```

### Step 3: Quick Setup (Minimal Required Variables)

If you just want to run the project locally and worry about integrations later, use this minimal `.env`:

```env
# Minimal setup to run locally
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_AVAILABLE_FOR_HIRE=true

# Generate a secret: https://generate-secret.vercel.app/32
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=replace-with-random-32-character-string

# Database (see Database Setup section below)
DATABASE_URL=postgresql://username:password@localhost:5432/portfolio_db
DIRECT_URL=postgresql://username:password@localhost:5432/portfolio_db

# Placeholders (can leave empty for now)
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

> **Important:** The `env.ts` file validates these variables. Some are marked as required, so you need to provide placeholder values even if you don't use those features.

---

## 🗄️ Database Setup

This project uses **PostgreSQL** database with **Prisma** as the ORM.

### Option 1: Using Neon (Recommended - Free & Easy)

1. Go to https://neon.tech/
2. Sign up for free
3. Create a new project
4. Copy the connection string
5. Add it to your `.env`:
   ```env
   DATABASE_URL=postgresql://username:password@ep-xxx.us-east-1.aws.neon.tech/dbname?sslmode=require
   DIRECT_URL=postgresql://username:password@ep-xxx.us-east-1.aws.neon.tech/dbname?sslmode=require
   ```

### Option 2: Local PostgreSQL

1. Install PostgreSQL: https://www.postgresql.org/download/
2. Create a database:
   ```sql
   CREATE DATABASE portfolio_db;
   ```
3. Update `.env`:
   ```env
   DATABASE_URL=postgresql://postgres:yourpassword@localhost:5432/portfolio_db
   DIRECT_URL=postgresql://postgres:yourpassword@localhost:5432/portfolio_db
   ```

### Option 3: Using Supabase (Free)

1. Go to https://supabase.com/
2. Create a new project
3. Go to Settings > Database
4. Copy the connection string
5. Add to `.env` (similar to Neon)

### After Setting Up Database:

1. **Generate Prisma Client:**
   ```bash
   yarn prisma:generate
   ```
   Or:
   ```bash
   npx prisma generate
   ```

2. **Run Database Migrations:**
   ```bash
   npx prisma migrate dev --name init
   ```
   
   This creates all the tables in your database based on `prisma/schema.prisma`.

3. **Optional - Open Prisma Studio (Database GUI):**
   ```bash
   yarn prisma:studio
   ```
   This opens a web interface at http://localhost:5555 to view/edit your database.

---

## ▶️ Running the Project

### Development Mode (Hot Reload)

Run the development server:

```bash
yarn dev
```

Or with npm:
```bash
npm run dev
```

**What this does:**
- Starts the Next.js development server
- Enables hot reload (changes appear instantly)
- Generates Prisma client and cleans build files automatically

**Expected Output:**
```
✓ Ready in 2.3s
○ Compiling / ...
✓ Compiled / in 1.2s
  ▲ Next.js 15.2.4
  - Local:        http://localhost:3000
```

Open your browser and go to: **http://localhost:3000**

### Build for Production

To create a production build:

```bash
yarn build
```

Then run the production server:

```bash
yarn start
```

### Other Useful Commands

```bash
# Check for TypeScript errors
yarn check-types

# Run linter
yarn lint

# Clean build files
yarn clean

# Open Prisma Studio (database GUI)
yarn prisma:studio
```

---

## ✏️ Making Modifications

Now that your project is running, here's how to customize it for yourself:

### 🎯 Priority 1: Update Your Personal Information

#### 1. Update Site Information

**File:** `constants/site.ts`

```typescript
export const SITE: Site = {
  url: BASE_URL,
  name: "Your Name's Portfolio",  // Change this
  title: 'Your Name',              // Change this
  description: 'Your bio description here',  // Change this
  author: {
    name: 'Your Full Name',        // Change this
    url: 'https://yourwebsite.com', // Change this
    email: 'your.email@example.com', // Change this
    linkedIn: 'https://www.linkedin.com/in/yourprofile',
    github: {
      username: 'yourgithub',      // Change this
      url: 'https://www.github.com/yourgithub',
    },
    avatar: '/media/yourname/your-photo.jpg', // Update path
    twitter: '@yourtwitter',        // Optional
  },
  keywords: [
    // Add your own keywords
    'your name',
    'your profession',
  ],
};
```

#### 2. Update Package Information

**File:** `package.json`

```json
{
  "name": "your-portfolio",  // Change this
  "author": "Your Name",     // Change this
  "description": "Your portfolio website description"
}
```

### 🎯 Priority 2: Replace Content

#### 3. Replace Blog Posts

**Location:** `content/posts/`

- Delete existing `.mdx` files
- Create new `.mdx` files for your blog posts
- Example structure:

```mdx
---
title: "My First Blog Post"
description: "This is what my post is about"
publishedAt: "2024-01-15"
tags: ["react", "nextjs"]
---

# My First Blog Post

Write your content here using Markdown...
```

#### 4. Replace Projects

**Location:** `content/projects/`

- Delete existing project files
- Create new `.mdx` files for each project
- Include screenshots in `public/media/projects/`

#### 5. Replace Code Snippets

**Location:** `content/snippets/`

- Delete existing snippets
- Add your own code snippets

#### 6. Update "Uses" Page

**File:** `content/pages/uses.mdx`

- Update with your tools, software, hardware, etc.

### 🎯 Priority 3: Update Pages

#### 7. Homepage

**File:** `app/page.tsx`

- Customize the homepage layout
- Update hero section, intro, etc.

#### 8. About Page

**File:** `app/about/page.tsx`

- Write about yourself
- Update your story, background, interests

#### 9. Resume/Experience

**File:** `features/resume/experiences.tsx` (if exists)

Or check: `app/resume/page.tsx`

- Add your work experience
- Update education, skills, etc.

#### 10. Resume PDF

**Location:** `public/share/resume.pdf`

- Replace with your own resume PDF

### 🎯 Priority 4: Update Assets

#### 11. Replace Images

**Location:** `public/media/`

- Add your profile photo
- Add project screenshots
- Update avatar path in `constants/site.ts`

#### 12. Update Favicons

**Location:** `public/`

- Replace favicon files:
  - `favicon.ico`
  - `favicon-16x16.png`
  - `favicon-32x32.png`
  - `apple-touch-icon.png`
  - etc.

Use a favicon generator: https://realfavicongenerator.net/

#### 13. Update Logo

**Location:** `assets/images/`

- Replace `logo-dark.svg` and `logo-light.svg` with your logos

### 🎯 Priority 5: Customize Styling

#### 14. Update Colors

**File:** `tailwind.config.ts`

- Change the color scheme
- Update brand colors
- Customize theme

#### 15. Update Fonts

**Location:** `assets/fonts/`

- Add your custom fonts
- Update font references in CSS

**File:** `app/global.css`

- Customize global styles
- Add custom CSS

### 🎯 Priority 6: Update Navigation & Layout

#### 16. Header/Navigation

**File:** `components/header.tsx`

- Update navigation menu items
- Customize header design

#### 17. Footer

**File:** `components/footer.tsx`

- Update footer content
- Add your social links
- Update copyright info

### 🎯 Priority 7: Optional - Remove/Disable Features

If you don't want certain features:

#### Remove Guestbook:
- Delete `app/guestbook/` folder
- Delete `features/guestbook/` folder
- Remove from navigation in `components/header.tsx`

#### Remove Endorsements:
- Delete `app/endorsements/` folder
- Delete `features/endorsements/` folder

#### Remove Dashboard:
- Delete `app/dashboard/` folder
- Delete `features/dashboard/` folder

### 🎯 Priority 8: Add New Features

#### Add a New Page:

1. Create a new folder in `app/`:
   ```
   app/contact/page.tsx
   ```

2. Create the page component:
   ```tsx
   export default function ContactPage() {
     return (
       <div>
         <h1>Contact Me</h1>
         {/* Your content */}
       </div>
     );
   }
   ```

3. Add to navigation in `components/header.tsx`

---

## 🐛 Common Issues & Solutions

### Issue 1: "Module not found" errors

**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules
yarn install
```

**Windows:**
```bash
rmdir /s node_modules
yarn install
```

### Issue 2: Database connection errors

**Solution:**
- Check your `DATABASE_URL` in `.env`
- Make sure database is running (if local)
- Test connection string
- For cloud databases, check if IP is whitelisted

### Issue 3: Prisma client not generated

**Solution:**
```bash
yarn prisma:generate
# Or
npx prisma generate
```

### Issue 4: Environment variables errors

**Solution:**
- Make sure `.env` file exists in `portfolio_/` folder
- Check for typos in variable names
- Ensure all required variables are present
- Restart the dev server after changing `.env`

### Issue 5: Port 3000 already in use

**Solution:**
```bash
# Kill the process using port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:3000 | xargs kill -9

# Or use a different port:
PORT=3001 yarn dev
```

### Issue 6: TypeScript errors

**Solution:**
```bash
# Check for type errors
yarn check-types

# Make sure all imports are correct
# Restart your code editor
```

### Issue 7: "Cannot find module '@/...'"

**Solution:**
- This is a path alias issue
- Check `tsconfig.json` for path mappings
- Restart VS Code/your editor
- Run: `yarn clean && yarn dev`

### Issue 8: Build errors in production

**Solution:**
```bash
# Clean build cache
yarn clean

# Rebuild
yarn build

# Check for missing environment variables
# Make sure all NEXT_PUBLIC_ variables are set
```

---

## 📚 Additional Resources

### Documentation:

- **Next.js Docs:** https://nextjs.org/docs
- **React Docs:** https://react.dev/
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Prisma Docs:** https://www.prisma.io/docs
- **TypeScript Docs:** https://www.typescriptlang.org/docs/

### Helpful Tools:

- **Generate Secret Key:** https://generate-secret.vercel.app/32
- **Favicon Generator:** https://realfavicongenerator.net/
- **MDX Guide:** https://mdxjs.com/

### Getting API Keys:

- **Google OAuth:** https://console.cloud.google.com/apis/credentials
- **GitHub OAuth:** https://github.com/settings/developers
- **Spotify API:** https://developer.spotify.com/dashboard
- **WakaTime:** https://wakatime.com/settings/api-key

---

## ✅ Quick Start Checklist

Before asking for help, make sure you've completed:

- [ ] Installed Node.js (v18+)
- [ ] Installed dependencies (`yarn install`)
- [ ] Created `.env` file with all required variables
- [ ] Set up database (Neon/Supabase/local)
- [ ] Generated Prisma client (`yarn prisma:generate`)
- [ ] Run migrations (`npx prisma migrate dev`)
- [ ] Started dev server (`yarn dev`)
- [ ] Can access http://localhost:3000

---

## 🎉 Next Steps

After setup:

1. ✅ Update your personal info in `constants/site.ts`
2. ✅ Replace content with your own
3. ✅ Update images and assets
4. ✅ Customize colors and styling
5. ✅ Deploy to Vercel/Netlify

---

## 🚀 Deployment

### Deploy to Vercel (Recommended):

1. Push your code to GitHub
2. Go to https://vercel.com/
3. Import your repository
4. Add environment variables in Vercel dashboard
5. Deploy!

### Deploy to Netlify:

1. Push your code to GitHub
2. Go to https://app.netlify.com/
3. Add new site from Git
4. Configure environment variables
5. Deploy!

---

**Need more help?** Check the original `README.md` and `PROJECT_STRUCTURE.md` files for more details!

Happy coding! 🚀

