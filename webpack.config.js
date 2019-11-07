const path = require('path');

module.exports = {
  entry: {
    homePage: path.resolve(__dirname, 'client/index.js'),
    loginPage: path.resolve(__dirname, 'client/login.js'),
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  devServer: {
    port: 8080,
    publicPath: '/build',
    contentBase: path.join(__dirname, '/client'),
    proxy: {
      '/': 'http://localhost:3000/',
      '/login': 'http://localhost:3000/',
      '/Indeed': 'http://localhost:3000/',
      '/LinkedIn': 'http://localhost:3000/',
      '/GlassDoor': 'http://localhost:3000/',
      '/LinkUp': 'http://localhost:3000/',
      '/favorites': 'http://localhost:3000/'
    }
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.s?css/i,
        exclude: /(node_modules|bower_components)/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};
