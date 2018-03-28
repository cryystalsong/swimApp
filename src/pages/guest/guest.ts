import { Component } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
import {AthletePage} from "../athlete/athlete";

@IonicPage()
@Component({
  selector: 'page-guest',
  templateUrl: 'guest.html',
})
export class GuestPage {

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuestPage');
  }

  club = {clubName: '', clubAward: false, clubCoaches: '', clubLocation: ''}; // clubCoaches should be an array !!!
  submitted = false;
  onClubSubmit() {
    this.submitted = true;
    console.log('clubName submitted is: ' + this.club.clubName);
    console.log('clubAwards submitted is: ' + this.club.clubAward);
    console.log('clubCoaches submitted is: ' + this.club.clubCoaches); //!!! clubCoaches should be an array
    console.log('clubCoaches submitted is: ' + this.club.clubLocation);
  }

  athlete = {allAthletes: false, athlName: '', athlAward: false, height: '', show: {name: false,
                                                                                    id:false,
                                                                                    gender:false,
                                                                                    height:false,
                                                                                    weight:false,
                                                                                    birthday:false,
                                                                                    city:false,
                                                                                    country:false}
  }

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

  updateAthleteSelection() {
    let modal = this.modalCtrl.create(AthletePage, this.athlete.show);
    modal.present();

    modal.onWillDismiss((data: any) => {
      if (data) {
        this.athlete.show = data;
      }
    });
  }
  navUpdate() {
    this.navCtrl.push("UpdatePage")
  }
}


