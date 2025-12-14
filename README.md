# 🚀 Ahamad's Portfolio

A modern, feature-rich portfolio website showcasing my projects, certificates, and professional journey. Built with cutting-edge technologies and real-time integrations.

🌐 **Live Site:** [portfolio-cyan-beta-djxl1kbl71.vercel.app](https://portfolio-cyan-beta-djxl1kbl71.vercel.app)

![Next.js](https://img.shields.io/badge/Next.js-15.5.9-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat-square&logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?style=flat-square&logo=vercel)

## ✨ Features

- **🎨 Modern Design** - Clean, responsive UI with dark/light theme support
- **📱 Fully Responsive** - Optimized for all devices and screen sizes
- **🔐 Authentication** - Google & GitHub OAuth login for guestbook
- **📊 Dynamic Content** - Real-time project views and engagement tracking
- **🎵 Spotify Integration** - Live "Now Playing" status from my Spotify
- **📧 Contact Form** - Integrated with Formspree for direct messaging
- **📜 Certificates** - Downloadable PDF certificates showcase
- **🚀 Performance** - Server-side rendering with Next.js 15
- **📈 Analytics** - Built-in view tracking and user engagement metrics

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions

### Backend & Database
- **Prisma ORM** - Database toolkit and query builder
- **PostgreSQL** - Neon serverless database
- **NextAuth.js** - Complete authentication solution

### Integrations
- **Spotify API** - Real-time music status
- **Formspree** - Contact form handling
- **GitHub API** - Repository data fetching
- **Vercel** - Deployment and hosting

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm/yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/Ahamad502/portfolio_.git
cd portfolio_

# Install dependencies
npm install

# Set up environment variables (see Environment Setup below)
cp .env.example .env.local

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see the portfolio locally.

## 🔧 Environment Setup

Create a `.env.local` file with these variables:

```env
# Essential
NEXT_PUBLIC_APP_URL=your-domain.com
DATABASE_URL=your-postgresql-connection-string
NEXTAUTH_URL=your-domain.com
NEXTAUTH_SECRET=your-nextauth-secret

# OAuth (for guestbook authentication)
GOOGLE_ID=your-google-oauth-id
GOOGLE_SECRET=your-google-oauth-secret
GITHUB_ID=your-github-oauth-id  
GITHUB_SECRET=your-github-oauth-secret

# Optional Integrations
SPOTIFY_CLIENT_ID=your-spotify-client-id
SPOTIFY_CLIENT_SECRET=your-spotify-client-secret
SPOTIFY_CLIENT_REFRESH_TOKEN=your-spotify-refresh-token
NEXT_PUBLIC_FORMSPREE_ENDPOINT=your-formspree-endpoint
```

## 📁 Project Structure

```
portfolio_/
├── app/                    # Next.js App Router pages
├── components/             # Reusable UI components
├── features/              # Feature-specific components
│   ├── about/            # About page components
│   ├── auth/             # Authentication components
│   ├── guestbook/        # Guestbook functionality
│   ├── home/             # Homepage components
│   └── projects/         # Project showcase
├── content/              # MDX content files
│   ├── posts/           # Blog posts
│   ├── projects/        # Project descriptions
│   └── certificates/    # Certificate metadata
├── lib/                 # Utility functions and configs
├── prisma/              # Database schema and migrations
└── public/              # Static assets
```

## 🎯 Key Features Breakdown

### 🏠 Homepage
- Hero section with animated introduction
- Featured projects carousel
- Spotify "Now Playing" widget
- Contact form integration
- Skills and technologies showcase

### 📂 Projects
- Interactive project cards with live demos
- GitHub repository links
- Technology stack badges
- View tracking and engagement metrics

### 📜 Certificates
- PDF certificate downloads
- Achievement showcase
- Organized by category and date

### 📝 Guestbook
- User authentication via Google/GitHub
- Real-time message posting
- Moderated content system

### 🎵 Spotify Integration
- Live "Now Playing" status
- Album artwork display
- Direct Spotify links

## 🚀 Deployment

The portfolio is deployed on Vercel with automatic deployments from the main branch.

### Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Ahamad502/portfolio_)

1. Click the deploy button above
2. Configure environment variables in Vercel dashboard
3. Deploy and enjoy your portfolio!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this repository and customize it for your own portfolio. If you find bugs or have suggestions, please open an issue or submit a pull request.

## 📞 Contact

- **Website:** [portfolio-cyan-beta-djxl1kbl71.vercel.app](https://portfolio-cyan-beta-djxl1kbl71.vercel.app)
- **Email:** Contact me through the portfolio website
- **GitHub:** [@Ahamad502](https://github.com/Ahamad502)

---

⭐ **If you found this portfolio helpful, please consider giving it a star!**