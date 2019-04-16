import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICE } from '../config/config';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(img: string, type: string = 'users'): any {
    
    let url = URL_SERVICE + '/img';
    if(!img)
      img = 'no_image'
      
    if(img.indexOf('https') >= 0)
      return img;      

      return url + `/${type}/${img}`
  }

}
