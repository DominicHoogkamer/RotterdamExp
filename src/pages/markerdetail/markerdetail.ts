import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { IonicPage, NavController, NavParams, ViewController, AlertController, ToastController } from 'ionic-angular';


@Component({
  selector: 'page-markerdetail',
  templateUrl: 'markerdetail.html',
})
export class MarkerdetailPage {

  private myRating: number;
  imageUrl: string = '';

  constructor(
    public viewCtrl: ViewController, 
    public alertCtrl: AlertController, 
    public params: NavParams,
    public toastCtrl: ToastController,
    public camera: Camera) {

  }

  presentAlertGames(){
    let alert = this.alertCtrl.create({
      title: 'Here you can see how much quests you completed of this area',
      subTitle: 'You have completed 1 out of 4 games in this area',
      buttons: [
        {
          text: 'Cancel',
          role: 'Cancel'
        },
        {
          text: 'Go play the games!',
          handler: () => {
            console.log('go to ar page')
          }
        }
      ]
    });
    alert.present();
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'What would you rate this attraction?',
      subTitle: 'So we can get a better understanding of what is good for you',
      inputs : [
      {
        type:'radio',
        label:'Give 1 star',
        value:'1'
      },
      {
        type:'radio',
        label:'Give 2 stars',
        value:'2'
      },
      {
        type:'radio',
        label:'Give 3 stars',
        value:'3'
      },
      {
        type:'radio',
        label:'Give 4 stars',
        value:'4'
      },
      {
        type:'radio',
        label:'Give 5 stars',
        value:'5'
      }       

      ],
      buttons: [
      {
        text: "Cancel",
        handler: data => {
          this.myRating = 0;
        }
      },
      {
        text: "Search",
        handler: data => {
          this.myRating = data;
          this.presentToast();
        }
      }
      ]
    });
    alert.present();
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Thanks for rating this attraction',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  onTakePhoto() {
    this.camera.getPicture({
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true
    })
      .then(
        imageData => {
          this.imageUrl = 'ImageData';
        }
      )
      .catch(
        err => {
          console.log(err)
        }
      );
  }


  closeModal() {
    this.viewCtrl.dismiss();
  }

}
