import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JavaOchoParteDosPage } from '../java-ocho-parte-dos/java-ocho-parte-dos';


/**
 * Generated class for the JavaOchoParteUnoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-java-ocho-parte-uno',
  templateUrl: 'java-ocho-parte-uno.html',
})
export class JavaOchoParteUnoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JavaOchoParteUnoPage');
  }

        launchJavaOchoParteDosPage(){
    this.navCtrl.push(JavaOchoParteDosPage);

  }

}
