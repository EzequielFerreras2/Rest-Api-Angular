import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router,NavigationEnd  } from '@angular/router';
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
 
  findForm= new FormGroup({
 
    nombreCliente: new FormControl('',[Validators.required])
  

  });




  ngOnInit(): void {

   

    this.api.geAllCliente().subscribe(data =>
    {
      
      this.clientes = data;
      
    })
  };


  findCliente(cliente: string){

    this.api.findClienteByCedula(cliente).subscribe(data =>
      {
        this.clientes = data;
      })

  };


facturarCliente(id : Number)
{
    this.rou.navigate(['facturar-cliente',id])
};

prueba(){

  console.log(1)
}

prueba2(){

  console.log(2)
}


borrar(){

window.location.reload();
};






exit(){

  this.rou.navigate(['factura'])
};

}
