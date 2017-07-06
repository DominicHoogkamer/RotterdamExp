import { Globals } from './../../app/global';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-markerdetail-local',
  templateUrl: 'markerdetail-local.html',
})
export class MarkerdetailLocalPage {

  private title: String = '';
  private desc: String = '';
  private img: String = '';


  private myRating: number = 2;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public globals: Globals, public toastCtrl: ToastController) {
    console.log(navParams.get('markerData'));
    this.title = this.navParams.get('markerData').title;
    this.desc = this.navParams.get('markerData').description;
    this.img = this.navParams.get('markerData').imgUrl;


  }

  closeModal() {
  this.viewCtrl.dismiss();
}

  buyTicket() {
    let ticketTitle = this.navParams.get('markerData').title;

    if (this.globals.ticketArray.indexOf(ticketTitle) !== -1){
            let toast = this.toastCtrl.create({
        message: `Uw heeft al een ticket gekocht bekijk de profiel pagina`,
        duration: 4000,
        position: 'bottom'
      });
      toast.present();
    } else {
      let toast = this.toastCtrl.create({
        message: `Bedankt voor het kopen van een ticket voor ${ this.navParams.get('markerData').title}. Uw Ticket is te vinden op de profiel pagina.`,
        duration: 4000,
        position: 'bottom'
      });
      toast.present();
        this.globals.ticketArray.push(ticketTitle);
    }

  }

  getLocation(){
    let lat = this.navParams.get('markerData').lat;
    let lng = this.navParams.get('markerData').lng;
    this.title = this.navParams.get('markerData').title;
    this.viewCtrl.dismiss({ 'lat': lat, 'lng': lng, 'title': this.title });
  }


}
