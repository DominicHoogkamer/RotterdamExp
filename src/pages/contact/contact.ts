import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions } from '@ionic-native/camera-preview';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  private showGame: boolean = false;
  private showGameSecond: boolean = false;
  private showGameThird: boolean = false;
  private infoScreen: boolean = false;
  private questScreen: boolean = false;

  private cameraPreviewOpts: CameraPreviewOptions = {
    x: 0,
    y: 0,
    width: window.screen.width,
    height: window.screen.height,
    camera: 'rear',
    tapPhoto: true,
    previewDrag: true,
    toBack: true,
    alpha: 1
  };

  constructor(public navCtrl: NavController, private cameraPreview: CameraPreview, public viewCtrl: ViewController) {
    this.cameraPreview.startCamera(this.cameraPreviewOpts).then(
      (res) => {
        console.log(res)
      },
      (err) => {
        console.log(err)
      });


  }

  ionViewWillEnter(){
      let cameraTransparent = document.querySelectorAll('ion-app, ion-content');
      for(let i = 0; i < cameraTransparent.length; i++) {
        cameraTransparent[i].classList.add('transparent');
      }
  }

  ionViewWillLeave(){
      let cameraTransparent = document.querySelectorAll('ion-app, ion-content');
      for(let i = 0; i < cameraTransparent.length; i++) {
        cameraTransparent[i].classList.remove('transparent');
      }
      
  }

openInfoScreen() {
  if(this.infoScreen != true) {
    this.infoScreen = true
    this.showGame = false
  } else {
    this.infoScreen = false
  }
}

openQuest() {
 if(this.questScreen != true) {
   this.questScreen = true
   this.infoScreen = false
   this.showGame = false
 } else {
   this.questScreen = false
 }
}

openGame() {
  if(this.showGame == true || this.showGameSecond == true || this.showGameThird == true){
    this.showGame = false;
    this.showGameSecond = false;
    this.showGameThird = false;
  } else {
    this.showGame = true;
    this.infoScreen = false;
  }
}

openGameSecond() {
  this.showGame = false;
  this.showGameSecond = true;
}

openGameThird() {
  this.showGameSecond = false;
  this.showGameThird = true;
}

stopCamera() {
  this.cameraPreview.stopCamera();
  this.viewCtrl.dismiss();
}

}
