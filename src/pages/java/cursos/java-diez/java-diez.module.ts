import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JavaDiezPage } from './java-diez';

@NgModule({
  declarations: [
    JavaDiezPage,
  ],
  imports: [
    IonicPageModule.forChild(JavaDiezPage),
  ],
  exports: [
    JavaDiezPage
  ]
})
export class JavaDiezPageModule {}
