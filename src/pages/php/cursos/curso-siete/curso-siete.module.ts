import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CursoSietePage } from './curso-siete';

@NgModule({
  declarations: [
    CursoSietePage,
  ],
  imports: [
    IonicPageModule.forChild(CursoSietePage),
  ],
  exports: [
    CursoSietePage
  ]
})
export class CursoSietePageModule {}
