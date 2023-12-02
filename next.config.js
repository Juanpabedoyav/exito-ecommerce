/** @type {import('next').NextConfig} */
/*eslint no-undef: "error"*/
/*eslint-env node*/
const path = require("path")
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com", "exitocol.vtexassets.com"]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  }
}

module.exports = nextConfig
