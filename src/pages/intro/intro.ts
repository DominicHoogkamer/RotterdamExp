import { DataProvider } from './../../providers/data/data';
import { Camera } from '@ionic-native/camera';
import { AboutPage } from './../about/about';
import { Slides, ToastController, NavController, App } from 'ionic-angular';
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
  private profileImg:string = '';


  constructor(
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    public camera: Camera,
    private data: DataProvider,
    private app: App) {


  }


  ionViewDidLoad() {
    this.app._setDisableScroll(true);
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
      position: 'top'
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

    let userObject = [
      {
        name: this.personName,
        arriveDate: this.arriveDate,
        leaveDate: this.leaveDate,
        profileImg: this.profileImg
      }
    ] 

    this.setLocalStorage(userObject);
  }

  takeSelfie() {
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL,
      correctOrientation: true
    })
      .then(
        imageData => {
          this.profileImg = 'data:image/jpeg;base64,' + imageData;
        }
      )
      .catch(
        err => {
          console.log(err)
        }
      );
  }

  setLocalStorage(user) {
    localStorage.setItem('userObject', JSON.stringify(user));
    let string = JSON.parse(localStorage.getItem('userObject'));
    console.log(string);
  }


}
