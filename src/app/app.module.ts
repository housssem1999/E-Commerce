import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { AppareilPage } from '../pages/single-appareil/appareil';
import { OptionsPage } from '../pages/options/options';
import { AppareilsService } from '../Services/appareil.service';
import { AppareilFormPage } from '../pages/appareil-form/appareil-form';
import { AuthService } from '../Services/auth.service';
import { AuthPage } from '../pages/auth/auth';
import { AppareilsPage } from '../pages/appareils/appareils';
import { SqlitePage } from '../pages/sqlite/sqlite';
import { Camera } from '@ionic-native/camera';
import { FileTransfer } from '@ionic-native/file-transfer';
import { ImageProvider } from '../providers/image/image';
import { IdentifyphotoPage } from '../pages/identify-photo/identify-photo';
import { NativeStoragePage } from '../pages/native-storage/native-storage';
import { TakePicPage } from '../pages/take-pic/take-pic';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AppareilsPage,
    TabsPage,
    SettingsPage,
    AppareilPage,
    OptionsPage,
    AppareilFormPage,
    AuthPage,
    SqlitePage,
    NativeStoragePage,
    IdentifyphotoPage,
    TakePicPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AppareilsPage,
    SettingsPage,
    TabsPage,
    AppareilPage,
    OptionsPage,
    AppareilFormPage,
    AuthPage,
    SqlitePage,
    NativeStoragePage,
    IdentifyphotoPage,
    TakePicPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppareilsService,
    AuthService,
    Camera,
    FileTransfer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ImageProvider
  ]
})
export class AppModule {}
