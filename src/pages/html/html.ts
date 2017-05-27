import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HtmlUnoPage } from './cursos/html-uno/html-uno';
import { HtmlDosPage } from './cursos/html-dos/html-dos';
import { HtmlTresPage } from './cursos/html-tres/html-tres';

/*
  Generated class for the Html page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-html',
  templateUrl: 'html.html'
})
export class HtmlPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HtmlPage');
  }

      launchHtmlUnoPage(){
    this.navCtrl.push(HtmlUnoPage);

  }

     launchHtmlDosPage(){
    this.navCtrl.push(HtmlDosPage);

  }

     launchHtmlTresPage(){
    this.navCtrl.push(HtmlTresPage);

  }

}
