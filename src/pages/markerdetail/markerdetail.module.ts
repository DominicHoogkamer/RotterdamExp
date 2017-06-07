import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarkerdetailPage } from './markerdetail';

@NgModule({
  declarations: [
    MarkerdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MarkerdetailPage),
  ],
  exports: [
    MarkerdetailPage
  ]
})
export class MarkerdetailPageModule {}
