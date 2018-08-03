import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
   
  item;
  editdetails(){
    
    this.route.navigate(['/reactiveform']);
   }
   

  

  constructor(private serviceTraining : UserService,private route:Router) { }

  ngOnInit() {
    this.item = this.serviceTraining.getData();
    //console.log(this.item, "in second componenet");
  }

  

  }


