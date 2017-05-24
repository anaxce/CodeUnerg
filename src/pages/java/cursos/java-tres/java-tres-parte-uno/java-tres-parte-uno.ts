import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JavaCuatroParteDosPage } from '../java-cuatro-parte-dos/java-cuatro-parte-dos';


/**
 * Generated class for the JavaTresParteUnoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-java-tres-parte-uno',
  templateUrl: 'java-tres-parte-uno.html',
})
export class JavaTresParteUnoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JavaTresParteUnoPage');
  }

}
