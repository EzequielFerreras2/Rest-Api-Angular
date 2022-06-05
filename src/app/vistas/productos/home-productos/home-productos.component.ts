import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriasI } from 'src/app/Models/Categorias/categorias.interface';
import { ProductosI } from 'src/app/Models/Productos/productos.interface';
import { ApiService } from 'src/app/services/api.service';
import { CategoriasService } from 'src/app/services/categorias/categorias.service';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'ahome-productos',
  templateUrl: './home-productos.component.html',
  styleUrls: ['./home-productos.component.css']
})
export class HomeProductosComponent implements OnInit {

  productos: ProductosI[] | undefined ;
  categorias: CategoriasI[]| undefined ;
  

  constructor( private apiProdcucts:ProductosService, private apiCategoria: CategoriasService, private rou:Router) { }


  

  ngOnInit(): void {

    this.apiProdcucts.getAllProductos().subscribe(
      data =>
    {
      
      this.productos = data;
      
      console.log(data)
      
    })
    


   
  }

 

  cateogriaId(id: number)
  {
    return id;
  }
 
  
  updateProducto(Id : Number)
  {
    this.rou.navigate(['productos',Id])
  }

  addProducto()
  {
    this.rou.navigate(['add-productos'])
  }


exit(){

  this.rou.navigate(['producto'])
}


}
