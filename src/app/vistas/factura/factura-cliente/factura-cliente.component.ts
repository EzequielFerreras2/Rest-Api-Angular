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

@Component({
  selector: 'factura-cliente',
  templateUrl: './factura-cliente.component.html',
  styleUrls: ['./factura-cliente.component.css']
})
export class FacturaClienteComponent implements OnInit {

  constructor(private activeroute:ActivatedRoute, private router: Router, private api:ApiService, private toast:ToastrService, private apiV: VendedorService, private apiP:ProductosService) { }

  datosCliente!: ClienteI ;
  vendedores: VendedorI[] =[];
  datosVendedor!:VendedorI;
  productos: ProductosI[] =[] ;

  pagueSize:number =10;
  index:number =0;
  top:number =10;
  pageSizeOptions = [10, 25, 100];



  vendedorForm= new FormGroup({

    id: new FormControl(''), 
    nombreVendedor: new FormControl('',[Validators.required]),
    ventas: new FormControl('',[Validators.required])

  });



  ngOnInit(): void {

    let clienteId = this.activeroute.snapshot.paramMap.get('id');

    this.api.GetClienteByid(clienteId).subscribe( data =>{
       this.datosCliente = data;

    }),

    this.apiP.getAllProductos().subscribe(
      data =>
    {
      
      this.productos = data;
 
    }),

    this.apiV.getAllVendedor().subscribe
    
    (data=>{

      this.vendedores = data;
     },
     

     (error) =>{
       console.log(error)
         this.toast.warning(`${error}`,'! Error')
     }
     
     
     );
    

     console.log(this.datosVendedor)

  }


  cambiarPagina(e:PageEvent){
    console.log(e);
    this.index = e.pageIndex * e.pageSize;
    this.top = this.index + e.pageSize
  }

}
