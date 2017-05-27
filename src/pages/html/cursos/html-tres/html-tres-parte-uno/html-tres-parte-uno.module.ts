import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HtmlTresParteUnoPage } from './html-tres-parte-uno';

@NgModule({
  declarations: [
    HtmlTresParteUnoPage,
  ],
  imports: [
    IonicPageModule.forChild(HtmlTresParteUnoPage),
  ],
  exports: [
    HtmlTresParteUnoPage
  ]
})
export class HtmlTresParteUnoPageModule {}
