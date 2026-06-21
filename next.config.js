/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [{ source: "/", destination: "/dojo_pitch.html" }],
    };
  },
};

module.exports = nextConfig;
