import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
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


      this.http.get(phpURL, {}, {}).then(data => {
        var results = JSON.parse(data.data);
        // console.log(results);
        // console.log(typeof results);
        // document.getElementById("crystal").innerHTML = results;

        resolve(results);
      }, (error) => {
        reject(error);
      });
    })
  }
}

