import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';

import { AuthService } from './auth.service';
import { first, map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  private url: string;

  constructor(private auth: AuthService,
              private router: Router) {}

              canActivate(): any {
                return this.auth.isAuthenticated().pipe(
                  first(),
                  map(authenticated => {
                    if (authenticated) {
                     return true;
                   } else {
                     // not logged in so redirect to login page with the return url
                     this.router.navigateByUrl('/espace-client');
                     return false;
                   }
                 })
                );
             
               }

}
