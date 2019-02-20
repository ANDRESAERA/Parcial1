import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConsolaPage } from '../consola/consola';
import { HttpClient } from '@angular/common/http';
import { SearchPage } from '../search/search';

/**
 * Generated class for the ConsolasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consolas',
  templateUrl: 'consolas.html',
})
export class ConsolasPage {
  consolas= [];
  consola= ConsolaPage;
  search = SearchPage;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {

    this.http.get('v2/klfst?&category=5060&offset=1&lim=29&lang=es')
    .subscribe( data => {
      if(data.hasOwnProperty('list_ads'))
      {
        this.consolas = data.list_ads;
      }
      },
      error => {
        console.log(JSON.stringify(error));
    
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsolasPage');
  }
  clickinfo(consola){
    this.navCtrl.push(this.consola, {consola:consola});
  }
  clicksearch(){
    this.navCtrl.push(this.search, {searchs:this.consolas});
  }
}
