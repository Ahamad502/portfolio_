#!/usr/bin/env node
require('dotenv').config();

console.log('DATABASE_URL:', process.env.DATABASE_URL ? 'SET' : 'NOT SET');
console.log('DIRECT_URL:', process.env.DIRECT_URL ? 'SET' : 'NOT SET');

const { execSync } = require('child_process');

try {
  execSync('npx prisma migrate dev --name init', {
    stdio: 'inherit',
    env: { ...process.env },
  });
} catch (error) {
  process.exit(1);
}
