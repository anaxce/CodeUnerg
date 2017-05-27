import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HtmlTresPage } from './html-tres';

@NgModule({
  declarations: [
    HtmlTresPage,
  ],
  imports: [
    IonicPageModule.forChild(HtmlTresPage),
  ],
  exports: [
    HtmlTresPage
  ]
})
export class HtmlTresPageModule {}
