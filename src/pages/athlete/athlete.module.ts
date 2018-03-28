import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Athlete } from './athlete';

@NgModule({
  declarations: [
    AthletePage,
  ],
  imports: [
    IonicPageModule.forChild(AthletePage),
  ],
})
export class AthletePageModule {}
