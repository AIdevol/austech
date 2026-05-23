import fs from 'node:fs'
import path from 'node:path'
import type { Plugin } from 'vite'

export type GalleryManifestEntry = {
  file: string
  src: string
}

const VIRTUAL_ID = 'virtual:gallery-manifest'
const RESOLVED_ID = '\0' + VIRTUAL_ID
const IMAGE_EXT = /\.(jpe?g|png|webp|gif|avif)$/i
const SKIP_FILES = new Set(['manifest.json'])
const SKIP_PREFIXES = ['logo']

function shouldIncludeFile(name: string) {
  if (SKIP_FILES.has(name)) return false
  if (!IMAGE_EXT.test(name)) return false
  const lower = name.toLowerCase()
  return !SKIP_PREFIXES.some((prefix) => lower.startsWith(prefix))
}

function readGalleryManifest(galleryDir: string): GalleryManifestEntry[] {
  if (!fs.existsSync(galleryDir)) return []

  return fs
    .readdirSync(galleryDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && shouldIncludeFile(entry.name))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b))
    .map((file) => ({
      file,
      src: `/assets/gallery/${encodeURIComponent(file)}`,
    }))
}

export function galleryManifestPlugin(): Plugin {
  const galleryDir = path.resolve(process.cwd(), 'public/assets/gallery')

  const moduleSource = () =>
    `export default ${JSON.stringify(readGalleryManifest(galleryDir))}`

  return {
    name: 'gallery-manifest',
    resolveId(id) {
      if (id === VIRTUAL_ID) return RESOLVED_ID
    },
    load(id) {
      if (id === RESOLVED_ID) return moduleSource()
    },
    configureServer(server) {
      if (!fs.existsSync(galleryDir)) return

      const reload = () => {
        const mod = server.moduleGraph.getModuleById(RESOLVED_ID)
        if (mod) {
          server.moduleGraph.invalidateModule(mod)
          server.ws.send({ type: 'full-reload' })
        }
      }

      fs.watch(galleryDir, { persistent: true }, reload)
    },
  }
}
