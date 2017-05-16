import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CursoSeisPage } from './curso-seis';

@NgModule({
  declarations: [
    CursoSeisPage,
  ],
  imports: [
    IonicPageModule.forChild(CursoSeisPage),
  ],
  exports: [
    CursoSeisPage
  ]
})
export class CursoSeisPageModule {}
