import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide = true;
  register:any;

  
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {

    this.register= this._fb.group({
      name : ['',[Validators.required]],
      email : ['',[Validators.required]],
      phone : ['',[Validators.required]],
      password : ['',[Validators.required]],
      conform_password : ['',[Validators.required]],

    })
    // this.register = new FormGroup({
    //   name: new FormControl('',[Validators.required]),
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   phone:new FormControl('',[Validators.required,Validators.pattern("[5-9]{1}[0-9]{9}")]),
    //   password: new FormControl('',[Validators.required])
    
    // })
  }

  onSubmit(){
    console.log(this.register.value);
    
  }

  get name(){
    return this.register.get('name');
  }

}
