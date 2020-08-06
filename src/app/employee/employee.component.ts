import { Component, OnInit } from '@angular/core';
import { Emp } from "../emp";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  emp1 = new Emp('100','Angel',22,'Trainee');
  emp2 = new Emp('101','Sahil',23,'Trainee');
  emp:Emp[]=[this.emp1,this.emp2];
  
  constructor() { 

  }
  
  

  ngOnInit(): void {
  }

}
