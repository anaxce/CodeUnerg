import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CursoSieteParteUnoPage } from './curso-siete-parte-uno/curso-siete-parte-uno';


/**
 * Generated class for the CursoSeisPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-curso-siete',
  templateUrl: 'curso-siete.html',
})
export class CursoSietePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CursoSietePage');
  }

      launchCursoSieteParteUnoPage(){
    this.navCtrl.push(CursoSieteParteUnoPage);

  }

}
