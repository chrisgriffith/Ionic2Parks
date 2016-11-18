import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ParkList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-park-list',
  templateUrl: 'park-list.html'
})
export class ParkListPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ParkListPage Page');
  }

}
