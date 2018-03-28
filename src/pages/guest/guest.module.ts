import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuestPage } from './guest';
// import {AdminPage} from "../admin/admin";
// import {AthletePage} from "../athlete/athlete";

@NgModule({
  declarations: [
    GuestPage
  ],
  imports: [
    IonicPageModule.forChild(GuestPage),
  ],

})
export class GuestPageModule {}
