import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CursoTresParteTresPage } from '../curso-tres-parte-tres/curso-tres-parte-tres';


/*
  Generated class for the CursoTresParteDos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-curso-tres-parte-dos',
  templateUrl: 'curso-tres-parte-dos.html'
})
export class CursoTresParteDosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CursoTresParteDosPage');
  }

     launchCursoTresParteTresPage(){
    this.navCtrl.push(CursoTresParteTresPage);

  }

}
