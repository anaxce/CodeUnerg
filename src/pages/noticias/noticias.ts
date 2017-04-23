import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NoticiasService } from '../../providers/noticias.service'

/*
  Generated class for the Noticias page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
  providers: [NoticiasService]
})
export class NoticiasPage {

  constructor(public navCtrl: NavController, public noticiasService:NoticiasService) {
     this.loadRestData();
  }

  loadRestData() {
    this.noticiasService.load()
      .then(data => {
        console.log(data);
      });
  }

}
