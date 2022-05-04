import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component';
import { HomeClienteComponent } from './vistas/cliente/home-cliente/home-cliente.component';
import { InicioComponent } from './vistas/inicio/inicio.component';
import { ModalLoginComponent } from './vistas/login/modal-login/modal-login.component';
import { AddClienteComponent } from './vistas/cliente/add-cliente/add-cliente.component';
import { EditClienteComponent } from './vistas/cliente/edit-cliente/edit-cliente.component';

const routes: Routes = [

  {path:'', redirectTo:'cliente', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'cliente', component:HomeClienteComponent},
  {path:'inicio', component:InicioComponent},
  {path:'modalLoing', component:ModalLoginComponent},
  {path:'add-cliente', component:AddClienteComponent},
  {path:'edit-cliente', component:EditClienteComponent}


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
  ModalLoginComponent,
  AddClienteComponent,
  EditClienteComponent
]
