import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JavaSeisParteUnoPage } from './java-seis-parte-uno/java-seis-parte-uno';


/**
 * Generated class for the JavaSeisPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-java-seis',
  templateUrl: 'java-seis.html',
})
export class JavaSeisPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JavaSeisPage');
  }

      launchJavaSeisParteUnoPage(){
    this.navCtrl.push(JavaSeisParteUnoPage);

  }

}
