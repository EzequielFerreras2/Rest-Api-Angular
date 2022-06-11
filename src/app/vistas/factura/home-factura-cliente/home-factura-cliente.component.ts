import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteI } from 'src/app/Models/Cliente/cliente.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'home-factura-cliente',
  templateUrl: './home-factura-cliente.component.html',
  styleUrls: ['./home-factura-cliente.component.css']
})
export class HomeFacturaClienteComponent implements OnInit {

  constructor( private api:ApiService, private rou:Router) { }


  clientes: ClienteI[] | undefined ;

  ngOnInit(): void {

    this.api.geAllCliente().subscribe(data =>
    {
      
      this.clientes = data;
      console.log(data)
    })
  }


  facturarCliente(id : Number)
  {
    this.rou.navigate(['facturar-cliente',id])
  }


exit(){

  this.rou.navigate(['factura'])
}

}
