import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  login:any;
  email_rgex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {

    this.login= this._fb.group({
      email : ['',[Validators.required,Validators.pattern(this.email_rgex)]],
      password : ['',[Validators.required]],
    })
  }

  emailErrorMessage(){
    if(this.login.hasError('required',['email'])){
      return 'Email id is required'; 
    }

    return this.login.hasError('pattern'),['email']? 'Not a valid email' : '';
    

  }

  get email(){
    return this.login.get('email');
  }
  get password(){
    return this.login.get("password");
  }
}
