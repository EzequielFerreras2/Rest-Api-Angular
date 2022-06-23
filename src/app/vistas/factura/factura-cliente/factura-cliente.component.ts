import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClienteI } from 'src/app/Models/Cliente/cliente.interface';
import { ProductosI } from 'src/app/Models/Productos/productos.interface';
import { VendedorI } from 'src/app/Models/Vendedor/vendedor.interface';
import { ApiService } from 'src/app/services/api.service';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { VendedorService } from 'src/app/services/vendedor/vendedor.service';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'factura-cliente',
  templateUrl: './factura-cliente.component.html',
  styleUrls: ['./factura-cliente.component.css']
})
export class FacturaClienteComponent implements OnInit {

  constructor(private activeroute:ActivatedRoute, private router: Router, private api:ApiService, 
    private toast:ToastrService, private apiV: VendedorService, private apiP:ProductosService) { }

/* Funcion Para Variable Comunes*/
  datosCliente!: ClienteI  ;
  vendedores: VendedorI[] =[];
  datosVendedor!:VendedorI;
  productos: ProductosI[] =[] ;
  datosProducto!: ProductosI;

/* Funcion Para Paginado*/
  pagueSize:number =5;
  index:number =0;
  top:number =5;
  pageSizeOptions = [5, 25, 100];

/* Funcion Para Numero de Factura*/
  noFactura : number = Math.floor(Math.random()*10000000) ;

/* Funcion Para fecha*/
  today: Date = new Date();
  pipe = new DatePipe('en-US');
  todayWithPipe:any;


/*Vendedor Form*/
  vendedorForm= new FormGroup({

    id: new FormControl(''), 
    nombreVendedor: new FormControl('',[Validators.required]),
    ventas: new FormControl('',[Validators.required])

  });

    /*producto Form*/
  productoForm= new FormGroup({

    Id: new FormControl(''), 
    NombreProducto: new FormControl('',[]),
    CategoryId: new FormControl('',[]),
    Categoria: new FormControl('',[]),
    Cantidad: new FormControl('',[]),
    Precio: new FormControl('',[])

  });


  ngOnInit(): void {

    this.todayWithPipe = this.pipe.transform(Date.now(), 'dd/MM/yyyy-//-h:mm:ss a');

/*Fuente dato Cliente*/
    let clienteId = this.activeroute.snapshot.paramMap.get('id');

    this.api.GetClienteByid(clienteId).subscribe( data =>{
       this.datosCliente = data;

    }),

/*Fuente Dato Pruducto*/
    this.apiP.getAllProductos().subscribe(
      data =>
    {
      
      this.productos = data;
 
    }),
/*Fuente dato Vendedor*/
    this.apiV.getAllVendedor().subscribe
    
    (data=>{

      this.vendedores = data;
     },

/*Manejo Errores Form*/
     (error) =>{
       console.log(error)
         this.toast.warning(`${error}`,'! Error')
     }
     
     
     );

  }

  agregarProducto(id:number){

    this.apiP.getProductoByid(id).subscribe(data =>{

      this.datosProducto = data;
      console.log(data)



      this.productoForm.setValue({
         
        'Id': data.Id,
        'NombreProducto': data.NombreProducto,
        'CategoryId': data.CategoryId,
        'Categoria': data.Categories,
        'Cantidad': data.Cantidad,
        'Precio': data.Precio
      });
    })

    
  }

/*Capturar Datos Paginacion Productos*/
  cambiarPagina(e:PageEvent){
    console.log(e);
    this.index = e.pageIndex * e.pageSize;
    this.top = this.index + e.pageSize
  }

}
