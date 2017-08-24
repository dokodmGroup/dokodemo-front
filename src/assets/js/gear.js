export function guid(){
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

export const pervHost = 'https://api.dokodm.com/';

export const phImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAZCAYAAABQDyyRAAABgklEQVRIS+WWXauCQBCGxxIsI7yIrBCk/v9vskRCMFAoKkELD++CHj/25JaLBue92Yud3Xl2nA8Vx3EyGkiappEyJECWZb8A4/GYRqNRL7FI07TwU0RgsViQYRi9AOz3+y8HwLdxXZewQogMIiRLrREoG+ROLcsiZK0MfQSABN1utzL8UyuA4zikKErFmaqqZNt2PwCn04mu12vF2W63a0DxaMIwpPP5zLYADPC6WiOAA6hV3/fZd1+v1ywh61EpX1xP3HxvPp/TcrmsMAgBvBNrOPc8j57PZ+MY9gBhmmaxJx3geDxSkiQvmWezGa1WK2YjFYCXLzwSRELXddpsNnIAcOHlciEk3TuaTqcUx3H3Vowqweu7SngY8arg8Xiw5OsiIYDb7UZBELBxjdrGmgN1hWgF4M0FOMdsmEwm7PGAA+Qn4gLAQRRFRUf762I0JjQpJBavfYsANQDg/HA4FKP4Vferd0JR2/K5CgDK436/t7ZdkZeJ2gz6UwrI/w2AfPsBH/0l3vaZlwwAAAAASUVORK5CYII='

export function compressImage(_cfg={}){
  return new Promise((resolve, reject)=>{
    if(!_cfg.file){
      return reject('no file')
    }
    try{
      let file = _cfg.file;
      let canvas = document.createElement('canvas');
      let ctx = canvas.getContext('2d');
      let srcimg = new Image();
      let quality = _cfg.quality&& typeof(_cfg.quality)=='number'?_cfg.quality:0.5;
      let tmp_srcimgdata = URL.createObjectURL(file);
      let size = _cfg.size&&typeof(_cfg.size)=='number'?_cfg.size:1
      srcimg.src = tmp_srcimgdata;
      srcimg.onload = function(){
        // let destimg = new Image();
        canvas.width = srcimg.width*size;
        canvas.height = srcimg.height*size;
        ctx.drawImage(srcimg, 0, 0, srcimg.width, srcimg.height, 0, 0, srcimg.width*size, srcimg.height*size);
        let dataUrl = canvas.toDataURL(file.type, _cfg.quality);
        return resolve(dataUrl)
      }
    }catch(e){
      return reject("your browser doesn't support canvas");
    }
  })
  
}