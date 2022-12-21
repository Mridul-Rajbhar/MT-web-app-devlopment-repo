import { employee } from './../../../DataTypes/datatypes';
import { EmployeesProjectService } from './../../../Services/employees-project.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
  employeeInput: employee = new employee();
  employeeIdInput: string;
  submitted: boolean = false;
  private imageLocation="/assets/images/";


  constructor(private _service :EmployeesProjectService){
  }

  onSubmit(){ 
    this.submitted = true;
    this.employeeInput.id = parseInt(this.employeeIdInput);
    
    if(this.employeeInput.photo == ""){
      this.employeeInput.photo = this.imageLocation+this.employeeInput.gender + ".jpg";
    }

    this._service.postEmployees( this.employeeInput ).subscribe(
      (response: employee)=>{
        console.log("details uploaded successfully");
        console.log(JSON.stringify(response));
      },
    )
  }
}
