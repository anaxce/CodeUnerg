import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JavaNueveParteDosPage } from '../java-nueve-parte-dos/java-nueve-parte-dos';


/**
 * Generated class for the JavaNueveParteUnoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-java-nueve-parte-uno',
  templateUrl: 'java-nueve-parte-uno.html',
})
export class JavaNueveParteUnoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JavaNueveParteUnoPage');
  }

      launchJavaNueveParteDosPage(){
    this.navCtrl.push(JavaNueveParteDosPage);

  }

}
