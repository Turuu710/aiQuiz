import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  env: {
    PRISMA_DATABASE_URL: process.env.PRISMA_DATABASE_URL,
  },
};

export default nextConfig;
