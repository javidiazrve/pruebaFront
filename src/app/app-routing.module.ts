import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLoginGuard } from './guards/auth-login.guard';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PersonajeComponent } from './pages/personaje/personaje.component';
import { SigninComponent } from './pages/signin/signin.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent,canActivate: [AuthLoginGuard]},
  {path: 'signin', component: SigninComponent,canActivate: [AuthLoginGuard]},
  {path: 'home', component: HomeComponent,canActivate: [AuthGuard]},
  {path: 'personaje/:id', component: PersonajeComponent, canActivate: [AuthGuard]},
  {path: '**',redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
