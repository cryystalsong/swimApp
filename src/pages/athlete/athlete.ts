import { Component } from '@angular/core';
import { ViewController, IonicPage, NavController, NavParams } from 'ionic-angular';
import {GuestPage} from "../guest/guest";

@IonicPage()
@Component({
  selector: 'page-athlete',
  templateUrl: 'athlete.html',
})
export class AthletePage {
  attributes = [];
  constructor(public navCtrl: NavController,
              public viewCtrl: NavController,
              public navParams: NavParams,
              public athlete: GuestPage
             ) {


    this.athlete.subscribe((attributes: string[]) => {

      attributes.forEach(attrName => {
        this.attributes.push({
          attrName
        });
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AthletePage');
  }

  submitted = false;
  applySelections() {
    this.submitted = true;
    // athlete.show.name =
    console.log('name shown: ' + this.athlete.name);
    this.dismiss(athlete);
  }


  resetOptions() {
    this.athlete.show.forEach(att => {
      att.isChecked = true;
    });
  }

  cancel(data?: any) {
    // using the injected ViewController this page
    // can "dismiss" itself and pass back data
    this.viewCtrl.dismiss(data);
  }
}


