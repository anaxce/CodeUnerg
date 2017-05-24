import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CursoNuevePage } from './curso-nueve';

@NgModule({
  declarations: [
    CursoNuevePage,
  ],
  imports: [
    IonicPageModule.forChild(CursoNuevePage),
  ],
  exports: [
    CursoNuevePage
  ]
})
export class CursoNuevePageModule {}
