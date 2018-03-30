import {Component} from '@angular/core';
import {ModalController, IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
// import {AthletePage} from "../athlete/athlete";
// import {AdminPage} from "../admin/admin";
import {MyApp} from "../../app/app.component";

@IonicPage()
@Component({
  selector: 'page-guest',
  templateUrl: 'guest.html',
})
export class GuestPage {
  from = '';
  hideUpdate = false;

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public navParams: NavParams,
              public myApp: MyApp,
              private alertCtrl: AlertController) {
    var fromPage = navParams.get('id');
    if (fromPage !== "login") {
      this.hideUpdate = true;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuestPage');
    console.log(this.hideUpdate);
  }

  club = {clubName: '', clubOptionSelected: '', clubError: false}; // clubCoaches should be an array !!!
  submitted = false;

  resetClub() {
    this.club = {clubName: '', clubOptionSelected: '', clubError: false};
    document.getElementById("clubResult").innerHTML = "";
  }

  onClubSubmit() {
    this.submitted = true;
    this.club.clubError = false;
    var q = '';
    if (this.club.clubOptionSelected === '') {
      this.club.clubError = true;
    } else if (this.club.clubOptionSelected === "clubAwards") {
      q = "select ac.cname, ac.awardname from awardclub ac where ac.cname = '" + this.club.clubName + "'";
    } else if (this.club.clubOptionSelected === "clubAthletes") {
      q = "select * from person p, athlete a where p.id=a.id and a.id in (select b.id from belongs b where b.clubname = '" + this.club.clubName + "')";
    } else if (this.club.clubOptionSelected === "clubCoaches") {
      q = "select * from person p, coach c where p.id=c.id and c.id in (select b.id from belongs b where b.clubname = '" + this.club.clubName + "')";
    } else {
      q = "select c.name, c.address from club c where c.name = '" + this.club.clubName + "'";
    }

    if(!this.club.clubError && this.club.clubName !== '') {
      this.myApp.retrieveQueryData(q).then((data) => {
        this.myApp.displayQueryData(data, "clubResult");
        console.log(data);
      });
    }
    //   .catch((err)=>{
    // this.presentAlert();
    // });

    // this.navCtrl.push(ResultsPage);

  }

  athlete = {
    allAthletes: false,
    athlName: '',
    height: '',
    sHeight: '',
    selected: [],
    athlError: false
  };



  resetAthlete() {
    this.athlete = {
      allAthletes: false,
      athlName: '',
      height: '',
      sHeight: '',
      selected: [],
      athlError: false
    }
    document.getElementById("athleteResult").innerHTML = "";
    }


  onAthleteSubmit() {
    var query = '';
    // console.log("athlete.athlAward " + this.athlete.athlAward);
    console.log(this.athlete.selected);
    console.log(this.athlete.selected.indexOf("ID")!== -1);
    // console.log("athlete.show.name " + this.athlete.show.name.value.checked);

    this.submitted = true;
    let select = "select ";
    let from = "from athlete a, person p";
    let where = "where a.id = p.id ";
    let flag = 0;
    this.athlete.athlError = false;
    if(this.athlete.athlName === '' && !this.athlete.allAthletes) {
      this.athlete.athlError = true;
    }


    if (this.athlete.selected.indexOf("Name")!== -1) {
       flag = 1;
       select += "p.name";
     }
     if (this.athlete.selected.indexOf("ID")!== -1) {
       if (flag) {
         select += ", a.id";
       } else {
         select += "a.id";
         flag = 1;
       }
     }
     if (this.athlete.selected.indexOf("Gender")!== -1) {
       if (flag) {
         select += ", p.sex";
       } else {
         select += "p.sex";
         flag = 1;
       }
     }
     if (this.athlete.height || this.athlete.selected.indexOf("Height")!== -1) {
       if (flag) {
         select += ", a.height";
       } else {
         select += "a.height";
         flag = 1;
       }
     }
     if (this.athlete.selected.indexOf("Weight")!== -1) {
       if (flag) {
         select += ", a.weight";
       } else {
         select += "a.weight";
         flag = 1;
       }
     }
     if (this.athlete.selected.indexOf("Birth Date")!== -1) {
       if (flag) {
         select += ", p.birthday";
       } else {
         select += "p.birthday";
         flag = 1;
       }

     }
     if (this.athlete.selected.indexOf("City")!== -1) {
       if (flag) {
         select += ", p.citydetails";
       } else {
         select += "p.citydetails";
         flag = 1;
       }

     }
     if (this.athlete.selected.indexOf("Country")!== -1) {
       if (flag) {
         select += ", p.country";
       } else {
         select += "p.country";
       }
     }


    if (this.athlete.athlName) {
      where += " and p.name = \'" + this.athlete.athlName + "\'";
    } else if (this.athlete.sHeight) {
      var isnum = /^\d+$/.test(this.athlete.sHeight);
      if(isnum){
        where += " and " + "a.height >" + this.athlete.sHeight;
      }
    } else if (this.athlete.height) {
      where += " and " + "a.height in (select " + this.athlete.height + "from athlete a1)";
    }


    query = select + " " + from + " " + where;


    console.log("query " + query);
    console.log("athlete error " + this.athlete.athlError);

    if (!this.athlete.athlError && this.athlete.selected.length > 0) {
      console.log("this shouldnt be running");
      this.myApp.retrieveQueryData(query).then((data) => {
        this.myApp.displayQueryData(data, "athleteResult");
      });
    }
    // .catch((err)=>{
    //   console.log(err);
    // this.presentAlert();
    // });

  }

  updateAllAthletes(){
    this.athlete.athlName = '';
    this.athlete.allAthletes = true;
  }

  updateAthleteName() {
    this.athlete.allAthletes = false;
  }


  coach = {
    allCoaches: false,
    coachName: '',
    yrs: '',
    sYrs: '',
    selected: [],
    coachError: false
  };

  resetCoach() {
    this.coach = {
      allCoaches: false,
      coachName: '',
      yrs: '',
      sYrs: '',
      selected: [],
      coachError: false
    };
    document.getElementById("coachResult").innerHTML = "";
  }

  onCoachSubmit() {
    var query = '';
    // console.log(this.coach.show.name);
    this.submitted = true;
    let select = "select ";
    let from = "from coach c, person p";
    let where = "where c.id = p.id";
    let flag = 0;
    this.coach.coachError = false;
    if(this.coach.coachName === '' && !this.coach.allCoaches) {
      this.coach.coachError = true;
    }

    if (this.coach.selected.indexOf("Name")!== -1) {
      flag = 1;
      select += "p.name";
    }
    if (this.coach.selected.indexOf("ID")!== -1) {
      if (flag) {
        select += ", c.id";
      } else {
        select += "c.id";
        flag = 1;
      }
    }
    if (this.coach.selected.indexOf("Years of Experience")!== -1) {
      if (flag) {
        select += ", c.yearsofexp";
      } else {
        select += "c.yearsofexp";
        flag = 1;
      }
    }
    if (this.coach.selected.indexOf("Birth Date")!== -1) {
      if (flag) {
        select += ", p.birthday";
      } else {
        select += "p.birthday";
        flag = 1;
      }
    }
    if (this.coach.selected.indexOf("City")!== -1) {
      if (flag) {
        select += ", p.citydetails";
      } else {
        select += "p.citydetails";
        flag = 1;
      }
    }
    if (this.coach.selected.indexOf("Country")!== -1) {
      if (flag) {
        select += ", p.country";
      } else {
        select += "p.country";
        flag = 1;
      }
    }
    if (this.coach.selected.indexOf("Gender")!== -1) {
      if (flag) {
        select += ", p.sex";
      } else {
        select += "p.sex";
        flag = 1;
      }
    }

    if (this.coach.coachName) {
      where += " and p.name = \'" + this.coach.coachName + "\'";
    } else if (this.coach.sYrs) {
      var isnum = /^\d+$/.test(this.coach.sYrs);

      if(isnum){
        where += " and c.yearsOfExp > " + this.coach.sYrs;
      }
    } else if (this.coach.yrs) {
      where += " and c.yearsOfExp = (select " + this.coach.yrs + " from Coach c1)";
    }

    query = select + " " + from + " " + where;


    console.log("query " + query);

    if(!this.coach.coachError && this.coach.selected.length > 0) {
      console.log("this shouldnt be running");
      this.myApp.retrieveQueryData(query).then((data) => {
        this.myApp.displayQueryData(data, "coachResult");
      });
    }
    // .catch((err)=>{
    // this.presentAlert();
    // });
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

  comp = {compName: '', compOptionSelected: '', compError: false}; // clubCoaches should be an array !!!

  resetCompetition() {
    this.comp = {compName: '', compOptionSelected: '', compError: false};
    document.getElementById("compResult").innerHTML = "";
  }

  onCompSubmit() {
    this.submitted = true;
    this.comp.compError = false;
    var q = '';
    if (this.comp.compOptionSelected === '') {
      this.comp.compError = true;
    } else if (this.comp.compOptionSelected === "compTitleHolders") {
      q = "select e.titleholder, e.length, e.stroke from events e where e.cname = '" + this.comp.compName + "'"
    } else {
      q = "select p.name, pa.length, pa.stroke, pa.length from person p, participate pa where p.id = pa.id and pa.name = '" + this.comp.compName + "'"
    }

    if (!this.comp.compError && this.comp.compName !== '') {
      this.myApp.retrieveQueryData(q).then((data) => {
        this.myApp.displayQueryData(data, "compResult");
        console.log(data);
      });
      // .catch((err)=>{
      // this.presentAlert();
      // });

      // this.navCtrl.push(ResultsPage);
    }
  }

  divisionQuery() {
    var q = "select p.name from person p, athlete a where p.id=a.id and NOT EXISTS ((select c.name from competition c) MINUS (select p.name from participate p where p.id=a.id))"

    this.myApp.retrieveQueryData(q).then((data) => {
      this.myApp.displayQueryData(data, "otherResult");
      console.log(data);
    });
    // .catch((err)=>{
    // this.presentAlert();
    // });
  }

  minNestedAggQuery() {
    var q = "select * from (select avg(seconds) as avgSeconds, stroke, length from participate group by stroke, length) where avgSeconds in (select min(avgSecondsTwo) from (select avg(seconds) as avgSecondsTwo from participate group by stroke, length))";

    this.myApp.retrieveQueryData(q).then((data) => {
      this.myApp.displayQueryData(data, "otherResult");
      console.log(data);
    });
    // .catch((err)=>{
    // this.presentAlert();
    // });
  }

  maxNestedAggQuery() {
    var q = "select * from (select avg(seconds) as avgSeconds, stroke, length from participate group by stroke, length) where avgSeconds in (select max(avgSecondsTwo) from (select avg(seconds) as avgSecondsTwo from participate group by stroke, length))";

    this.myApp.retrieveQueryData(q).then((data) => {
      this.myApp.displayQueryData(data, "otherResult");
      console.log(data);
    });
    // .catch((err)=>{
    // this.presentAlert();
    // });
  }

  coachName = "";

  coachAthletes() {
    var q = "select ap.name from person ap, coaches co where co.AID = ap.ID AND co.CID NOT IN ((SELECT co2.CID FROM " +
      "Coaches co2) MINUS (SELECT c.ID FROM Coach c, Person cp WHERE cp.name = \'" + this.coachName + "\' and cp.ID = c.ID))";
    this.myApp.retrieveQueryData(q).then((data) => {
      this.myApp.displayQueryData(data, "otherResult");
      console.log(data);
    });
    // .catch((err)=>{
    //   this.presentAlert();
    // });
  }

  coachName2 = "";
  coachAwards() {
    var q = "select p.name, ap.AwardName, ap.year from AwardPerson ap, Coach c, Person p where p.name = \'" + this.coachName2 + "\' and c.ID = p.ID and ap.ID = c.ID";
    console.log(q);
    this.myApp.retrieveQueryData(q).then((data)=> {
      this.myApp.displayQueryData(data, "otherResult");
      console.log(data);
    })
    //   .catch((err)=>{
    //   this.presentAlert();
    // });
  }
  // select ap.AwardName, ap.year from AwardPerson ap, Coach c, Person p where p.name = 'Keith Turner' and c.ID = p.ID and ap.ID = c.ID

  others = "";

  onOthersSubmit() {
    if (this.others == "allComps") {
      this.divisionQuery();
    } else if (this.others == "maxAvg") {
      this.maxNestedAggQuery();
    }else if (this.others == "minAvg") {
      this.minNestedAggQuery();
    } else if (this.others == "coachedBy") {
      this.coachAthletes();
    } else if (this.others == "coachAwards") {
      this.coachAwards();
    }
    console.log('others submit' + JSON.stringify(this.others));
  }

  resetOther() {
    this.others = "";
    this.coachName2 = "";
    this.coachName = "";
    document.getElementById("otherResult").innerHTML = "";
  }

}



