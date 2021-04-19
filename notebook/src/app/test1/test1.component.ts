import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  name="murali";
  greeting="";

  onClick(event:any){
    console.log('hello');
    console.log(event);
    
  this.greeting="welcome to murali"
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
