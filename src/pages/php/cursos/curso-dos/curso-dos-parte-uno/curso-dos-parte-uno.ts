import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CursoDosParteDosPage } from '../curso-dos-parte-dos/curso-dos-parte-dos';


/*
  Generated class for the CursoDosParteUno page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-curso-dos-parte-uno',
  templateUrl: 'curso-dos-parte-uno.html'
})
export class CursoDosParteUnoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CursoDosParteUnoPage');
  }

    launchCursoDosParteDosPage(){
    this.navCtrl.push(CursoDosParteDosPage);

  }

}
