import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { CursoUnoParteDosPage } from '../curso-uno-parte-dos/curso-uno-parte-dos';
 
/*
  Generated class for the CursoUnoParteUno page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-curso-uno-parte-uno',
  templateUrl: 'curso-uno-parte-uno.html'
})
export class CursoUnoParteUnoPage {
  testRadioOpen: boolean;
  testRadioResult;

  constructor(public alerCtrl: AlertController, public navCtrl: NavController) { }

 doRadio() {
    let alert = this.alerCtrl.create();
    alert.setTitle('Respuesta');

    alert.addInput({
      type: 'radio',
      label: 'function miFuncion() ',
      value: 'function miFuncion() ',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'create function miFuncion() ',
      value: 'create function miFuncion() '
    });

    alert.addInput({
      type: 'radio',
      label: 'sub miFuncion() ',
      value: 'sub miFuncion() '
    });

    alert.addInput({
      type: 'radio',
      label: 'method miFuncion() ',
      value: 'method miFuncion() '
    });

  

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  }

 launchCursoUnoParteDosPage(){
    this.navCtrl.push(CursoUnoParteDosPage);

}

}
