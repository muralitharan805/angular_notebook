import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-profile-editer',
  templateUrl: './profile-editer.component.html',
  styleUrls: ['./profile-editer.component.css']
})
export class ProfileEditerComponent implements OnInit {


  profileForm:any;

 
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  ngOnInit(): void {


  this.profileForm = new FormGroup(
    {
      name : new FormControl('',Validators.required),
      phone_number : new FormControl('',Validators.required),
      email : new FormControl('',Validators.required),
      password : new FormControl('',Validators.required),
      address:new FormGroup({
        street: new FormControl('',Validators.required),
        city: new FormControl('',Validators.required),
        state: new FormControl('',Validators.required),
        zip: new FormControl('',Validators.required)
      })

    }
  )

 

     
  }
  constructor() { }


  get name() { return this.profileForm.get('name'); }

 

}
