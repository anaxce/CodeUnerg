import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JavaTresParteUnoPage } from './java-tres-parte-uno/java-tres-parte-uno';


/**
 * Generated class for the JavaTresPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-java-tres',
  templateUrl: 'java-tres.html',
})
export class JavaTresPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JavaTresPage');
  }


     launchJavaTresParteUnoPage(){
    this.navCtrl.push(JavaTresParteUnoPage);

  }


}
