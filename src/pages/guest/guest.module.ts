import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuestPage } from './guest';
import {AthletePage} from "../athlete/athlete";

@NgModule({
  declarations: [
    GuestPage,
    AthletePage
  ],
  imports: [
    IonicPageModule.forChild(GuestPage),
  ],
})
export class GuestPageModule {}
