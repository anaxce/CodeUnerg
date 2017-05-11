import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { CursoDosParteTresPage } from '../curso-dos-parte-tres/curso-dos-parte-tres';

/*
  Generated class for the CursoDosParteDos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-curso-dos-parte-dos',
  templateUrl: 'curso-dos-parte-dos.html'
})
export class CursoDosParteDosPage {
  testRadioOpen: boolean;
  testRadioResult;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {}


 doRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Respuesta');

    alert.addInput({
      type: 'radio',
      label: '#',
      value: 'A',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: '%',
      value: 'B'
    });

    alert.addInput({
      type: 'radio',
      label: '/',
      value: 'C'
    });

    alert.addInput({
      type: 'radio',
      label: '&',
      value: 'D'
    });

  

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
        if (this.testRadioResult == "B") {
          let alert = this.alertCtrl.create({
            title: 'Respuesta Correcta',
            subTitle: '¡Bien hecho!',
            buttons: ['Continuar']
                });
                alert.present();
          
        } else {
          let alert = this.alertCtrl.create({
            title: 'Respuesta Incorrecta',
            subTitle: '¡Sigue intentando!',
            buttons: ['Continuar']
                });
              alert.present();
        }
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CursoDosParteDosPage');
  }

    launchCursoDosParteTresPage(){
    this.navCtrl.push(CursoDosParteTresPage);

  }

}
