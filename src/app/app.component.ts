import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar, Splashscreen } from 'ionic-native';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { CursosPage } from '../pages/cursos/cursos';
import { NoticiasPage } from '../pages/noticias/noticias';
import { RepositorioPage } from '../pages/repositorio/repositorio';
import { ComunidadPage } from '../pages/comunidad/comunidad';
import { TabsPage } from '../pages/tabs/tabs';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { PhpPage } from '../pages/php/php';



export interface PageInterface{
  title: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabComponent?:any;
}

@Component({
  templateUrl: 'app.html'
  
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  

   appPages: PageInterface[] = [
    { title: 'Cursos', component: TabsPage, tabComponent: CursosPage, icon: 'code' },
    { title: 'Noticias', component: TabsPage, tabComponent: NoticiasPage, index: 1, icon: 'clipboard' },
    { title: 'Repositorio', component: TabsPage, tabComponent: RepositorioPage, index: 2, icon: 'folder' },
    { title: 'Comunidad', component: TabsPage, tabComponent: ComunidadPage, index: 3, icon: 'contacts' },
    
  ];

  cursosPages: PageInterface[] = [
      { title: 'PHP', component: PhpPage, icon: 'code'}
  ];
  // make HelloIonicPage the root (or first) page
  rootPage: any = TabsPage;
  activePage: any;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages

   

     this.pages = [

 
      { title: 'Bienvenido', component: HelloIonicPage},
      { title: 'Iniciar Sesión', component: LoginPage },
      { title: 'Registrate', component: SignupPage },
      { title: 'Informacion', component: ListPage },
      
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
    this.activePage = page;
  }

  checkActive(page){
    return page == this.activePage;
  }
}




