/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production"
const repositoryName = "chohackai"

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? `/${repositoryName}` : "",
  assetPrefix: isProd ? `/${repositoryName}/` : undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
