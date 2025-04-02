const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPlugin = require('./node_modules/html-webpack-plugin/index.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { MyExampleWebpackPlugin } = require('./HandleWebpackPlugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.[contenthash:8].js',
    // library: {
    //   type: 'module'
    // }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    }),
    new CleanWebpackPlugin(),
    new MyExampleWebpackPlugin()
  ]
}