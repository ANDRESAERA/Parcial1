import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VerPage } from '../ver/ver';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  searchs=[];
  items=[];
  verr=VerPage;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.searchs = this.navParams.get('searchs');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  getItems(ev: any){
    console.log(ev.target.value);

    this.items = this.searchs.filter(search => {
      return search.ad.subject.toLowerCase().includes( ev.target.value.toLowerCase())
    })
  }
  ver(item){
    this.navCtrl.push(this.verr, {items:item});
  }


}
