import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  spinner=false;
  login:any;
  email_rgex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

  constructor(private _fb:FormBuilder,private userDataService:UserDataService) { }

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

  passwordErrorMessage(){
    return this.login.hasError('required'),['password']? 'Password id is required' : '';

  }

  get email(){
    return this.login.get('email');
  }
  get password(){
    return this.login.get("password");
  }

  onSubmit(){

    this.spinner=!this.spinner;

    if(this.userDataService.findUser(this.login.value['password'])){
    this.spinner=false;

    }else{
    this.spinner=false;

    }
    
    // // if(this.login.value['password']===this.userDataService.findUser(this.login.value['email']))
    // console.log('this.login.value',this.login.value);
    

    // console.log('userDataService',this.userDataService.findUser(this.login.value['password']));

  }
}
