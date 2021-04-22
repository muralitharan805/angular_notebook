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

  constructor(private _fb:FormBuilder,private userDataService:UserDataService) {

    this.login= this._fb.group({
      email : ['',[Validators.required,Validators.pattern(this.email_rgex)]],
      password : ['',[Validators.required]],
    })
   }

  ngOnInit(): void {

   
  }


  get email(){
    return this.login.get('email');
  }
  get password(){
    return this.login.get("password");
  }


  getEmail:any;
  getpassword:any;
  store:any;
  emaild:any="murali@gmail.com"
  passwordd:any="Murali@123"
  hide_form = false

  enable(){
  this.hide_form = false
  this.login.reset()

  }
  onSubmit(){


    // if(this.passwordd==this.login.value['password']){
    // this.hide_form = true;

    //   console.log('yes');
    //   console.log('form data',this.login.value);
    //   this.login.reset()

      
    // }else{
    //   console.log('No');
    //   // this.login.reset()
    // //  this.login.get('email')?.setErrors({ invalid1: 'Invalid Email id' });
    //  this.login.get('password')?.setErrors({ password_invalid: 'Invalid password_invalid' });


    // }



   this.getEmail=this.userDataService.findUser(this.login.value['email'])
   this.getpassword=this.login.value['password']
   
   if(this.getEmail.length===0){
     this.login.get('email')?.setErrors({ invalid1: 'Invalid Email id' });
    //  alert('email not fount')

   }else{
     if(this.getEmail[0].password == this.getpassword){
      this.hide_form = true;
      console.log('yes');
      console.log('form data',this.login.value);
      this.login.reset()
      //  alert('signed successfully')
     }else{
     this.login.get('password')?.setErrors({ password_invalid: 'Invalid password_invalid' });

     }
   }



   
  }
}
