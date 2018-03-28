import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HTTP) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatePage');
  }

  athlete = {athleteID: 0, athleteAward: '', athleteWeight: 0}
  coach = {coachID: 0, coachAward: ''}
  award = {recipientPersonID: 0, recipientClubName: ''}
  participate = {seconds: 0, length: 0, stroke: '', name: '', pdate: '', ID:''}


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

  DeleteRecipientPerson(){

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
