import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JavaUnoParteUnoPage } from './java-uno-parte-uno/java-uno-parte-uno';


/**
 * Generated class for the CursoJavaUnoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-curso-java-uno',
  templateUrl: 'curso-java-uno.html',
})
export class CursoJavaUnoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CursoJavaUnoPage');
  }

     launchJavaUnoParteUnoPage(){
    this.navCtrl.push(JavaUnoParteUnoPage);

  }

}
