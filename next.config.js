const withTM = require("next-transpile-modules")(["gsap"]);
module.exports = withTM({});

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
}