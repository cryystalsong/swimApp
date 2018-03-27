import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ResultsPage} from "../results/results";
import {NgForm} from "@angular/forms"; //delete this!!!
/**
 * Generated class for the GuestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-guest',
  templateUrl: 'guest.html',
})
export class GuestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuestPage');
  }

  maxmin() {

  }

  conferenceDate = '';
  clubSelect = '';
  awardsSelect = '';
  submitted = false;
  stroke = {strStroke:''}
  onStrokeSubmit(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      console.log('Stroke submitted is: ' + this.clubName);
      console.log('Date is: ' + this.clubSelect);
      console.log('Date is: ' + this.awardsSelect);

      // this.navCtrl.push(ResultsPage);
    }
  }
}


