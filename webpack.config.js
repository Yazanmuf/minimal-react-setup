module.exports = {

//1
	entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
//2
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename:'bundle.js'
	},
//3
	devServer: {
	contentBase: './dist'
}
};
