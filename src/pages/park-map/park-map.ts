import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ParkMap page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-park-map',
  templateUrl: 'park-map.html'
})
export class ParkMapPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ParkMapPage Page');
  }

}
