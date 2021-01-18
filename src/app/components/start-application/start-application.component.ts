import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormErrorService } from 'src/app/services/form-error.service';
import { FormValidatorService } from 'src/app/services/form-validator.service';

@Component({
  selector: 'app-start-application',
  templateUrl: './start-application.component.html',
  styleUrls: ['./start-application.component.css']
})
export class StartApplicationComponent implements OnInit {
  showSelectProvince: boolean
  startApplicationForm: FormGroup
  provinces: string[] = [
    "Alberta"
  ]

  constructor(private fb: FormBuilder,
    public formErrorSvc: FormErrorService,
    private formValidatorSvc: FormValidatorService,) { }

  ngOnInit(): void {
    this.startApplicationForm = this.fb.group({
      province: new FormControl(null, [Validators.required]),
      applicationType: new FormControl(null)
    })
  }

  startApplication() {
    if (this.formValidatorSvc.validateForm(this.startApplicationForm)) {
      this.showSelectProvince = !this.showSelectProvince
      // route to steps based on application selected
    }
  }

  startGrantOfProbate() {
    this.startApplicationForm.get("applicationType").setValue("Grant of Probate")
    this.showSelectProvince = !this.showSelectProvince
  }

  startGrantOfAdmin() {
    this.startApplicationForm.get("applicationType").setValue("Grant of Admin")
    this.showSelectProvince = !this.showSelectProvince
  }
 
}
