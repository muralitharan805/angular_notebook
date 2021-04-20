import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {


  favoriteColorControl = new FormControl('');


  updateName() {
    this.favoriteColorControl.setValue('Nancy');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
