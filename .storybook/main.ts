// import type { StorybookConfig } from "@storybook/react-webpack5";

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
  // webpackFinal: async (config, { configType }) => {
  //   const configHtmlWebPackPlugin = config.plugins.find(plugin => plugin.constructor.name === 'HtmlWebpackPlugin')
  //   configHtmlWebPackPlugin.options.publicPath = '/react-components/'
  //   config.output.publicPath = '/react-components/'
  //   const oriTemplateParameters = configHtmlWebPackPlugin.options.templateParameters
  //   configHtmlWebPackPlugin.options.templateParameters = (compilation, files, options) => {
  //     const oriReturn = oriTemplateParameters(compilation, files, options)
  //     oriReturn.globals.PREVIEW_URL = '/react-components/iframe.html'
  //     return oriReturn;
  //   }
  //   return config
  // },
  // webpackFinal: async (config, { configType }) => {
  //   config.output.publicPath = '/react-components/'
  //   return config
  // },
};
export default config;
