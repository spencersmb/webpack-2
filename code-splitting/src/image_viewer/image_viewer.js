import './image_viewer.scss';
import big from '../../assets/train.jpeg';
import small from '../../assets/small.jpeg';

// const bigImage = document.createElement('img');
// bigImage.src = big;
// document.body.appendChild(bigImage);
class LoadImage {

  constructor(){
    this.image = document.createElement('img');
  }

  init(){
    this.image.src = small;
    document.body.appendChild(this.image);
  }
  
}

// const images = new LoadImage();
// export default images;

export default LoadImage;