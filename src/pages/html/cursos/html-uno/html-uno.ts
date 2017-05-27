import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HtmlUnoParteUnoPage } from './html-uno-parte-uno/html-uno-parte-uno';


/**
 * Generated class for the HtmlUnoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-html-uno',
  templateUrl: 'html-uno.html',
})
export class HtmlUnoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HtmlUnoPage');
  }

       launchHtmlUnoParteUnoPage(){
    this.navCtrl.push(HtmlUnoParteUnoPage);

  }

}
