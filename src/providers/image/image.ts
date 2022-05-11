import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class ImageProvider {
  base64img:string='';
  url:'http://192.168.1.6:8888/img_upload/imageUpload.php';
  constructor() {
  }
  setImage(img){
  this.base64img=img;
  }
  getImage(){
  return this.base64img;
  }
  }