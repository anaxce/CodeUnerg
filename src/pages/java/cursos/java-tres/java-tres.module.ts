import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JavaTresPage } from './java-tres';

@NgModule({
  declarations: [
    JavaTresPage,
  ],
  imports: [
    IonicPageModule.forChild(JavaTresPage),
  ],
  exports: [
    JavaTresPage
  ]
})
export class JavaTresPageModule {}
