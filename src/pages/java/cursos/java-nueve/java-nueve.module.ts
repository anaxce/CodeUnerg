import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JavaNuevePage } from './java-nueve';

@NgModule({
  declarations: [
    JavaNuevePage,
  ],
  imports: [
    IonicPageModule.forChild(JavaNuevePage),
  ],
  exports: [
    JavaNuevePage
  ]
})
export class JavaNuevePageModule {}
