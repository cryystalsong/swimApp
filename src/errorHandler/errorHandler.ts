import { ErrorHandler, Injectable} from '@angular/core';
import {AlertController} from "ionic-angular";

@Injectable()
export class MyErrorHandler implements ErrorHandler {

  constructor(private alertCtrl: AlertController) {

  }
  // alert = this.alertCtrl.create({
  //   title: 'ERROR!',
  //   subTitle: 'Incorrect information',
  //   buttons: ['Dismiss']
  // });
  // let alert = this.alertCtrl.create({
  //   title: 'Low battery',
  //   subTitle: '10% of battery remaining',
  //   buttons: ['Dismiss']
  // });
  // alert.present();


  handleError(error) {
    // error.preventDefault();
    console.log('Errrrrrrrror ' + error);
    let alert = this.alertCtrl.create({
      title: 'ERROR!',
      subTitle: 'Incorrect information',
      buttons: ['Dismiss']
    });
     alert.present();

    // IMPORTANT: Rethrow the error otherwise it gets swallowed

  }

}
