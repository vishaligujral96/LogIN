import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
   
  item;

  constructor(private serviceTraining : UserService) { }

  ngOnInit() {
    this.item = this.serviceTraining.getData();
    console.log(this.item, "in second componenet");
  }

}
