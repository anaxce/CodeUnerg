import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JavaDosParteUnoPage } from './java-dos-parte-uno';

@NgModule({
  declarations: [
    JavaDosParteUnoPage,
  ],
  imports: [
    IonicPageModule.forChild(JavaDosParteUnoPage),
  ],
  exports: [
    JavaDosParteUnoPage
  ]
})
export class JavaDosParteUnoPageModule {}
