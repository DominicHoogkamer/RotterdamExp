import { ProfilePage } from './../pages/profile/profile';
import { MarkerdetailLocalPage } from './../pages/markerdetail-local/markerdetail-local';
import { locationModel } from './../models/locations-model';
import { MarkerdetailPage } from './../pages/markerdetail/markerdetail';
import { Geolocation } from '@ionic-native/geolocation';
import { IntroPage } from './../pages/intro/intro';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CameraPreview } from '@ionic-native/camera-preview';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AgmCoreModule } from 'angular2-google-maps/core'
import { Camera } from "@ionic-native/camera";
import { DataProvider } from '../providers/data/data';
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IntroPage,
    MarkerdetailPage,
    MarkerdetailLocalPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCeZ_kQYcx4O4I6j52vBYNsHmUVInZul4U'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IntroPage,
    MarkerdetailPage,
    MarkerdetailLocalPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CameraPreview,
    locationModel,
    Camera,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
  ]
})
export class AppModule {}
