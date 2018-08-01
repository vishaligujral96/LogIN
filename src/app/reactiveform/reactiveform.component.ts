import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '../../../node_modules/@angular/router';


@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit
{
    profileForm:FormGroup;
  
    ngOnInit(){}

    constructor(private serviceTraining : UserService,private router:Router)
    {
     this.profileForm = new FormGroup({
      fname:new FormControl('', [Validators.required,Validators.maxLength(24),Validators.minLength(4), Validators.pattern("^[a-zA-Z]+$")]),
      lname: new FormControl('',[Validators.required,Validators.maxLength(24), Validators.minLength(4), Validators.pattern("^[a-zA-Z]+$")]),
      emp:new FormControl('', [Validators.required,Validators.maxLength(4),Validators.minLength(4),Validators.pattern('[0-9]*')]),
      email:new FormControl('',[Validators.required,Validators.maxLength(30),Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      con: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10), Validators.pattern('[0-9]*')]),
      pass: new FormControl('',[Validators.required,Validators.minLength(4)]),
      cpass: new FormControl('',[Validators.required,Validators.minLength(4)]),
      gen: new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(6),Validators.pattern("^[a-zA-Z]+$")])
       }); 
  }


  check()
   {
     if(this.profileForm.value.pass!==this.profileForm.value.cpass)
     {
       console.log("password incorrect");
     }
     else{
      console.log("password correct");
     }
   }
    
  
    storeData()
    {
      this.serviceTraining.check1(this.profileForm.value)
      this.router.navigate(['showData']);
    }
    type:string="password";
    showHide(){
      if(this.type==="text")
        this.type="password";
     else
      this.type="text";   
    }
}