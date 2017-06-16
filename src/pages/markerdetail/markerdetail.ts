import { Globals } from './../../app/global';
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
  private dataArray;

  constructor(
    public viewCtrl: ViewController, 
    public alertCtrl: AlertController, 
    public params: NavParams,
    public toastCtrl: ToastController,
    public camera: Camera,
    public navParams: NavParams,
    public globals: Globals) {

      this.dataArray = navParams.get('markerData');
      console.log(this.dataArray);

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
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL,
      correctOrientation: true
    })
      .then(
        imageData => {
          this.imageUrl = 'data:image/jpeg;base64,' + imageData;
        }
      )
      .catch(
        err => {
          console.log(err)
        }
      );
  }

  getLocation(){
    let lat = this.navParams.get('markerData').lat;
    let lng = this.navParams.get('markerData').lng;
    let title = this.navParams.get('markerData').title;
    this.viewCtrl.dismiss({ 'lat': lat, 'lng': lng, 'title': title });
  }

  buyTicket() {
    let ticketTitle = this.navParams.get('markerData').title;

    if (this.globals.ticketArray.indexOf(ticketTitle) !== -1){
    } else {
        this.globals.ticketArray.push(ticketTitle);
    }

  }


  closeModal() {
    this.viewCtrl.dismiss();
  }

}
