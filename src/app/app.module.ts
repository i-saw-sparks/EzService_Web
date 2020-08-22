import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

//Angular Material
import { MatFormFieldModule, MatFormField } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule, MatButton } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule, MatTable } from '@angular/material/table';


// Firebase Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';

//Services
import { AuthService } from './auth.service';

//Components
import { Page404Component } from './components/page404/page404.component';
import { LoginComponent } from './components/login-view/login.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { BackGroundComponent } from './components/back-ground/back-ground.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ShortCutCardComponent } from './components/short-cut-card/short-cut-card.component';

import { CrudViewComponent } from './components/crud-view/users-crud-view.component';
import { RegistroServidorComponent } from './components/registro-servidor/registro-servidor.component';
import { UsersTableComponent } from './components/users-crud-table/crud-table.component';
import { WorkersCrudTableComponent } from './components/workers-crud-table/workers-crud-table.component';

@NgModule({
  declarations: [
    AppComponent,
    BackGroundComponent,
    LoginFormComponent,
    Page404Component,
    LoginComponent,
    MainViewComponent,
    ToolBarComponent,
    AdminPanelComponent,
    ShortCutCardComponent,
    CrudViewComponent,
    RegistroServidorComponent,
    UsersTableComponent,
    WorkersCrudTableComponent
  ],

  imports: [
    //Angular Modules
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,

    //Initialize Firebase modules
    AngularFireModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireAuthGuardModule,

    //Angular Material
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,

    //PWA Modules
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  exports: [
    MatFormField,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
  ],
})
export class AppModule { }
