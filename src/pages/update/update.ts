import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {MyApp} from "../../app/app.component";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public myApp: MyApp) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatePage');
  }

  athlete = {athleteID: 0, athleteAward: '', athleteWeight: 0}
  coach = {coachID: 0, coachAward: ''}
  award = {recipientName: '', awardType: ''}
  participate = {seconds: '', length: '', stroke: '', name: '', pdate: '', ID: ''}


  submitted = false;

  DeleteAthlete() {

    this.submitted = true;
  }


  Insert() {

    this.submitted = true;
  }

  Update() {

    // // check the initial projection of all athletes
    // var query = "select * from athlete";
    // var phpURL = "http://www.ugrad.cs.ubc.ca/~j5m0b/clubsAwardsWon.php/" + query;
    //
    // this.http.get(phpURL, {},{}).then(data => {
    //   console.log(data.data);
    // })

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

  // tableCreate() {
  //   var body = document.getElementById('crystal2');
  //   var tbl = document.createElement('table');
  //   tbl.style.width = '100%';
  //   tbl.setAttribute('border', '1');
  //   var tbdy = document.createElement('tbody');
  //   for (var i = 0; i < 3; i++) {
  //     var tr = document.createElement('tr');
  //     for (var j = 0; j < 2; j++) {
  //       if (i == 2 && j == 1) {
  //         break
  //       } else {
  //         var td = document.createElement('td');
  //         td.appendChild(document.createTextNode('\u0020'))
  //         i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
  //         tr.appendChild(td)
  //       }
  //     }
  //     tbdy.appendChild(tr);
  //   }
  //   tbl.appendChild(tbdy);
  //   body.appendChild(tbl)
  // }


  test() {

    var query = "select * from athlete";
    // var phpURL = "http://www.ugrad.cs.ubc.ca/~j5m0b/clubsAwardsWon.php/" + query;
    //
    // this.http.get(phpURL, {},{}).then(data => {
    //   console.log(data.data);
    // })

    this.myApp.retrieveQueryData(query).then((result) => {
      console.log(result);

// Parse the JSON so we can access what we need.

// Get the amount of objects inside 'watson_tone' so we can loop through each one.
      var count = Object.keys(result).length;

// Make some strings to include in our output.
      var tableHeader =
        "<table>" +
        "<col width='40'><col width='40'><col width='40'>" +
        "<tr><th>HEIGHT</th><th>ID</th><th>WEIGHT</th></tr>";

      var tableContent = "";

// Loop through the JSON and output each row in to a string.
      for (var i = 0; i < count; i++) {
        tableContent = tableContent + "<tr><td>" + result[i].HEIGHT + "</td><td>" + result[i].ID + "</td><td>" + result[i].WEIGHT + "</td></tr>";
      }

      var tableFooter = "</table>";

// Get div and output the HTML. You can include these HTML strings straight in to your emailText variable.
      document.getElementById("crystal2").innerHTML = tableHeader + tableContent + tableFooter;

    });


  }


}
