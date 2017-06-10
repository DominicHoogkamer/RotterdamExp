import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-markerdetail-local',
  templateUrl: 'markerdetail-local.html',
})
export class MarkerdetailLocalPage {

  private myRating: number = 2;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    console.log(navParams.get('markerData'));
  }

  closeModal() {
  this.viewCtrl.dismiss();
  }


}
