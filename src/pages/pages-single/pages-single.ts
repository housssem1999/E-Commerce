import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { AppareilPage } from '../appareil/appareil';

/**
 * Generated class for the PagesSinglePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pages-single',
  templateUrl: 'pages-single.html',
})
export class PagesSinglePage  {
  appareilList=[
    {name:"Machine a laver",description:['volume: 8 litres','temps:1heure']},
    {name:"television",description:['taille: 42 pouces','consommation: efaG']},
    {name:"Ordinateur",description:['processeurs:i7, ram:8 go']}
  ]

  constructor(private modalCtrl: ModalController) {}

  onLoadAppareil(appareil: {name: string, description: string[]}) {
    let modal = this.modalCtrl.create(AppareilPage, {appareil: appareil});
    modal.present();
  }

}
