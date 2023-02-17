import { employee} from './../../../DataTypes/datatypes';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesProjectService } from 'src/app/Services/employees-project.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  private _employeeId: number;
  private _activeRoute: ActivatedRoute;
  private _service: EmployeesProjectService;

  employeeDetails: employee;

  constructor(activeRoute: ActivatedRoute, service: EmployeesProjectService){
    this._activeRoute=activeRoute;
    this._service = service;
  }

  ngOnInit(){


    this._activeRoute.paramMap.subscribe(
      (response)=>{
        this._employeeId = parseInt(response.get('employeeId'));
      }
    )

    this._service.getEmployees().subscribe(
      (response: employee[])=>{
        this.employeeDetails = response.filter(ele=>this._employeeId == ele.id)[0]; 
      }
    )

  }


}
