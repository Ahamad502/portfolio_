#!/usr/bin/env node

/**
 * PORTFOLIO AUTHENTICATION SETUP GUIDE
 *
 * This guide helps you setup OAuth providers for your portfolio
 * so users can login to use Guestbook and Endorsements
 */

const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (query) =>
  new Promise((resolve) => {
    rl.question(query, resolve);
  });

async function setupAuth() {
  console.log(`
╔════════════════════════════════════════════════════════════╗
║   PORTFOLIO AUTHENTICATION SETUP                            ║
║   Enable login for Guestbook & Endorsements               ║
╚════════════════════════════════════════════════════════════╝

This guide will help you setup GitHub OAuth so users can login.

`);

  const choice = await question(
    'Select option:\n1. Setup GitHub OAuth\n2. Skip for now\n\nChoice (1-2): ',
  );

  if (choice === '1') {
    console.log(`
╔════════════════════════════════════════════════════════════╗
║   GITHUB OAUTH SETUP                                       ║
╚════════════════════════════════════════════════════════════╝

1. Go to: https://github.com/settings/developers
2. Click "New OAuth App"
3. Fill in:
   - Application name: Abdul's Portfolio
   - Homepage URL: http://localhost:3000
   - Authorization callback URL: http://localhost:3000/api/auth/callback/github
4. Click "Generate a new client secret"
5. Copy your Client ID and Client Secret

`);

    const clientId = await question('Paste your GitHub Client ID: ');
    const clientSecret = await question('Paste your GitHub Client Secret: ');

    if (clientId && clientSecret) {
      updateEnv({
        GITHUB_ID: clientId,
        GITHUB_SECRET: clientSecret,
      });

      console.log(`
✅ GitHub OAuth configured!

Next steps:
1. Restart your dev server: npm run dev
2. Visit: http://localhost:3000/guestbook
3. Click "Sign in with GitHub"
4. Test signing guestbook messages!

`);
    }
  } else {
    console.log(`
⏭️  Skipping authentication setup.

You can setup later by:
1. Running this script again: node scripts/setup-auth.js
2. Or manually editing .env with OAuth credentials

Dashboard will still work with GitHub stats (if API key added).
      `);
  }

  rl.close();
}

function updateEnv(updates) {
  const envPath = path.join(__dirname, '..', '.env');

  let content = fs.readFileSync(envPath, 'utf-8');

  for (const [key, value] of Object.entries(updates)) {
    const pattern = new RegExp(`^${key}=.*$`, 'm');
    content = content.replace(pattern, `${key}=${value}`);
  }

  fs.writeFileSync(envPath, content);
  console.log('✅ .env file updated!');
}

setupAuth().catch(console.error);
