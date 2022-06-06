import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ProductosI } from 'src/app/Models/Productos/productos.interface';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { CategoriasI } from 'src/app/Models/Categorias/categorias.interface';
import { CategoriasService } from 'src/app/services/categorias/categorias.service';

@Component({
  selector: 'edit-productos',
  templateUrl: './edit-productos.component.html',
  styleUrls: ['./edit-productos.component.css']
})
export class EditProductosComponent implements OnInit {

  constructor(private activeroute:ActivatedRoute, private router: Router, private api:ProductosService, private toast:ToastrService, private apiC:CategoriasService) { }


  datosProductos: ProductosI | undefined;
  datosCategorias: CategoriasI[] | undefined;

  editForm= new FormGroup({

    Id: new FormControl(''), 
    NombreProducto: new FormControl('',[Validators.required]),
    CategoryId: new FormControl('',[Validators.required]),
    Categoria: new FormControl('',[Validators.required]),
    DetalleFacturaId: new FormControl('',[Validators.required]),
    Cantidad: new FormControl('',[Validators.required]),
    Precio: new FormControl('',[Validators.required])

  });



  ngOnInit(): void {

    
    
    let ProductoId = this.activeroute.snapshot.paramMap.get('id');
    let datosCategoriasId: number;
    
    this.api.getProductoByid(ProductoId).subscribe( data =>{
       this.datosProductos = data;
      console.log(data)

      this.apiC.getAllCategoria().subscribe(datac=>{
    
        this.datosCategorias = datac
        
       })
  
      
      this.apiC.getCategoriaByid(1).subscribe(

        data =>{

          datosCategoriasId = data.Id;
        }
      )

       this.editForm.setValue({
         
         'Id': ProductoId,
         'NombreProducto': this.datosProductos.NombreProducto,
         'CategoryId': this.datosProductos.CategoryId,
         'Categoria': this.datosProductos.Categories,
         'DetalleFacturaId': 1,
         'Cantidad': this.datosProductos.Cantidad,
         'Precio': this.datosProductos.Precio
       });
    })

    

  }


  postForm(form: ProductosI )
  {
    let Id = this.activeroute.snapshot.paramMap.get('id')
    this.api.updateProducto(Id,form).subscribe(data =>{
      console.log('Post '+data)
      this.toast.success('Producto Actualizado','! Actualizado')
    },
      
    (error) =>{
        this.toast.warning(`${error}`,'! Error')
    });

    this.router.navigate(['productos']);
    
  }

  removeForm()
  {
    let Id = this.activeroute.snapshot.paramMap.get('id')
    this.api.removeProducto(Id).subscribe(data =>{
    
      this.toast.warning('Producto Eliminado','! Actualizado')
    },
      
      (error) =>{
          this.toast.warning(`${error}`,'! Error')
      });

      this.router.navigate(['productos'])
  }


  get nomPro()
  {
    return this.editForm.get('NombreProducto')
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


  prueba(id:number){
    this.apiC.getCategoriaByid(id).subscribe(

      data =>{

        console.log(data.Id)
        
      }
    )


  }


  exit(){

    this.router.navigate(['productos'])
  }


}
