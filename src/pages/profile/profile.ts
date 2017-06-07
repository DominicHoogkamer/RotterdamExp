import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public actionsSheetCtrl: ActionSheetController) {

  }

  tradeCoupon() {
    let actionSheet = this.actionsSheetCtrl.create({
      title: 'Trade your stars for a coupon',
      buttons: [
        {
          text: 'Restaurant ...',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Restaurant ...',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }


}
