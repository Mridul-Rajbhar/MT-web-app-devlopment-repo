import { ValidationErrors, ValidatorFn } from '@angular/forms';
import { employee } from '../DataTypes/datatypes';
export interface EmployeeFormValidationImpl{
   uniqueIdValidator(employees: employee[]):ValidatorFn;

}