import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { TabsPage } from '../pages/tabs/tabs';
import { CursosPage } from '../pages/cursos/cursos';
import { AbsoluteDrag } from '../components/absolute-drag/absolute-drag';

//Cursos de PHP
import { BienvenidoPhpPage } from '../pages/php/cursos/bienvenido-php/bienvenido-php';
import { PhpPage } from '../pages/php/php';
import { CursoUnoPage } from '../pages/php/cursos/curso-uno/curso-uno';
import { CursoUnoParteUnoPage } from '../pages/php/cursos/curso-uno/curso-uno-parte-uno/curso-uno-parte-uno';
import { CursoUnoParteDosPage } from '../pages/php/cursos/curso-uno/curso-uno-parte-dos/curso-uno-parte-dos';
import { CursoDosPage } from '../pages/php/cursos/curso-dos/curso-dos';
import { CursoDosParteUnoPage } from '../pages/php/cursos/curso-dos/curso-dos-parte-uno/curso-dos-parte-uno';
import { CursoDosParteDosPage } from '../pages/php/cursos/curso-dos/curso-dos-parte-dos/curso-dos-parte-dos';
import { CursoDosParteTresPage } from '../pages/php/cursos/curso-dos/curso-dos-parte-tres/curso-dos-parte-tres';
import { CursoTresPage } from '../pages/php/cursos/curso-tres/curso-tres';
import { CursoTresParteUnoPage } from  '../pages/php/cursos/curso-tres/curso-tres-parte-uno/curso-tres-parte-uno';
import { CursoTresParteDosPage } from  '../pages/php/cursos/curso-tres/curso-tres-parte-dos/curso-tres-parte-dos';
import { CursoTresParteTresPage } from  '../pages/php/cursos/curso-tres/curso-tres-parte-tres/curso-tres-parte-tres';
import { CursoTresParteCuatroPage } from  '../pages/php/cursos/curso-tres/curso-tres-parte-cuatro/curso-tres-parte-cuatro';
import { CursoTresParteCincoPage } from '../pages/php/cursos/curso-tres/curso-tres-parte-cinco/curso-tres-parte-cinco';
import { CursoCuatroPage} from '../pages/php/cursos/curso-cuatro/curso-cuatro';
import { CursoCuatroParteUnoPage } from '../pages/php/cursos/curso-cuatro/curso-cuatro-parte-uno/curso-cuatro-parte-uno';
import { CursoCincoPage } from '../pages/php/cursos/curso-cinco/curso-cinco';
import { CursoCincoParteUnoPage } from '../pages/php/cursos/curso-cinco/curso-cinco-parte-uno/curso-cinco-parte-uno';
import { CursoSeisPage } from '../pages/php/cursos/curso-seis/curso-seis';
import { CursoSeisParteUnoPage } from '../pages/php/cursos/curso-seis/curso-seis-parte-uno/curso-seis-parte-uno';
import { CursoSietePage } from '../pages/php/cursos/curso-siete/curso-siete';
import { CursoSieteParteUnoPage } from '../pages/php/cursos/curso-siete/curso-siete-parte-uno/curso-siete-parte-uno';
import { CursoOchoPage } from '../pages/php/cursos/curso-ocho/curso-ocho';
import { CursoOchoParteUnoPage } from  '../pages/php/cursos/curso-ocho/curso-ocho-parte-uno/curso-ocho-parte-uno';
import { CursoOchoParteDosPage } from  '../pages/php/cursos/curso-ocho/curso-ocho-parte-dos/curso-ocho-parte-dos';
import { CursoOchoParteTresPage } from  '../pages/php/cursos/curso-ocho/curso-ocho-parte-tres/curso-ocho-parte-tres';
import { CursoNuevePage } from '../pages/php/cursos/curso-nueve/curso-nueve';

//Cursos de Java
import { JavaPage } from '../pages/java/java';
import { BienvenidoJavaPage } from '../pages/java/cursos/bienvenido-java/bienvenido-java';
import { CursoJavaUnoPage } from '../pages/java/cursos/curso-java-uno/curso-java-uno';
import { JavaUnoParteUnoPage} from '../pages/java/cursos/curso-java-uno/java-uno-parte-uno/java-uno-parte-uno';
import { JavaDosPage } from '../pages/java/cursos/java-dos/java-dos';
import { JavaDosParteUnoPage } from '../pages/java/cursos/java-dos/java-dos-parte-uno/java-dos-parte-uno';
import { JavaTresPage } from '../pages/java/cursos/java-tres/java-tres';
import { JavaTresParteUnoPage } from '../pages/java/cursos/java-tres/java-tres-parte-uno/java-tres-parte-uno';
import { JavaCuatroPage } from '../pages/java/cursos/java-cuatro/java-cuatro';
import { JavaCuatroParteUnoPage } from '../pages/java/cursos/java-cuatro/java-cuatro-parte-uno/java-cuatro-parte-uno';
import { JavaCuatroParteDosPage } from '../pages/java/cursos/java-cuatro/java-cuatro-parte-dos/java-cuatro-parte-dos';
import { JavaCincoPage} from '../pages/java/cursos/java-cinco/java-cinco';
import { JavaCincoParteUnoPage } from '../pages/java/cursos/java-cinco/java-cinco-parte-uno/java-cinco-parte-uno';
import { JavaCincoParteDosPage } from '../pages/java/cursos/java-cinco/java-cinco-parte-dos/java-cinco-parte-dos';
import { JavaSeisPage} from '../pages/java/cursos/java-seis/java-seis';
import { JavaSeisParteUnoPage } from '../pages/java/cursos/java-seis/java-seis-parte-uno/java-seis-parte-uno';
import { JavaSietePage} from '../pages/java/cursos/java-siete/java-siete';
import { JavaSieteParteUnoPage } from '../pages/java/cursos/java-siete/java-siete-parte-uno/java-siete-parte-uno';
import { JavaOchoPage} from '../pages/java/cursos/java-ocho/java-ocho';
import { JavaOchoParteUnoPage } from '../pages/java/cursos/java-ocho/java-ocho-parte-uno/java-ocho-parte-uno';
import { JavaOchoParteDosPage } from '../pages/java/cursos/java-ocho/java-ocho-parte-dos/java-ocho-parte-dos';

//Cursos de Python
import { PythonPage } from '../pages/python/python';

//Cursos de Html
import { HtmlPage } from '../pages/html/html';

//Cursos de css
import { CssPage } from '../pages/css/css';

//Cursos de Javascript
import { JavascriptPage} from '../pages/javascript/javascript';

import { NoticiasPage } from '../pages/noticias/noticias';
import { RepositorioPage } from '../pages/repositorio/repositorio';
import { ComunidadPage } from '../pages/comunidad/comunidad';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import {CloudSettings, CloudModule} from '@ionic/cloud-angular';


import { TutorialPage } from '../pages/tutorial/tutorial';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '2406c664'
  }
};

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    TabsPage,
    CursosPage,
    AbsoluteDrag,
    TutorialPage,
    
    // Cursos de PhP
    PhpPage,
    BienvenidoPhpPage,
    CursoUnoPage,
    CursoUnoParteUnoPage,
    CursoUnoParteDosPage,
    CursoDosPage,
    CursoDosParteUnoPage,
    CursoDosParteDosPage,
    CursoDosParteTresPage,
    CursoTresPage,
    CursoTresParteUnoPage,
    CursoTresParteDosPage,
    CursoTresParteTresPage,
    CursoTresParteCuatroPage,
    CursoTresParteCincoPage,
    CursoCuatroPage,
    CursoCuatroParteUnoPage,
    CursoCincoPage,
    CursoCincoParteUnoPage,
    CursoSeisPage,
    CursoSeisParteUnoPage,
    CursoSietePage,
    CursoSieteParteUnoPage,
    CursoOchoPage,
    CursoOchoParteUnoPage,
    CursoOchoParteDosPage,
    CursoOchoParteTresPage,
    CursoNuevePage,
    
    

    // Cursos de Java
    JavaPage,
    BienvenidoJavaPage,
    CursoJavaUnoPage,
    JavaUnoParteUnoPage,
    JavaDosPage,
    JavaDosParteUnoPage,
    JavaTresPage,
    JavaTresParteUnoPage,
    JavaCuatroPage,
    JavaCuatroParteUnoPage,
    JavaCuatroParteDosPage,
    JavaCincoPage,
    JavaCincoParteUnoPage,
    JavaCincoParteDosPage,
    JavaSeisPage,
    JavaSeisParteUnoPage,
    JavaSietePage,
    JavaSieteParteUnoPage,
    JavaOchoPage,
    JavaOchoParteUnoPage,
    JavaOchoParteDosPage,


    // Cursos de Python
    PythonPage,


    // Cusos de Html
    HtmlPage,


    // Cursos de Css
    CssPage,


    // Cursos de Javascript
    JavascriptPage,



    NoticiasPage,
    RepositorioPage,
    ComunidadPage,
    SignupPage,
    LoginPage,
    ResetPasswordPage,

  ],
  imports: [
  	BrowserModule,
  	HttpModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    TabsPage,
    CursosPage,
    TutorialPage,

    //Cursos de PhP
    PhpPage,
    BienvenidoPhpPage,
    CursoUnoPage,
    CursoUnoParteUnoPage,
    CursoUnoParteDosPage,
    CursoDosPage,
    CursoDosParteUnoPage,
    CursoDosParteDosPage,
    CursoDosParteTresPage,
    CursoTresPage,
    CursoTresParteUnoPage,
    CursoTresParteDosPage,
    CursoTresParteTresPage,
    CursoTresParteCuatroPage,
    CursoTresParteCincoPage,
    CursoCuatroPage,
    CursoCuatroParteUnoPage,
    CursoCincoPage,
    CursoCincoParteUnoPage,
    CursoSeisPage,
    CursoSeisParteUnoPage,
    CursoSietePage,
    CursoSieteParteUnoPage,
    CursoOchoPage,
    CursoOchoParteUnoPage,
    CursoOchoParteDosPage,
    CursoOchoParteTresPage,
    CursoNuevePage,
    
   
    
    

    // Cursos de Java
    BienvenidoJavaPage,
    JavaPage,
    CursoJavaUnoPage,
    JavaUnoParteUnoPage,
    JavaDosPage,
    JavaDosParteUnoPage,
    JavaTresPage,
    JavaTresParteUnoPage,
    JavaCuatroPage,
    JavaCuatroParteUnoPage,
    JavaCuatroParteDosPage,
    JavaCincoPage,
    JavaCincoParteUnoPage,
    JavaCincoParteDosPage,
    JavaSeisPage,
    JavaSeisParteUnoPage,
    JavaSietePage,
    JavaSieteParteUnoPage,
    JavaOchoPage,
    JavaOchoParteUnoPage,
    JavaOchoParteDosPage,

    // Cursos de Python
    PythonPage,


    // Cusos de Html
    HtmlPage,


    // Cursos de Css
    CssPage,


    // Cursos de Javascript
    JavascriptPage,
    

    NoticiasPage,
    RepositorioPage,
    ComunidadPage,
    SignupPage,
    LoginPage,
    ResetPasswordPage,

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
