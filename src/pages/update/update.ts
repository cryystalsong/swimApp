import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatePage');
  }

  athlete = {athleteName: '', athleteAward: ''}
  coach = {coachName: '', coachAward: ''}
  award = {recipientName:'', awardType:''}
  participate = {seconds: '', length: '', stroke: '', name: '',pdate: '', ID:''}


  submitted = false;
  Delete() {
    this.submitted = true;
  }


  Insert() {
    this.submitted = true;
  }


}
