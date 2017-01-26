var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './src/index'
  ],
  module: {
    loaders: [
      { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/, query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-runtime'],
        }, },
      { test: /\.s?css$/, loader: 'style!css!sass' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]' },
    ]
  },
  resolve: {
    extensions: ['', '.js'],
    alias: {
      actions: path.join(__dirname, 'src/actions'),
      notifications: path.join(__dirname, 'src/notifications'),
      sagas: path.join(__dirname, 'src/sagas'),
    }
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'aws': {
        'accessKeyId': JSON.stringify('AKIAII47F3M5KTOZSPXA'),
        'secretAccessKey': JSON.stringify('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'),
        'region': JSON.stringify('us-east-1'),
      }
    }),
  ]
};
