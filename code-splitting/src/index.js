const button = document.createElement('button');
button.innerText = "Click me";

//vanilla html event click
button.onclick = () => {

  // es2015 function that reaches out to server to try and get this file
  // async call
  System.import('./image_viewer/image_viewer')
    .then( module => {

      console.log(module);
      // module.default.init();

      const image = new module.default();
      image.init();

    } );

};

document.body.appendChild(button);