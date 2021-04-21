import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  registrationForm:any;

  
  // registrationForm=new FormGroup({
  //   name:new FormControl('',Validators.required),
  //   password:new FormControl('',Validators.required),
  //   conform_password:new FormControl('',Validators.required),
  //   address:new FormGroup({
  //     city:new FormControl('',Validators.required),
  //     state:new FormControl('',Validators.required),
  //     postalcode:new FormControl('',Validators.required),
  //   }),
  // })
  constructor(private _fb:FormBuilder) { }

  onSubmit(){
    console.log(this.registrationForm.value);
    
  }
  ngOnInit(): void {

    
  this.registrationForm=this._fb.group({
    name:['',[Validators.required,Validators.minLength(3)]],
    password:['',Validators.required],
    conform_password:[''],
    address:this._fb.group({
      city:[''],
      state:[''],
      postalcode:['']
    })
  })

  
  }

  get name(){
    return this.registrationForm.get('name')
  }


}


