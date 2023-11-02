const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let mode = 'development'
if (process.env.NODE_ENV === 'production') {
  mode = 'production'
}

const config = {
  mode: mode,
  entry: {
    index: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    assetModuleFilename: 'icons/[hash][ext][query]',
  },
  resolve: {
    modules: ['node_modules'],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './public/index.html'),
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      // Styles
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      // Images
      {
        test: /\.(svg|png|jpg)$/i,
        type: 'asset/resource',
      },
      // Videos
      {
        test: /\.(mp4|mov)$/i,
        type: 'asset/resource',
      },
      // HTML
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      // Fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
}

module.exports = config
