import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  env: {
    PRISMA_DATABASE_URL: process.env.PRISMA_DATABASE_URL,
    CLERK_WEBHOOK_SIGNING_SECRET: process.env.CLERK_WEBHOOK_SIGNING_SECRET,
  },
};

export default nextConfig;
