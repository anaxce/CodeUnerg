import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CursoTresParteUnoPage } from './curso-tres-parte-uno/curso-tres-parte-uno';


/*
  Generated class for the CursoTres page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-curso-tres',
  templateUrl: 'curso-tres.html'
})
export class CursoTresPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CursoTresPage');
  }

    launchCursoTresParteUnoPage(){
    this.navCtrl.push(CursoTresParteUnoPage);

  }

}
