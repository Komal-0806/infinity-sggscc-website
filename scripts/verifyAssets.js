import fs from 'fs';
import path from 'path';

const content = fs.readFileSync('src/data/societyData.js', 'utf8');
const regex = /image:\s*["']([^"']+)["']/g;
let match;
const images = [];

while ((match = regex.exec(content)) !== null) {
  images.push(match[1]);
}

console.log(`Checking ${images.length} images from societyData.js:`);
let allOk = true;

images.forEach(img => {
  const localPath = path.join('public', img.replace(/^\//, ''));
  const exists = fs.existsSync(localPath);
  console.log(`${exists ? '✓ FOUND' : '✗ MISSING'}: ${img}`);
  if (!exists) allOk = false;
});

if (allOk) {
  console.log('ALL IMAGES EXIST AND ARE VERIFIED!');
} else {
  console.error('SOME IMAGES ARE MISSING!');
  process.exit(1);
}
