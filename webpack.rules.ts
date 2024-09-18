import type { ModuleOptions } from "webpack";

export const rules: Required<ModuleOptions>["rules"] = [
  {
    test: /\.node$/,
    use: "node-loader",
  },
  {
    test: /[/\\]node_modules[/\\].+\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: "@vercel/webpack-asset-relocator-loader",
      options: {
        outputAssetBase: "native_modules",
      },
    },
  },
  {
    test: /\.tsx?$/,
    exclude: /(node_modules|\.webpack)/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          ["@babel/preset-env", { targets: "defaults" }],
          "@babel/preset-react",
          "@babel/preset-typescript",
        ],
        plugins: [
          "react-native-web",
          [
            "module-resolver",
            {
              alias: {
                "^react-native$": "react-native-web",
              },
            },
          ],
        ],
      },
    },
  },
];
