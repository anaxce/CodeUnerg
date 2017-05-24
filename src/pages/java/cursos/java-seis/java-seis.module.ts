import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JavaSeisPage } from './java-seis';

@NgModule({
  declarations: [
    JavaSeisPage,
  ],
  imports: [
    IonicPageModule.forChild(JavaSeisPage),
  ],
  exports: [
    JavaSeisPage
  ]
})
export class JavaSeisPageModule {}
