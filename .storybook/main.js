const glob = require("glob");

const getStoriesPaths = () => {
  return [
    ".slicemachine/assets/**/*.stories.@(js|jsx|ts|tsx|svelte)",
    "customtypes/**/*.stories.@(js|jsx|ts|tsx|svelte)",
  ].reduce((acc, p) => (glob.sync(p).length ? [...acc, `../${p}`] : acc), []);
};

module.exports = {
  stories: [
    ...getStoriesPaths(),
    "../components/**/*.stories.@(js|jsx|ts|tsx|svelte)",
    "../styles/globals.css",
  ],
  typescript: {
    // check: false,
    // checkOptions: {},
    // reactDocgen: "react-docgen-typescript",
    // reactDocgenTypescriptOptions: {
    //   shouldExtractLiteralValuesFromEnum: true,
    //   propFilter: (prop) =>
    //     prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    // },
    reactDocgen: "none",
  },
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react",
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      type: "javascript/auto",
      test: /\.mjs$/,
      include: /node_modules/,
    });

    // Return the altered config
    return config;
  },
};
