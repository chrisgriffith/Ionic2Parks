import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ParkData } from '../../providers/park-data';

@Component({
  selector: 'page-park-list',
  templateUrl: 'park-list.html'
})
export class ParkListPage {
  parks: Array<Object> = [];
  searchQuery: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public parkData: ParkData) {


  }

  ionViewDidLoad() {
    this.parkData.getParks().then(theResult => {
      this.parks = theResult;
      console.log(this.parks)
    })
  }

  goParkDetails(theParkData) {
    console.log(theParkData);
    this.navCtrl.push("ParkDetails", { parkData: theParkData });
  }

  getParks(event) {
    // Reset items back to all of the items
    this.parkData.getParks().then(theResult => {
      this.parks = theResult;
    })
    // set queryString to the value of the searchbar
    let queryString = event.target.value;
    if (queryString !== undefined) {
      // if the value is an empty string don't filter the items
      if (queryString.trim() == '') {
        return;
      }
      this.parkData.getFilteredParks(queryString).then(theResult => {
        this.parks = theResult;
      })
    }
  }

  resetList(event) {
    // Reset items back to all of the items
    this.parkData.getParks().then(theResult => {
      this.parks = theResult;
    })
  }

  customHeaderFn(record, recordIndex, records) {
    if (recordIndex > 0) {
      if (record.name.charAt(0) !== records[recordIndex - 1].name.charAt(0)) {
        return record.name.charAt(0);
      } else {
        return null;
      }
    } else {
      return record.name.charAt(0);
    }
  }
}
