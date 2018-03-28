import { Component } from '@angular/core';
import { Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HTTP} from '@ionic-native/http';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private http: HTTP) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }



  //returns JSON object from input query
  public retrieveQueryData(query : string) : any {

    return new Promise((resolve, reject) => {

      // var query = "select name from person where id=" + this.person.id;

      var phpURL = "http://www.ugrad.cs.ubc.ca/~u2o0b/clubsAwardsWon.php?q=" + query;


      this.http.get(phpURL, {}, {}).then((data) => {
        var results = JSON.parse(data.data);
        // console.log(results);
        // console.log(typeof results);
        // document.getElementById("crystal").innerHTML = results;

        resolve(results);
      }, (error) => {
        reject(error);
      });
      //   .catch((err)=>{
      //   this.presentAlert();
      // });
    });
  }

  //display the given
  //PARAM:
  // result is the resulting JSON Object
  // tagID is the tagID of the div you want the info to be displayed in
  public displayQueryData(result, tagID) : void {
    // Parse the JSON so we can access what we need.

// Get the amount of objects inside 'watson_tone' so we can loop through each one.
    var count = Object.keys(result).length;

// Make some strings to include in our output.
    var tableHeader = "<table>";

    var keyArray = Object.keys(result[0]);

    for (var a=0; a< keyArray.length ;a++) {
      tableHeader += "<col width='150'>" ;
    }

    tableHeader += "<tr>";

    for (var b=0; b < keyArray.length ;b++) {
      tableHeader += "<th>" + keyArray[b] + "</th>";
    }

    tableHeader += "</tr>";

    var tableContent = "";

// Loop through the JSON and output each row in to a string.
    for (var i = 0; i < count; i++) {
      tableContent = tableContent + "<tr>";

      for (var j=0; j<keyArray.length;j++) {
        tableContent += "<td>" + result[i][keyArray[j]] + "</td>";
      }

      tableContent += "<tr>";
    }


    var tableFooter = "</table>";

// Get div and output the HTML. You can include these HTML strings straight in to your emailText variable.
    document.getElementById(tagID).innerHTML = tableHeader + tableContent + tableFooter;
  }
}

