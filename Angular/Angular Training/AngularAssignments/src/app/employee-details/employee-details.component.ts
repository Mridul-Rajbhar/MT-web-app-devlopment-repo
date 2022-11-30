import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  employeeName: string = "Mridul Rajbhar";
  employeeRole: string = "Full Stack Engineer";
  employeeRoleDesc: string = "Hi, I am a full stack engineer with knowledge of Java, Spring Boot, Servlets, PLSQL, HTML, CSS, JS, TS and Angular";
}
