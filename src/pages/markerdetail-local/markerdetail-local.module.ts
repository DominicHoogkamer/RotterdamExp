import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarkerdetailLocalPage } from './markerdetail-local';

@NgModule({
  declarations: [
    MarkerdetailLocalPage,
  ],
  imports: [
    IonicPageModule.forChild(MarkerdetailLocalPage),
  ],
  exports: [
    MarkerdetailLocalPage
  ]
})
export class MarkerdetailLocalPageModule {}
