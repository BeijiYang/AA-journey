var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  }
  // module: {
  //   loaders: [
  //     {
  //       test: /\.jsx?$/,
  //       loaders: ['babel'],
  //       include: path.join(__dirname, 'src')
  //     }
  //   ]
  // }
};
