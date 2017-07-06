import { Globals } from './../../app/global';
import { Component } from '@angular/core';
import { ActionSheetController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  typeCard: string = "activecoupons"
  typeTicket: string = "activetickets";
  RPamount: number;
  username: string;
  country: string;
  arriveDate: string;
  leaveData: string;
  avatar: any = 'https://s-media-cache-ak0.pinimg.com/originals/b1/bb/ec/b1bbec499a0d66e5403480e8cda1bcbe.png';

  private ticketArray;
  private removedTicketArray;

  private couponArray;
  private removedCoupons;

  constructor(public actionsSheetCtrl: ActionSheetController, public globals: Globals, public alertCtrl: AlertController) {
    this.RPamount = globals.rpAmount;

    this.ticketArray = globals.ticketArray;
    this.removedTicketArray = globals.RemovedTicketsArray;

    this.couponArray = globals.couponArray;
    this.removedCoupons = globals.RemovedCouponsArray;

    if (localStorage.getItem('userObject')) {
      let data = JSON.parse(localStorage.getItem('userObject'));

      this.username = data[0].name;
      this.country = data[0].country.name;
      this.arriveDate = data[0].arriveDate;
      this.leaveData = data[0].leaveDate;
      if (!data[0].profileImg == null) {
        this.avatar = data[0].profileImg;
      }
    }


  }

  getCoupon(){
        let alert = this.alertCtrl.create({
      title: '12asdjansd913',
      subTitle: 'Show this code at the counter',
      buttons: [
        {
          text: 'Go back',
          handler: () => {
            console.log('go to ar page')
          }
        }
      ]
    });
    alert.present();
  }


  tradeCoupon() {
    let actionSheet = this.actionsSheetCtrl.create({
      title: `Trade your ${this.globals.rpAmount} Rotterdam points for Coupons!`,
      buttons: [
        {
          text: 'Coupon RoTown 10% discount on everything',
          role: 'destructive',
          handler: () => {
            if (this.globals.couponArray.indexOf('RoTown') !== -1) {
            } else {
              this.globals.couponArray.push('RoTown');
              this.globals.rpAmount = 0;
            }
          }
        }, {
          text: 'Coupon Blijdorp get 50% off an entrance ticket',
          handler: () => {
            if (this.globals.couponArray.indexOf('Blijdorp') !== -1) {
            } else {
              this.globals.couponArray.push('Blijdorp');
              this.RPamount = 0;
            }
          }
        }, {
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

  removeTicket(title: string) {
    let index: number = this.globals.ticketArray.indexOf(title);
    if (index !== -1) {
      this.globals.RemovedTicketsArray.push(title);
      this.globals.ticketArray.splice(index, 1);
    }
  }

  removeCoupon(title: string) {
    let index: number = this.globals.couponArray.indexOf(title);
    if (index !== -1) {
      this.globals.RemovedCouponsArray.push(title);
      this.globals.couponArray.splice(index, 1);
    }
  }


}
