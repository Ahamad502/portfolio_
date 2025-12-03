#!/usr/bin/env node

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const baseDir = path.join(__dirname, '..');

const images = [
  {
    file: 'public/media/avatar.jpg',
    width: 400,
    height: 400,
    color: '#4F46E5',
    text: 'Avatar',
  },
  {
    file: 'public/media/projects/qr-code-generator.png',
    width: 600,
    height: 400,
    color: '#06B6D4',
    text: 'QR Code Generator',
  },
  {
    file: 'public/media/projects/school-management.png',
    width: 600,
    height: 400,
    color: '#8B5CF6',
    text: 'School Management',
  },
  {
    file: 'public/media/projects/task-scheduler.png',
    width: 600,
    height: 400,
    color: '#EC4899',
    text: 'Task Scheduler',
  },
  {
    file: 'public/media/certificates/certificate-1.png',
    width: 600,
    height: 400,
    color: '#F59E0B',
    text: 'Web Development Certificate',
  },
];

async function generateImage(config) {
  const fullPath = path.join(baseDir, config.file);
  const dir = path.dirname(fullPath);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  if (fs.existsSync(fullPath)) {
    console.log(`⏭️  Skipped (exists): ${config.file}`);
    return;
  }

  const svg = `
    <svg width="${config.width}" height="${config.height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          .bg { fill: ${config.color}; }
          .text { font-family: Arial, sans-serif; font-size: 48px; font-weight: bold; fill: white; text-anchor: middle; dominant-baseline: middle; }
        </style>
      </defs>
      <rect class="bg" width="${config.width}" height="${config.height}"/>
      <text class="text" x="${config.width / 2}" y="${config.height / 2}">${config.text}</text>
    </svg>
  `;

  try {
    const ext = path.extname(config.file).toLowerCase();
    const format = ext === '.png' ? 'png' : 'jpeg';

    await sharp(Buffer.from(svg)).toFormat(format).toFile(fullPath);

    console.log(`✅ Created: ${config.file}`);
  } catch (err) {
    console.error(`❌ Error creating ${config.file}:`, err.message);
  }
}

async function main() {
  console.log('🎨 Generating placeholder images...\n');
  for (const config of images) {
    await generateImage(config);
  }
  console.log('\n✨ Done!');
}

main();
