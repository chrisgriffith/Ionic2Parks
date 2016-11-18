import { Component } from '@angular/core';
import { ParkListPage } from '../park-list/park-list';
import { ParkMapPage } from '../park-map/park-map';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ParkListPage;
  tab2Root: any = ParkMapPage;

  constructor() {

  }
}
