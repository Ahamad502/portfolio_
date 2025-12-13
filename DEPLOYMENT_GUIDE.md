# Step-by-Step Deployment Guide

## Prerequisites
1. GitHub account with your portfolio code
2. Vercel account (free)
3. Environment variables ready

## Deployment Steps

### 1. Connect GitHub to Vercel
1. Go to https://vercel.com
2. Sign in with GitHub
3. Click **"New Project"**
4. Select your portfolio repository
5. Click **"Import"**

### 2. Configure Environment Variables

**Essential Variables (Required):**
```
DATABASE_URL = your_neon_postgresql_connection_string
NEXTAUTH_SECRET = your_nextauth_secret_key
NEXTAUTH_URL = https://your-vercel-app-url.vercel.app
```

**Optional Variables (for additional features):**

### GitHub OAuth (for sign-in features):
```
GITHUB_ID = your_github_oauth_app_client_id
GITHUB_SECRET = your_github_oauth_app_client_secret
GITHUB_READ_USER_TOKEN_PERSONAL = your_personal_access_token
```

### Google OAuth (for sign-in features):
```
GOOGLE_ID = your_google_oauth_client_id.apps.googleusercontent.com
GOOGLE_SECRET = your_google_oauth_client_secret
```

### Spotify Integration (optional - uses iframe):
```
SPOTIFY_CLIENT_ID = your_spotify_client_id
SPOTIFY_CLIENT_SECRET = your_spotify_client_secret
SPOTIFY_CLIENT_REFRESH_TOKEN = your_spotify_refresh_token
```

### Wakatime Integration (optional):
```
WAKATIME_API_KEY = your_wakatime_api_key
```

**How to add each variable:**
1. In **"Key"** field, type the variable name (e.g., `DATABASE_URL`)
2. In **"Value"** field, paste the value
3. Click **"Add"**

### 3. Deploy
1. Click **"Deploy"** button
2. Wait for build to complete (2-3 minutes)
3. Your site will be live at `https://your-app-name.vercel.app`

### 4. Custom Domain (Optional)
1. In Vercel dashboard → **"Domains"**
2. Add your custom domain
3. Update DNS settings as instructed

## Required Environment Variables

Your `.env.local` should contain:
```bash
# Essential (Required)
DATABASE_URL=postgresql://your_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# GitHub OAuth (Optional)
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
GITHUB_READ_USER_TOKEN_PERSONAL=your_github_token

# Google OAuth (Optional)  
GOOGLE_ID=your_google_client_id
GOOGLE_SECRET=your_google_client_secret

# Spotify (Optional - portfolio uses iframe)
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
SPOTIFY_CLIENT_REFRESH_TOKEN=your_spotify_refresh_token

# Wakatime (Optional)
WAKATIME_API_KEY=your_wakatime_api_key
```

## Getting Your Environment Variables

### DATABASE_URL (Required)
- Your Neon PostgreSQL connection string
- Format: `postgresql://username:password@host/database`

### NEXTAUTH_SECRET (Required)
- Generate with: `openssl rand -base64 32`
- Or use any secure random string

### GitHub OAuth (Optional)
1. Go to GitHub → Settings → Developer settings → OAuth Apps
2. Create new OAuth app
3. Set Authorization callback URL: `https://your-domain.com/api/auth/callback/github`
4. Copy Client ID and Client Secret

### Google OAuth (Optional)
1. Go to Google Cloud Console
2. Create new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Set redirect URI: `https://your-domain.com/api/auth/callback/google`

## Troubleshooting

### Build Fails with "Invalid environment variables"
- Make sure DATABASE_URL, NEXTAUTH_SECRET, and NEXTAUTH_URL are set
- Optional variables (GitHub, Google, Spotify, Wakatime) don't need to be provided

### Database Connection Issues  
- Verify your Neon PostgreSQL URL is correct
- Make sure database is not paused in Neon dashboard

### OAuth Login Not Working
- Check callback URLs match your domain
- Verify client IDs and secrets are correct
- Ensure OAuth apps are active

## Success Checklist
- ✅ Site loads without errors
- ✅ Projects page shows your 3 projects
- ✅ Contact form works (if Formspree configured)
- ✅ Spotify playlist embeds properly
- ✅ No console errors in browser dev tools

## Post-Deployment
1. Test all features thoroughly
2. Set up custom domain if desired
3. Monitor Vercel analytics
4. Update portfolio content as needed

Your portfolio is now live! 🎉