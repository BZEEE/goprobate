import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormErrorService {

  constructor() { }

  getErrorMessage(name: string, control: AbstractControl): string{
    if (control.hasError("required")) { return `${name} is required` }
    if (control.hasError("email")) { return `email does not have correct format` }
    if (control.hasError("min")) { return `${name} must be ${0} or greater` }
    if (control.hasError("max")) { return `${name} must be less than ${0}` }
    if (control.hasError("minLength")) { return `${name} must be at least ${0} characters` }
    if (control.hasError("maxLength")) { return `${name} must be ${0} characters or less` }
    return ``;
  }
}
