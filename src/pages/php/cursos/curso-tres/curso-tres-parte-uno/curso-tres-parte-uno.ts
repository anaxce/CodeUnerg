import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CursoTresParteDosPage } from '../curso-tres-parte-dos/curso-tres-parte-dos';

/*
  Generated class for the CursoTresParteUno page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-curso-tres-parte-uno',
  templateUrl: 'curso-tres-parte-uno.html'
})
export class CursoTresParteUnoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CursoTresParteUnoPage');
  }

     launchCursoTresParteDosPage(){
    this.navCtrl.push(CursoTresParteDosPage);

  }

}
