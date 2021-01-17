import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormErrorService } from 'src/app/services/form-error.service';
import { LoadingScreenComponent } from '../loading-screen/loading-screen.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css', './../../general-styling/styling.css', './../../general-styling/normalize.css']
})
export class SignInComponent implements OnInit {
  @ViewChild(LoadingScreenComponent, {static: false}) loadingScreen: LoadingScreenComponent;
  signInForm: FormGroup
  passwordRecoveryForm: FormGroup
  forgotPasswordFlag: boolean

  constructor(private fb: FormBuilder,
              public formErrorSvc: FormErrorService,
              private router: Router,
              public auth: AngularFireAuth,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    })
    this.passwordRecoveryForm = this.fb.group({
      passwordResetEmail: new FormControl(null, [Validators.required, Validators.email])
    })
  }

  signIn() {
    if (this.signInForm.valid) {
      this.loadingScreen.show()
      this.auth.signInWithEmailAndPassword(
        this.signInForm.get("email").value,
        this.signInForm.get("password").value
      ).then((response) => {
        this.snackBar.open("successfully logged in", "dismiss")
        this.router.navigate(['/personal-info'])
      }).catch((e) => {
        this.snackBar.open("failed to login", "dismiss")
      }).finally(() => {
        this.loadingScreen.hide()
      })
    }
  }

  createAccount() {
    this.router.navigate(['/create-account'])
  }

  toggleForgotPassword() {
    this.forgotPasswordFlag = !this.forgotPasswordFlag
  }

  sendPasswordResetEmail() {
    if (this.passwordRecoveryForm.get("passwordResetEmail").valid) {
      this.auth.sendPasswordResetEmail(
        this.signInForm.get("passwordResetEmail").value
      ).then((response) => {
  
      }).catch((e) => {
  
      })
    }
  }

}
