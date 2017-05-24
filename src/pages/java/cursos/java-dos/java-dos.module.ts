import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JavaDosPage } from './java-dos';

@NgModule({
  declarations: [
    JavaDosPage,
  ],
  imports: [
    IonicPageModule.forChild(JavaDosPage),
  ],
  exports: [
    JavaDosPage
  ]
})
export class JavaDosPageModule {}
