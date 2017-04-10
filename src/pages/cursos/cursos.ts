import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PhpPage } from '../php/php';

/*
  Generated class for the Cursos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cursos',
  templateUrl: 'cursos.html'
})
export class CursosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  launchPhpPage(){
    this.navCtrl.push(PhpPage);
  }

}
