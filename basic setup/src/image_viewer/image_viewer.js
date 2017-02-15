import './image_viewer.scss';
import big from '../../assets/train.jpeg';
import small from '../../assets/small.jpeg';

const image = document.createElement('img');
image.src = small;
document.body.appendChild(image);

const bigImage = document.createElement('img');
bigImage.src = big;
document.body.appendChild(bigImage);