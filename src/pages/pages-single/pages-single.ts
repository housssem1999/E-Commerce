import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { Appareil } from '../../models/Appareil';
import { AppareilsService } from '../../Services/appareil.service';
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
  appareilsList: Appareil[];
  constructor(private modalCtrl: ModalController, private appareilsService: AppareilsService) {}

  ionViewWillEnter() {
    this.appareilsList = this.appareilsService.appareilsList.slice();
  }
  
  onLoadAppareil(index: number) {
    let modal = this.modalCtrl.create(AppareilPage, {index: index});
    modal.present();
    }

}
