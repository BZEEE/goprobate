import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CurrentUserService } from './current-user.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserResolverService implements Resolve<any> {

  constructor(private currentUserSvc: CurrentUserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    console.log("sup")
    return this.currentUserSvc.getCurrentUser().pipe(
      catchError((error) => {
        console.log(error)
        return error
      })
    )
  }
}
