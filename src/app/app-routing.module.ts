import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Page404Component } from './components/page404/page404.component';
import { LoginComponent } from './components/login-view/login.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { CrudViewComponent } from './components/crud-view/users-crud-view.component';
import { RegistroServidorComponent } from './components/registro-servidor/registro-servidor.component';
import { UsersTableComponent } from './components/users-crud-table/crud-table.component';
import { WorkersCrudTableComponent } from './components/workers-crud-table/workers-crud-table.component'

import { AngularFireAuthGuard } from '@angular/fire/auth-guard';




const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'root', component: MainViewComponent, canActivate: [AngularFireAuthGuard],
    children: [
      { path: 'adminPanel', component: AdminPanelComponent },
      {
        path: 'crud', component: CrudViewComponent,
        children: [
          {path: 'users', component: UsersTableComponent},
          {path: 'workers', component: WorkersCrudTableComponent},
        ],
      },
      { path: '', redirectTo: 'adminPanel', pathMatch: 'full' },
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
