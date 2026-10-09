/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    // Static export: serve pre-generated WebP sizes (scripts/resize-images.py) via a custom loader.
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
    deviceSizes: [384, 640, 1080, 1920],
    imageSizes: [48, 96, 176, 256],
  },
  trailingSlash: false,
}

export default nextConfig
