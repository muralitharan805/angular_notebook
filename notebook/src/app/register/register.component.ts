import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { conform_password_vlt } from '../sharded/conform_password_vlt';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide = true;
  register:any;

   email_rgex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    password_regx=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/;
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {

    this.register= this._fb.group({
      name:['',[Validators.required,Validators.minLength(3)]],
      email : ['',[Validators.required,Validators.pattern(this.email_rgex)]],
      phone : ['',[Validators.required,Validators.pattern("[5-9]{1}[0-9]{9}"),Validators.minLength(10)]],
      password : ['',[Validators.required,Validators.pattern(this.password_regx)]],
      conform_password : ['',Validators.required,],

    },{validators:conform_password_vlt})
    // this.register = new FormGroup({
    //   name: new FormControl('',[Validators.required]),
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   phone:new FormControl('',[Validators.required,Validators.pattern("[5-9]{1}[0-9]{9}")]),
    //   password: new FormControl('',[Validators.required])
    
    // })
  }

  _keyUp(e: any) {let input;
    if (e.metaKey || e.ctrlKey) {
      return true;
    }
    if (e.which === 32) {
     return false;
    }
    if (e.which === 0) {
     return true;
    }
    if (e.which < 33) {
      return true;
    }
    input = String.fromCharCode(e.which);
    return !!/[\d\s]/.test(input);


}



  onSubmit(){

    this.register.value;
    console.log(this.register.value);
    
  }

  get name(){
    return this.register.get('name');
  }

  get phone(){
    return this.register.get('phone');
  }

  get email(){
    return this.register.get('email')
  }

  get password(){
    return this.register.get('password')
  }

}
