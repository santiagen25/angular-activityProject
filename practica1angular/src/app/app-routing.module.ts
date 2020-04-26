import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/components/login/login.component';
import { LoginUsuarioGuard } from './core/guards/loginUsuario/login-usuario.guard';
import { NotFoundComponent } from './modules/crud/components/not-found/not-found.component';
import { CreateComponent } from './modules/crud/components/create/create.component';
import { ReadComponent } from './modules/crud/components/read/read.component';
import { UpdateComponent } from './modules/crud/components/update/update.component';
import { DeleteComponent } from './modules/crud/components/delete/delete.component';
import { ConfirmGuard } from './core/guards/confirm/confirm.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LoginUsuarioGuard] },
  { path: 'create', component: CreateComponent, canActivate: [LoginUsuarioGuard] },
  { path: 'read', component: ReadComponent, canActivate: [LoginUsuarioGuard] },
  { path: 'update', component: UpdateComponent, canDeactivate: [ConfirmGuard] },
  { path: 'delete', component: DeleteComponent, canDeactivate: [ConfirmGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
