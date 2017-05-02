import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/*
  Generated class for the Tutorial page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialPage');
  }

  goToSlide(){
    this.slides.slideTo(2,500);
  }

   launchTabsPage(){
    this.navCtrl.push(TabsPage);

  }

}
