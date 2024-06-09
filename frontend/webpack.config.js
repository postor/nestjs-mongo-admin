const { ProvidePlugin } = require("webpack");
const { join } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AutoRoutePlugin = require('webpack-react-auto-route-plugin')

module.exports = {
  entry: ['./src/index.ts'],
  output: {
    path: join(__dirname, 'public'),
    publicPath: '/',
    filename: '[name].[contenthash].js',
  },
  devServer: {
    proxy: [
      {
        context: ['/api'],  // Array of paths to match
        target: 'http://127.0.0.1:3000',
      }
    ],
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-typescript",
              "@babel/preset-react",
              ['@babel/preset-env', { targets: "defaults" }],
            ],
            plugins: [
              "styled-jsx/babel",
            ],
            "env": {
              "development": {
                "presets": [["@babel/preset-react", { "development": true }]]
              }
            }
          }
        }
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env", {},
                  ],
                  ['tailwindcss', {}],
                ],
              },
            },
          },
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, 'src', 'index.html')
    }),
    new ProvidePlugin({
      React: "react" // automatically import react where needed
    }),
    new AutoRoutePlugin({
      root: 'src/pages',
      getRoutesFile: /auto-get-routes\.ts$/,
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.wasm'],
  }
}