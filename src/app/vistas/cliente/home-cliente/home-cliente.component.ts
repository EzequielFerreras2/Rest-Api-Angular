import { Component, OnInit } from '@angular/core';
import { ClienteI } from 'src/app/Models/Cliente/cliente.interface';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';





@Component({
  selector: 'home-cliente',
  templateUrl: './home-cliente.component.html',
  styleUrls: ['./home-cliente.component.css']
})
export class HomeClienteComponent implements OnInit {
  
constructor( private api:ApiService, private rou:Router) { }


  clientes: ClienteI[] | undefined ;

  ngOnInit(): void {

    this.api.geAllCliente().subscribe(data =>
    {
      
      this.clientes = data;
      console.log(data)
    })
  }


  updateCliente(id : Number)
  {
    this.rou.navigate(['cliente',id])
  }

  addCliente()
  {
    this.rou.navigate(['add-cliente'])
  }


exit(){

  this.rou.navigate(['cliente'])
}

}
