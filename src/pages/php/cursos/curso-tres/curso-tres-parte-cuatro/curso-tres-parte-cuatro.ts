import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CursoTresParteCincoPage } from '../curso-tres-parte-cinco/curso-tres-parte-cinco';


/*
  Generated class for the CursoTresParteCuatro page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-curso-tres-parte-cuatro',
  templateUrl: 'curso-tres-parte-cuatro.html'
})
export class CursoTresParteCuatroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CursoTresParteCuatroPage');
  }

      launchCursoTresParteCincoPage(){
    this.navCtrl.push(CursoTresParteCincoPage);

  }

}
