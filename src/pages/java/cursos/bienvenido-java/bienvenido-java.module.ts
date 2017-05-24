import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BienvenidoJavaPage } from './bienvenido-java';

@NgModule({
  declarations: [
    BienvenidoJavaPage,
  ],
  imports: [
    IonicPageModule.forChild(BienvenidoJavaPage),
  ],
  exports: [
    BienvenidoJavaPage
  ]
})
export class BienvenidoJavaPageModule {}
