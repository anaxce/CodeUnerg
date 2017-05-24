import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JavaDosParteUnoPage } from './java-dos-parte-uno/java-dos-parte-uno';


/**
 * Generated class for the JavaDosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-java-dos',
  templateUrl: 'java-dos.html',
})
export class JavaDosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JavaDosPage');
  }


     launchJavaDosParteUnoPage(){
    this.navCtrl.push(JavaDosParteUnoPage);

  }

}
