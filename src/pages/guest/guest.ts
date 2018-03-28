import { Component } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
// import {AthletePage} from "../athlete/athlete";
// import {AdminPage} from "../admin/admin";

@IonicPage()
@Component({
  selector: 'page-guest',
  templateUrl: 'guest.html',
})
export class GuestPage {
  // adm;
  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public navParams: NavParams) {
    // this.adm = this.adminPage.admin;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuestPage');
  }

  maxmin() {

  }

  club = {clubName: '', clubAward: false, clubCoaches: '', clubLocation: ''}; // clubCoaches should be an array !!!
  submitted = false;
  onClubSubmit() {
    this.submitted = true;

    console.log('clubName submitted is: ' + this.club.clubName);
    console.log('clubAwards submitted is: ' + this.club.clubAward);
    console.log('clubCoaches submitted is: ' + this.club.clubCoaches); //!!! clubCoaches should be an array
    console.log('clubCoaches submitted is: ' + this.club.clubLocation);

    // this.navCtrl.push(ResultsPage);

  }

    athlete = {
      allAthletes: false, athlName: '', athlAward: false, height: '', show: {
        name: false,
        id: false,
        sex: false,
        height: false,
        weight: false,
        birthday: false,
        city: false,
        country: false
      }
    };
  onAthleteSubmit() {
    console.log("athlete.show.name " + this.athlete.show.name);
    console.log("athlete.show.height " + this.athlete.show.height);
    this.submitted = true;

  }
  updateAllAthletes() {
    this.athlete.athlName = '';
    this.athlete.allAthletes = true;
  }

  // updateAthleteSelection() {
  //   let modal = this.modalCtrl.create(AthletePage, this.athlete.show);
  //   modal.present();
  //
  //   modal.onWillDismiss((data: any) => {
  //     if (data) {
  //       this.athlete.show = data;
  //     }
  //   });
  // }

  updateAthleteName() {
    this.athlete.allAthletes = false;
  }
  navUpdate() {
    this.navCtrl.push("UpdatePage")
  }
}


