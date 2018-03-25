import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ResultsPage} from "../results/results";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  displayData() : void {
    this.navCtrl.push('ResultsPage');
  }


}
