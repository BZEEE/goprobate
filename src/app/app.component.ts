import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  user

  constructor(public auth: AngularFireAuth,
              private snackBar: MatSnackBar,
              private router: Router) {}

  ngOnInit(): void {
    this.auth.user.subscribe((user) => {
      this.user = user
    })
  }

  signOut() {
    this.auth.signOut().then((response) => {
      this.router.navigate(['/main'])
      this.snackBar.open("successfully logged out", "dismiss")
    }).catch((e) => {
      this.snackBar.open("failed to log out", "dismiss")
    })
  }
}
