import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CursoSeisParteDosPage } from './curso-seis-parte-dos';

@NgModule({
  declarations: [
    CursoSeisParteDosPage,
  ],
  imports: [
    IonicPageModule.forChild(CursoSeisParteDosPage),
  ],
  exports: [
    CursoSeisParteDosPage
  ]
})
export class CursoSeisParteDosPageModule {}
