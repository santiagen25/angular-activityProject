import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudRoutingModule } from './crud-routing.module';
import { CreateComponent } from '../../modules/crud/components/create/create.component';
import { ReadComponent } from '../../modules/crud/components/read/read.component';
import { UpdateComponent } from '../../modules/crud/components/update/update.component';
import { DeleteComponent } from '../../modules/crud/components/delete/delete.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { RouterModule, Routes } from '@angular/router';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';


@NgModule({
  declarations: [
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule,
    FormsModule,
    HttpClientModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ]
})
export class CRUDModule { }
