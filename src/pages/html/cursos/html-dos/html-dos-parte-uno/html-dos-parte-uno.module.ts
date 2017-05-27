import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HtmlDosParteUnoPage } from './html-dos-parte-uno';

@NgModule({
  declarations: [
    HtmlDosParteUnoPage,
  ],
  imports: [
    IonicPageModule.forChild(HtmlDosParteUnoPage),
  ],
  exports: [
    HtmlDosParteUnoPage
  ]
})
export class HtmlDosParteUnoPageModule {}
