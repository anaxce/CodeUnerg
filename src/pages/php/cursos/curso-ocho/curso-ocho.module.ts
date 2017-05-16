import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CursoOchoPage } from './curso-ocho';

@NgModule({
  declarations: [
    CursoOchoPage,
  ],
  imports: [
    IonicPageModule.forChild(CursoOchoPage),
  ],
  exports: [
    CursoOchoPage
  ]
})
export class CursoOchoPageModule {}
