import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";




/** A hero's name can't match the hero's alter ego */
export const conform_password_vlt: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password_val = control.get('password');
    const conform_password_val = control.get('conform_password');
  
    if(password_val?.pristine || conform_password_val?.pristine){
        return null
    }
    return password_val && conform_password_val && password_val.value !== conform_password_val.value ? { identityRevealed: true } : null;
  };