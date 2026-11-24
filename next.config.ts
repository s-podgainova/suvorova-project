import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  turbopack: { root: process.cwd() },
  images: {
    loader: "custom",
    loaderFile: "./staticImagePassthroughLoader.ts",
    imageSizes: [256, 384],
    deviceSizes: [640, 960, 1280, 1920],
  },
  transpilePackages: ["next-image-export-optimizer"],
  env: {
    nextImageExportOptimizer_imageFolderPath: "public/images",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: "75",
    nextImageExportOptimizer_storePicturesInWEBP: "true",
    nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",
    nextImageExportOptimizer_generateAndUseBlurImages: "true",
  },
};

export default nextConfig;
