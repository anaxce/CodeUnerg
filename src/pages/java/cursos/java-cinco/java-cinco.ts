import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JavaCincoParteUnoPage } from './java-cinco-parte-uno/java-cinco-parte-uno';


/**
 * Generated class for the JavaCincoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-java-cinco',
  templateUrl: 'java-cinco.html',
})
export class JavaCincoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JavaCincoPage');
  }

      launchJavaCincoParteUnoPage(){
    this.navCtrl.push(JavaCincoParteUnoPage);

  }


}
