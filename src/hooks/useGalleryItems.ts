import { useCallback, useMemo, useState } from 'react'
import { GALLERY_ITEMS, type GalleryItem } from '@/constants/galleryContent'

/**
 * Gallery images from the folder, minus any that fail to load (deleted or broken).
 */
export function useGalleryItems() {
  const [brokenIds, setBrokenIds] = useState<Set<string>>(() => new Set())

  const markBroken = useCallback((id: string) => {
    setBrokenIds((prev) => {
      if (prev.has(id)) return prev
      const next = new Set(prev)
      next.add(id)
      return next
    })
  }, [])

  const items = useMemo(
    () => GALLERY_ITEMS.filter((item) => !brokenIds.has(item.id)),
    [brokenIds],
  )

  return { items, markBroken, totalInFolder: GALLERY_ITEMS.length }
}

export type { GalleryItem }
