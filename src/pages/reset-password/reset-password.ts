import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Auth, IDetailedError } from '@ionic/cloud-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html'
})
export class ResetPasswordPage {
  myForm: FormGroup;

  constructor(public navCtrl: NavController,
  public formBuilder: FormBuilder,
  public auth: Auth, ) {
    this.myForm = this.formBuilder.group({
      email: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('Hello ResetPasswordPage Page');
  }

  private ResetPassword(){
    console.log("Email:" + this.myForm.controls['email'].value);
    this.auth.requestPasswordReset(this.myForm.controls['email'].value).then(() => {
      // `this.user` is now registered
      console.log('Request Sent');
      this.navCtrl.push(LoginPage);
    }, (err: IDetailedError<string[]>) => {
      for (let e of err.details) {
        switch (e) {
        case 'required_email': 
          console.log('Missing email field.');
        case 'required_password': 
          console.log('Missing password field');
        break; 
        case 'conflict_email': 
          console.log('A user has already signed up with the supplied email');
        break;
        case 'conflict_username': 
          console.log('A user has already signed up with the supplied username');
        break;
        case 'invalid_email': 
          console.log('The email did not pass validation.');
        break;
        default:
          console.log('Something unknow.');
      }     
      }
    }); 
  }

}