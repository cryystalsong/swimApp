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

  club = {clubName: '', clubAward: false, clubCoaches: '', clubLocation: ''} // clubCoaches should be an array !!!
  submitted = false;
  onClubSubmit() {
    this.submitted = true;

    console.log('clubName submitted is: ' + this.club.clubName);
    console.log('clubAwards submitted is: ' + this.club.clubAward);
    console.log('clubCoaches submitted is: ' + this.club.clubCoaches); //!!! clubCoaches should be an array
    console.log('clubCoaches submitted is: ' + this.club.clubLocation);

    // this.navCtrl.push(ResultsPage);

  }

  athlete = {allAthletes: false, athlName: '', athlAward: false, height: ''};
  onAthleteSubmit() {
    this.submitted = true;

  }
  updateAllAthletes() {
    this.athlete.athlName = '';
    this.athlete.allAthletes = true;
  }

  updateAthleteName() {
    this.athlete.allAthletes = false;
  }
  navUpdate() {
    this.navCtrl.push("UpdatePage")
  }
}


