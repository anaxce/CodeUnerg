import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JavaCincoParteDosPage } from '../java-cinco-parte-dos/java-cinco-parte-dos';


/**
 * Generated class for the JavaCincoParteUnoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-java-cinco-parte-uno',
  templateUrl: 'java-cinco-parte-uno.html',
})
export class JavaCincoParteUnoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JavaCincoParteUnoPage');
  }


       launchJavaCincoParteDosPage(){
    this.navCtrl.push(JavaCincoParteDosPage);

  }


}
