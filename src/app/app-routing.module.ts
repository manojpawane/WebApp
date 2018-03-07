import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {AppConfig} from './config/app.config';
import {Error404Component} from './core/error404/error-404.component';
import { DisplayUserComponent } from './display-user/display-user.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  //{ path: '', component: RegistrationComponent },
  { path: '', component: LoginComponent },
 // { path: '', component: DisplayUserComponent },
  { path: 'register', component: RegistrationComponent },
  {path: AppConfig.routes.heroes, loadChildren: 'app/heroes/heroes.module#HeroesModule'},
  {path: AppConfig.routes.error404, component: Error404Component},

  // otherwise redirect to 404
  {path: '**', redirectTo: '/' + AppConfig.routes.error404}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
