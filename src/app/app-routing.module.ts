import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component';
import { HomeClienteComponent } from './vistas/cliente/home-cliente/home-cliente.component';
import { InicioComponent } from './vistas/inicio/inicio.component';
import { ModalLoginComponent } from './vistas/login/modal-login/modal-login.component';

const routes: Routes = [

  {path:'', redirectTo:'cliente', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'cliente', component:HomeClienteComponent},
  {path:'inicio', component:InicioComponent},
  {path:'modalLoing', component:ModalLoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=
[
  LoginComponent,
  HomeClienteComponent,
  InicioComponent,
  ModalLoginComponent
]
