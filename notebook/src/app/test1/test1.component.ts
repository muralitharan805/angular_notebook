import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  constructor() { }
  onClick(value:any){
    console.log('hello',value);
    
  }
  ngOnInit(): void {
  }

}
