import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PagesSinglePage } from '../pages/pages-single/pages-single';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { AppareilPage } from '../pages/appareil/appareil';
import { AppareilsService } from '../Services/appareil.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PagesSinglePage,
    TabsPage,
    SettingsPage,
    AppareilPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PagesSinglePage,
    SettingsPage,
    TabsPage,
    AppareilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppareilsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
