import { Globals } from './../../app/global';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-markerdetail-local',
  templateUrl: 'markerdetail-local.html',
})
export class MarkerdetailLocalPage {

  private title: String = '';
  private desc: String = '';
  private img: String = '';


  private myRating: number = 2;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public globals: Globals) {
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
    } else {
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
