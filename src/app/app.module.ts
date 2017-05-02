import { NgModule, ErrorHandler } from '@angular/core';
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

    NoticiasPage,
    RepositorioPage,
    ComunidadPage,
    SignupPage,
    LoginPage,
    ResetPasswordPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    DragulaModule
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

    NoticiasPage,
    RepositorioPage,
    ComunidadPage,
    SignupPage,
    LoginPage,
    ResetPasswordPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
