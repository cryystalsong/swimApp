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

    if (this.club.clubOptionSelected === "clubAwards") {
      console.log(this.myApp.retrieveQueryData("select ac.cname, ac.awardname from awardclub ac where ac.cname = '" + this.club.clubName + "'"));
    } else if (this.club.clubOptionSelected === "clubAthletes") {
      console.log(this.myApp.retrieveQueryData("select * from person p, athlete a where p.id=a.id and a.id in (select b.id from belongs b where b.clubname = '" + this.club.clubName + "')"));
    } else if (this.club.clubOptionSelected === "clubCoaches") {
      console.log(this.myApp.retrieveQueryData("select * from person p, coach c where p.id=c.id and c.id in (select b.id from belongs b where b.clubname = '" + this.club.clubName + "')"));
    } else {
      console.log(this.myApp.retrieveQueryData("select c.address from club c where c.name = '" + this.club.clubName + "'"));
    }

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
    
    if (this.comp.compOptionSelected === "compTitleHolders") {
      console.log(this.myApp.retrieveQueryData("select e.titleholder, e.length, e.stroke from events e where e.cname = '" + this.comp.compName + "'"));
    } else {
      console.log(this.myApp.retrieveQueryData("select p.name, pa.length, pa.stroke, pa.length from person p, participate pa where p.id = pa.id and pa.name = '" + this.comp.compName + "'"));
    }

    // this.navCtrl.push(ResultsPage);

  }

  divisionQuery() {
    console.log(this.myApp.retrieveQueryData("select p.name from person p, athlete a where p.id=a.id and NOT EXISTS ((select c.name from competition c) MINUS (select p.name from participate p where p.id=a.id))"));
  }

  minNestedAggQuery() {
    console.log(this.myApp.retrieveQueryData("select * from (select avg(seconds) as avgSeconds, stroke, length from participate group by stroke, length) where avgSeconds in (select min(avgSecondsTwo) from (select avg(seconds) as avgSecondsTwo from participate group by stroke, length))"))
  }

  maxNestedAggQuery() {
    console.log(this.myApp.retrieveQueryData("select * from (select avg(seconds) as avgSeconds, stroke, length from participate group by stroke, length) where avgSeconds in (select max(avgSecondsTwo) from (select avg(seconds) as avgSecondsTwo from participate group by stroke, length))"))
  }

}


