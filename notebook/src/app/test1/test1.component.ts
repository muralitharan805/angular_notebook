import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  template: `
  <h1>welcome</h1>
  <h1 [class]="successClass">this is class binding</h1>
  <h1 class="text-special" [class]="successClass">if use both class attribute and class binding apply class binding only</h1>

  <h1 [class.text-danger]="hasError">apply class conditionally</h1>
  <h1 [ngClass]="[successClass,specialClass]">apply multiple class with ngclass</h1>
  <h1 [ngClass]="message">apply multiple class conditionally</h1>
   
  `,
  styles: [`
  .text-success{
    color:green;
  }
  
  .text-danger{
    color:red;
  }

  .text-special{
    font-style:italic;
  }
  
  `]
})
export class Test1Component implements OnInit {

  successClass = "text-success";
  specialClass = "text-special";
  hasError=true;
  hasspl=false;
  message={
    "text-success":this.hasError,
    "text-danger":!this.hasError,

    "text-special":!this.hasspl
  }
  constructor() { }

  ngOnInit(): void {
  }

}
