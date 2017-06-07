import { AboutPage } from './../about/about';
import { Slides, ToastController, NavController } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {
  @ViewChild(Slides) slides: Slides;

  private personName:string = '';
  private arriveDate:string = '';
  private leaveDate:string= '';


  constructor(
    private toastCtrl: ToastController,
    private navCtrl: NavController) {
  }


  ionViewDidLoad() {
    this.slides.lockSwipes(true);

    let tabBar = document.querySelector('.tabbar');
    tabBar.classList.add('hide-tabs');
  }


  nextPage() {

    let message = '';
    let index = this.slides.getActiveIndex();
    console.log(index);
    
    switch (index) {
      case 0:
        message = 'Vetrek' + ' ' + this.arriveDate      
      case 2:
        message = 'Bedankt' + ' ' + this.personName + 'Voor het invullen'
    }

    const toast = this.toastCtrl.create({
      message: message,
      duration: 1500,
      position: 'bottom'
    });
    toast.present();    

    this.slides.lockSwipes(false);
    this.slides.slideNext()
    this.slides.lockSwipes(true);
  }

  finishIntro() {
    let tabBar = document.querySelector('.tabbar');
    tabBar.classList.remove('hide-tabs');


    this.navCtrl.setRoot(AboutPage);
    console.log([
      {
        name: this.personName,
        arrivedate: this.arriveDate,
        leavedate: this.leaveDate
      }
    ]);
  }


}
