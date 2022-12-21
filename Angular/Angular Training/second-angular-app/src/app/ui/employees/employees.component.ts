import { Component, OnInit} from '@angular/core';

interface employee{
  employeeNumber: number;
  name: string;
  date: Date;
  salary: number;
  department: string;
  imageUrl: string;
};



@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  names : string[] = [];
  imagePath = "/assets/images/";
  
  employees:employee[] = 
  [
      {
        employeeNumber: 100,
        name: "mriduL Rajbhar",
        date: new Date(2015,4,13),
        salary: 20000,
        department: "Tech",
        imageUrl: this.imagePath + "male.jpg"
      },
      {
        employeeNumber: 200,
        name: "jACK d'SOZA",
        date: new Date(2017,4,22),
        salary: 30000,
        department: "Tech",
        imageUrl: this.imagePath + "male.jpg"
      },
      {
        employeeNumber: 300,
        name: "Jill D'soza",
        date: new Date(2020,8,15),
        salary: 40000,
        department: "Account",
        imageUrl: this.imagePath + "female.jpg"
      },
      {
        employeeNumber: 400,
        name: "Jim D'soza",
        date: new Date(2021,10,26),
        salary: 45000,
        department: "HR",
        imageUrl: this.imagePath + "female.jpg"
      }
  ]; 

  constructor(){
    console.log("employees component loaded");
    console.log("length of: " ,this.names.length);
    this.names[0]= "jack";
    this.names[1]= "jill";
    this.names[2] = "peter";
    this.names[3] = "paul"
  }

  //after constructor, ngOnInit() is called only once
  ngOnInit(): void{
    console.log("ngOnInit lifecycle hooks is executed");
    console.log("length of :", this.names.length);
  }
}
