import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Item } from 'ionic-angular';

/**
 * Generated class for the VerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver',
  templateUrl: 'ver.html',
})
export class VerPage {

  item=[];
  imgs=[];

 
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.item = this.navParams.get('items');
    if(this.item.ad.hasOwnProperty('images')){
      this.imgs = this.item.ad.images
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerPage');
  }

}
