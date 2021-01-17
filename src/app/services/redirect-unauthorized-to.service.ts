import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class RedirectUnauthorizedToService implements CanActivate {

  constructor(public auth: AngularFireAuth,
    private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.auth.user.subscribe((user) => {
        console.log(user)
        if (user == null) {
          this.router.navigate(['/sign-in'])
          return resolve(false)
        } else {
          return resolve(true)
        }
      })
    })
  }
}
