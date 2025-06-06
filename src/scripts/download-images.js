import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(fs.createWriteStream(filepath))
               .on('error', reject)
               .once('close', () => resolve(filepath));
      } else {
        response.resume();
        reject(new Error(`Request Failed With a Status Code: ${response.statusCode}`));
      }
    });
  });
};

const images = {
  hero: {
    'world-map.jpg': 'https://images.unsplash.com/photo-1589519160732-57fc498494f8?w=1920&q=80',
  },
  countries: {
    'russia.jpg': 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=1600&q=80',
    'singapore.jpg': 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1600&q=80',
    'dubai.jpg': 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80',
    'armenia.jpg': 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=1600&q=80',
    'mauritius.jpg': 'https://images.unsplash.com/photo-1589519160732-57fc498494f8?w=1600&q=80',
  }
};

async function downloadAllImages() {
  const baseDir = path.join(__dirname, '../../public/images');

  // Ensure directories exist
  for (const dir of ['hero', 'countries']) {
    const fullPath = path.join(baseDir, dir);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
    }
  }

  // Download hero images
  for (const [filename, url] of Object.entries(images.hero)) {
    const filepath = path.join(baseDir, 'hero', filename);
    try {
      await downloadImage(url, filepath);
      console.log(`Downloaded: hero/${filename}`);
    } catch (err) {
      console.error(`Error downloading hero/${filename}:`, err.message);
    }
  }

  // Download country images
  for (const [filename, url] of Object.entries(images.countries)) {
    const filepath = path.join(baseDir, 'countries', filename);
    try {
      await downloadImage(url, filepath);
      console.log(`Downloaded: countries/${filename}`);
    } catch (err) {
      console.error(`Error downloading countries/${filename}:`, err.message);
    }
  }
}

downloadAllImages().then(() => {
  console.log('All images downloaded successfully!');
}).catch(err => {
  console.error('Error downloading images:', err);
}); 