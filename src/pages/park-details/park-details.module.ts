import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParkDetails } from './park-details';

@NgModule({
    declarations: [
        ParkDetails,
    ],
    imports: [
        IonicPageModule.forChild(ParkDetails),
    ],
    exports: [
        ParkDetails
    ]
})

export class ParkDetailsModule { }
