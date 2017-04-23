import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';


/*
  Generated class for the CursoUnoParteDos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-curso-uno-parte-dos',
  templateUrl: 'curso-uno-parte-dos.html'
})
export class CursoUnoParteDosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {}

  showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Mmmm, buttered toast',
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

 showToastWithCloseButton() {
    const toast = this.toastCtrl.create({
      message: '$myName = "Nestor"; $myAge = 22;',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }

  showLongToast() {
    let toast = this.toastCtrl.create({
      message: '',
      duration: 2000,
    });
    toast.present();
  }
}