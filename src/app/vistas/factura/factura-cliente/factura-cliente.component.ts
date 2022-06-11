import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClienteI } from 'src/app/Models/Cliente/cliente.interface';
import { VendedorI } from 'src/app/Models/Vendedor/vendedor.interface';
import { ApiService } from 'src/app/services/api.service';
import { VendedorService } from 'src/app/services/vendedor/vendedor.service';

@Component({
  selector: 'factura-cliente',
  templateUrl: './factura-cliente.component.html',
  styleUrls: ['./factura-cliente.component.css']
})
export class FacturaClienteComponent implements OnInit {

  constructor(private activeroute:ActivatedRoute, private router: Router, private api:ApiService, private toast:ToastrService, private apiV: VendedorService) { }

  datosCliente!: ClienteI;
  vendedores!: VendedorI[];
  datosVendedor!:VendedorI;

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

}
