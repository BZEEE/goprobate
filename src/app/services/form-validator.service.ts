import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidatorService {

  constructor() { }

  validateForm(form: FormGroup | AbstractControl) {
    form.markAllAsTouched()
    return form.valid
  }
}
