import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { CursoUnoParteUnoPage } from './curso-uno-parte-uno/curso-uno-parte-uno';



/*
  Generated class for the CursoUno page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-curso-uno',
  templateUrl: 'curso-uno.html'

})
export class CursoUnoPage {

  q1 = [];
  q2 = [];
  q3 = [];
  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

    for(var i = 0; i < 1; i++){
      this.q1.push('Print');
      this.q1.push('Echo');
      this.q1.push('Console.log');
      this.q2.push('Hola Mundo');
     
   
    }


  }

    launchCursoUnoParteUnoPage(){
    this.navCtrl.push(CursoUnoParteUnoPage);

  }

}
