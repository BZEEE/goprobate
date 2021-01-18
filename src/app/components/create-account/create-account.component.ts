import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { FormErrorService } from 'src/app/services/form-error.service';
import { FormValidatorService } from 'src/app/services/form-validator.service';
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
              private formValidatorSvc: FormValidatorService,
              public formErrorSvc: FormErrorService,
              private auth: AngularFireAuth,
              private firestore: AngularFirestore,
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
    if (this.formValidatorSvc.validateForm(this.createAccountForm)) {
      this.loadingScreen.show()
      this.auth.createUserWithEmailAndPassword(
        this.createAccountForm.get("email").value,
        this.createAccountForm.get("password").value,
      ).then((response) => {
        // get id of user and create firestore object
        let user = {
          id: response.user.uid,
          email: this.createAccountForm.get("email").value,
          password: this.createAccountForm.get("password").value,
          fullName: this.createAccountForm.get("fullName").value,
          address: this.createAccountForm.get("address").value,
          companyName: this.createAccountForm.get("companyName").value,
        }
        this.snackBar.open("successfully created account", "dismiss")
          
        this.firestore.collection("users")
        .doc(response.user.uid)
        .set(user)
        .then((response ) => {
          this.snackBar.open("successfully created profile", "dismiss")
        }).catch((e) => {
          console.log(e)
          this.snackBar.open("failed to create profile", "dismiss")
        })
  
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
