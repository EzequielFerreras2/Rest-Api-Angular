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
  categorias: CategoriasI| undefined ;

  constructor( private apiProdcucts:ProductosService, private apiCategoria: CategoriasService, private rou:Router) { }


  

  ngOnInit(): void {


    this.apiCategoria.getCategoriaByid(this.cateogriaId).subscribe( data =>{
       this.categorias = data 
      
       console.log(data.id)
      
      })



    this.apiProdcucts.getAllProductos().subscribe(data =>
    {

      this.productos = data;
      
    })


   
  }

  cateogriaId(id: number)
  {
    return id;
  }
 
  
  updateProducto(id : Number)
  {
    this.rou.navigate(['producto',id])
  }

  addProducto()
  {
    this.rou.navigate(['add-producto'])
  }


exit(){

  this.rou.navigate(['producto'])
}


}
