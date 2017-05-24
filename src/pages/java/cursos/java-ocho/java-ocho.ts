import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JavaOchoParteUnoPage } from './java-ocho-parte-uno/java-ocho-parte-uno';


/**
 * Generated class for the JavaOchoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-java-ocho',
  templateUrl: 'java-ocho.html',
})
export class JavaOchoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JavaOchoPage');
  }

        launchJavaOchoParteUnoPage(){
    this.navCtrl.push(JavaOchoParteUnoPage);

  }

}
