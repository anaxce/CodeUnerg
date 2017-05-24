import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JavaSieteParteUnoPage } from './java-siete-parte-uno/java-siete-parte-uno';


/**
 * Generated class for the JavaSietePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-java-siete',
  templateUrl: 'java-siete.html',
})
export class JavaSietePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JavaSietePage');
  }

       launchJavaSieteParteUnoPage(){
    this.navCtrl.push(JavaSieteParteUnoPage);

  }

}
