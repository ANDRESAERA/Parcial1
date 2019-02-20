import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { MascotaPage } from '../mascota/mascota';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mascotas=[];
  mascota= MascotaPage;
  search= SearchPage;

  constructor(public navCtrl: NavController,
              public http: HttpClient) {

            this.http.get('v1/klfst?&category=4020&offset=1&lim=29&lang=es')
            .subscribe( data => {
              if(data.hasOwnProperty('list_ads'))
              {
                this.mascotas = data.list_ads;
              }
              },
              error => {
                console.log(JSON.stringify(error));
            
            })

  }

  clickinfo(mascota){
    this.navCtrl.push(this.mascota, {mascota:mascota});
  }
  clicksearch(){
    this.navCtrl.push(this.search, {searchs:this.mascotas});
  }

}
