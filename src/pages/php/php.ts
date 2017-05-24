import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BienvenidoPhpPage } from './cursos/bienvenido-php/bienvenido-php';
import { CursoUnoPage } from './cursos/curso-uno/curso-uno';
import { CursoDosPage } from './cursos/curso-dos/curso-dos';
import { CursoTresPage } from './cursos/curso-tres/curso-tres';
import { CursoCuatroPage } from './cursos/curso-cuatro/curso-cuatro';
import { CursoCincoPage } from './cursos/curso-cinco/curso-cinco';
import { CursoSeisPage } from './cursos/curso-seis/curso-seis';
import { CursoSietePage } from './cursos/curso-siete/curso-siete';
import { CursoOchoPage } from './cursos/curso-ocho/curso-ocho';
import { CursoNuevePage } from './cursos/curso-nueve/curso-nueve';
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

    launchCursoCincoPage(){
    this.navCtrl.push(CursoCincoPage);

  }

     launchCursoSeisPage(){
    this.navCtrl.push(CursoSeisPage);

  }

     launchCursoSietePage(){
    this.navCtrl.push(CursoSietePage);

  }

     launchCursoOchoPage(){
    this.navCtrl.push(CursoOchoPage);

  }

      launchCursoNuevePage(){
    this.navCtrl.push(CursoNuevePage);

  }

  itemTapped(event, item) {
    this.navCtrl.push(PhpPage, {
      item: item
    });
  }
}