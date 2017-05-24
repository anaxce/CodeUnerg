import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JavaSeisParteUnoPage } from './java-seis-parte-uno';

@NgModule({
  declarations: [
    JavaSeisParteUnoPage,
  ],
  imports: [
    IonicPageModule.forChild(JavaSeisParteUnoPage),
  ],
  exports: [
    JavaSeisParteUnoPage
  ]
})
export class JavaSeisParteUnoPageModule {}
