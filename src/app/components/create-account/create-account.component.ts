import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormErrorService } from 'src/app/services/form-error.service';
import { LoadingScreenComponent } from '../loading-screen/loading-screen.component';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  @ViewChild(LoadingScreenComponent, {static: false}) loadingScreen: LoadingScreenComponent;
  createAccountForm: FormGroup

  constructor(private fb: FormBuilder,
              private router: Router,
              public formErrorSvc: FormErrorService,
              private auth: AngularFireAuth,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.createAccountForm = this.fb.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      fullName: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      companyName: new FormControl(null)
    })
  }

  createAccount() {
    if (this.createAccountForm.valid) {
      this.loadingScreen.show()
      this.auth.createUserWithEmailAndPassword(
        this.createAccountForm.get("email").value,
        this.createAccountForm.get("password").value,
      ).then((response) => {
        this.snackBar.open("successfully created account", "dismiss")
      }).catch((e) => {
        this.snackBar.open("failed to create account", "dismiss")
      }).finally(() => {
        this.loadingScreen.hide()
      })
    }
  }

  alreadyHaveAnAccount() {
    this.router.navigate(['/sign-in'])
  }

}
