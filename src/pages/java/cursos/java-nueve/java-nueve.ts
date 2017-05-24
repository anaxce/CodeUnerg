import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JavaNueveParteUnoPage } from './java-nueve-parte-uno/java-nueve-parte-uno';


/**
 * Generated class for the JavaNuevePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-java-nueve',
  templateUrl: 'java-nueve.html',
})
export class JavaNuevePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JavaNuevePage');
  }

       launchJavaNueveParteUnoPage(){
    this.navCtrl.push(JavaNueveParteUnoPage);

  }

}
