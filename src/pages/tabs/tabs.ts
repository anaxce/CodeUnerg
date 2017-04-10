import { Component } from '@angular/core';
import { NavParams} from 'ionic-angular';
import { CursosPage } from '../cursos/cursos';
import { NoticiasPage } from '../noticias/noticias';
import { RepositorioPage } from '../repositorio/repositorio';
import { ComunidadPage } from '../comunidad/comunidad';

/*
  Generated class for the Tabs tabs.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = CursosPage;
  tab2Root: any = NoticiasPage;
  tab3Root: any = RepositorioPage;
  tab4Root: any = ComunidadPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}