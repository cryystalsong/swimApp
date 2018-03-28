import { Component } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
// import {AthletePage} from "../athlete/athlete";
// import {AdminPage} from "../admin/admin";
import {MyApp} from "../../app/app.component";

@IonicPage()
@Component({
  selector: 'page-guest',
  templateUrl: 'guest.html',
})
export class GuestPage {

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public navParams: NavParams,
              public myApp: MyApp) {

  }
  // var query = "";
  ionViewDidLoad() {
    console.log('ionViewDidLoad GuestPage');
  }

  maxmin() {

  }

  club = {clubName: '', clubOptionSelected: ''}; // clubCoaches should be an array !!!
  submitted = false;


  onClubSubmit() {
    this.submitted = true;

    var q = '';
    if (this.club.clubOptionSelected === "clubAwards") {
      q = "select ac.cname, ac.awardname from awardclub ac where ac.cname = '" + this.club.clubName + "'";
    } else if (this.club.clubOptionSelected === "clubAthletes") {
      q = "select * from person p, athlete a where p.id=a.id and a.id in (select b.id from belongs b where b.clubname = '" + this.club.clubName + "')";
    } else if (this.club.clubOptionSelected === "clubCoaches") {
      q = "select * from person p, coach c where p.id=c.id and c.id in (select b.id from belongs b where b.clubname = '" + this.club.clubName + "')";
    } else {
      "select c.address from club c where c.name = '" + this.club.clubName + "'"
    }


    this.myApp.retrieveQueryData(q).then((data)=> {
      this.myApp.displayQueryData(data, "clubResult");
        console.log(data);
      });

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
    var query = "";
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
      where += "where p.name = \'" + this.athlete.athlName + "\'" ; //  and a.id = p.id
      flag2 = 1;
    }
    if (flag2) {
      where += " and a.id = p.id";
      from += ", person p";
    }
    query = select + " " + from;
    if (where) {
      query += " " + where;
    }

    console.log("query " + query);

    this.myApp.retrieveQueryData(query).then((data)=> {
      this.myApp.displayQueryData(data, "athleteResult");
      console.log(data);
    });

  }

  updateAllAthletes() {
    this.athlete.athlName = '';
    this.athlete.allAthletes = true;
  }

  updateAthleteName() {
    this.athlete.allAthletes = false;
  }


  coach = {
    allCoaches: false, coachName: '', yrs: '', show: {
      name: false,
      id: false,
      yrs: false,
      birthday: false,
      city: false,
      country: false
    }
  };
  onCoachSubmit() {
    var query = "";
    console.log(this.coach.show.name);
    this.submitted = true;
    let select = "select ";
    let from = "from coach c" ;
    let where = "";
    let flag = 0;
    let flag2 = 0;
    if (this.coach.show.name) {
      flag = 1;
      select += "p.name";
      flag2 = 1;
    }
    if (this.coach.show.id) {
      if (flag) {
        select += ", c.id";
      } else {
        select += "c.id";
        flag = 1;
      }
    }
    if (this.coach.show.yrs) {
      if (flag) {
        select += ", c.yrs";
      } else {
        select += "c.yrs";
        flag = 1;
      }
    }
    if (this.coach.show.birthday) {
      if (flag) {
        select += ", p.birthday";
      } else {
        select += "p.birthday";
        flag = 1;
      }
      flag2 = 1;
    }
    if (this.coach.show.city) {
      if (flag) {
        select += ", p.city";
      } else {
        select += "p.city";
        flag = 1;
      }
      flag2 = 1;
    }
    if (this.coach.show.country) {
      if (flag) {
        select += ", p.country";
      } else {
        select += "p.country";
        flag = 1;
      }
      flag2 = 1;
    }

    if (this.coach.coachName) {
      where += "where p.name = \'" + this.coach.coachName + "\'" ; //  and a.id = p.id
      flag2 = 1;
    }
    if (flag2) {
      where += " and c.id = p.id";
      from += ", person p";
    }
    query = select + " " + from;
    if (where) {
      query += " " + where;
    }

    console.log("query " + query);
    this.myApp.retrieveQueryData(query).then((data)=> {
      this.myApp.displayQueryData(data, "coachResult");
      console.log(data);
    });
  }

  updateAllCoaches() {
    this.coach.coachName = '';
    this.coach.allCoaches = true;
  }

  updateCoachName() {
    this.coach.allCoaches = false;
  }

  navUpdate() {
    this.navCtrl.push("UpdatePage")
  }

  comp = {compName: '', compOptionSelected: ''}; // clubCoaches should be an array !!!
  onCompSubmit() {
    this.submitted = true;

    var q = '';

    if (this.comp.compOptionSelected === "compTitleHolders") {
      q="select e.titleholder, e.length, e.stroke from events e where e.cname = '" + this.comp.compName + "'"
    } else {
      q="select p.name, pa.length, pa.stroke, pa.length from person p, participate pa where p.id = pa.id and pa.name = '" + this.comp.compName + "'"
    }

    this.myApp.retrieveQueryData(q).then((data)=> {
      this.myApp.displayQueryData(data, "compResult");
      console.log(data);
    });

    // this.navCtrl.push(ResultsPage);

  }

  divisionQuery() {
    var q = "select p.name from person p, athlete a where p.id=a.id and NOT EXISTS ((select c.name from competition c) MINUS (select p.name from participate p where p.id=a.id))"

    this.myApp.retrieveQueryData(q).then((data)=> {
      this.myApp.displayQueryData(data, "otherResult");
      console.log(data);
    });
  }

  minNestedAggQuery() {
    var q ="select * from (select avg(seconds) as avgSeconds, stroke, length from participate group by stroke, length) where avgSeconds in (select min(avgSecondsTwo) from (select avg(seconds) as avgSecondsTwo from participate group by stroke, length))";

    this.myApp.retrieveQueryData(q).then((data)=> {
      this.myApp.displayQueryData(data, "otherResult");
      console.log(data);
    });
  }

  maxNestedAggQuery() {
    var q = "select * from (select avg(seconds) as avgSeconds, stroke, length from participate group by stroke, length) where avgSeconds in (select max(avgSecondsTwo) from (select avg(seconds) as avgSecondsTwo from participate group by stroke, length))";

    this.myApp.retrieveQueryData(q).then((data)=> {
      this.myApp.displayQueryData(data, "otherResult");
      console.log(data);
    });
  }

}


