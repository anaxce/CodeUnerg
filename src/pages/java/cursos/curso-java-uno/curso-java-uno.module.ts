import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CursoJavaUnoPage } from './curso-java-uno';

@NgModule({
  declarations: [
    CursoJavaUnoPage,
  ],
  imports: [
    IonicPageModule.forChild(CursoJavaUnoPage),
  ],
  exports: [
    CursoJavaUnoPage
  ]
})
export class CursoJavaUnoPageModule {}
