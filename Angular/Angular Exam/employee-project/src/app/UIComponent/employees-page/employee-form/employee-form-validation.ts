import { employee } from './../../../DataTypes/datatypes';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { EmployeeFormValidationImpl } from './../../../Interfaces/employee-form-validation-impl';

export class EmployeeFormValidation implements EmployeeFormValidationImpl{
    
    uniqueIdValidator(employees: employee[]): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null=>{
            let idValue:number = parseInt(control.value);
            
            for(let i=0; i<employees?.length; i++){
                if(employees[i].id==idValue)
                    return {employeeNotUniqueId: true};
            }
            return null;
          };
    }
    
}