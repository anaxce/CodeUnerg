import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BienvenidoPhpPage } from './cursos/bienvenido-php/bienvenido-php';
import { CursoUnoPage } from './cursos/curso-uno/curso-uno';
import { CursoDosPage } from './cursos/curso-dos/curso-dos';
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

  itemTapped(event, item) {
    this.navCtrl.push(PhpPage, {
      item: item
    });
  }
}