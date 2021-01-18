import { NullTemplateVisitor } from '@angular/compiler';
import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { FormErrorService } from 'src/app/services/form-error.service';
import { FormValidatorService } from 'src/app/services/form-validator.service';
import { ObjectAttributeMapperService } from 'src/app/services/object-attribute-mapper.service';
import { LoadingScreenComponent } from '../loading-screen/loading-screen.component';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css', './../../general-styling/styling.css', './../../general-styling/normalize.css']
})
export class PersonalInfoComponent implements OnInit {
  @ViewChild(LoadingScreenComponent, {static: false}) loadingScreen: LoadingScreenComponent;
  personalInfoForm: FormGroup
  changeEmailForm: FormGroup
  showChangeEmail: boolean = false

  constructor(private fb: FormBuilder,
              private currentUserSvc: CurrentUserService,
              private formValidatorSvc: FormValidatorService,
              private auth: AngularFireAuth,
              private firestore: AngularFirestore,
              private snackBar: MatSnackBar,
              private mapperSvc: ObjectAttributeMapperService,
              public formErrorSvc: FormErrorService) { }

  ngOnInit(): void {
    this.changeEmailForm = this.fb.group({
      newEmail: new FormControl(null, [Validators.required, Validators.email]),
      oldEmail: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    })
    this.personalInfoForm = this.fb.group({
      email: new FormControl(null, [Validators.required]),
      fullName: new FormControl(null, [Validators.required]),
      companyName: new FormControl(null),
      address: new FormControl(null, [Validators.required])
    })
    this.personalInfoForm.get("email").disable()

    console.log(this.currentUserSvc.getCurrentUser())
    //retreive personal information  
    this.firestore.collection("users").doc(this.currentUserSvc.getUID()).get().subscribe((doc) => {
      this.personalInfoForm.get("email").setValue(this.currentUserSvc.getCurrentUser().email)
      if (doc.exists) {
        this.mapperSvc.mapObjectPropertiesToForm(
          this.personalInfoForm,
          doc.data(),
          {}
        )
      }
    })
  }

  updateProfile() {
    if (this.formValidatorSvc.validateForm(this.personalInfoForm)) {
      this.firestore.collection("users")
        .doc(this.currentUserSvc.getUID())
        .update({
          fullName: this.personalInfoForm.get("fullName").value,
          companyName: this.personalInfoForm.get("companyName").value,
          address: this.personalInfoForm.get("address").value
        })
        .then((response ) => {
          this.snackBar.open("successfully updated profile", "dismiss")
        }).catch((e) => {
          console.log(e)
          this.snackBar.open("failed to update profile", "dismiss")
        })
    }
  }

  changeEmail() {
    if (this.formValidatorSvc.validateForm(this.changeEmailForm)) {
      this.loadingScreen.show()
      let email = this.changeEmailForm.get("newEmail").value

      // re-authenticate user if its been a while
      this.auth.signInWithEmailAndPassword(
        this.changeEmailForm.get("oldEmail").value,
        this.changeEmailForm.get("password").value
      ).then((response) => {
        this.auth.currentUser.then((user) => {
          user.updateEmail(email).then((response) => {
              this.snackBar.open("successfully updated email", "dismiss")
              this.showChangeEmail = !this.showChangeEmail
              this.personalInfoForm.get("email").setValue(email)
            }).catch((e) => {
              this.snackBar.open("failed to update email", "dismiss")
            }).finally(() => {
              this.loadingScreen.hide()
            })
        })
      }).catch(e => {
        this.snackBar.open("make sure old email and password are correct", "dismiss")
        this.loadingScreen.hide()
      })
    }
  }

  changePassword() {
    if (this.personalInfoForm.get("email") != null) {
      this.loadingScreen.show()
      this.auth.sendPasswordResetEmail(
        this.personalInfoForm.get("email").value)
      .then((response) => {
        this.snackBar.open("check your email for a password reset link", "dismiss")
      }).catch((e) => {
        this.snackBar.open("failed to send password reset email", "dismiss")
      }).finally(() => {
        this.loadingScreen.hide()
      })
    }
  }

}
