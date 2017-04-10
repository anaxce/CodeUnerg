import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CursoUnoPage} from '../curso-uno/curso-uno';
/*
  Generated class for the BienvenidoPhp page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bienvenido-php',
  templateUrl: 'bienvenido-php.html'
})
export class BienvenidoPhpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

   launchCursoUnoPage(){
    this.navCtrl.push(CursoUnoPage);

  }

}
