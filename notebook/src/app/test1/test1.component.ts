import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  public test_id ='f_name'
  public isCheck=false;
  constructor() { }

  ngOnInit(): void {
  }

}
