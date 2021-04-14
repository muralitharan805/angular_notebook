import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {


  public name = "test";
  public siteURL = window.location.href;
  constructor() { }
  
  ngOnInit(): void {
  }

  greetUser(){
    return `welcom this is test user`+this.name;
  }
}
