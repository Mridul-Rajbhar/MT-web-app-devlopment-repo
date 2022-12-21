import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { employee } from '../DataTypes/datatypes';

@Injectable({
  providedIn: 'root'
})
export class EmployeesProjectService {

  private _http: HttpClient;
  private _employeeURL: string = "http://localhost:3000/employees";

  constructor(http:HttpClient) { 
    this._http = http;
  }

  public getEmployees(){
    return this._http.get(this._employeeURL);
  }

  public deleteEmployee(empID:number){
    return this._http.delete(this._employeeURL + "/" +empID );
  }

  public postEmployees(data:employee){
    return this._http.post(this._employeeURL,data);
  }

}
