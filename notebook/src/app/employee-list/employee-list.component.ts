import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


public emeloyees = [{
  "id": 1,
  "name": "Floria",
  "age": "Czyz"
}, {
  "id": 2,
  "name": "Sarajane",
  "age": "Busch"
}, {
  "id": 3,
  "name": "Freeman",
  "age": "Canham"
}, {
  "id": 4,
  "name": "Gena",
  "age": "Ganniclifft"
}, {
  "id": 5,
  "name": "Bald",
  "age": "Weekley"
}, {
  "id": 6,
  "name": "Suzanna",
  "age": "Lukins"
}]

  constructor() { }



  ngOnInit(): void {
  }

}
