import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'notebook';
  isAlternateMode=false
  constructor(public overlayContainer: OverlayContainer,public formbuilder:FormBuilder ){
    
  }
  ngOnInit(): void {
    this.Create_entity = this.formbuilder.group({
      company_name:["",Validators.required],
      org_type:[0,Validators.required],
      modules:[[0],Validators.required]

    })

  }

  temp_org = [
    {
      id:1,
      name:"Trading"
    },
    {
      id:2,
      name:"Service"
    },
    {
      id:3,
      name:"Retails"
    },
    {
      id:4,
      name:"Others"
    },
  ]
  
  temp_modules= [
    {
      id:1,
      name:"crm"
    },
    {
      id:2,
      name:"pmo"
    },
    {
      id:3,
      name:"IT"
    }
  ]
  
  Create_entity !:FormGroup 


  check(){
    this.overlayContainer.getContainerElement().classList.add('unicorn-dark-theme');
    this.isAlternateMode=!this.isAlternateMode
  }
}
