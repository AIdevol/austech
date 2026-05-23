#!/usr/bin/env node
/**
 * Compresses the hero background video for web delivery.
 * Outputs MP4 (H.264) and WebM to public/videos/
 *
 * Usage: npm run optimize:hero-video
 */
import { spawn } from 'node:child_process'
import { existsSync } from 'node:fs'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import ffmpegPath from 'ffmpeg-static'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const outDir = path.join(root, 'public/videos')

const sources = [
  path.join(root, 'public/assets/video/background_video1.mp4'),
  path.join(root, 'public/assets/gallery/background_video1.mp4'),
]

const input = sources.find((p) => existsSync(p))

if (!input) {
  console.error('No source video found. Place background_video1.mp4 in public/assets/video/')
  process.exit(1)
}

if (!ffmpegPath) {
  console.error('ffmpeg-static binary not available')
  process.exit(1)
}

const mp4Out = path.join(outDir, 'bg-video.mp4')
const webmOut = path.join(outDir, 'bg-video.webm')

function run(args) {
  return new Promise((resolve, reject) => {
    const proc = spawn(ffmpegPath, args, { stdio: 'inherit' })
    proc.on('error', reject)
    proc.on('close', (code) => (code === 0 ? resolve() : reject(new Error(`ffmpeg exited ${code}`))))
  })
}

await mkdir(outDir, { recursive: true })

console.log(`Source: ${input}`)
console.log('Encoding MP4 (H.264, faststart, ~1280px wide)...')

await run([
  '-y',
  '-i',
  input,
  '-an',
  '-vf',
  'scale=1280:-2,fps=30',
  '-c:v',
  'libx264',
  '-preset',
  'slow',
  '-crf',
  '28',
  '-movflags',
  '+faststart',
  '-pix_fmt',
  'yuv420p',
  '-profile:v',
  'high',
  '-level',
  '4.0',
  mp4Out,
])

console.log('Encoding WebM (VP9)...')

const posterOut = path.join(outDir, 'bg-video-poster.jpg')

try {
  await run([
    '-y',
    '-i',
    input,
    '-an',
    '-vf',
    'scale=1280:-2,fps=30',
    '-c:v',
    'libvpx-vp9',
    '-b:v',
    '0',
    '-crf',
    '34',
    '-row-mt',
    '1',
    webmOut,
  ])
} catch {
  console.warn('WebM encode skipped (VP9 encoder unavailable). MP4 works in all major browsers.')
}

console.log('Extracting poster frame...')
await run(['-y', '-i', mp4Out, '-vframes', '1', '-q:v', '2', '-update', '1', posterOut])

console.log('Done:', mp4Out, webmOut, posterOut)
