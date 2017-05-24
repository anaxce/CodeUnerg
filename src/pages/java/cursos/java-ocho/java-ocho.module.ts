import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JavaOchoPage } from './java-ocho';

@NgModule({
  declarations: [
    JavaOchoPage,
  ],
  imports: [
    IonicPageModule.forChild(JavaOchoPage),
  ],
  exports: [
    JavaOchoPage
  ]
})
export class JavaOchoPageModule {}
