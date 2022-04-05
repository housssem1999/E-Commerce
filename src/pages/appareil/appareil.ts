import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-appareil',
  templateUrl: 'appareil.html',
})
export class AppareilPage implements OnInit{
appareil:{
  name:String,
  description : String[]
}
constructor(public navParams: NavParams, public viewCtrl: ViewController) {
}
ngOnInit() {
this.appareil = this.navParams.get('appareil');
}
dismissModal() {
this.viewCtrl.dismiss();
}

}
