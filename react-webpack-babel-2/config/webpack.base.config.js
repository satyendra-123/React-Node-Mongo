var HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin'); 

module.exports = env => {
  const { PLATFORM, VERSION } = env;
  return merge([
    {
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.scss$/,
            use: [  PLATFORM === 'production' ? MiniCssExtractPlugin.loader : 'style-loader', "css-loader", "sass-loader"]
          }
        ]
      },
      plugins: [
        new CopyWebpackPlugin([ { from: 'src/static' } ]), // Add this in the plugins section
        new HtmlWebpackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
        }),
        new webpack.DefinePlugin({ 
            'process.env.VERSION': JSON.stringify(env.VERSION),
            'process.env.PLATFORM': JSON.stringify(env.PLATFORM)
        })
      ]
    }
  ]);
};
