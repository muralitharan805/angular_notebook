import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  template: `
  <h2>welcome</h2>
  <h2 [style.color]="'orange'" >Style binding</h2>
  <h2 [style.color]="'orange'" >Style binding</h2>
  <h2 [style.color]="hasError?'red':'green'" >applay styles contionally with style binding</h2>
  <h2 [ngStyle]="testStyles" >applay multiple styles with ngstyle</h2>

  
  `,
  styles: []
})
export class Test1Component implements OnInit {


  hasError=false;
  testStyles={
    color:'blue',
    fontStyle:'italic'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
