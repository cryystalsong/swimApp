import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ResultsPage} from "../results/results";
import {GuestPage} from "../guest/guest";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  routeGuest() : void {
    this.navCtrl.push('GuestPage', {id: "guest"});
  }

  routeAdmin() : void {
    this.navCtrl.push('AdminPage');
  }

  displayData() : void {
    this.navCtrl.push('ResultsPage');
  }


}
