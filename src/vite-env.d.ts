/// <reference types="vite/client" />

type GalleryManifestEntry = {
  file: string
  src: string
}

declare module 'virtual:gallery-manifest' {
  const manifest: GalleryManifestEntry[]
  export default manifest
}
