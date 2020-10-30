const path = require('path');
const TreatPlugin = require('treat/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'output.bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new TreatPlugin({
      outputLoaders: [MiniCssExtractPlugin.loader],
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    port: 9000,
    publicPath: '/dist/',
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    historyApiFallback: true,
    hot: true,
  },
};
