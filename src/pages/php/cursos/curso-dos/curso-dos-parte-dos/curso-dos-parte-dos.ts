import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CursoDosParteTresPage } from '../curso-dos-parte-tres/curso-dos-parte-tres';

/*
  Generated class for the CursoDosParteDos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-curso-dos-parte-dos',
  templateUrl: 'curso-dos-parte-dos.html'
})
export class CursoDosParteDosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CursoDosParteDosPage');
  }

    launchCursoDosParteTresPage(){
    this.navCtrl.push(CursoDosParteTresPage);

  }

}
