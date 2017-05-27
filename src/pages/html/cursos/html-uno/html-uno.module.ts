import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HtmlUnoPage } from './html-uno';

@NgModule({
  declarations: [
    HtmlUnoPage,
  ],
  imports: [
    IonicPageModule.forChild(HtmlUnoPage),
  ],
  exports: [
    HtmlUnoPage
  ]
})
export class HtmlUnoPageModule {}
