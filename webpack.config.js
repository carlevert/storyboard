const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackIncludeAssetsPlugin = require("html-webpack-include-assets-plugin");



module.exports = {
   entry: {
      index: "./src/index.tsx",
   },
   output: {
      filename: "./dist/[name].js"
   },
   resolve: {
      extensions: ['.ts', '.tsx', '.js']
   },
   module: {
      loaders: [
         {
            test: /\.tsx?/,
            loader: "ts-loader"
         },
         {
            test: /\.scss/,
            loader: "sass-loader",
            options: {
               includePaths: [
                  "scss"
               ]
            }
         }
      ]
   },
   plugins: [
      new HtmlWebpackPlugin(),
      new HtmlWebpackIncludeAssetsPlugin({
         assets: ["main.css"],
         append: true
      })
   ],
   devServer: {
      contentBase: "./dist"
   }
}
