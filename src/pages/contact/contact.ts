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

openGame() {
  if(this.showGame == true || this.showGameSecond == true || this.showGameThird == true){
    this.showGame = false;
    this.showGameSecond = false;
    this.showGameThird = false;
  } else {
    this.showGame = true;
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
