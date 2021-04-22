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

  

  return this.loginData.filter(function(item:any) {
      return item.email === email;
  });  
  
    
    
  }

  constructor() { }
}
