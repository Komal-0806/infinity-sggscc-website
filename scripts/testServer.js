import { createServer } from 'http';
import fs from 'fs';
import path from 'path';

// Quick static check of dist files
const distPath = path.resolve('dist/index.html');
if (fs.existsSync(distPath)) {
  const content = fs.readFileSync(distPath, 'utf-8');
  console.log('Verification Success: index.html found. Length:', content.length);
  if (content.includes('INFINITY') && content.includes('The Tech Society')) {
    console.log('Brand verification: INFINITY metadata verified in build.');
  }
} else {
  console.error('Dist file missing.');
  process.exit(1);
}
