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

//Cursos de Java
import { JavaPage } from '../pages/java/java';

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
import { DragulaModule } from '../../node_modules/ng2-dragula/ng2-dragula';


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
    

    // Cursos de Java
    JavaPage,


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
    CloudModule.forRoot(cloudSettings),
    DragulaModule,
    
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

    // Cursos de Java
    JavaPage,

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
