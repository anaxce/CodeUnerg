import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BienvenidoPhpPage } from './cursos/bienvenido-php/bienvenido-php';
import { CursoUnoPage } from './cursos/curso-uno/curso-uno';
import { CursoDosPage } from './cursos/curso-dos/curso-dos';
import { CursoTresPage } from './cursos/curso-tres/curso-tres';
import { CursoCuatroPage } from './cursos/curso-cuatro/curso-cuatro';
@Component({
  selector: 'page-php',
  templateUrl: 'php.html'
})
export class PhpPage {
items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }

    launchBienvenidoPhpPage(){
    this.navCtrl.push(BienvenidoPhpPage);

  }

  launchCursoUnoPage(){
    this.navCtrl.push(CursoUnoPage);

  }

  launchCursoDosPage(){
    this.navCtrl.push(CursoDosPage);

  }

 launchCursoTresPage(){
    this.navCtrl.push(CursoTresPage);

  }

  launchCursoCuatroPage(){
    this.navCtrl.push(CursoCuatroPage);

  }

  itemTapped(event, item) {
    this.navCtrl.push(PhpPage, {
      item: item
    });
  }
}