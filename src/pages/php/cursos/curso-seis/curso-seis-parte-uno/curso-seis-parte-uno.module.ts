import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CursoSeisParteUnoPage } from './curso-seis-parte-uno';

@NgModule({
  declarations: [
    CursoSeisParteUnoPage,
  ],
  imports: [
    IonicPageModule.forChild(CursoSeisParteUnoPage),
  ],
  exports: [
    CursoSeisParteUnoPage
  ]
})
export class CursoSeisParteUnoPageModule {}
