import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/*
  Generated class for the CursoCuatroParteUno page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-curso-cinco-parte-uno',
  templateUrl: 'curso-cinco-parte-uno.html'
})
export class CursoCincoParteUnoPage {
  testRadioOpen: boolean;
  testRadioResult;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {}

   doRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Respuesta');

    alert.addInput({
      type: 'radio',
      label: 'array_pop()',
      value: 'A',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'array_shift()',
      value: 'B'
    });

    alert.addInput({
      type: 'radio',
      label: 'array_splice()',
      value: 'C'
    });

    alert.addInput({
      type: 'radio',
      label: 'array_unshift()',
      value: 'D'
    });

  

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
        if (this.testRadioResult == "D") {
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
    console.log('ionViewDidLoad CursoCincoParteUnoPage');
  }

}
