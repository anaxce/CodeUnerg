import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BienvenidoJavaPage } from './cursos/bienvenido-java/bienvenido-java';
import { CursoJavaUnoPage } from './cursos/curso-java-uno/curso-java-uno';
import { JavaDosPage } from './cursos/java-dos/java-dos';
import { JavaTresPage } from './cursos/java-tres/java-tres';
import { JavaCuatroPage } from './cursos/java-cuatro/java-cuatro';
import { JavaCincoPage } from './cursos/java-cinco/java-cinco';
import { JavaSeisPage } from './cursos/java-seis/java-seis';
import { JavaSietePage } from './cursos/java-siete/java-siete';
import { JavaOchoPage } from './cursos/java-ocho/java-ocho';
import { JavaNuevePage } from './cursos/java-nueve/java-nueve';

 





/*
  Generated class for the Java page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-java',
  templateUrl: 'java.html'
})
export class JavaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad JavaPage');
  }

     launchBienvenidoJavaPage(){
    this.navCtrl.push(BienvenidoJavaPage);

  }

       launchCursoJavaUnoPage(){
    this.navCtrl.push(CursoJavaUnoPage);

  }

     launchJavaDosPage(){
    this.navCtrl.push(JavaDosPage);

  }

       launchJavaTresPage(){
    this.navCtrl.push(JavaTresPage);

  }

         launchJavaCuatroPage(){
    this.navCtrl.push(JavaCuatroPage);

  }

        launchJavaCincoPage(){
    this.navCtrl.push(JavaCincoPage);

  }

       launchJavaSeisPage(){
    this.navCtrl.push(JavaSeisPage);

  }

         launchJavaSietePage(){
    this.navCtrl.push(JavaSietePage);

  }

          launchJavaOchoPage(){
    this.navCtrl.push(JavaOchoPage);

  }

      launchJavaNuevePage(){
    this.navCtrl.push(JavaNuevePage);

  }

}
