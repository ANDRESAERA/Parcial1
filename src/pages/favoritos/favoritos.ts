import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';
import { VerPage } from '../ver/ver';

/**
 * Generated class for the FavoritosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html',
})
export class FavoritosPage {

  items= [];
  verr = VerPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fav:FavoritosProvider) {

    this.items = this.fav.getfavoritos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritosPage');
  }
  ver(item){
      this.navCtrl.push(this.verr, {items:item});
    }
  
  }


