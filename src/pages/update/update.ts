import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {MyApp} from "../../app/app.component";
import { HTTP } from '@ionic-native/http';


/**
 * Generated class for the UpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
})
export class UpdatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public myApp: MyApp, private http: HTTP) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatePage');
  }

  athlete = {DathleteID: '', athleteAward: '', UathleteID: '', athleteWeight: ''}
  coach = {coachID: '', coachAward: ''}
  award = {recipientPersonID: '', recipientClubName: ''}
  participate = {seconds: '', length: '', stroke: '', name: '', pdate: '', ID: ''}

  DAsubmitted = false;
  DCsubmitted = false;
  DRPsubmitted = false;
  DRCsubmitted = false;
  Isubmitted = false;
  Usubmitted = false;

  // errtext = "";

  DeleteAthlete() {

    this.DAsubmitted = true;

    var isnum = /^\d+$/.test(this.athlete.DathleteID);

    if (isnum) {

      var query = "delete from athlete where id = " + this.athlete.DathleteID;
      var phpURL = "http://www.ugrad.cs.ubc.ca/~x1p0b/clubsAwardsWon.php?q=" + query;

      this.http.get(phpURL, {},{}).then(data => {
        var result= JSON.parse(data.data);
        if(data.data === "[]"){
          console.log("shit dude");
          document.getElementById("errtext1").innerHTML = "<p> No such data exists </p>";
        } else{
          var query = "select * from athlete";
          this.myApp.retrieveQueryData(query).then((result) => {
            this.myApp.displayQueryData(result, "deleteAthleteResult");
          });
        }
      })
    }

  }


  DeleteCoach(){

    this.DCsubmitted = true;

    var isnum = /^\d+$/.test(this.coach.coachID);

    if(isnum){
      var query = "delete from coach where id = " + this.coach.coachID;
      var phpURL = "http://www.ugrad.cs.ubc.ca/~x1p0b/clubsAwardsWon.php?q=" + query;

      this.http.get(phpURL, {},{}).then(data => {
        if(data.data === "[]"){
          console.log("shit dude");
          document.getElementById("errtext2").innerHTML = "<p> No such data exists </p>";
        } else{
          var query = "select * from coach";
          this.myApp.retrieveQueryData(query).then((result) => {
            this.myApp.displayQueryData(result, "deleteCoachResult");
          });
        }
      })
    }

  }

  DeleteRecipientPerson(){

    this.DRPsubmitted = true;

    var isnum = /^\d+$/.test(this.award.recipientPersonID);

    if(isnum){
      var query = "delete from AwardPerson where id = " + this.award.recipientPersonID;
      var phpURL = "http://www.ugrad.cs.ubc.ca/~x1p0b/clubsAwardsWon.php?q=" + query;

      this.http.get(phpURL, {},{}).then(data => {
        if(data.data === "[]"){
          console.log("shit dude");
          document.getElementById("errtext3").innerHTML = "<p> No such data exists </p>";
        } else{
          var query = "select * from AwardPerson";
          this.myApp.retrieveQueryData(query).then((result) => {
            this.myApp.displayQueryData(result, "deleteRecipientPerson");
          });
        }
      })
    }

  }

  DeleteRecipientClub(){

    this.DRCsubmitted = true;

    if(Number.isNaN(Number(this.award.recipientClubName))) {

      var query = "delete from AwardClub where cName = " + "'" + this.award.recipientClubName + "'";
      var phpURL = "http://www.ugrad.cs.ubc.ca/~x1p0b/clubsAwardsWon.php?q=" + query;

      this.http.get(phpURL, {},{}).then(data => {
        if(data.data === "[]"){
          console.log("shit dude");
          document.getElementById("errtext4").innerHTML = "<p> No such data exists </p>";
        } else{
          var query = "select * from AwardClub";
          this.myApp.retrieveQueryData(query).then((result) => {
            this.myApp.displayQueryData(result, "deleteRecipientClub");
          });
        }

      })
    }

  }


  Insert() {
    //TODO: stroke, name, and date cannot be strings that can be numbers!
    // if(/^\d+$/.test(this.participate.stroke)){
    //   this.Isubmitted = false;
    // }

    this.Isubmitted = true;

    if(Number.isNaN(Number(this.participate.stroke)) &&
      Number.isNaN(Number(this.participate.name)) &&
      Number.isNaN(Number(this.participate.pdate)) &&
      this.participate.seconds != '' &&
      this.participate.length != '' &&
      this.participate.ID != ''){

      var query = "insert into Participate values (" + this.participate.seconds + ", "
        + this.participate.length + ", " + "'" + this.participate.stroke + "'" + ", "
        + "'" + this.participate.name + "'" + ", " + "'" + this.participate.pdate + "'" + ", "
        + this.participate.ID + ")";
      var phpURL = "http://www.ugrad.cs.ubc.ca/~x1p0b/clubsAwardsWon.php?q=" + query;

      this.http.get(phpURL, {},{}).then(data => {
        // console.log(data.data);
        var obg = data.data;
        if(typeof obg === "string"){
          if(obg.indexOf("ERROR") >= 0){
            console.log("shit");
            document.getElementById("errtext5").innerHTML = "<p> No such data exists </p>";
          } else{
            var query = "select * from Participate";
            this.myApp.retrieveQueryData(query).then((result) => {
              this.myApp.displayQueryData(result, "insertedParticipate");
            });
          }
        }

      })
    }

  }

  Updated(){

    this.Usubmitted = true;

    var isnumUID = /^\d+$/.test(this.athlete.UathleteID);
    var isnumUW = /^\d+$/.test(this.athlete.athleteWeight);

    if(isnumUW && isnumUID){
      //make the update to a specified athlete
      var query = "update athlete set weight = " + this.athlete.athleteWeight + " where id = "
        + this.athlete.UathleteID;
      var phpURL = "http://www.ugrad.cs.ubc.ca/~x1p0b/clubsAwardsWon.php?q=" + query;

      this.http.get(phpURL, {},{}).then(data => {
        console.log(typeof data.data);
        if(data.data === "[]"){
          console.log("shit dude");
          document.getElementById("errtext6").innerHTML = "<p> No such data exists </p>";
        } else {
          var query = "select * from Athlete";
          this.myApp.retrieveQueryData(query).then((result) => {
            this.myApp.displayQueryData(result, "updateAthleteWeight");
          });
        }

      })
    }

  }


}
