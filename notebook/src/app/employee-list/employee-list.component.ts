import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


public emeloyees:any;

  constructor(private _empService:EmployeeService) { }



  ngOnInit(): void {
    this.emeloyees = this._empService.getemployee();
  }

}
