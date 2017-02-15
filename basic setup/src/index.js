// Common JS of import/export example, relative file ref
// const sum = require('./sum');

//es2015 import
import sum from './sum/sum';
import './image_viewer/image_viewer'; //import the file - just run it automatically


const total = sum(10, 5);

console.log(total);