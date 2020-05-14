import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from '../../modules/crud/components/create/create.component';
import { ReadComponent } from '../../modules/crud/components/read/read.component';
import { UpdateComponent } from '../../modules/crud/components/update/update.component';
import { DeleteComponent } from '../../modules/crud/components/delete/delete.component';
import { ConfirmGuard } from '../../core/guards/confirm/confirm.guard';


const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'read', component: ReadComponent },
  { path: 'update', component: UpdateComponent, canDeactivate: [ConfirmGuard] },
  { path: 'delete', component: DeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
