import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ProductosI } from 'src/app/Models/Productos/productos.interface';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { CategoriasI } from 'src/app/Models/Categorias/categorias.interface';
import { CategoriasService } from 'src/app/services/categorias/categorias.service';

@Component({
  selector: 'add-productos',
  templateUrl: './add-productos.component.html',
  styleUrls: ['./add-productos.component.css']
})
export class AddProductosComponent implements OnInit {

  constructor(private activeroute:ActivatedRoute, private router: Router, private api:ProductosService, private toast:ToastrService, private apiC:CategoriasService) { }

  datosProductos: ProductosI | undefined;
  datosCategorias: CategoriasI[] | undefined;

  addForm= new UntypedFormGroup({

    NombreProducto: new UntypedFormControl('',[Validators.required]),
    CategoryId: new UntypedFormControl('',[Validators.required]),
    Categoria: new UntypedFormControl('',[Validators.required]),
    Cantidad: new UntypedFormControl('',[Validators.required]),
    Precio: new UntypedFormControl('',[Validators.required])

  });



  ngOnInit(): void {

    this.apiC.getAllCategoria().subscribe(datac=>{
    
      this.datosCategorias = datac   
     })

    
  }


  postForm(form: ProductosI )
  {
  
      this.api.addProducto(form).subscribe(data =>
      {
       
        
        console.log(data)
        this.toast.success('Producto Agregado ','! Agregado')
      },

      (error) =>
      
      { 
        this.toast.warning(`${error}`,'! Error')
      });

      this.router.navigate(['productos'])
  }


  get nomPro()
  {
    return this.addForm.get('NombreProducto')
  };

  get cate()
  {
    return this.addForm.get('Categoria')
  };
  get can()
  {
    return this.addForm.get('Cantidad')
  };
  get pre()
  {
    return this.addForm.get('Precio')
  };


  exit(){

    this.router.navigate(['productos'])
  }


}
