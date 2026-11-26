/** @type {import('next').NextConfig} */
const nextConfig = {
  // Don't advertise the framework in response headers.
  poweredByHeader: false,
  // Hostinger caps each account at ~120 processes and counts every thread.
  // Next.js sizes its worker pools from the server's CPU count, so keep it to one.
  experimental: {
    cpus: 1,
    workerThreads: false,
  },
};

export default nextConfig;
