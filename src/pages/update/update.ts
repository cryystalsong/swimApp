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

  athlete = {athleteID: 0, athleteAward: '', athleteWeight: 0}
  coach = {coachID: 0, coachAward: ''}
  award = {recipientPersonID: 0, recipientClubName: ''}
  participate = {seconds: 0, length: 0, stroke: '', name: '', pdate: '', ID:''}


  submitted = true;

  DeleteAthlete() {

      var query = "delete from athlete where id = " + this.athlete.athleteID;
      var phpURL = "http://www.ugrad.cs.ubc.ca/~x1p0b/clubsAwardsWon.php?q=" + query;

      this.http.get(phpURL, {},{}).then(data => {
        var result= JSON.parse(data.data);
        console.log(Object.keys(result));


        // console.log(data.data);
        var query = "select * from athlete";
        this.myApp.retrieveQueryData(query).then((result) => {
          this.myApp.displayQueryData(result, "deleteAthleteResult");
        });
      })

  }


  DeleteCoach(){

    var query = "delete from coach where id = " + this.coach.coachID;
    var phpURL = "http://www.ugrad.cs.ubc.ca/~x1p0b/clubsAwardsWon.php?q=" + query;

    this.http.get(phpURL, {},{}).then(data => {
      console.log(data.data);
      var query = "select * from coach";
      this.myApp.retrieveQueryData(query).then((result) => {
        this.myApp.displayQueryData(result, "deleteCoachResult");
      });
    })

  }

  DeleteRecipientPerson(){

    var query = "delete from AwardPerson where id = " + this.award.recipientPersonID;
    var phpURL = "http://www.ugrad.cs.ubc.ca/~x1p0b/clubsAwardsWon.php?q=" + query;

    this.http.get(phpURL, {},{}).then(data => {
      console.log(data.data);
      var query = "select * from AwardPerson";
      this.myApp.retrieveQueryData(query).then((result) => {
        this.myApp.displayQueryData(result, "deleteRecipientPerson");
      });
    })
  }

  DeleteRecipientClub(){

    if(Number.isNaN(Number(this.award.recipientClubName))) {
      this.submitted = true;
      var query = "delete from AwardClub where cName = " + "'" + this.award.recipientClubName + "'";
      var phpURL = "http://www.ugrad.cs.ubc.ca/~x1p0b/clubsAwardsWon.php?q=" + query;

      this.http.get(phpURL, {},{}).then(data => {
        console.log(data.data);
        var query = "select * from AwardClub";
        this.myApp.retrieveQueryData(query).then((result) => {
          this.myApp.displayQueryData(result, "deleteRecipientClub");
        });
      })
    } else {
      this.submitted = false;
    }

  }


  Insert() {

    if(Number.isNaN(Number(this.participate.stroke)) &&
      Number.isNaN(Number(this.participate.name)) &&
      Number.isNaN(Number(this.participate.pdate))){

      this.submitted = true;

      var query = "insert into Participate values (" + this.participate.seconds + ", "
        + this.participate.length + ", " + "'" + this.participate.stroke + "'" + ", "
        + "'" + this.participate.name + "'" + ", " + "'" + this.participate.pdate + "'" + ", "
        + this.participate.ID + ")";
      var phpURL = "http://www.ugrad.cs.ubc.ca/~x1p0b/clubsAwardsWon.php?q=" + query;

      this.http.get(phpURL, {},{}).then(data => {
        console.log(data.data); 

        var query = "select * from Participate";
        this.myApp.retrieveQueryData(query).then((result) => {
          this.myApp.displayQueryData(result, "insertedParticipate");
        });

      })
    } else{
      this.submitted = false;
    }

  }

  Updated(){

    //make the update to a specified athlete
    var query = "update athlete set weight = " + this.athlete.athleteWeight + " where id = "
      + this.athlete.athleteID;
    var phpURL = "http://www.ugrad.cs.ubc.ca/~x1p0b/clubsAwardsWon.php?q=" + query;

    this.http.get(phpURL, {},{}).then(data => {
      console.log(data.data);
      var query = "select * from Athlete";
      this.myApp.retrieveQueryData(query).then((result) => {
        this.myApp.displayQueryData(result, "updateAthleteWeight");
      });

    })

  }


}

