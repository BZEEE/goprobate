import { NullTemplateVisitor } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form'

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css', './../../general-styling/styling.css', './../../general-styling/normalize.css']
})
export class PersonalInfoComponent implements OnInit {
  personalInfoForm: FormGroup
  showLightBox: boolean

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.personalInfoForm = this.fb.group({
      email: new FormControl(null),
      password: new FormControl(null),
      fullName: new FormControl(null),
      companyName: new FormControl(null),
      address: new FormControl(null)
    })
    this.personalInfoForm.get("email").disable()
    this.personalInfoForm.get("password").disable()

  }

  updateProfile() {
    this.showLightBox = !this.showLightBox
  }

  changeEmail() {}

  changePassword() {}

}
