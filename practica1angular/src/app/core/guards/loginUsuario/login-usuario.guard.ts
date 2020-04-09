import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
//import { AuthService } from 'ruta.servicioLogin'; //importamos el servicio que usamos para loguear al usuario

@Injectable({
  providedIn: 'root'
})
export class LoginUsuarioGuard implements CanActivate {

  constructor(/*public authService[operar con este nombre de variable, y mirar si está logueado en canActivate]: AuthService[poner aqui el servicio del login e importarlo],*/ public router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}
