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

  constructor(public alertCtrl: AlertController, public navCtrl: NavController) { }

  

 doRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Respuesta');

    alert.addInput({
      type: 'radio',
      label: 'print "Hola Mundo"; ',
      value: 'A',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'echo "Hola Mundo"; ',
      value: 'B'
    });

    alert.addInput({
      type: 'radio',
      label: 'console.log "Hola Mundo": ',
      value: 'C'
    });

    alert.addInput({
      type: 'radio',
      label: 'Imprimir "Hola Mundo"; ',
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
            title: 'Respuesta Incorrecta :(',
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

 launchCursoUnoParteDosPage(){
    this.navCtrl.push(CursoUnoParteDosPage);
   

}

}
