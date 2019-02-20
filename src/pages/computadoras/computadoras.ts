import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComputadoraPage } from '../computadora/computadora';
import { HttpClient } from '@angular/common/http';
import { SearchPage } from '../search/search';

/**
 * Generated class for the ComputadorasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-computadoras',
  templateUrl: 'computadoras.html',
})
export class ComputadorasPage {

  computadoras= [];
  computadora= ComputadoraPage;
  search= SearchPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.http.get('v3/klfst?&category=5020&offset=1&lim=29&lang=es')
    .subscribe( data => {
      if(data.hasOwnProperty('list_ads'))
      {
        this.computadoras = data.list_ads;
      }
      },
      error => {
        console.log(JSON.stringify(error));
    
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComputadorasPage');
  }

  clickinfo(compu){
    this.navCtrl.push(this.computadora, {compu:compu});
  }
  clicksearch(){
    this.navCtrl.push(this.search, {searchs:this.computadoras});
  }

}
