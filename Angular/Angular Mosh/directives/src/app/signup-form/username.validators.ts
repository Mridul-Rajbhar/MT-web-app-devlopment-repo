import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators{
    static cannotContainSpace(control: AbstractControl): Promise<ValidationErrors | null>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if((control.value as string).indexOf(' ')>=0)
                    resolve({cannotContainSpace: true});
                else
                    resolve(null);            
            }, 2000);
        });
    }
}