import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CursoCuatroParteUnoPage } from './curso-cuatro-parte-uno/curso-cuatro-parte-uno';


/*
  Generated class for the CursoCuatro page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-curso-cuatro',
  templateUrl: 'curso-cuatro.html'
})
export class CursoCuatroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CursoCuatroPage');
  }

    launchCursoCuatroParteUnoPage(){
    this.navCtrl.push(CursoCuatroParteUnoPage);

  }

}
