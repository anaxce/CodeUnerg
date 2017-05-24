import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JavaSietePage } from './java-siete';

@NgModule({
  declarations: [
    JavaSietePage,
  ],
  imports: [
    IonicPageModule.forChild(JavaSietePage),
  ],
  exports: [
    JavaSietePage
  ]
})
export class JavaSietePageModule {}
