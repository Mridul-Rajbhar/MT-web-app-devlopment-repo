import { Component, OnInit} from '@angular/core';
import { EmployeesProjectService } from 'src/app/Services/employees-project.service';
import { employee } from 'src/app/DataTypes/datatypes';

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.css']
})
export class EmployeesPageComponent {

  hideDeletePanel: boolean = true;
  employees: employee[] = [];
  employeeChosenToDelete: employee;
  private _service: EmployeesProjectService;

  constructor(service: EmployeesProjectService){
    this._service = service;
  }

  ngOnInit(): void{
    this._service.getEmployees().subscribe(
      (response: any)=>{
        this.employees = response;
      }
    )
  }

  public deleteEmployee(){
    console.log(this.employeeChosenToDelete);
    this._service.deleteEmployee(this.employeeChosenToDelete?.id).subscribe(
      (response)=>{
        console.log(response);
        let index: number = this.employees.indexOf(this.employeeChosenToDelete);
        this.employees.splice(index,1);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
