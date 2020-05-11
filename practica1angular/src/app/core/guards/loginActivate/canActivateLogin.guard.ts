import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanActivateLoginGuard implements CanActivate {
    canActivate(
        next:ActivateRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> |boolean |UrlTree {
            if (sessionStorage.getItem('login')){
                console.log("User is login");
                return true;
            }
            console.log("Not login");
            return false;
        }
}