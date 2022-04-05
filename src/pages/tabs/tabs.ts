import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PagesSinglePage } from '../pages-single/pages-single';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  single = PagesSinglePage;
  settings = SettingsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
