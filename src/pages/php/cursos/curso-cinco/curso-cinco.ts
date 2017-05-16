import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CursoCincoParteUnoPage } from './curso-cinco-parte-uno/curso-cinco-parte-uno';


/*
  Generated class for the CursoCuatro page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-curso-cinco',
  templateUrl: 'curso-cinco.html'
})
export class CursoCincoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CursoCincoPage');
  }

    launchCursoCincoParteUnoPage(){
    this.navCtrl.push(CursoCincoParteUnoPage);

  }

}
