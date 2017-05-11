import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CursoTresParteCuatroPage } from '../curso-tres-parte-cuatro/curso-tres-parte-cuatro';


/*
  Generated class for the CursoTresParteTres page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-curso-tres-parte-tres',
  templateUrl: 'curso-tres-parte-tres.html'
})
export class CursoTresParteTresPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CursoTresParteTresPage');
  }

     launchCursoTresParteCuatroPage(){
    this.navCtrl.push(CursoTresParteCuatroPage);

  }

}
