module.exports = {
  entry: './client/src/index.jsx',
  output: {
    path: __dirname + '/client/public/js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
