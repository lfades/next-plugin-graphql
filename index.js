// ts-check

/**
 * @typedef {Object} Options
 * @property {Array.<string|RegExp>} [include] - Additional directories to include
 */

/**
 * @fileoverview Next.js plugin for loading GraphQL files
 * @param {import('next').NextConfig} nextConfig
 * @param {Options} [opts]
 * @return {import('next').NextConfig}
 */
module.exports = (nextConfig = {}, opts = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      if (!options.defaultLoaders) {
        throw new Error(
          "This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade"
        );
      }

      const { dir } = options;
      const { include, exclude } = opts || {};

      config.module.rules.push({
        test: /\.(graphql|gql)$/,
        include: [dir].concat(include || []),
        exclude: [/node_modules/].concat(exclude || []),
        use: [
          {
            loader: "graphql-tag/loader",
          },
        ],
      });

      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  });
};
