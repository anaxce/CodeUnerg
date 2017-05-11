import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PhpPage } from '../php/php';
import { JavaPage } from '../java/java';
import { PythonPage } from '../python/python';
import { HtmlPage } from '../html/html';
import { CssPage } from '../css/css';
import { JavascriptPage } from '../javascript/javascript';

/*
  Generated class for the Cursos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cursos',
  templateUrl: 'cursos.html'
})
export class CursosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  launchPhpPage(){
    this.navCtrl.push(PhpPage);
  }

  launchJavaPage(){
    this.navCtrl.push(JavaPage);
  }

   launchPythonPage(){
    this.navCtrl.push(PythonPage);
  }

   launchHtmlPage(){
    this.navCtrl.push(HtmlPage);
  }

   launchCssPage(){
    this.navCtrl.push(CssPage);
  }

   launchJavascriptPage(){
    this.navCtrl.push(JavascriptPage);
  }

}
