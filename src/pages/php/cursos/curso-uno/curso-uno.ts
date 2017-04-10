import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { CursoUnoParteUnoPage } from './curso-uno-parte-uno/curso-uno-parte-uno';
import { DragulaService } from '../../../../../node_modules/ng2-dragula/ng2-dragula';



/*
  Generated class for the CursoUno page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-curso-uno',
  templateUrl: 'curso-uno.html',
  providers: [DragulaService]

})
export class CursoUnoPage {

  q1 = [];
  q2 = [];
  q3 = [];
  constructor(public navCtrl: NavController, private dragulaService: DragulaService, private alertCtrl: AlertController) {

    for(var i = 0; i < 1; i++){
      this.q1.push('Print');
      this.q1.push('Echo');
      this.q1.push('Console.log');
      this.q2.push('Hola Mundo');
     
   
    }

    dragulaService.drop.subscribe((value)=>{
      let prompt = this.alertCtrl.create({
        title: 'Correcto!',
        subTitle: 'Felicidades',
        buttons:['OK']
      });
      prompt.present();
    });

  }

    launchCursoUnoParteUnoPage(){
    this.navCtrl.push(CursoUnoParteUnoPage);

  }

}
