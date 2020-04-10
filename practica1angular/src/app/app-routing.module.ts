import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/components/login/login.component';
import { LoginUsuarioGuard } from './core/guards/loginUsuario/login-usuario.guard';
import { CrudComponent } from './modules/crud/components/crud/crud.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LoginUsuarioGuard] },
  { path: 'crud', component: CrudComponent, canActivate: [LoginUsuarioGuard] },
  { path: '**', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
