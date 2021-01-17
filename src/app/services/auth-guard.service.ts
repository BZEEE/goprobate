import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth: AngularFireAuth,
              private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.auth.currentUser.then((user) => {
        if (user == null) {
          this.router.navigate(['/sign-in'])
          return resolve(false)
        } else {
          return resolve(true)
        }
      }).catch((e) => {
        // this.router.navigate(['/sign-in'])
        resolve(false)
      })
    })
  }
}
