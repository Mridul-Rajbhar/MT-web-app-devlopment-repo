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
  employeesView: employee[] = [];
  private employees: employee[] = [];
  employeeChosenToDelete: employee;
  employeeSearch : string = "";
  private _service: EmployeesProjectService;

  constructor(service: EmployeesProjectService){
    this._service = service;
  }

  ngOnInit(): void{
    this._service.getEmployees().subscribe(
      (response: any)=>{
        this.employees = response;
        this.employeesView = this.employees;
      }
    )
  }

  public sortAscending(){
    console.log("ascending");
    this.employeesView.sort((a, b)=> new Date(a.dateOfJoining).getTime() - new Date(b.dateOfJoining).getTime());
  }

  public sortDescending(){
    console.log("descending");
    this.employeesView.sort((a, b)=> new Date(b.dateOfJoining).getTime() - new Date(a.dateOfJoining).getTime());
  }

  public searchEmployee(){
    this.employeesView=[];
    this.employees.forEach(employee => {
      if((employee.firstName+ " " + employee.lastName).toLowerCase().includes(this.employeeSearch.toLowerCase()))
        this.employeesView.push(employee);
    });
  }

  public deleteEmployee(){
    console.log(this.employeeChosenToDelete);
    this._service.deleteEmployee(this.employeeChosenToDelete?.id).subscribe(
      (response)=>{
        console.log(response);
        let index: number = this.employees.indexOf(this.employeeChosenToDelete);
        this.employees.splice(index,1);
        
        let indexEmployeeView: number = this.employeesView.indexOf(this.employeeChosenToDelete);
        this.employeesView.splice(index,1);
        
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
