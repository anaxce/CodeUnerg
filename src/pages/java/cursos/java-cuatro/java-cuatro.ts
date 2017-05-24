import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JavaCuatroParteUnoPage } from './java-cuatro-parte-uno/java-cuatro-parte-uno';


/**
 * Generated class for the JavaCuatroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-java-cuatro',
  templateUrl: 'java-cuatro.html',
})
export class JavaCuatroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JavaCuatroPage');
  }

      launchJavaCuatroParteUnoPage(){
    this.navCtrl.push(JavaCuatroParteUnoPage);

  }


}
