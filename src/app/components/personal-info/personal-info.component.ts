import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form'

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css', './../../general-styling/styling.css']
})
export class PersonalInfoComponent implements OnInit {

  changeEmail: boolean = false
  changePassword: boolean = false
  accountInformationForm: FormGroup | null = null
  personalInfoForm: FormGroup | null = null

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.accountInformationForm = this.fb.group({
      email: new FormControl(null),
      password: new FormControl(null)
    })
    this.personalInfoForm = this.fb.group({
      fullName: new FormControl(null),
      companyName: new FormControl(null),
      address: new FormControl(null)
    })
  }



}
