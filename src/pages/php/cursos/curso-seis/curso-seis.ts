import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CursoSeisParteUnoPage } from './curso-seis-parte-uno/curso-seis-parte-uno';


/**
 * Generated class for the CursoSeisPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-curso-seis',
  templateUrl: 'curso-seis.html',
})
export class CursoSeisPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CursoSeisPage');
  }

      launchCursoSeisParteUnoPage(){
    this.navCtrl.push(CursoSeisParteUnoPage);

  }

}
