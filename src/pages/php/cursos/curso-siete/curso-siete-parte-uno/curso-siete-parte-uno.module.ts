import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CursoSieteParteUnoPage } from './curso-siete-parte-uno';

@NgModule({
  declarations: [
    CursoSieteParteUnoPage,
  ],
  imports: [
    IonicPageModule.forChild(CursoSieteParteUnoPage),
  ],
  exports: [
    CursoSieteParteUnoPage
  ]
})
export class CursoSieteParteUnoPageModule {}
