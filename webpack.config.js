const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  devServer: { contentBase: './', hot: true },
  entry: [
    './index.jsx',
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'index.js',
    publicPath: '/static/',
  },
  resolve: {
    extensions: ['.jsx', '.scss', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: { presets:
            ['react',
              ['env', { "targets": { "browsers": ["last 2 versions", "safari >= 7"] } }]
            ]
          }
        },
        exclude: /(node_modules)/,
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['static']),
    new webpack.HotModuleReplacementPlugin()
  ]
};
