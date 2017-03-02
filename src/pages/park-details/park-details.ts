import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-park-details',
  templateUrl: 'park-details.html'
})
export class ParkDetailsPage {
  parkInfo: Object;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.parkInfo = navParams.data.parkData;
    console.log(this.parkInfo);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParkDetailsPage');
  }

}
