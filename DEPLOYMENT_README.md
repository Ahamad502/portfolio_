# 🚀 Abdul Naasir Ahamad - Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-6.19.0-2D3748?style=for-the-badge&logo=prisma)](https://www.prisma.io/)

A modern, responsive portfolio website built with Next.js, showcasing projects, skills, and professional experience with a clean, dark-themed design.

## ✨ Features

- 🎨 **Modern Design** - Clean, professional dark theme with smooth animations
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Fast Performance** - Built with Next.js 15 App Router and optimized assets
- 🎵 **Interactive Elements** - Spotify playlist integration and dynamic components
- 📊 **Dashboard Analytics** - GitHub insights and project statistics
- 🎯 **Project Showcase** - Detailed project cards with live demos and source code
- 🏆 **Certificates Display** - Professional certifications and achievements
- 📝 **Contact Form** - Integrated contact form with Formspree
- 🔍 **SEO Optimized** - Complete SEO setup with meta tags and sitemaps
- 🌐 **Content Management** - MDX-powered content with syntax highlighting

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Radix UI** - Headless UI components

### Backend & Database
- **Prisma** - Database ORM
- **PostgreSQL** - Production database
- **NextAuth.js** - Authentication system

### Content & Media
- **Content Collections** - MDX content management
- **Sharp** - Image optimization
- **React Syntax Highlighter** - Code highlighting

### Development & Deployment
- **ESLint & Prettier** - Code quality and formatting
- **Husky** - Git hooks
- **Vercel Analytics** - Performance monitoring

## 🚀 Live Demo

Visit the live portfolio: **[Deploy your portfolio to get this URL]**

## 📁 Project Structure

```
portfolio_/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage with hero & projects
│   ├── about/             # About page with bio & skills
│   ├── projects/          # Projects showcase
│   ├── certificates/      # Certificates display
│   ├── dashboard/         # Analytics dashboard
│   └── api/               # API routes
├── components/            # Reusable UI components
├── features/              # Feature-specific components
├── content/               # MDX content files
│   ├── projects/          # 3 Project descriptions
│   ├── certificates/      # Certificate data
│   └── snippets/          # Code snippets
├── constants/             # Site configuration
├── lib/                   # Utility functions
├── prisma/                # Database schema
├── public/                # Static assets & images
└── config/                # Next.js & app configuration
```

## 🚢 Quick Deployment Guide

### Option 1: Deploy to Vercel (Recommended - 5 minutes)

1. **Prepare for deployment**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in with GitHub
   - Click "New Project" and import your repository
   - Vercel will auto-detect Next.js settings
   - Add environment variables:
     - `NEXT_PUBLIC_APP_URL` = `https://your-app-name.vercel.app`
     - `DATABASE_URL` = Your database connection string
   - Click "Deploy"

3. **Set up Database (Choose one)**
   
   **Option A: Supabase (Free)**
   - Go to [supabase.com](https://supabase.com)
   - Create new project
   - Go to Settings → Database
   - Copy connection string and add to Vercel env vars

   **Option B: PlanetScale (Free)**
   - Go to [planetscale.com](https://planetscale.com)
   - Create database
   - Get connection string
   - Add to Vercel environment variables

4. **Final setup**
   - In Vercel, go to your project → Settings → Environment Variables
   - Add all required environment variables
   - Redeploy your project

### Option 2: Deploy to Netlify

1. **Build configuration**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Environment variables**
   ```
   NEXT_PUBLIC_APP_URL=https://your-site.netlify.app
   DATABASE_URL=your-database-url
   ```

### Option 3: Deploy to Railway

1. **Connect repository** at [railway.app](https://railway.app)
2. **Add environment variables**
3. **Deploy automatically**

## ⚙️ Environment Variables Setup

Create a `.env` file with these variables:

```env
# Required - Your app URL
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Required - Database connection
DATABASE_URL="postgresql://user:password@localhost:5432/portfolio"

# Optional - Analytics
NEXT_PUBLIC_GOOGLE_ANALYTICS=G-XXXXXXXXXX

# Optional - GitHub integration
GITHUB_TOKEN=ghp_xxxxxxxxxxxx

# Optional - Available for hire badge
NEXT_PUBLIC_AVAILABLE_FOR_HIRE=true

# Optional - Sentry error monitoring
NEXT_PUBLIC_SENTRY_DSN=https://your-sentry-dsn

# NextAuth (if using auth features)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

# OAuth providers (if using)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GITHUB_ID=your-github-oauth-id
GITHUB_SECRET=your-github-oauth-secret
```

## 🎯 Current Portfolio Content

### Projects (3 active)
1. **CitizenAi** - Civic engagement platform with AI chat
2. **QR Code Generator** - Modern QR code creation tool
3. **School Management System** - Comprehensive school data system

### Tech Stack Showcase
- Frontend: React, Next.js, TypeScript
- Styling: Tailwind CSS
- Database: PostgreSQL, Prisma
- Languages: JavaScript, Python, Java

### Interactive Features
- 🎵 Spotify coding playlist integration
- 📧 Contact form with Formspree
- 📊 GitHub insights dashboard
- 🌙 Dark/light theme toggle
- 📱 Fully responsive design

## 🔧 Local Development

1. **Clone and install**
   ```bash
   git clone https://github.com/Ahamad502/portfolio.git
   cd portfolio
   npm install
   ```

2. **Set up environment**
   ```bash
   cp .env.example .env
   # Edit .env with your values
   ```

3. **Set up database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. **Start development**
   ```bash
   npm run dev
   ```

## 🎨 Customization Quick Guide

### Update Personal Info
Edit `constants/site.ts`:
```typescript
export const SITE = {
  name: "Your Name",
  title: "Your Professional Title",
  author: {
    email: "your@email.com",
    github: { username: "yourusername" }
  }
}
```

### Add New Project
Create `content/projects/new-project.mdx`:
```mdx
---
title: "Project Name"
description: "Brief project description"
image: "project-image.png"
url: "https://live-demo.com"
repositoryUrl: "https://github.com/username/repo"
stacks: ["Next.js", "TypeScript"]
published: true
highlight: true
---
```

### Update Spotify Playlist
Edit `features/home/components/connect-and-music.tsx`:
```typescript
const playlistId = "your-spotify-playlist-id";
```

### Configure Contact Form
Set up [Formspree](https://formspree.io) and update:
```typescript
const formspreeEndpoint = "https://formspree.io/f/your-form-id";
```

## 📊 Performance & SEO

- ✅ **Lighthouse Score**: 95+ Performance
- ✅ **SEO Optimized**: Meta tags, structured data, sitemaps
- ✅ **Core Web Vitals**: Optimized images and loading
- ✅ **Accessibility**: WCAG compliant components
- ✅ **Mobile Performance**: Responsive design system

## 🐛 Common Issues & Solutions

### Build Issues
```bash
# Clear cache and rebuild
npm run clean
npm install
npm run build
```

### Database Connection
```bash
# Regenerate Prisma client
npx prisma generate
npx prisma db push
```

### Spotify Embed Blocked
- Check CSP headers in `config/next/headers.js`
- Ensure playlist is public
- Verify playlist ID format

## 📈 Analytics & Monitoring

### Included Analytics
- **Vercel Analytics** - Built-in performance monitoring
- **Google Analytics** - Optional visitor tracking
- **Sentry** - Optional error monitoring

### GitHub Integration
- Displays coding statistics
- Shows repository insights
- Tracks contribution activity

## 🤝 Support

Need help deploying or customizing?

1. **Check documentation** - Review this README and code comments
2. **Common issues** - Check the troubleshooting section above
3. **Platform docs** - Refer to Vercel/Netlify documentation
4. **GitHub Issues** - Open an issue for bugs or questions

## 📄 License

MIT License - feel free to use this as a template for your own portfolio!

## 👤 Author

**Abdul Naasir Ahamad**
- 🌐 Portfolio: [Your deployed URL here]
- 📧 Email: [Your email]
- 🐙 GitHub: [@Ahamad502](https://github.com/Ahamad502)
- 💼 LinkedIn: [Your LinkedIn profile]

---

<div align="center">
  <p><strong>🚀 Ready for deployment!</strong></p>
  <p>Built with ❤️ using Next.js, TypeScript, and modern web technologies</p>
  <p>© 2024 Abdul Naasir Ahamad. All rights reserved.</p>
</div>