import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component';
import { HomeClienteComponent } from './vistas/cliente/home-cliente/home-cliente.component';

import { ModalLoginComponent } from './vistas/login/modal-login/modal-login.component';
import { AddClienteComponent } from './vistas/cliente/add-cliente/add-cliente.component';
import { EditClienteComponent } from './vistas/cliente/edit-cliente/edit-cliente.component';
import { HomeComponent } from './plantilla/home/home.component';
import { HomeVendedorComponent } from './vistas/vendedor/home-vendedor/home-vendedor.component';
import { AddVendedorComponent } from './vistas/vendedor/add-vendedor/add-vendedor/add-vendedor.component';
import { EditVendedorComponent } from './vistas/vendedor/edit-vendeor/edit-vendedor/edit-vendedor.component';



const routes: Routes = [

  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'cliente', component:HomeClienteComponent},
  {path:'modalLoing', component:ModalLoginComponent},
  {path:'add-cliente', component:AddClienteComponent},
  {path:'cliente/:id', component:EditClienteComponent},
  {path:'vendedor', component:HomeVendedorComponent},
  {path:'add-Vendedor', component:AddClienteComponent},
  {path:'vendedor/:id', component:EditVendedorComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=
[
  LoginComponent,
  HomeComponent,
  HomeClienteComponent,

  ModalLoginComponent,
  AddClienteComponent,
  EditClienteComponent,
  HomeVendedorComponent,
  AddVendedorComponent,
  EditVendedorComponent
]
