import React from 'react';
import logo from './logo.svg';
import './App.css';
// var Noise = require('noisejs');
import * as Noise from 'noisejs';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    var noise = new Noise(Math.random());

    /*
    console.log('noise', noise)

    var canvas = document.getElementsByTagName('canvas')[0];
    canvas.width = 1024;
    canvas.height = 768;
    
    var ctx = canvas.getContext('2d');
    
    var image = ctx.createImageData(canvas.width, canvas.height);
    var data = image.data;
    
    var start = Date.now();
    
    for (var x = 0; x < canvas.width; x++) {
      //if (x % 100 == 0) {
      //  noise.seed(Math.random());
      //}
      for (var y = 0; y < canvas.height; y++) {
        var value = Math.abs(noise.perlin2(x / 100, y / 100));
        value *= 256;
    
        var cell = (x + y * canvas.width) * 4;
        data[cell] = data[cell + 1] = data[cell + 2] = value;
        data[cell] += Math.max(0, (25 - value) * 8);
        data[cell + 3] = 255; // alpha.
      }
    }
    
    // // Benchmark code.
    // start = Date.now();
    // for (var x = 0; x < 10000; x++) {
    //   for (var y = 0; y < 10000; y++) {
    //     noise.simplex2(x / 50, y/50);
    //   }
    // }
    var end = Date.now();
    
    ctx.fillColor = 'black';
    ctx.fillRect(0, 0, 100, 100);
    ctx.putImageData(image, 0, 0);
    
    
    ctx.font = '16px sans-serif'
    ctx.textAlign = 'center';
    ctx.fillText('Rendered in ' + (end - start) + ' ms', canvas.width / 2, canvas.height - 20);
    
    if(console) {
      console.log('Rendered in ' + (end - start) + ' ms');
    }  
    */  
  }
  render() {
    return (
      <div className="App">
        <div className='centerbox'><canvas></canvas></div>
      </div>
    );
  }
}

export default App;
