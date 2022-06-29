import { Component, OnInit, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, DetachedRouteHandle, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClienteI } from 'src/app/Models/Cliente/cliente.interface';
import { ProductosI } from 'src/app/Models/Productos/productos.interface';
import { VendedorI } from 'src/app/Models/Vendedor/vendedor.interface';
import { ApiService } from 'src/app/services/api.service';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { VendedorService } from 'src/app/services/vendedor/vendedor.service';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import { DatePipe } from '@angular/common';
import { FacturaService } from 'src/app/services/factura/factura.service';
import { DetalleFacturaI } from 'src/app/Models/Factura/detalleFactura.interface';



@Component({
  selector: 'factura-cliente',
  templateUrl: './factura-cliente.component.html',
  styleUrls: ['./factura-cliente.component.css']
})
export class FacturaClienteComponent implements OnInit {

  constructor(private activeroute:ActivatedRoute, private router: Router, private api:ApiService, 
    private toast:ToastrService, private apiV: VendedorService, private apiP:ProductosService, private apiF:FacturaService) { }

/* Funcion Para Variable Comunes*/
  datosCliente!: ClienteI  ;
  vendedores: VendedorI[] =[];
  datosVendedor!:VendedorI;
  productos: ProductosI[] =[] ;
  dataPro: ProductosI | undefined;
  dataDetalleFactura!: DetalleFacturaI;



  datosDetalleProducto: ProductosI[] =[];
 

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
  vendedorForm= new UntypedFormGroup({

    id: new UntypedFormControl(''), 
    nombreVendedor: new UntypedFormControl('',[Validators.required]),
    ventas: new UntypedFormControl('',[Validators.required])

  });

    /*producto Form*/
  productoForm= new UntypedFormGroup({

    Id: new UntypedFormControl(''), 
    NombreProducto: new UntypedFormControl('',[]),
    CategoryId: new UntypedFormControl('',[]),
    Categoria: new UntypedFormControl('',[]),
    Cantidad: new UntypedFormControl('',[]),

    Precio: new UntypedFormControl('',[])
    


  });


      /*Detalle Form*/
    detalleForm= new UntypedFormGroup({
 
    Id: new UntypedFormControl(''), 
    FacturaId: new UntypedFormControl('',[]),
    Factura:new UntypedFormControl('',[]),
    ProductosId: new UntypedFormControl('',[]),
    Products: new UntypedFormControl('',[]),
    Cantidad:new UntypedFormControl('',[]),
    Precio: new UntypedFormControl('',[]),
    SubTotal: new UntypedFormControl('',[]),
    Totalc: new UntypedFormControl('',[]),
    
      });


  ngOnInit(): void {
    
    this.apiF.items.subscribe( data => this.datosDetalleProducto = data)

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
      
      this.dataPro = data;


      this.productoForm.setValue({
         
        'Id': this.dataPro.Id,
        'NombreProducto': this.dataPro.NombreProducto,
        'CategoryId': this.dataPro.CategoryId,
        'Categoria': this.dataPro.Categories,
        'Cantidad': this.productoForm.value.Cantidad,
        'Precio': this.dataPro.Precio,
        
      });

    })

    
  }

/**/
  total(){
    let sum =0;
    this.datosDetalleProducto.forEach(data =>{

      sum+= data.Precio * this.productoForm.value.Cantidad
    });
      
    return sum;
  }

  puntos(){
    let puntos =0

    puntos = this.total() /500;

    return  Math.floor(puntos);
  }


addToCar(pro:ProductosI){
  this.apiF.items.subscribe( data => this.datosDetalleProducto = data)
  this.apiF.addToCar(pro);
}

deleteItemCar( id:number ){
  let index = this.datosDetalleProducto.findIndex(item => item.Id === id);

    if(index > -1)
    {
      var a = this.datosDetalleProducto.filter((item)=>item.Id !== id)  

      this.datosDetalleProducto = a; 
      this.datosDetalleProducto.forEach(data =>{
        this.apiF.addToCar(data)
      });
    }
  
};


/*Capturar Datos Paginacion Productos*/
  cambiarPagina(e:PageEvent){
    console.log(e);
    this.index = e.pageIndex * e.pageSize;
    this.top = this.index + e.pageSize
  }

}
