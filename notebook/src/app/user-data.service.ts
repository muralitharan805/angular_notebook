import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  loginData :any =[]

  addData(data:any){
    this.loginData.push(data)
    console.log("loginData",this.loginData);
    
  }


  findUser(email:any){

    console.log('validate', this.loginData.filter(function(item:any) {
      return item.email === email;
    }));

    return this.loginData.map(function(item:any) {
      return item.password === email;
    });  
  
    
    
  }

  constructor() { }
}
