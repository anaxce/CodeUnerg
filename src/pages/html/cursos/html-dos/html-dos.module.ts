import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HtmlDosPage } from './html-dos';

@NgModule({
  declarations: [
    HtmlDosPage,
  ],
  imports: [
    IonicPageModule.forChild(HtmlDosPage),
  ],
  exports: [
    HtmlDosPage
  ]
})
export class HtmlDosPageModule {}
