import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CursoOchoParteDosPage } from './curso-ocho-parte-dos';

@NgModule({
  declarations: [
    CursoOchoParteDosPage,
  ],
  imports: [
    IonicPageModule.forChild(CursoOchoParteDosPage),
  ],
  exports: [
    CursoOchoParteDosPage
  ]
})
export class CursoOchoParteDosPageModule {}
