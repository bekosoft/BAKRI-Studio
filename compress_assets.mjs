import sharp from 'sharp';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';
import { readdir, stat, unlink, rename } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = __dirname;

const GITHUB_LIMIT = 100 * 1024 * 1024;

const FOLDERS = [
  '1. Photography (تصوير فوتوغرافي)',
  '2. Video & Motion (فيديو ومونتاج)',
  '3. Aerial Imaging (تصوير جوي بالدرون)',
  '4. Design & Layout (تصميم)',
  '5. Digital Content (محتوى رقميسوشيال ميديا)',
  'Human-Interest & Humanitarian Photography (تصوير إنساني) — قسم جديد',
  'su_opt',
];

let totalSaved = 0;
let filesProcessed = 0;
let errors = [];

function formatSize(bytes) {
  if (bytes >= 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  return (bytes / 1024).toFixed(1) + ' KB';
}

async function getSize(filePath) {
  try {
    const s = await stat(filePath);
    return s.size;
  } catch { return 0; }
}

async function compressImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const before = await getSize(filePath);
  
  if (before < 200 * 1024) {
    console.log('  Skipped (already small): ' + path.basename(filePath) + ' (' + formatSize(before) + ')');
    return;
  }

  const tmpPath = filePath + '.tmp';
  try {
    if (ext === '.png') {
      await sharp(filePath)
        .png({ quality: 85, compressionLevel: 9 })
        .toFile(tmpPath);
    } else {
      await sharp(filePath)
        .jpeg({ quality: 78, mozjpeg: true })
        .toFile(tmpPath);
    }

    const after = await getSize(tmpPath);
    if (after < before) {
      await unlink(filePath);
      await rename(tmpPath, filePath);
      const saved = before - after;
      totalSaved += saved;
      filesProcessed++;
      console.log('  OK ' + path.basename(filePath) + ': ' + formatSize(before) + ' -> ' + formatSize(after) + ' (saved ' + formatSize(saved) + ')');
    } else {
      await unlink(tmpPath);
      console.log('  No gain: ' + path.basename(filePath));
    }
  } catch (err) {
    try { if (existsSync(tmpPath)) await unlink(tmpPath); } catch {}
    errors.push('Image ' + path.basename(filePath) + ': ' + err.message);
    console.log('  ERROR: ' + path.basename(filePath) + ': ' + err.message);
  }
}

async function convertNEFtoJPG(filePath) {
  const before = await getSize(filePath);
  const jpgPath = filePath.replace(/\.NEF$/i, '.jpg');
  
  console.log('  Converting NEF: ' + path.basename(filePath) + ' (' + formatSize(before) + ')');
  try {
    await sharp(filePath)
      .jpeg({ quality: 85, mozjpeg: true })
      .toFile(jpgPath);

    const after = await getSize(jpgPath);
    await unlink(filePath);
    const saved = before - after;
    totalSaved += saved;
    filesProcessed++;
    console.log('  OK ' + path.basename(filePath) + ' -> .jpg: ' + formatSize(before) + ' -> ' + formatSize(after) + ' (saved ' + formatSize(saved) + ')');
  } catch (err) {
    errors.push('NEF ' + path.basename(filePath) + ': ' + err.message);
    console.log('  WARN: Cannot auto-convert NEF: ' + path.basename(filePath) + ' - ' + err.message);
  }
}

function compressVideo(filePath) {
  return new Promise(async (resolve) => {
    const before = await getSize(filePath);
    const tmpPath = filePath + '.compressed.mp4';
    const basename = path.basename(filePath);

    console.log('  Compressing video: ' + basename + ' (' + formatSize(before) + ')');

    let videoBitrate = '800k';
    let audioBitrate = '96k';
    if (before > 150 * 1024 * 1024) {
      videoBitrate = '500k';
      audioBitrate = '64k';
    } else if (before > 80 * 1024 * 1024) {
      videoBitrate = '700k';
      audioBitrate = '80k';
    }

    ffmpeg(filePath)
      .videoCodec('libx264')
      .videoBitrate(videoBitrate)
      .audioCodec('aac')
      .audioBitrate(audioBitrate)
      .outputOptions([
        '-crf 28',
        '-preset fast',
        '-movflags +faststart',
        '-vf scale=min(1280\\,iw):-2',
      ])
      .output(tmpPath)
      .on('progress', (p) => {
        if (p.percent) process.stdout.write('\r     Progress: ' + Math.round(p.percent) + '%   ');
      })
      .on('end', async () => {
        process.stdout.write('\n');
        const after = await getSize(tmpPath);
        if (after < before) {
          await unlink(filePath);
          await rename(tmpPath, filePath);
          const saved = before - after;
          totalSaved += saved;
          filesProcessed++;
          if (after > GITHUB_LIMIT) {
            console.log('  WARN: Still over 100MB (' + formatSize(after) + ') for ' + basename);
          } else {
            console.log('  OK ' + basename + ': ' + formatSize(before) + ' -> ' + formatSize(after) + ' (saved ' + formatSize(saved) + ')');
          }
        } else {
          try { await unlink(tmpPath); } catch {}
          console.log('  No gain for ' + basename);
        }
        resolve();
      })
      .on('error', async (err) => {
        process.stdout.write('\n');
        try { if (existsSync(tmpPath)) await unlink(tmpPath); } catch {}
        errors.push('Video ' + basename + ': ' + err.message);
        console.log('  ERROR video: ' + basename + ': ' + err.message);
        resolve();
      })
      .run();
  });
}

async function processFolder(folderPath) {
  if (!existsSync(folderPath)) return;
  
  let files;
  try {
    files = await readdir(folderPath);
  } catch { return; }

  for (const file of files) {
    const filePath = path.join(folderPath, file);
    const ext = path.extname(file).toLowerCase();

    if (ext === '.nef') {
      await convertNEFtoJPG(filePath);
    } else if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      await compressImage(filePath);
    } else if (['.mp4', '.mov', '.avi'].includes(ext)) {
      await compressVideo(filePath);
    }
  }
}

async function compressRootImages() {
  const rootImages = ['log.jpg', 'w3.jpg'];
  for (const img of rootImages) {
    const filePath = path.join(ROOT, img);
    if (existsSync(filePath)) {
      await compressImage(filePath);
    }
  }
}

console.log('=======================================================');
console.log('   BAKRI-Studio - Asset Compression for GitHub         ');
console.log('=======================================================\n');

for (const folder of FOLDERS) {
  const folderPath = path.join(ROOT, folder);
  console.log('\nFolder: ' + folder);
  await processFolder(folderPath);
}

console.log('\nRoot images (log.jpg, w3.jpg)...');
await compressRootImages();

console.log('\n=======================================================');
console.log('                     DONE                              ');
console.log('=======================================================');
console.log('Files processed : ' + filesProcessed);
console.log('Total space saved: ' + formatSize(totalSaved));
if (errors.length > 0) {
  console.log('\nErrors (' + errors.length + '):');
  errors.forEach(e => console.log('  - ' + e));
  console.log('\nNEF files that failed may need to be removed manually');
  console.log('or converted using Adobe DNG Converter / Lightroom.');
}
console.log('');
