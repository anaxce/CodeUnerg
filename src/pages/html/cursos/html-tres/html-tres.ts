import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HtmlTresParteUnoPage } from './html-tres-parte-uno/html-tres-parte-uno';


/**
 * Generated class for the HtmlTresPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-html-tres',
  templateUrl: 'html-tres.html',
})
export class HtmlTresPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HtmlTresPage');
  }

       launchHtmlTresParteUnoPage(){
    this.navCtrl.push(HtmlTresParteUnoPage);

  }

}
