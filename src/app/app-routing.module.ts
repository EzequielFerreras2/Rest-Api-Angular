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
import { HomeCategoriaComponent } from './vistas/categorias/home-categoria/home-categoria.component';
import { AddCategoriasComponent } from './vistas/categorias/add-categorias/add-categorias.component';
import { EditCategoriasComponent } from './vistas/categorias/edit-categorias/edit-categorias.component';
import { HomeProductosComponent } from './vistas/productos/home-productos/home-productos.component';
import { AddProductosComponent } from './vistas/productos/add-productos/add-productos.component';
import { EditProductosComponent } from './vistas/productos/edit-productos/edit-productos.component';
import { HomeFacturaComponent } from './vistas/factura/home-factura/home-factura.component';
import { EditFacturaComponent } from './vistas/factura/edit-factura/edit-factura.component';
import { AddFacturaComponent } from './vistas/factura/add-factura/add-factura.component';
import { FacturaClienteComponent } from './vistas/factura/factura-cliente/factura-cliente.component';
import { HomeFacturaClienteComponent } from './vistas/factura/home-factura-cliente/home-factura-cliente.component';




const routes: Routes = [

  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'cliente', component:HomeClienteComponent},
  {path:'modalLoing', component:ModalLoginComponent},
  {path:'add-cliente', component:AddClienteComponent},
  {path:'cliente/:id', component:EditClienteComponent},
  {path:'vendedor', component:HomeVendedorComponent},
  {path:'add-Vendedor', component:AddVendedorComponent},
  {path:'vendedor/:id', component:EditVendedorComponent},
  {path:'Categoria', component:HomeCategoriaComponent},
  {path:'add-Categoria', component:AddCategoriasComponent},
  {path:'Categoria/:id', component:EditCategoriasComponent},
  {path:'productos', component:HomeProductosComponent},
  {path:'add-productos', component:AddProductosComponent},
  {path:'productos/:id', component:EditProductosComponent},
  {path:'factura', component:HomeFacturaComponent},
  {path:'add-factura', component:AddFacturaComponent},
  {path:'factura/:id', component:EditFacturaComponent},
  {path:'home-factura-cliente', component:HomeFacturaClienteComponent},
  {path:'facturar-cliente/:id', component:FacturaClienteComponent},  
  
  


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
  EditVendedorComponent,
  HomeCategoriaComponent,
  AddCategoriasComponent,
  EditCategoriasComponent,
  HomeProductosComponent,
  AddProductosComponent,
  EditProductosComponent,
  HomeFacturaComponent,
  EditFacturaComponent,
  AddFacturaComponent,
  HomeFacturaClienteComponent,
  FacturaClienteComponent
  
]
