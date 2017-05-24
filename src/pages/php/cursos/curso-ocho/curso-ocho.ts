import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CursoOchoParteUnoPage } from './curso-ocho-parte-uno/curso-ocho-parte-uno';


/**
 * Generated class for the CursoOchoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-curso-ocho',
  templateUrl: 'curso-ocho.html',
})
export class CursoOchoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CursoOchoPage');
  }


    launchCursoOchoParteUnoPage(){
    this.navCtrl.push(CursoOchoParteUnoPage);

  }

}
