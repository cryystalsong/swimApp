import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
<<<<<<< HEAD
import { HTTP } from '@ionic-native/http';
=======
import {MyApp} from "../../app/app.component";
>>>>>>> parent of 6c918cc... might create merge conflicts with this

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HTTP) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatePage');
  }

  athlete = {athleteID: 0, athleteAward: '', athleteWeight: 0}
  coach = {coachID: 0, coachAward: ''}
<<<<<<< HEAD
  award = {recipientPersonID: 0, recipientClubName: ''}
  participate = {seconds: 0, length: 0, stroke: '', name: '', pdate: '', ID:''}
=======
  award = {recipientName:'', awardType:''}
  participate = {seconds: '', length: '', stroke: '', name: '',pdate: '', ID:''}
>>>>>>> parent of 6c918cc... might create merge conflicts with this


  submitted = false;
  DeleteAthlete() {

    var query = "delete from athlete where id = " + this.athlete.athleteID;
    var phpURL = "http://www.ugrad.cs.ubc.ca/~x1p0b/clubsAwardsWon.php?q=" + query;

    this.http.get(phpURL, {},{}).then(data => {
      console.log(data.data);

      var query = "select * from athlete";
      var phpURL = "http://www.ugrad.cs.ubc.ca/~x1p0b/clubsAwardsWon.php?q=" + query;

      this.http.get(phpURL, {},{}).then(data => {
        console.log(data.data);
      })
    })

    this.submitted = true;
  }

  DeleteCoach(){

    var query = "delete from coach where id = " + this.coach.coachID;
    var phpURL = "http://www.ugrad.cs.ubc.ca/~x1p0b/clubsAwardsWon.php?q=" + query;

    this.http.get(phpURL, {},{}).then(data => {
      console.log(data.data);

      var query = "select * from coach";
      var phpURL = "http://www.ugrad.cs.ubc.ca/~x1p0b/clubsAwardsWon.php?q=" + query;

      this.http.get(phpURL, {},{}).then(data => {
        console.log(data.data);
      })

    })

    this.submitted = true;
  }

<<<<<<< HEAD
  DeleteRecipientPerson(){
=======
  Update(){
>>>>>>> parent of 6c918cc... might create merge conflicts with this

    var query = "delete from AwardPerson where id = " + this.award.recipientPersonID;
    var phpURL = "http://www.ugrad.cs.ubc.ca/~x1p0b/clubsAwardsWon.php?q=" + query;

    this.http.get(phpURL, {},{}).then(data => {
      console.log(data.data);

      var query = "select * from AwardPerson";
      var phpURL = "http://www.ugrad.cs.ubc.ca/~x1p0b/clubsAwardsWon.php?q=" + query;

      this.http.get(phpURL, {},{}).then(data => {
        console.log(data.data);
      })

    })
  }

  DeleteRecipientClub(){

    var query = "delete from AwardClub where cName = " + "'" + this.award.recipientClubName + "'";
    var phpURL = "http://www.ugrad.cs.ubc.ca/~x1p0b/clubsAwardsWon.php?q=" + query;

    this.http.get(phpURL, {},{}).then(data => {
      console.log(data.data);

      var query = "select * from AwardClub";
      var phpURL = "http://www.ugrad.cs.ubc.ca/~x1p0b/clubsAwardsWon.php?q=" + query;

      this.http.get(phpURL, {},{}).then(data => {
        console.log(data.data);
      })

    })

<<<<<<< HEAD
  }



  Insert() {

    var query = "insert into Participate values (" + this.participate.seconds + ", "
    + this.participate.length + ", " + "'" + this.participate.stroke + "'" + ", "
    + "'" + this.participate.name + "'" + ", " + "'" + this.participate.pdate + "'" + ", "
    + this.participate.ID + ")";
    var phpURL = "http://www.ugrad.cs.ubc.ca/~x1p0b/clubsAwardsWon.php?q=" + query;

    this.http.get(phpURL, {},{}).then(data => {
      console.log(data.data);

      var query = "select * from Participate";
      var phpURL = "http://www.ugrad.cs.ubc.ca/~x1p0b/clubsAwardsWon.php?q=" + query;

      this.http.get(phpURL, {},{}).then(data => {
        console.log(data.data);
      })

    })
=======
    //make the update to a specified athlete
    var query = "update athlete set weight = " + this.athlete.athleteWeight +
      " where id = " + this.athlete.athleteID;
    // var phpURL = "http://www.ugrad.cs.ubc.ca/~u2o0b/clubsAwardsWon.php?q=";
    //
    // this.http.get(phpURL+query, {},{}).then(data => {
    //   console.log(query);
    //
    //   var query1 = "select * from athlete";
    //
    //   this.http.get(phpURL+query1, {},{}).then(data => {
    //     console.log(data.data);
    //   });

    // });

    console.log(this.myApp.retrieveQueryData(query));






    //check the projection of athlete to look for update


    // //select the updated athlete weight
    // var query2 = "select_weight_from_athlete_where_id_equal_" + this.athlete.athleteID;
    //
    // this.http.get(phpURL+query2, {},{}).then(data => {
    //   console.log(data.data);
    // })

    //
    //
    //
    // this.submitted = true;
  }


  test() {

    var query = "select * from person";
    // var phpURL = "http://www.ugrad.cs.ubc.ca/~j5m0b/clubsAwardsWon.php/" + query;
    //
    // this.http.get(phpURL, {},{}).then(data => {
    //   console.log(data.data);
    // })

    console.log(query);
>>>>>>> parent of 6c918cc... might create merge conflicts with this

    console.log(this.myApp.retrieveQueryData(query));

  }

  Updated(){
    //make the update to a specified athlete
    var query = "update athlete set weight = " + this.athlete.athleteWeight + " where id = "
    + this.athlete.athleteID;
    var phpURL = "http://www.ugrad.cs.ubc.ca/~x1p0b/clubsAwardsWon.php?q=" + query;

    this.http.get(phpURL, {},{}).then(data => {
      console.log(data.data);

      var query = "select * from athlete";
      var phpURL = "http://www.ugrad.cs.ubc.ca/~x1p0b/clubsAwardsWon.php?q=" + query;

      this.http.get(phpURL, {},{}).then(data => {
        console.log(data.data);
      })


    })
    this.submitted = true;
  }


}
