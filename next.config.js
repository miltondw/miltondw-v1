const path = require("path");
module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "scss")],
  },
  images: {
    domains: ["https://res.cloudinary.com", "www.facebook.com"],
  },
};
