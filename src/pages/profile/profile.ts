import { Globals } from './../../app/global';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  typeCard: string = "activecoupons"
  typeTicket: string = "activetickets";
  RPamount: number;

  private ticketArray;
  private removedTicketArray;

  constructor(public actionsSheetCtrl: ActionSheetController, public globals : Globals) {
    this.RPamount = globals.rpAmount;

    this.ticketArray = globals.ticketArray;
    this.removedTicketArray = globals.RemovedTicketsArray;

  }
  

  tradeCoupon() {
    let actionSheet = this.actionsSheetCtrl.create({
      title: `Trade your ${this.globals.rpAmount} Rotterdam points for Coupons!`,
      buttons: [
        {
          text: 'Coupon RoTown 10% discount on everything',
          role: 'destructive',
          handler: () => {
            if (this.globals.ticketArray.indexOf('RoTown') !== -1){
            } else {
                this.globals.ticketArray.push('RoTown');
                this.globals.rpAmount = 0;
            }
          }
        },{
          text: 'Coupon Blijdorp get 50% off an entrance ticket',
          handler: () => {
            if (this.globals.ticketArray.indexOf('Blijdorp') !== -1){
            } else {
                this.globals.ticketArray.push('Blijdorp');
                this.RPamount = 0;
            }
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

  removeTicket(title:string) {
    let index: number = this.globals.ticketArray.indexOf(title);
    if (index !== -1) {
      this.globals.RemovedTicketsArray.push(title);
      this.globals.ticketArray.splice(index, 1);
    }
  }


}
