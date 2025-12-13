#!/usr/bin/env node
require('dotenv').config();

console.log('DATABASE_URL:', process.env.DATABASE_URL ? 'SET' : 'NOT SET');
console.log('DIRECT_URL:', process.env.DIRECT_URL ? 'SET' : 'NOT SET');

const { spawn } = require('child_process');

const cmd = spawn(
  'npx',
  ['prisma', 'db', 'push', '--config', './prisma/prisma.config.js'],
  {
    stdio: 'inherit',
    shell: true,
    env: { ...process.env },
  },
);

cmd.on('exit', (code) => {
  process.exit(code);
});
