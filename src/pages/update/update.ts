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
  award = {recipientName:'', awardType:''}
  participate = {seconds: '', length: '', stroke: '', name: '',pdate: '', ID:''}


  submitted = false;
  DeleteAthlete() {

    this.submitted = true;
  }


  Insert() {

    this.submitted = true;
  }

  Update(){

    // check the initial projection of all athletes
    var query = "select_star_from_athlete";
    var phpURL = "http://www.ugrad.cs.ubc.ca/~j5m0b/clubsAwardsWon.php/" + query;

    this.http.get(phpURL, {},{}).then(data => {
      console.log(data.data);
    })

    //make the update to a specified athlete
    var query = "update_athlete_set_weight_equal_" + this.athlete.athleteWeight +
      "where_id_equal_" + this.athlete.athleteID;
    var phpURL = "http://www.ugrad.cs.ubc.ca/~j5m0b/clubsAwardsWon.php/" + query;

    this.http.get(phpURL, {},{}).then(data => {
      console.log(data.data);
    })

    //check the projection of athlete to look for update
    var query = "select_star_from_athlete";
    var phpURL = "http://www.ugrad.cs.ubc.ca/~j5m0b/clubsAwardsWon.php/" + query;

    this.http.get(phpURL, {},{}).then(data => {
      console.log(data.data);
    })

    //select the updated athlete weight
    var query = "select_weight_from_athlete_where_id_equal_" + this.athlete.athleteID;
    var phpURL = "http://www.ugrad.cs.ubc.ca/~j5m0b/clubsAwardsWon.php/" + query;

    this.http.get(phpURL, {},{}).then(data => {
      console.log(data.data);
    })



    this.submitted = true;
  }


  test() {

    var query = "select_star_from_person";
    var phpURL = "http://www.ugrad.cs.ubc.ca/~j5m0b/clubsAwardsWon.php/" + query;

    this.http.get(phpURL, {},{}).then(data => {
      console.log(data.data);
    })

  }



}
