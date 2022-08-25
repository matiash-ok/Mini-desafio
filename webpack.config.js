const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const InterpolateHtmlPlugin = require('interpolate-html-plugin')
const dotenv = require('dotenv')
const webpack = require('webpack')
const WorkboxPlugin = require('workbox-webpack-plugin');

dotenv.config()

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  devServer:{
    historyApiFallback:true
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10000,
          },
        }
      },
       {
        test: /\.s[ac]ss$/i,
        use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
        ],
       },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    //  Sirve para generar el Service Worker
    //   new WorkboxPlugin.GenerateSW({
    //    clientsClaim: true,
    //    skipWaiting: true,
    //  }),


  //  Inyecta variables de entorno en html muy bueno mal 
  //   new InterpolateHtmlPlugin({
  //     PUBLIC_URL: process.env.PUBLIC_URL // can modify `static` to another name or get it from `process`
  // }),

  
    // new webpack.DefinePlugin({
    //     'process.env': JSON.stringify(process.env)
    // }),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),

  ],
};
