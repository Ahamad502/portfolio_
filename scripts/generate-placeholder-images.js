#!/usr/bin/env node

/**
 * Generate placeholder images for missing media assets
 * Install: npm install sharp
 * Run: node scripts/generate-placeholder-images.js
 */

const fs = require('fs');
const path = require('path');

// Try to use sharp if available, otherwise provide instructions
try {
  const sharp = require('sharp');

  // Ensure directories exist
  const publicPath = path.join(__dirname, '../public/media');
  const projectsPath = path.join(publicPath, 'projects');
  const certificatesPath = path.join(publicPath, 'certificates');

  [publicPath, projectsPath, certificatesPath].forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`✅ Created directory: ${dir}`);
    }
  });

  // Generate placeholder images
  const images = [
    {
      name: 'public/media/avatar.jpg',
      width: 400,
      height: 400,
      color: '#4f46e5',
      text: 'Avatar',
    },
    {
      name: 'public/media/projects/qr-code-generator.png',
      width: 600,
      height: 400,
      color: '#06b6d4',
      text: 'QR Code\nGenerator',
    },
    {
      name: 'public/media/projects/school-management.png',
      width: 600,
      height: 400,
      color: '#8b5cf6',
      text: 'School\nManagement',
    },
    {
      name: 'public/media/projects/task-scheduler.png',
      width: 600,
      height: 400,
      color: '#ec4899',
      text: 'Task\nScheduler',
    },
    {
      name: 'public/media/certificates/certificate-1.png',
      width: 600,
      height: 400,
      color: '#f59e0b',
      text: 'Web Development\nCertificate',
    },
  ];

  // Generate each image
  images.forEach(async (img) => {
    const imagePath = path.join(__dirname, '..', img.name);
    const dir = path.dirname(imagePath);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Skip if already exists
    if (fs.existsSync(imagePath)) {
      console.log(`⏭️  Skipped existing: ${img.name}`);
      return;
    }

    // Create SVG placeholder
    const svg = `
<svg width="${img.width}" height="${img.height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${img.width}" height="${img.height}" fill="${img.color}"/>
  <text x="50%" y="50%" font-size="32" font-weight="bold" fill="white" 
        text-anchor="middle" dominant-baseline="middle" font-family="Arial, sans-serif">
    ${img.text}
  </text>
</svg>
    `;

    await sharp(Buffer.from(svg))
      .toFile(imagePath)
      .then(() => {
        console.log(`✅ Generated: ${img.name}`);
      })
      .catch((err) => {
        console.error(`❌ Error generating ${img.name}:`, err.message);
      });
  });

  console.log('\n✨ Placeholder generation started!');
} catch (err) {
  console.log(`
⚠️  Sharp library not found. Install it first:

npm install --save-dev sharp

Then run:
node scripts/generate-placeholder-images.js

Alternatively, create these files manually:
- public/media/avatar.jpg (400x400px)
- public/media/projects/qr-code-generator.png (600x400px)
- public/media/projects/school-management.png (600x400px)
- public/media/projects/task-scheduler.png (600x400px)
- public/media/certificates/certificate-1.png (600x400px)
  `);
}
