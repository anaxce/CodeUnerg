import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CursoOchoParteUnoPage } from './curso-ocho-parte-uno';

@NgModule({
  declarations: [
    CursoOchoParteUnoPage,
  ],
  imports: [
    IonicPageModule.forChild(CursoOchoParteUnoPage),
  ],
  exports: [
    CursoOchoParteUnoPage
  ]
})
export class CursoOchoParteUnoPageModule {}
