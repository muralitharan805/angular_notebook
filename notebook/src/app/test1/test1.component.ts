import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  @Input() public parentData="";


 @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  fireEvent(){
    this.childEvent.emit('hey parvent event')
  }
}
