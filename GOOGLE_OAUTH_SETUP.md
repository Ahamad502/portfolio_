# Google OAuth Setup Guide

Follow these steps to set up Google OAuth for your portfolio.

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click the **Project** dropdown at the top
3. Click **NEW PROJECT**
4. Enter project name: `Portfolio`
5. Click **CREATE**
6. Wait for the project to be created (this may take a minute)

## Step 2: Enable OAuth 2.0

1. In the left sidebar, go to **APIs & Services** → **OAuth consent screen**
2. Choose **External** as the User Type
3. Click **CREATE**
4. Fill in the form:
   - **App name**: `Portfolio`
   - **User support email**: Your email (e.g., `ahamadabdul433@gmail.com`)
   - **Developer contact information**: Your email
5. Scroll down and click **SAVE AND CONTINUE**
6. Click **SAVE AND CONTINUE** again (skip optional scopes)
7. Click **SAVE AND CONTINUE** again (test users section)
8. Click **BACK TO DASHBOARD**

## Step 3: Create OAuth 2.0 Credentials

1. In the left sidebar, go to **APIs & Services** → **Credentials**
2. Click **+ CREATE CREDENTIALS** at the top
3. Select **OAuth client ID**
4. Choose **Web application** from the dropdown
5. Under **Authorized JavaScript origins**, add:
   ```
   http://localhost:3000
   ```
6. Under **Authorized redirect URIs**, add:
   ```
   http://localhost:3000/api/auth/callback/google
   ```
7. Click **CREATE**
8. A popup will appear with your credentials:
   - Copy the **Client ID**
   - Copy the **Client Secret**

## Step 4: Update Your .env File

Replace the dummy Google credentials with your real ones:

```bash
GOOGLE_ID=<YOUR_CLIENT_ID>
GOOGLE_SECRET=<YOUR_CLIENT_SECRET>
```

Example (yours will be different):
```bash
GOOGLE_ID=1234567890-abcdefghijklmnopqrstuvwxyz.apps.googleusercontent.com
GOOGLE_SECRET=GOCSPX-abc123xyz789
```

## Step 5: Restart Your Dev Server

```bash
npm run dev
```

## Step 6: Test Google Login

1. Visit `http://localhost:3000/auth`
2. Click "Sign in with Google"
3. You'll be redirected to Google's login
4. Approve the permissions
5. You should be logged in!

## For Production Deployment

Before deploying to production, you'll need to:

1. Add your production domain to **Authorized JavaScript origins**:
   ```
   https://yourdomain.com
   ```

2. Add production callback URI to **Authorized redirect URIs**:
   ```
   https://yourdomain.com/api/auth/callback/google
   ```

3. Update `NEXTAUTH_URL` in your production `.env`:
   ```
   NEXTAUTH_URL=https://yourdomain.com
   ```

4. Change OAuth consent screen from "External" to "Internal" (if using Google Workspace) or keep as External and add test users

---

**Need help?** Check the [NextAuth.js Google Provider docs](https://next-auth.js.org/providers/google)
