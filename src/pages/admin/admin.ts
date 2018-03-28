import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GuestPage} from "../guest/guest";
/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  login = {username: '', password: ''};
  submitted = true;

  routeAdminSignIn() : void {
    console.log(this.login.username);
    console.log(this.login.password);

    if(this.login.username === "username" && this.login.password === "password") {
      this.navCtrl.push('GuestPage', {id: "login"});
    } else {
      this.submitted = false;
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }

}
