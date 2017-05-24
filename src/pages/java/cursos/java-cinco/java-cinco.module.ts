import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JavaCincoPage } from './java-cinco';

@NgModule({
  declarations: [
    JavaCincoPage,
  ],
  imports: [
    IonicPageModule.forChild(JavaCincoPage),
  ],
  exports: [
    JavaCincoPage
  ]
})
export class JavaCincoPageModule {}
