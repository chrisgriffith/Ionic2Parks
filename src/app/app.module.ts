import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ParkListPage } from '../pages/park-list/park-list';
import { ParkMapPage } from '../pages/park-map/park-map';
import { TabsPage } from '../pages/tabs/tabs';
import { ParkDetailsPage } from '../pages/park-details/park-details';

@NgModule({
  declarations: [
    MyApp,
    ParkListPage,
    ParkMapPage,
    TabsPage,
    ParkDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ParkListPage,
    ParkMapPage,
    TabsPage,
    ParkDetailsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
