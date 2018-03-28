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
  query = "";
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
    console.log("athlete.athlAward " + this.athlete.athlAward);
    console.log("athlete.show " + JSON.stringify(this.athlete.show));
    console.log("athlete.show.name " + this.athlete.show.name);
    console.log("athlete.show.height " + this.athlete.show.height);
    this.submitted = true;
    let select = "select ";
    let from = "from athlete a" ;
    let where = "";
    let flag = 0;
    let flag2 = 0;
    if (this.athlete.show.name) {
      flag = 1;
      select += "p.name";
      flag2 = 1;
    }
    if (this.athlete.show.id) {
      if (flag) {
        select += ", a.id";
      } else {
        select += "a.id";
        flag = 1;
      }
    }
    if (this.athlete.show.sex) {
      if (flag) {
        select += ", p.sex";
      } else {
        select += "p.sex";
        flag = 1;
      }
      flag2 = 1;

    }
    if (this.athlete.show.height) {
      if (flag) {
        select += ", a.height";
      } else {
        select += "a.height";
        flag = 1;
      }
    }
    if (this.athlete.show.weight) {
      if (flag) {
        select += ", a.weight";
      } else {
        select += "a.weight";
        flag = 1;
      }
    }
    if (this.athlete.show.birthday) {
      if (flag) {
        select += ", p.birthday";
      } else {
        select += "p.birthday";
        flag = 1;
      }
      flag2 = 1;

    }
    if (this.athlete.show.city) {
      if (flag) {
        select += ", p.city";
      } else {
        select += "p.city";
        flag = 1;
      }
      flag2 = 1;

    }
    if (this.athlete.show.country) {
      if (flag) {
        select += ", p.country";
      } else {
        select += "p.country";
        flag = 1;
      }
      flag2 = 1;
    }

    if (this.athlete.athlName) {
      where += "where p.name = \'" + this.athlete.athlName + "\'" ;
      flag2 = 1;
    }
    if (flag2) {
      from += ", person p"
    }
    this.query = select + " " + from;
    if (where) {
      this.query += " " + where;
    }

    console.log("query " + this.query);
    console.log(this.myApp.retrieveQueryData(this.query));
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
    console.log(this.myApp.retrieveQueryData("select * from person"));
  }

  minNestedAggQuery() {
    console.log(this.myApp.retrieveQueryData("select * from (select avg(seconds) as avgSeconds, stroke, length from participate group by stroke, length) where avgSeconds in (select min(avgSecondsTwo) from (select avg(seconds) as avgSecondsTwo from participate group by stroke, length))"))
  }

  maxNestedAggQuery() {
    console.log(this.myApp.retrieveQueryData("select * from (select avg(seconds) as avgSeconds, stroke, length from participate group by stroke, length) where avgSeconds in (select max(avgSecondsTwo) from (select avg(seconds) as avgSecondsTwo from participate group by stroke, length))"))
  }

}


