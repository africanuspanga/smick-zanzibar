"use client"

/**
 * next/image loader for the static export: maps each requested srcset width to a
 * pre-generated variant (see scripts/resize-images.py), e.g. /img/x.webp → /img/x-640.webp.
 */
const VARIANTS = [384, 640, 1080]

export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  if (!src.startsWith("/img/") || src.startsWith("/img/brand/") || !src.endsWith(".webp")) return src
  const w = VARIANTS.find((v) => width <= v)
  return w ? src.replace(/\.webp$/, `-${w}.webp`) : src
}
