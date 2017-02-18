var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

//each string is name of library
var VENDOR_LIBS = [
  'react', 'lodash', 'redux', 'react-redux', 'react-dom', 'faker', 'react-input-range', 'redux-form', 'redux-thunk'
];

module.exports = {
  entry: {
    // Split files into 2 
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),

    //bundle[key].js
    // chunk hash adds unique key on output
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules:[
      {
        use: ['babel-loader'],
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test:/\.css$/
      }
    ]
  },
  plugins: [
    //look at the total sum of all our project files
    // if any modules included in both files are identical, pull them out and only
    // add them to the entry point
    // manifest helps us keep track of vendor.js changes
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    
    //add script tags to our index.html file automatically
    new HtmlWebpackPlugin({
      //pass in ref to our HTML template
      //put html doc in src directory not in the root
      template:'src/index.html'
    })
  ]
};
