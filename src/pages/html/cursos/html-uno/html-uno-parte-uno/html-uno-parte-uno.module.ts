import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HtmlUnoParteUnoPage } from './html-uno-parte-uno';

@NgModule({
  declarations: [
    HtmlUnoParteUnoPage,
  ],
  imports: [
    IonicPageModule.forChild(HtmlUnoParteUnoPage),
  ],
  exports: [
    HtmlUnoParteUnoPage
  ]
})
export class HtmlUnoParteUnoPageModule {}
