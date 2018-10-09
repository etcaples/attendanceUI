const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcFolder = path.join(__dirname, '/client/src/');

module.exports = {
  entry: {
    main: [path.join(srcFolder, 'init.jsx')],
  },
  resolve: { extensions: ['.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(srcFolder, '/index.html'),
      filename: './index.html',
    }),
  ],
};
