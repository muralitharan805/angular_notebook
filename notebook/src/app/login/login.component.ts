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
  getEmail:any;
  getpassword:any;
  onSubmit(){

    this.spinner=!this.spinner;

    this.getEmail=this.userDataService.findUser(this.login.value['email'])
    console.log('getemail array',this.getEmail);
    console.log('this.getEmail.length',this.getEmail.length);
  
    this.getpassword=this.login.value['password']
    console.log('getpassword',this.getpassword);
    console.log('this.getEmail[0].password',this.getEmail[0].password);
    
    if(this.getEmail.length===0){
      alert('email not fount')
    }else{
      if(this.getEmail[0].password == this.getpassword){
        alert('signed successfully')
      }else{
        alert('wrong password')
      }
    }

  }
}
