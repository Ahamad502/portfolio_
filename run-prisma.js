#!/usr/bin/env node
require('dotenv').config();
const { spawn } = require('child_process');

const cmd = spawn('npx', ['prisma', 'db', 'push'], {
  stdio: 'inherit',
  shell: true,
});

cmd.on('exit', (code) => {
  process.exit(code);
});
