import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/components/login/login.component';
import { NotFoundComponent } from './modules/crud/components/not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './modules/crud/components/create/create.component';
import { ReadComponent } from './modules/crud/components/read/read.component';
import { UpdateComponent } from './modules/crud/components/update/update.component';
import { DeleteComponent } from './modules/crud/components/delete/delete.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
