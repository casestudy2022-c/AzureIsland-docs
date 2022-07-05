const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const contextPath = path.resolve(__dirname, "src");
const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'development',
  context: contextPath,
  entry: {
    app: './index',
    "js/main": './js/main',
    "js/teacher": './js/teacher',
    "js/admin": './js/admin',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.yaml$/,
        use: [
          { loader: 'json-loader' },
          { loader: 'yaml-loader' }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([
      outputPath
    ]),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: false
    }),
    new HtmlWebpackPlugin({
      template: './html/main.html',
      filename: 'main.html'
    }),
    new HtmlWebpackPlugin({
      template: './html/teacher.html',
      filename: 'teacher.html'
    }),
    new HtmlWebpackPlugin({
      template: './html/admin.html',
      filename: "admin.html"
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: outputPath,
  }
};