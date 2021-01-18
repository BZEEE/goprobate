import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  private user = null

  constructor(private auth: AngularFireAuth) {}

  setCurrentUser(user) {
    this.user = user
  }

  getCurrentUser() {
    return this.user
  }

  getUID() {
    return this.user.uid
  }
}
