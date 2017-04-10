import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { Auth, User } from '@ionic/cloud-angular';
import { SignupPage } from '../signup/signup';
import { CursosPage } from '../cursos/cursos';
import { ResetPasswordPage } from '../reset-password/reset-password';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
   myForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public auth: Auth, 
    public user: User
  ) {
    this.myForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  private loginUser(){

    console.log("Email:" + this.myForm.controls['email'].value);
    console.log("Password:" + this.myForm.controls['password'].value);
   
    let details = {'email': this.myForm.controls['email'].value, 'password': this.myForm.controls['password'].value};

    this.auth.login('basic', details).then(() => {
    console.log("User logging");
    this.navCtrl.push(CursosPage);
    }, (err) => {

        console.log(err.message);

        let errors = 'ERROR';
        if(err.message === 'UNPROCESSABLE ENTITY') errors += 'Email isn\'t valid.<br/>';
        if(err.message === 'UNAUTHORIZED') errors += 'Password is required.<br/>';
      }
      );
  

  }

  private goToSignup(){
    this.navCtrl.push(SignupPage);
  }

  private goToResetPassword(){
    this.navCtrl.push(ResetPasswordPage);
  }


}