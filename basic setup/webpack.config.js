const path = require('path');

const config = {

  //Entry - first min require for webpack to run, this is rel file ref
  entry: './src/index.js',

  //Output - 2nd main min requirement for webpack to run
  output: {
    
    // this must be an absolute path! Use node PATH helper to generate for us
    // dirname is our abs path to this project dir, and then we specify a folder to save to inside that abs path
    path: path.resolve(__dirname, 'build'), //__ is a constant in node js
    
    filename: 'bundle.js' //bundle.js is standard naming convention
    
  }
  
};

// CommonJS export
module.exports = config;