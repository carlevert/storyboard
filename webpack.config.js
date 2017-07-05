const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackIncludeAssetsPlugin = require("html-webpack-include-assets-plugin");
module.exports = {
   entry: {
      index: "./src/index.tsx",
   },
   output: {
      filename: "./index.js"
   },
   resolve: {
      extensions: ['.ts', '.tsx', '.js']
   },
   module: {
      loaders: [
         {
            test: /\.tsx?/,
            loader: "ts-loader"
         }
      ]
   },
   plugins: [
      new HtmlWebpackPlugin(),
      new HtmlWebpackIncludeAssetsPlugin({
         assets: ["main.css"],
         append: true
      })
   ]
}