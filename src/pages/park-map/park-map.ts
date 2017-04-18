import { Component } from '@angular/core';
import { Platform, NavController, NavParams } from 'ionic-angular';
import { ParkData } from '../../providers/park-data';
import { Park } from '../../interfaces/park';
import { CustomMapMarker } from './custom-marker';

@Component({
  selector: 'page-park-map',
  templateUrl: 'park-map.html'
})
export class ParkMapPage {
  map: google.maps.Map;
  parks: Array<Park> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public parkData: ParkData) {
    this.map = null;
    this.platform.ready().then(() => {
      this.initializeMap();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParkMapPage');
  }
  initializeMap() {
    let minZoomLevel = 3;
    let image = 'assets/img/nps_arrowhead.png';

    this.map = new google.maps.Map(document.getElementById('map_canvas'), {
      zoom: minZoomLevel,
      center: new google.maps.LatLng(39.833, -98.583),
      mapTypeControl: false,
      streetViewControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    this.parkData.getParks().then(theResult => {
      this.parks = theResult;
      for (let thePark of this.parks) {
        let parkPos: google.maps.LatLng = new google.maps.LatLng(thePark.lat, thePark.long);
        // let parkMarker: google.maps.Marker = new google.maps.Marker();
        let parkMarker: CustomMapMarker = new CustomMapMarker(thePark);

        parkMarker.setPosition(parkPos);
        parkMarker.setMap(this.map);
        parkMarker.setIcon(image);

        google.maps.event.addListener(parkMarker, 'click', () => {
          let selectedMarker: any = parkMarker;
          this.navCtrl.push("ParkDetails", {
            parkData: selectedMarker.parkData
          });
        });

      }
    })
  }
}
