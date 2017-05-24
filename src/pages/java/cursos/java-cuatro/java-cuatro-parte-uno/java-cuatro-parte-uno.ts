import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JavaCuatroParteDosPage } from '../java-cuatro-parte-dos/java-cuatro-parte-dos';

/**
 * Generated class for the JavaCuatroParteUnoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-java-cuatro-parte-uno',
  templateUrl: 'java-cuatro-parte-uno.html',
})
export class JavaCuatroParteUnoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JavaCuatroParteUnoPage');
  }

       launchJavaCuatroParteDosPage(){
    this.navCtrl.push(JavaCuatroParteDosPage);

  }

}
