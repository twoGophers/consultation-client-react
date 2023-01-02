/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig


module.exports = {
  reactStrictMode: true,
  env: {
    TOKEN_BOT_API: process.env.TOKEN_BOT_API,
    TELEGRAM_BOT_ID: process.env.TELEGRAM_BOT_ID,
  }
}