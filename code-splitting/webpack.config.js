const path = require('path');
const ExtractTextPlugin =  require('extract-text-webpack-plugin');

const config = {

  //Entry - first min require for webpack to run, this is rel file ref
  entry: './src/index.js',

  //Output - 2nd main min requirement for webpack to run
  output: {
    
    // this must be an absolute path! Use node PATH helper to generate for us
    // dirname is our abs path to this project dir, and then we specify a folder to save to inside that abs path
    path: path.resolve(__dirname, 'build'), //__ is a constant in node js
    
    filename: 'bundle.js', //bundle.js is standard naming convention

    publicPath: 'build/' //allows URL Loader to prepend this path in-front of our import images
    
  },
  module:{
    
    //define separate Loaders(rule)
    rules:[
      {
        use: 'babel-loader',
        test: /\.js$/
      },

      //INLINE STYLES OPTION
      // {
      //   use: [ 'style-loader', 'css-loader', 'sass-loader' ],
      //   test: /\.scss$/
      // },

      // EXPORT STYLES to our BUILD DIRECTORY
      {
        loader: ExtractTextPlugin.extract({
          loader: ['css-loader', 'sass-loader']
        }),
        test: /\.scss$/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use:[
          {
            loader: 'url-loader',
            //find images less than and include them in the JS file, otherwise they are external images
            options: {
              limit: 40000
            }
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
  
};

// CommonJS export
module.exports = config;