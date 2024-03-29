import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FavoritosPage } from '../favoritos/favoritos';
import { ConsolasPage } from '../consolas/consolas';
import { ComputadorasPage } from '../computadoras/computadoras';
import { SearchPage } from '../search/search';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1= HomePage;
  tab2= ConsolasPage;
  tab3= ComputadorasPage;
  tab4 = FavoritosPage;
  tab5 = SearchPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
