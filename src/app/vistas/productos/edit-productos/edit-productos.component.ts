import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ProductosI } from 'src/app/Models/Productos/productos.interface';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'edit-productos',
  templateUrl: './edit-productos.component.html',
  styleUrls: ['./edit-productos.component.css']
})
export class EditProductosComponent implements OnInit {

  constructor(private activeroute:ActivatedRoute, private router: Router, private api:ProductosService, private toast:ToastrService) { }


  datosProductos: ProductosI | undefined;

  editForm= new FormGroup({

    Id: new FormControl(''), 
    nombreProducto: new FormControl('',[Validators.required]),
    IdCategoria: new FormControl('',[Validators.required]),
    Categoria: new FormControl('',[Validators.required]),
    Catidad: new FormControl('',[Validators.required]),
    Precio: new FormControl('',[Validators.required])

  });



  ngOnInit(): void {

    let ProductoId = this.activeroute.snapshot.paramMap.get('id');

    this.api.getProductoByid(ProductoId).subscribe( data =>{
       this.datosProductos = data;

       this.editForm.setValue({
         
         'Id': ProductoId,
         'NombreProducto': this.datosProductos.NombreProducto,
         'IdCategoria': this.datosProductos.CategoryId,
         'Categoria': this.datosProductos.Categories.categoria,
         'Cantidad': this.datosProductos.Cantidad,
         'Precio': this.datosProductos.Precio
       });
    })
  }


  postForm(form: ProductosI )
  {
    let id = this.activeroute.snapshot.paramMap.get('id')
    this.api.updateProducto(id,form).subscribe(data =>{
      this.toast.success('Producto Actualizado','! Actualizado')
    },
      
    (error) =>{
        this.toast.warning(`${error}`,'! Error')
    });

    this.router.navigate(['producto']);
    
  }

  removeForm()
  {
    let id = this.activeroute.snapshot.paramMap.get('id')
    this.api.removeProducto(id).subscribe(data =>{
    
      this.toast.warning('Producto Eliminado','! Actualizado')
    },
      
      (error) =>{
          this.toast.warning(`${error}`,'! Error')
      });

      this.router.navigate(['producto'])
  }


  get nomPro()
  {
    return this.editForm.get('NombrePliente')
  };

  get cate()
  {
    return this.editForm.get('Categoria')
  };
  get can()
  {
    return this.editForm.get('Cantidad')
  };
  get pre()
  {
    return this.editForm.get('Precio')
  };



  exit(){

    this.router.navigate(['Producto'])
  }


}
