import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';

/**
 * Generated class for the ComputadoraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-computadora',
  templateUrl: 'computadora.html',
})
export class ComputadoraPage {

  compu=[];
  imgs=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public fav: FavoritosProvider) {
    this.compu = this.navParams.get('compu');

    if(this.compu.ad.hasOwnProperty('images')){
      this.imgs = this.compu.ad.images
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComputadoraPage');
  }
  favoritos(compu){
    this.fav.addfavoritos(compu);
  }

}
