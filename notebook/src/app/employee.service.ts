import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }


  getemployee(){
    return [{
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
  }
}
