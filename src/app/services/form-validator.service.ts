import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidatorService {

  constructor() { }

  validateForm(form: FormGroup | AbstractControl) {
    form.markAllAsTouched()
    if (form instanceof FormGroup) {
      for (const i in form.controls) {
        form.controls[i].markAsDirty();
        form.controls[i].updateValueAndValidity();
      }
    } else {
      form.markAsDirty()
      form.updateValueAndValidity()
    }
    return form.valid
  }
}
