import { OverlayContainer } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { ViewChild} from '@angular/core';
import {MatTable} from '@angular/material/table';

interface Customer{
  name:string
  email:string
  place:string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  @ViewChild (MatTable) table!: MatTable<Customer>;

  title = 'notebook';
  isAlternateMode=false
  dataSource:Customer[]=[
    {
      name:"Murali",
      email:"skdfh@gmail.com",
      place:"tup"
    },
    {
      name:"kumar",
      email:"skdfh@gmail.com",
      place:"tup"
    },
    {
      name:"sak",
      email:"skdfh@gmail.com",
      place:"tup"
    },
  ]

  column=["name","email","place"]
  constructor(public overlayContainer: OverlayContainer){
    
  }
  
  check(){
    this.overlayContainer.getContainerElement().classList.add('unicorn-dark-theme');
    this.isAlternateMode=!this.isAlternateMode
  }


  delete(){
    this.dataSource.pop();
    this.table.renderRows();

  }

  applyFilter(event: Event){
    
    const filterValue = (event.target as HTMLInputElement).value;
    console.log('filterValue ',filterValue);

    let temp=this.dataSource.filter((ele:any)=>{
    console.log('filterValue ',ele.name);

      return ele.name==filterValue.trim().toLowerCase()
    })

    console.log('temp ',temp);
    
  }

  clickclm(e:any){
    console.log(e);
    
  }
}
