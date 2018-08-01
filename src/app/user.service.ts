import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
  
})
export class UserService {

  data;
  constructor() { }
  check1(str
  
  ){
    console.log("in service", str)
    this.data = str
  }
  getData(){
    return this.data
  }
}
