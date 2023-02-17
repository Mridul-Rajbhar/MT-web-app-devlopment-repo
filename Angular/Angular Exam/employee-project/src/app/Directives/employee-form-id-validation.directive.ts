import { employee } from './../DataTypes/datatypes';
import { Directive, Input } from '@angular/core';
import { EmployeeFormValidation } from '../UIComponent/employees-page/employee-form/employee-form-validation';
import { AbstractControl,Validator,NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[employeeNotUniqueId]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmployeeFormIdValidationDirective,
    multi: true
  }]
})
export class EmployeeFormIdValidationDirective implements Validator{
  @Input('employeeNotUniqueId') employees: employee[];

  employeeFormValidation:EmployeeFormValidation = new EmployeeFormValidation();
  validate(control: AbstractControl<any, any>): ValidationErrors {
    return this.employeeFormValidation.uniqueIdValidator(this.employees)(control);
  }
}
