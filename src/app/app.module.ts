import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpClientModule} from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FavoritosProvider } from '../providers/favoritos/favoritos';
import { MascotaPage } from '../pages/mascota/mascota';
import { TabsPage } from '../pages/tabs/tabs';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { ConsolasPage } from '../pages/consolas/consolas';
import { ConsolaPage } from '../pages/consola/consola';
import { ComputadoraPage } from '../pages/computadora/computadora';
import { ComputadorasPage } from '../pages/computadoras/computadoras';
import { SearchPage } from '../pages/search/search';
import { VerPage } from '../pages/ver/ver';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MascotaPage,
    TabsPage,
    FavoritosPage,
    ConsolasPage,
    ConsolaPage,
    ComputadoraPage,
    ComputadorasPage,
    SearchPage,
    VerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MascotaPage,
    TabsPage,
    FavoritosPage,
    ConsolasPage,
    ConsolaPage,
    ComputadoraPage,
    ComputadorasPage,
    SearchPage,
    VerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FavoritosProvider
  ]
})
export class AppModule {}
