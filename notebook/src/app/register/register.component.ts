import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide = true;
  register = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone:new FormControl('',[Validators.required,Validators.pattern("[5-9]{1}[0-9]{9}")]),
    password: new FormControl('',[Validators.required])
  
  })

  onSubmit(){
    console.log(this.register.value);
    
  }
  // getErrorMessage() {
  //   if (this.register.hashasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
