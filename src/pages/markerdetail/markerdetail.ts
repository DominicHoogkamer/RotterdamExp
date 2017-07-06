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

  }

  presentAlertGames() {
    let alert = this.alertCtrl.create({
      title: 'Hier kan je zien hoeveel opdrachten er al zijn voltooid op deze attractie',
      subTitle: 'Je hebt 1 uit de 4 opdrachten voltooid',
      buttons: [
        {
          text: 'Cancel',
          role: 'Cancel'
        },
        {
          text: 'Dichtbij genoeg? Voltooi een opdracht!',
          handler: () => {
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
      inputs: [
        {
          type: 'radio',
          label: 'Give 1 star',
          value: '1'
        },
        {
          type: 'radio',
          label: 'Give 2 stars',
          value: '2'
        },
        {
          type: 'radio',
          label: 'Give 3 stars',
          value: '3'
        },
        {
          type: 'radio',
          label: 'Give 4 stars',
          value: '4'
        },
        {
          type: 'radio',
          label: 'Give 5 stars',
          value: '5'
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
      message: 'Bedankt voor het beoordelen van deze attractie!',
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

  getLocation() {
    let lat = this.navParams.get('markerData').lat;
    let lng = this.navParams.get('markerData').lng;
    let title = this.navParams.get('markerData').title;
    this.viewCtrl.dismiss({ 'lat': lat, 'lng': lng, 'title': title });
  }

  buyTicket() {
    let ticketTitle = this.navParams.get('markerData').title;

    if (this.globals.ticketArray.indexOf(ticketTitle) !== -1) {
      let toast = this.toastCtrl.create({
        message: `Uw heeft al een ticket gekocht bekijk de profiel pagina`,
        duration: 4000,
        position: 'bottom'
      });
      toast.present();
    } else {
      let toast = this.toastCtrl.create({
        message: `Bedankt voor het kopen van een ticket voor ${this.navParams.get('markerData').title}. Uw Ticket is te vinden op de profiel pagina.`,
        duration: 4000,
        position: 'bottom'
      });
      toast.present();
      this.globals.ticketArray.push(ticketTitle);
    }

  }


  closeModal() {
    this.viewCtrl.dismiss();
  }

}
