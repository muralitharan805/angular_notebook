import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test4',
  template: `
  
  <div>this is inline template for html file we can create inside component decorator in template property
  also create css file
  `,
  styles: [`
    div{
      color:red;
    }
  `]
})
export class Test4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
