import { Component } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
// import {AthletePage} from "../athlete/athlete";
// import {AdminPage} from "../admin/admin";
import {MyApp} from '../../app/app.component'

@IonicPage()
@Component({
  selector: 'page-guest',
  templateUrl: 'guest.html',
})
export class GuestPage {
  // adm;
  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public navParams: NavParams,
              public myApp: MyApp) {
    // this.adm = this.adminPage.admin;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuestPage');
  }

  maxmin() {

  }

  club = {clubName: '', clubOptionSelected: ''}; // clubCoaches should be an array !!!
  submitted = false;
  onClubSubmit() {
    this.submitted = true;

    console.log('clubName submitted is: ' + this.club.clubName);
    console.log('clubOptionSelected is: ' + this.club.clubOptionSelected);


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

  comp = {compName: '', compOptionSelected: ''}; // clubCoaches should be an array !!!
  onCompSubmit() {
    this.submitted = true;

    console.log('compName submitted is: ' + this.comp.compName);
    console.log('compOptionSelected is: ' + this.comp.compOptionSelected);


    // this.navCtrl.push(ResultsPage);

  }

  divisionQuery() {

  }

  minNestedAggQuery() {
    console.log(this.myApp.retrieveQueryData("select * from (select avg(seconds) as avgSeconds, stroke, length from participate group by stroke, length) where avgSeconds in (select min(avgSecondsTwo) from (select avg(seconds) as avgSecondsTwo from participate group by stroke, length))"))
  }

  maxNestedAggQuery() {
    console.log(this.myApp.retrieveQueryData("select * from (select avg(seconds) as avgSeconds, stroke, length from participate group by stroke, length) where avgSeconds in (select max(avgSecondsTwo) from (select avg(seconds) as avgSecondsTwo from participate group by stroke, length))"))
  }

}


